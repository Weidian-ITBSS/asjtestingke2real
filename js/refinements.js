document.addEventListener("DOMContentLoaded", () => {
  // Referensi gambar asli dipertahankan; letakkan folder images milik Anda di root situs.
  // Catalog empty state observes the original, unchanged filter behavior.
  const grid = document.getElementById("lotGrid"),
    empty = document.getElementById("catalogEmpty");
  if (grid && empty) {
    const update = () => {
      empty.hidden = !!grid.querySelector(".lot:not([hidden])");
    };
    new MutationObserver(update).observe(grid, {
      subtree: true,
      attributes: true,
      attributeFilter: ["hidden"],
    });
    update();
    document.getElementById("resetCatalog").addEventListener("click", () => {
      document.getElementById("searchInput").value = "";
      document.querySelector('.filter-chip[data-filter="semua"]').click();
      document.getElementById("searchInput").focus();
    });
  }
  // Shared keyboard, focus, and scroll behavior for all panels.
  const definitions = [
    ["productModal", "productModalName"],
    ["cartPanel", null],
    ["mobileDrawer", null],
    ["lightbox", null],
  ];
  const panels = definitions
    .map(([id, title]) => {
      const el = document.getElementById(id);
      if (!el) return null;
      el.setAttribute("role", "dialog");
      el.setAttribute("aria-modal", "true");
      el.setAttribute("tabindex", "-1");
      if (title) el.setAttribute("aria-labelledby", title);
      else
        el.setAttribute(
          "aria-label",
          id === "cartPanel"
            ? "Pesanan Anda"
            : id === "mobileDrawer"
              ? "Menu navigasi"
              : "Pratinjau gambar",
        );
      el.inert = !el.classList.contains("open");
      return el;
    })
    .filter(Boolean);
  const drawer = document.getElementById("mobileDrawer");
  const toggle = document.getElementById("menuToggle");
  const backdrop = document.createElement("div");
  backdrop.className = "menu-backdrop";
  backdrop.hidden = true;
  document.body.append(backdrop);
  const closePanel = (panel) => {
    const buttons = {
      productModal: "productModalClose",
      cartPanel: "cartCloseBtn",
      mobileDrawer: "drawerClose",
      lightbox: "lightboxClose",
    };
    const btn = document.getElementById(buttons[panel.id]);
    if (btn) btn.click();
    else panel.classList.remove("open");
  };
  const active = () =>
    panels.filter((p) => p.classList.contains("open")).at(-1);
  const syncLock = () => {
    const open = panels.some((p) => p.classList.contains("open"));
    document.body.classList.toggle("no-scroll", open);
    if (toggle)
      toggle.setAttribute(
        "aria-expanded",
        String(!!drawer?.classList.contains("open")),
      );
    backdrop.hidden = !drawer?.classList.contains("open");
  };
  panels.forEach((panel) => {
    let wasOpen = panel.classList.contains("open"),
      previous = null;
    new MutationObserver(() => {
      const open = panel.classList.contains("open");
      if (open === wasOpen) return;
      wasOpen = open;
      panel.inert = !open;
      panel.setAttribute("aria-hidden", String(!open));
      if (open) {
        previous = document.activeElement;
        requestAnimationFrame(() => {
          const first = panel.querySelector(
            "button,a[href],input,select,textarea",
          );
          (first || panel).focus({ preventScroll: true });
        });
      } else if (previous && document.contains(previous)) {
        previous.focus({ preventScroll: true });
      }
      syncLock();
    }).observe(panel, { attributes: true, attributeFilter: ["class"] });
    panel.setAttribute("aria-hidden", String(!wasOpen));
  });
  backdrop.addEventListener("click", () => {
    if (drawer) closePanel(drawer);
  });
  drawer
    ?.querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => closePanel(drawer)));
  document.addEventListener("keydown", (e) => {
    const panel = active();
    if (!panel) return;
    if (e.key === "Escape") {
      closePanel(panel);
      return;
    }
    if (e.key !== "Tab") return;
    const nodes = [
      ...panel.querySelectorAll(
        'a[href],button:not([disabled]),input,select,textarea,[tabindex="0"]',
      ),
    ].filter((n) => n.getClientRects().length);
    const first = nodes[0],
      last = nodes.at(-1);
    if (!first) {
      e.preventDefault();
      panel.focus();
      return;
    }
    if (
      e.shiftKey &&
      (document.activeElement === first || document.activeElement === panel)
    ) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (innerWidth > 980 && drawer?.classList.contains("open"))
      closePanel(drawer);
  });
  syncLock();
});
