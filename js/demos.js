(function () {
  var d = document.getElementById("demo-dialog");
  var openBtn = document.getElementById("open-dialog");
  var closeBtn = document.getElementById("close-dialog");
  if (d && openBtn) {
    openBtn.addEventListener("click", function () {
      d.showModal();
    });
  }
  if (d && closeBtn) {
    closeBtn.addEventListener("click", function () {
      d.close();
    });
  }

  var drawer = document.getElementById("demo-drawer");
  var toggleDr = document.getElementById("toggle-drawer");
  if (drawer && toggleDr) {
    toggleDr.addEventListener("click", function () {
      drawer.classList.toggle("is-open");
    });
  }

  var menu = document.getElementById("dropdown-menu");
  var dropBtn = document.getElementById("dropdown-btn");
  if (menu && dropBtn) {
    dropBtn.addEventListener("click", function () {
      menu.hidden = !menu.hidden;
    });
  }

  var tabs = document.querySelectorAll("#demo-tabs .cc-tabs__tab");
  var p1 = document.getElementById("panel-1");
  var p2 = document.getElementById("panel-2");
  if (tabs.length && p1 && p2) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.setAttribute("aria-selected", "false");
        });
        tab.setAttribute("aria-selected", "true");
        p1.hidden = i !== 0;
        p2.hidden = i !== 1;
      });
    });
  }

  var app = document.getElementById("md-app");
  var scrim = document.getElementById("md-scrim");
  var openNav = document.getElementById("md-open-nav");
  if (app && scrim && openNav) {
    openNav.addEventListener("click", function () {
      app.classList.toggle("md-app--nav-open");
    });
    scrim.addEventListener("click", function () {
      app.classList.remove("md-app--nav-open");
    });
    document.querySelectorAll(".md-nav__link").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 959px)").matches) {
          app.classList.remove("md-app--nav-open");
        }
      });
    });
  }

  var filter = document.getElementById("md-nav-filter");
  if (filter) {
    filter.addEventListener("input", function () {
      var q = filter.value.toLowerCase().trim();
      document.querySelectorAll(".md-nav__list li").forEach(function (li) {
        var t = li.textContent.toLowerCase();
        li.style.display = q === "" || t.includes(q) ? "" : "none";
      });
    });
  }
})();
