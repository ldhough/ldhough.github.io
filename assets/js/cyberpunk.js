(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (window.jQuery) {
    window.jQuery(function ($) {
      $("a[href^='mailto:']").off("click.smoothscroll");
    });
  }

  if (!reduceMotion) {
    var pointerX = null;
    var pointerY = null;
    var glowFrame = null;

    var updateGlow = function () {
      glowFrame = null;
      if (pointerX === null || pointerY === null) { return; }
      root.style.setProperty("--mouse-x", pointerX + window.scrollX + "px");
      root.style.setProperty("--mouse-y", pointerY + window.scrollY + "px");
    };

    var queueGlowUpdate = function () {
      if (glowFrame === null) {
        glowFrame = window.requestAnimationFrame(updateGlow);
      }
    };

    window.addEventListener("pointermove", function (event) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      queueGlowUpdate();
    }, { passive: true });

    window.addEventListener("scroll", queueGlowUpdate, { passive: true });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("is-visible"); });
  }

  var clock = document.getElementById("system-clock");
  if (clock) {
    var updateClock = function () {
      var value = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(new Date());
      clock.textContent = "EST // " + value;
    };
    updateClock();
    window.setInterval(updateClock, 1000);
  }
}());
