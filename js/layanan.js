"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const all = window.ASJ_LOCATIONS.branches,
    items = all.filter((r) => Number.isFinite(r.x)),
    $ = (id) => document.getElementById(id);
  let selected = items.find((r) => r.id === "ketapang") || items[0];
  try {
    selected =
      all.find((r) => r.id === localStorage.getItem("asj_cart_region")) ||
      selected;
  } catch {}
  function select(id) {
    selected = all.find((r) => r.id === id) || selected;
    update();
  }
  function update() {
    $("selectedRegion").textContent = selected.label;
    $("salesName").textContent = selected.sales;
    $("salesPhone").textContent = selected.wa;
    $("salesAddress").textContent = selected.address;
    const active = window.ASJ_SALES.valid(selected);
    $("salesStatus").textContent = active
      ? "Kontak sales aktif"
      : "Hubungi via Admin WA";
    $("salesBadge").textContent = active
      ? "Kontak terverifikasi"
      : "Wilayah Resmi";
    $("openMaps").hidden = selected.id === "lainnya";
    $("openMaps").href =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(selected.label + ", Kalimantan Barat, Indonesia");
    document
      .querySelectorAll("[data-location]")
      .forEach((b) =>
        b.setAttribute(
          "aria-pressed",
          String(b.dataset.location === selected.id),
        ),
      );
    $("regionSaved").textContent = "";
  }
  function drawList() {
    const q = $("regionSearch").value.trim().toLocaleLowerCase("id"),
      shown = items.filter((i) => i.label.toLocaleLowerCase("id").includes(q));
    $("locationList").replaceChildren();
    shown.forEach((item) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "location-option";
      b.dataset.location = item.id;
      b.textContent = item.label;
      b.addEventListener("click", () => select(item.id));
      $("locationList").append(b);
    });
    $("regionCount").textContent = shown.length + " Wilayah Layanan";
    $("regionEmpty").hidden = shown.length !== 0;
    update();
  }
  items.forEach((item) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "branch-pin";
    b.dataset.location = item.id;
    b.style.left = item.x + "%";
    b.style.top = item.y + "%";
    b.setAttribute("aria-label", "Lihat sales " + item.label);
    const dot = document.createElement("span");
    dot.className = "pin-dot";
    dot.setAttribute("aria-hidden", "true");
    const text = document.createElement("span");
    text.className = "pin-label";
    text.textContent = item.label;
    b.append(dot, text);
    b.addEventListener("click", () => select(item.id));
    $("mapPins").append(b);
  });
  $("regionSearch").addEventListener("input", drawList);
  $("otherRegion").addEventListener("click", () => select("lainnya"));
  $("regionContact").addEventListener("click", () =>
    window.ASJ_SALES.open(
      selected.id,
      `Halo ${selected.sales}, saya dari ${selected.label}.\nSaya ingin menanyakan produk ASJ Group.\nMohon informasi stok, harga, dan pengiriman.\nAlamat tujuan: `,
    ),
  );
  $("selectForOrder").addEventListener("click", () => {
    try {
      localStorage.setItem("asj_cart_region", selected.id);
      $("regionSaved").textContent =
        "✓ " +
        selected.label +
        " disimpan untuk checkout. Lanjutkan ke katalog.";
    } catch {
      $("regionSaved").textContent =
        "Penyimpanan browser tidak tersedia. Pilih kembali daerah ini di keranjang.";
    }
  });
  drawList();
});
