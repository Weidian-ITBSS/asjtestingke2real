"use strict";
/* Kalkulator Kebutuhan Kemasan.
 * PENTING: alat ini TIDAK menghitung dosis/takaran aplikasi pestisida atau
 * pupuk per hektar. Itu wajib mengikuti label resmi produk yang sudah
 * teregistrasi Kementan, bukan angka yang dihasilkan situs ini.
 * Alat ini murni membantu menghitung kombinasi kemasan (mis. "4 L / 5 L")
 * yang paling pas dibeli dari TOTAL volume/berat yang sudah diketahui
 * pengguna sendiri, supaya tidak beli kurang atau kebanyakan sisa.
 */
(() => {
  const UNIT_TO_BASE = {
    l: { base: "ml", mult: 1000, label: "Liter (L)" },
    ml: { base: "ml", mult: 1, label: "Mililiter (ml)" },
    kg: { base: "g", mult: 1000, label: "Kilogram (kg)" },
    g: { base: "g", mult: 1, label: "Gram (g)" },
  };

  function parseKemasan(text) {
    const parts = text.split("/").map((p) => p.trim());
    const sizes = [];
    let baseUnit = null;
    for (const p of parts) {
      const m = p.toLowerCase().match(/^([\d.]+)\s*(l|ml|kg|g)$/);
      if (!m) return null;
      const num = parseFloat(m[1]);
      const unit = m[2];
      if (!Number.isFinite(num) || num <= 0) return null;
      const info = UNIT_TO_BASE[unit];
      if (baseUnit === null) baseUnit = info.base;
      else if (baseUnit !== info.base) return null;
      sizes.push({ label: p, value: num * info.mult });
    }
    return sizes.length ? { sizes, baseUnit } : null;
  }

  function buildCatalog() {
    const catalog = [];
    document.querySelectorAll(".lot").forEach((lot) => {
      const nameEl = lot.querySelector(".lot-name");
      if (!nameEl) return;
      const specs = lot.querySelectorAll(".lot-specs > div");
      let kemasanText = null;
      specs.forEach((spec) => {
        const dt = spec.querySelector("dt");
        const dd = spec.querySelector("dd");
        if (dt && dd && dt.textContent.trim().toLowerCase() === "kemasan") {
          kemasanText = dd.textContent.trim();
        }
      });
      if (!kemasanText) return;
      const parsed = parseKemasan(kemasanText);
      if (!parsed) return; // satuan bukan L/ml/kg/g baku, dilewati
      catalog.push({
        name: nameEl.textContent.trim(),
        unit: parsed.baseUnit,
        sizes: parsed.sizes,
      });
    });
    return catalog;
  }

  // Cari kombinasi kemasan dengan total >= target, MINIMUM kelebihan/sisa
  // (supaya tidak boros beli lebih dari kebutuhan), lalu di antara opsi
  // dengan sisa paling sedikit itu, pilih yang jumlah kemasannya paling
  // sedikit.
  function findBestCombo(sizes, targetBase) {
    if (targetBase <= 0) return null;
    const maxSize = Math.max(...sizes.map((s) => s.value));
    const limit = Math.ceil(targetBase + maxSize);
    const INF = Infinity;
    const minUnits = new Array(limit + 1).fill(INF);
    const choice = new Array(limit + 1).fill(-1);
    minUnits[0] = 0;
    for (let v = 1; v <= limit; v++) {
      for (let i = 0; i < sizes.length; i++) {
        const sz = Math.round(sizes[i].value);
        if (sz <= v && minUnits[v - sz] + 1 < minUnits[v]) {
          minUnits[v] = minUnits[v - sz] + 1;
          choice[v] = i;
        }
      }
    }
    let bestV = -1;
    for (let v = Math.ceil(targetBase); v <= limit; v++) {
      if (minUnits[v] < INF) {
        bestV = v;
        break;
      }
    }
    if (bestV === -1) return null;
    const counts = new Array(sizes.length).fill(0);
    let v = bestV;
    while (v > 0 && choice[v] !== -1) {
      counts[choice[v]]++;
      v -= Math.round(sizes[choice[v]].value);
    }
    return {
      total: bestV,
      excess: bestV - targetBase,
      items: counts
        .map((c, i) => ({ size: sizes[i], count: c }))
        .filter((x) => x.count > 0),
    };
  }

  function formatBase(value, unit) {
    if (unit === "ml") {
      return value >= 1000
        ? (value / 1000).toLocaleString("id-ID", { maximumFractionDigits: 2 }) +
            " L"
        : value + " ml";
    }
    return value >= 1000
      ? (value / 1000).toLocaleString("id-ID", { maximumFractionDigits: 2 }) +
          " kg"
      : value + " g";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openPackCalc");
    const dialog = document.getElementById("packCalcDialog");
    if (!openBtn || !dialog) return; // halaman tanpa katalog, keluar diam-diam

    const closeBtn = document.getElementById("packCalcClose");
    const select = document.getElementById("packCalcProduct");
    const amountInput = document.getElementById("packCalcAmount");
    const unitLabel = document.getElementById("packCalcUnit");
    const submitBtn = document.getElementById("packCalcSubmit");
    const resultBox = document.getElementById("packCalcResult");

    let catalog = [];
    let catalogBuilt = false;

    function ensureCatalog() {
      if (catalogBuilt) return;
      catalogBuilt = true;
      catalog = buildCatalog();
      select.innerHTML = '<option value="">— Pilih produk —</option>';
      catalog.forEach((p, i) => {
        const opt = document.createElement("option");
        opt.value = String(i);
        opt.textContent = p.name;
        select.appendChild(opt);
      });
    }

    function updateUnitLabel() {
      const idx = select.value;
      resultBox.hidden = true;
      resultBox.innerHTML = "";
      if (idx === "") {
        unitLabel.textContent = "—";
        return;
      }
      const product = catalog[Number(idx)];
      unitLabel.textContent = product.unit === "ml" ? "Liter" : "Kilogram";
    }

    openBtn.addEventListener("click", () => {
      ensureCatalog();
      updateUnitLabel();
      dialog.showModal();
    });
    closeBtn.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => {
      if (e.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
    select.addEventListener("change", updateUnitLabel);

    submitBtn.addEventListener("click", () => {
      const idx = select.value;
      resultBox.hidden = true;
      resultBox.innerHTML = "";
      if (idx === "") {
        resultBox.hidden = false;
        resultBox.innerHTML =
          '<p class="pack-calc-error">Pilih produk terlebih dahulu.</p>';
        return;
      }
      const product = catalog[Number(idx)];
      const inputVal = parseFloat(amountInput.value);
      if (!Number.isFinite(inputVal) || inputVal <= 0) {
        resultBox.hidden = false;
        resultBox.innerHTML =
          '<p class="pack-calc-error">Masukkan jumlah kebutuhan yang valid (lebih dari 0).</p>';
        return;
      }
      if (inputVal > 100000) {
        resultBox.hidden = false;
        resultBox.innerHTML =
          '<p class="pack-calc-error">Jumlah terlalu besar. Untuk kebutuhan skala ini, hubungi sales kami langsung via WhatsApp.</p>';
        return;
      }
      // 1 L = 1000 ml, dan 1 kg = 1000 g — kebetulan faktor konversinya
      // sama, jadi cukup satu perkalian untuk kedua jenis satuan.
      const targetBase = inputVal * 1000;

      const combo = findBestCombo(product.sizes, targetBase);
      resultBox.hidden = false;
      if (!combo) {
        resultBox.innerHTML =
          '<p class="pack-calc-error">Tidak ditemukan kombinasi yang pas. Coba jumlah lain atau hubungi sales kami.</p>';
        return;
      }
      const rows = combo.items
        .map(
          (it) =>
            `<li><strong>${it.count}×</strong> kemasan ${it.size.label}</li>`,
        )
        .join("");
      resultBox.innerHTML = `
        <p class="pack-calc-summary">Rekomendasi belanja untuk <strong>${product.name}</strong>:</p>
        <ul class="pack-calc-list">${rows}</ul>
        <p class="pack-calc-meta">Total kemasan: ${formatBase(combo.total, product.unit)}
          ${combo.excess > 0 ? "(kelebihan sekitar " + formatBase(combo.excess, product.unit) + ")" : "(pas, tanpa sisa)"}
        </p>
        <p class="pack-calc-disclaimer">
          Ini bukan rekomendasi dosis aplikasi. Pastikan total kebutuhan Anda
          sudah sesuai anjuran label produk atau penyuluh pertanian sebelum
          menghitung kemasan di atas.
        </p>`;
    });
  });
})();
