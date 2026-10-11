/* =========================================================
   FOREST HOLDING A.E. — Συμπεριφορά σελίδας (JavaScript)
   Το περιεχόμενο είναι στατικό ανά γλώσσα (EN: root, EL: /el/).
   Ο διακόπτης γλώσσας είναι σύνδεσμος προς την αντίστοιχη σελίδα.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ----- 1. Έτος στο footer (ενημερώνεται αυτόματα) ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ----- 2. Μενού για κινητά (hamburger) ----- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- 3. Ενεργός σύνδεσμος ανάλογα με την ενότητα στην οθόνη ----- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            var active = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", active);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ----- 4. Φόρμα επικοινωνίας — αποστολή μέσω Web3Forms ----- */
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var note = form.querySelector(".form-note");     // μήνυμα επιτυχίας
      var errNote = form.querySelector(".form-error");  // μήνυμα σφάλματος
      var btn = form.querySelector('button[type="submit"]');

      // Κρύψε προηγούμενα μηνύματα και «κλείδωσε» το κουμπί όσο στέλνει.
      if (note) note.hidden = true;
      if (errNote) errNote.hidden = true;
      if (btn) btn.disabled = true;

      // Στέλνουμε τα πεδία της φόρμας στο Web3Forms (POST).
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (btn) btn.disabled = false;
          if (res.success) {
            if (note) { note.hidden = false; note.scrollIntoView({ behavior: "smooth", block: "center" }); }
            form.reset();
          } else {
            if (errNote) { errNote.hidden = false; errNote.scrollIntoView({ behavior: "smooth", block: "center" }); }
          }
        })
        .catch(function () {
          // Αποτυχία δικτύου
          if (btn) btn.disabled = false;
          if (errNote) { errNote.hidden = false; errNote.scrollIntoView({ behavior: "smooth", block: "center" }); }
        });
    });
  }

});
