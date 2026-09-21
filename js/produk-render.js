"use strict";
/* ==========================================================================
   PEMBUAT KATALOG — membaca js/produk-data.js lalu membuat:
   kartu produk, jumlah produk, dan data terstruktur (SEO).
   File ini TIDAK perlu diedit saat menambah atau mengubah produk.
   Harus dimuat SEBELUM main.js.
   ========================================================================== */
(() => {
  const grid = document.getElementById("lotGrid");
  const products = window.ASJ_PRODUCTS;
  if (!grid) return;

  if (!Array.isArray(products)) {
    console.error(
      "[ASJ] Daftar produk tidak ditemukan. Pastikan js/produk-data.js dimuat sebelum produk-render.js.",
    );
    grid.innerHTML =
      '<p class="catalog-error">Katalog belum dapat ditampilkan. Silakan muat ulang halaman atau hubungi kami.</p>';
    return;
  }

  const PLACEHOLDER_IMG = "images/Placeholder/product.svg";

  const KATEGORI = {
    herbisida: { label: "Herbisida", spek: "Klasifikasi" },
    insektisida: { label: "Insektisida", spek: "Klasifikasi" },
    fungisida: { label: "Fungisida", spek: "Klasifikasi" },
    pupuk: { label: "Pupuk", spek: "Klasifikasi" },
    hayati: { label: "Hayati", spek: "Jenis" },
    alat: { label: "Alat Semprot", spek: "Klasifikasi" },
    perlengkapan: { label: "Perlengkapan", spek: "Klasifikasi" },
  };

  const TANAMAN = {
    sawit: "Kelapa sawit",
    padi: "Padi",
    jagung: "Jagung",
    kopi: "Kopi",
    karet: "Karet",
    hortikultura: "Hortikultura",
  };

  const BADGE = { terlaris: "Terlaris", promo: "Promo" };

  const esc = (v) =>
    String(v ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const text = (v) => (typeof v === "string" ? v.trim() : "");
  const list = (v) =>
    Array.isArray(v) ? v.map(text).filter(Boolean) : [];

  /* ---------- Validasi ringan: peringatan di Console, tidak menghentikan halaman ---------- */
  const seenId = new Set();
  const seenNo = new Set();
  const valid = products.filter((p, i) => {
    const label = p && p.nama ? `"${p.nama}"` : `#${i + 1}`;
    if (!p || !p.id || !p.nama || !KATEGORI[p.kategori]) {
      console.warn(
        `[ASJ] Produk ${label} dilewati: id, nama, dan kategori yang valid wajib diisi.`,
      );
      return false;
    }
    if (seenId.has(p.id))
      console.warn(`[ASJ] id "${p.id}" dipakai lebih dari satu produk (${label}).`);
    seenId.add(p.id);
    const no = String(p.no || i + 1);
    if (seenNo.has(no.toLowerCase()))
      console.warn(`[ASJ] no "${no}" dipakai lebih dari satu produk (${label}).`);
    seenNo.add(no.toLowerCase());
    list(p.tanaman).forEach((k) => {
      if (!TANAMAN[k])
        console.warn(
          `[ASJ] ${label}: kunci tanaman "${k}" tidak dikenal. Pilihan: ${Object.keys(TANAMAN).join(", ")}.`,
        );
    });
    return true;
  });

  const noOf = (p, i) => String(p.no || i + 1);

  /* ---------- Kartu produk ---------- */
  function cardHTML(p, i) {
    const kat = KATEGORI[p.kategori];
    const tanaman = list(p.tanaman);
    const hasPhoto = !!text(p.foto);
    const kemasan = text(p.kemasan) || "—";
    const search = [
      p.nama,
      p.aktif,
      kat.label,
      ...tanaman.map((k) => TANAMAN[k] || k),
      ...(Array.isArray(p.kataKunci) ? p.kataKunci : [p.kataKunci]),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const badge = BADGE[p.badge]
      ? `<span class="lot-badge badge-${esc(p.badge)}">${esc(BADGE[p.badge])}</span>`
      : "";

    return `
<article class="lot${p.baru ? " lot-new" : ""}" data-cat="${esc(p.kategori)}" data-search="${esc(search)}"${tanaman.length ? ` data-commodity="${esc(tanaman.join(" "))}"` : ""}>
  ${badge}
  <div class="lot-num">No. ${esc(noOf(p, i))}</div>
  <div aria-label="${hasPhoto ? "Perbesar gambar" : "Perbesar ilustrasi"} ${esc(p.nama)}" class="lot-media${hasPhoto ? "" : " lot-media-placeholder"}" role="button" tabindex="0">
    <img alt="${hasPhoto ? "" : "Ilustrasi sementara "}${esc(p.nama)}" height="480" loading="lazy" src="${esc(hasPhoto ? p.foto : PLACEHOLDER_IMG)}" width="480" />
  </div>
  <div class="lot-body">
    <span class="lot-tag tag-${esc(p.kategori)}">${esc(kat.label)}</span>
    <h3 class="lot-name">${esc(p.nama)}</h3>
    <p class="lot-active">${esc(p.aktif)}</p>
    <dl class="lot-specs">
      <div><dt>${esc(kat.spek)}</dt><dd>${esc(text(p.klasifikasi) || "—")}</dd></div>
      <div><dt>Kemasan</dt><dd>${esc(kemasan)}</dd></div>
    </dl>
    <p class="lot-desc">${esc(p.ringkas)}</p>
    <button aria-haspopup="dialog" class="lot-info-btn" type="button">Lihat Detail Produk <span aria-hidden="true">→</span></button>
    <div class="lot-actions">
      <div class="qty-stepper">
        <button aria-label="Kurangi jumlah" class="qty-btn" data-step="-1" type="button">−</button>
        <span class="qty-val" data-qty="1">1</span>
        <button aria-label="Tambah jumlah" class="qty-btn" data-step="1" type="button">+</button>
      </div>
      <button class="lot-add" data-id="${esc(p.id)}" data-name="${esc(p.nama)}" data-pack="${esc(kemasan)}" type="button">Tambah ke Pesanan</button>
    </div>
  </div>
</article>`;
  }

  grid.innerHTML = valid.map((p) => cardHTML(p, products.indexOf(p))).join("");

  /* ---------- Jumlah produk ---------- */
  const countEl = document.getElementById("lotCount");
  const totalEl = document.getElementById("lotTotal");
  if (countEl) countEl.textContent = valid.length;
  if (totalEl) totalEl.textContent = valid.length;

  /* ---------- Data terstruktur (SEO) ---------- */
  try {
    const canonical = document.querySelector('link[rel="canonical"]');
    const pageUrl = canonical ? canonical.href : location.origin + location.pathname;
    const origin = new URL(pageUrl).origin;
    const slug = (s) =>
      String(s)
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const ld = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Katalog Produk ASJ Group",
      itemListElement: valid.map((p, idx) => {
        const item = {
          "@type": "Product",
          name: p.nama,
          category: KATEGORI[p.kategori].label,
          description: text(p.ringkas),
          sku: slug(p.nama),
          brand: { "@type": "Brand", name: "ASJ Group" },
          url: `${pageUrl}?produk=${encodeURIComponent(noOf(p, products.indexOf(p)))}`,
        };
        if (text(p.foto)) item.image = `${origin}/${encodeURI(p.foto)}`;
        return { "@type": "ListItem", position: idx + 1, item };
      }),
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(ld);
    document.head.appendChild(tag);
  } catch (err) {
    console.warn("[ASJ] Data terstruktur tidak dibuat:", err);
  }
})();