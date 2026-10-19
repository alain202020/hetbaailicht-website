/*
  Het Baailicht — het enige script van de site.
  Het doet één ding: op een smal scherm het menu open- en dichtklappen.
  Zonder JavaScript blijft het menu gewoon zichtbaar.
*/
(function () {
  "use strict";

  // Laat de stylesheet weten dat JavaScript werkt.
  document.documentElement.classList.add("js");

  function start() {
    var knop = document.querySelector(".menu-knop");
    var menu = document.getElementById("hoofdmenu");
    if (!knop || !menu) {
      return;
    }

    function zetOpen(open) {
      knop.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        menu.classList.add("is-open");
      } else {
        menu.classList.remove("is-open");
      }
    }

    knop.addEventListener("click", function () {
      zetOpen(knop.getAttribute("aria-expanded") !== "true");
    });

    // Escape sluit het menu en zet de focus terug op de knop.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && knop.getAttribute("aria-expanded") === "true") {
        zetOpen(false);
        knop.focus();
      }
    });

    // Wordt het scherm breed genoeg, dan is de knop weg: menu weer in de rusttoestand.
    if (window.matchMedia) {
      var breed = window.matchMedia("(min-width: 60rem)");
      var bijWissel = function () {
        if (breed.matches) {
          zetOpen(false);
        }
      };
      if (breed.addEventListener) {
        breed.addEventListener("change", bijWissel);
      } else if (breed.addListener) {
        breed.addListener(bijWissel);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
