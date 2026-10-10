(function () {
  "use strict";

  var toTop = document.getElementById("toTop");

  function onScroll() {
    toTop.classList.toggle("show", window.scrollY > 500);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
