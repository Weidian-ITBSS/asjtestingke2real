"use strict";
/* Shared, guarded WhatsApp preview. This site does not submit or charge orders. */
(() => {
  const cfg = window.ASJ_LOCATIONS;
  const find = (id) => cfg.branches.find((r) => r.id === id);
  const valid = (r) =>
    !!r && r.verified === true && /^62[1-9]\d{7,12}$/.test(r.wa);
  let dialog, selected, returnFocus;
  function init() {
    dialog = document.createElement("dialog");
    dialog.className = "sales-dialog";
    dialog.id = "salesPreview";
    dialog.setAttribute("aria-labelledby", "previewTitle");
    dialog.innerHTML = `<button type="button" class="preview-close" aria-label="Tutup pratinjau">×</button><span class="section-kicker">Periksa sebelum mengirim</span><h2 id="previewTitle">Sales yang tepat.<br>Pesanan yang jelas.</h2><div class="preview-recipient"><span id="previewRegion"></span><strong id="previewPhone"></strong></div><p id="previewNotice" class="preview-notice"></p><label for="previewText">Pesan untuk sales <small>Anda dapat menambahkan alamat lengkap.</small></label><textarea id="previewText" rows="7"></textarea><div class="preview-actions"><button type="button" class="btn btn-outline" id="copyOrder">Salin pesan</button><a class="btn btn-solid" id="sendOrder" target="_blank" rel="noopener noreferrer">Buka WhatsApp ↗</a></div><p id="copyStatus" class="copy-status" role="status"></p><small>Belum ada pesanan dikirim atau pembayaran diproses. Anda menekan kirim sendiri di WhatsApp.</small>`;
    document.body.append(dialog);
    dialog.addEventListener("keydown", (e) => e.stopPropagation());
    const close = () => dialog.close();
    dialog.querySelector(".preview-close").addEventListener("click", close);
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        const r = dialog.getBoundingClientRect();
        if (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        )
          close();
      }
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("preview-open");
      returnFocus?.focus({ preventScroll: true });
    });
    dialog.querySelector("#copyOrder").addEventListener("click", async () => {
      const text = dialog.querySelector("#previewText"),
        status = dialog.querySelector("#copyStatus");
      try {
        if (!navigator.clipboard) throw new Error("no clipboard");
        await navigator.clipboard.writeText(text.value);
        status.textContent =
          "Pesan disalin. Tempelkan saat nomor resmi sudah tersedia.";
      } catch {
        text.focus();
        text.select();
        try {
          if (document.execCommand("copy"))
            status.textContent = "Pesan berhasil disalin.";
          else throw new Error();
        } catch {
          status.textContent =
            "Pilih dan salin teks di atas secara manual (Ctrl/Cmd+C).";
        }
      }
    });
    dialog.querySelector("#previewText").addEventListener("input", updateHref);
    dialog.querySelector("#sendOrder").addEventListener("click", (e) => {
      if (!valid(selected)) {
        e.preventDefault();
        dialog.querySelector("#copyStatus").textContent =
          "Nomor ini belum aktif. Tidak ada tautan WhatsApp yang dibuka.";
      } else updateHref();
    });
    const contact = document.getElementById("contactRegion");
    if (contact) {
      cfg.branches.forEach((r) => {
        const o = document.createElement("option");
        o.value = r.id;
        o.textContent = r.label;
        contact.append(o);
      });
      try {
        const saved = localStorage.getItem("asj_cart_region");
        if (find(saved)) contact.value = saved;
      } catch {}
    }
  }
  function updateHref() {
    const a = dialog.querySelector("#sendOrder");
    if (valid(selected))
      a.href =
        "https://wa.me/" +
        selected.wa +
        "?text=" +
        encodeURIComponent(dialog.querySelector("#previewText").value);
    else a.removeAttribute("href");
  }
  window.ASJ_SALES = {
    find,
    valid,
    open(id, message) {
      selected = find(id);
      if (!selected) return;
      if (!dialog) init();
      returnFocus = document.activeElement;
      dialog.querySelector("#previewRegion").textContent =
        selected.sales + " · " + selected.label;
      dialog.querySelector("#previewPhone").textContent = selected.wa;
      dialog.querySelector("#previewNotice").textContent = valid(selected)
        ? "Periksa penerima dan isi pesan. WhatsApp akan dibuka setelah Anda melanjutkan."
        : "Mode contoh: nomor belum aktif. Anda dapat meninjau atau menyalin pesan; pengiriman WhatsApp dinonaktifkan.";
      dialog.querySelector("#previewText").value = message;
      dialog.querySelector("#copyStatus").textContent = "";
      const a = dialog.querySelector("#sendOrder");
      a.setAttribute("aria-disabled", String(!valid(selected)));
      a.textContent = valid(selected)
        ? "Buka WhatsApp ↗"
        : "WhatsApp belum aktif";
      a.tabIndex = valid(selected) ? 0 : -1;
      updateHref();
      dialog.showModal();
      document.body.classList.add("preview-open");
      dialog.querySelector(".preview-close").focus();
    },
  };
  document.addEventListener("DOMContentLoaded", init, { once: true });
})();
