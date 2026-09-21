"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("faqSearch"),
    items = [...document.querySelectorAll(".help-item")],
    tabs = [...document.querySelectorAll("[data-topic]")];
  let topic = "semua";
  function update() {
    const q = input.value.trim().toLocaleLowerCase("id");
    let count = 0;
    items.forEach((item) => {
      const visible =
        (topic === "semua" || item.dataset.category === topic) &&
        item.textContent.toLocaleLowerCase("id").includes(q);
      item.hidden = !visible;
      if (visible) count++;
      else item.open = false;
    });
    document.getElementById("faqCount").textContent = count + " pertanyaan";
    document.getElementById("faqEmpty").hidden = count > 0;
    tabs.forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.topic === topic)),
    );
  }
  tabs.forEach((b) => {
    const count = items.filter(
      (i) =>
        b.dataset.topic === "semua" || i.dataset.category === b.dataset.topic,
    ).length;
    b.querySelector("span").textContent = count;
    b.addEventListener("click", () => {
      topic = b.dataset.topic;
      update();
    });
  });
  input.addEventListener("input", update);
  document.getElementById("faqReset").addEventListener("click", () => {
    input.value = "";
    topic = "semua";
    update();
    input.focus();
  });
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "/" &&
      !e.ctrlKey &&
      !e.metaKey &&
      !e.altKey &&
      !["INPUT", "TEXTAREA", "SELECT"].includes(
        document.activeElement.tagName,
      ) &&
      !document.activeElement.isContentEditable
    ) {
      e.preventDefault();
      input.focus();
    }
  });
  update();
});
