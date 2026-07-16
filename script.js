/* =========================================================
   FOREST HOLDING A.E. — Συμπεριφορά σελίδας (JavaScript)
   ========================================================= */

/* ----- ΛΕΞΙΚΟ ΜΕΤΑΦΡΑΣΕΩΝ -----
   Κάθε "κλειδί" αντιστοιχεί σε ένα data-i18n attribute στο HTML.
   Οι τιμές μπορούν να περιέχουν HTML (π.χ. <br>).                */
var translations = {
  el: {
    "nav.home": "Αρχική",
    "nav.about": "Σχετικά με εμάς",
    "nav.holdings": "Συμμετοχές",
    "nav.contact": "Επικοινωνία",

    "hero.eyebrow": "Εταιρεία Συμμετοχών · Est. 2021",
    "hero.title": "Επενδύουμε στην ανάπτυξη<br>και τον εκσυγχρονισμό των επιχειρήσεων.",
    "hero.lead": "Η FOREST HOLDING A.E. επενδύει σε υγιείς επιχειρήσεις και στηρίζει ενεργά την ανάπτυξη και τον εκσυγχρονισμό τους, δημιουργώντας βιώσιμη αξία με μακροπρόθεσμη προοπτική.",
    "hero.cta1": "Οι συμμετοχές μας",
    "hero.cta2": "Επικοινωνήστε",

    "about.label": "01 — Σχετικά με εμάς",
    "about.title": "Ένας όμιλος με μακροπρόθεσμη προσέγγιση.",
    "about.p1": "Η FOREST HOLDING A.E. είναι ελληνική εταιρεία συμμετοχών που διαχειρίζεται ένα διαφοροποιημένο χαρτοφυλάκιο επιχειρήσεων σε στρατηγικούς κλάδους της οικονομίας. Στόχος μας είναι η δημιουργία βιώσιμης αξίας για τους μετόχους, τους εργαζομένους και τις τοπικές κοινωνίες.",
    "about.p2": "Με έμφαση στη διαφάνεια, την εταιρική διακυβέρνηση και τη μακροπρόθεσμη σταθερότητα, στηρίζουμε τις εταιρείες του ομίλου ώστε να αναπτύσσονται με υπευθυνότητα και συνέπεια.",
    "about.v1t": "Διάρκεια",
    "about.v1d": "Επενδύουμε με ορίζοντα δεκαετιών, όχι τριμήνων.",
    "about.v2t": "Διαφάνεια",
    "about.v2d": "Σαφείς διαδικασίες και υπεύθυνη εταιρική διακυβέρνηση.",
    "about.v3t": "Συνεργασία",
    "about.v3d": "Στηρίζουμε τις ομάδες, δεν τις αντικαθιστούμε.",

    "holdings.label": "02 — Συμμετοχές",
    "holdings.title": "Το χαρτοφυλάκιό μας",
    "holdings.intro": "Επιλεγμένες επενδύσεις σε εταιρείες με χαρακτήρα, ποιότητα και αυθεντική ελληνική ταυτότητα.",
    "holdings.c1tag": "Οίνος & Αποστάγματα",
    "holdings.c1d": "Μία από τις μεγαλύτερες online κάβες της Ελλάδας, με 1.000+ ετικέτες κρασιού και αποσταγμάτων.",
    "holdings.c2tag": "Οινοποιία",
    "holdings.c2d": "Οινοποιείο με αυτόχθονες ελληνικές ποικιλίες σε Σαντορίνη και Νεμέα, με εξαγωγές σε 25+ χώρες.",
    "holdings.c3tag": "Εστίαση",
    "holdings.c3name": "Λουκουμάδες Αιγαίον",
    "holdings.c3d": "Ιστορικό κατάστημα λουκουμάδων στην Αθήνα, από το 1926.",
    "holdings.c4tag": "Διαχείριση Ακίνητης Περιουσίας",
    "holdings.c4d": "Εταιρεία διαχείρισης και αξιοποίησης ακίνητης περιουσίας.",
    "holdings.more": "Μάθετε περισσότερα →",

    "sub.back": "← Πίσω στις συμμετοχές",
    "sub.aboutLabel": "Η εταιρεία",
    "sub.contactLabel": "Στοιχεία επικοινωνίας",
    "sub.websiteLabel": "Ιστοσελίδα",
    "sub.emailLabel": "Email",
    "sub.phoneLabel": "Τηλέφωνο",
    "sub.addrLabel": "Διεύθυνση",
    "sub.visit": "Επίσκεψη ιστοσελίδας →",
    "sub.previewCap": "Στιγμιότυπο από την επίσημη ιστοσελίδα",
    "sub.detailsLabel": "Στοιχεία",
    "sub.sectorLabel": "Κλάδος",
    "sub.groupLabel": "Όμιλος",

    "hw.tag": "Οίνος & Αποστάγματα",
    "hw.tagline": "Η e-κάβα σου, με 1.000+ ετικέτες.",
    "hw.p1": "Η House of Wine (houseofwine.gr) είναι μία από τις μεγαλύτερες online κάβες της Ελλάδας, με περισσότερες από 1.000 ετικέτες κρασιού, αποσταγμάτων, μπύρας και προϊόντων delicatessen.",
    "hw.p2": "Προσφέρει προσεκτικά επιλεγμένες ετικέτες από κορυφαίους παραγωγούς της Ελλάδας και του κόσμου, με αποστολή σε όλη τη χώρα.",

    "gaia.tag": "Οινοποιία",
    "gaia.tagline": "Αυτόχθονες ελληνικές ποικιλίες, από το 1994.",
    "gaia.p1": "Η Gaia Wines ιδρύθηκε το 1994 από τον οινολόγο Γιάννη Παρασκευόπουλο και τον γεωπόνο Λέοντα Καρατσαλό, με στόχο να αναδείξει τις ελληνικές αυτόχθονες ποικιλίες σε όλο τον κόσμο.",
    "gaia.p2": "Λειτουργεί δύο οινοποιεία — στη Σαντορίνη, πατρίδα του Ασύρτικου, και στο Κουτσί Νεμέας, γη του Αγιωργίτικου. Κρασιά όπως το Θαλασσίτης και το Gaia Estate εξάγονται σε περισσότερες από 25 χώρες.",

    "lk.tag": "Εστίαση",
    "lk.name": "Λουκουμάδες Αιγαίον",
    "lk.tagline": "Λουκουμάδες στην καρδιά της Αθήνας, από το 1926.",
    "lk.p1": "Οι «Λουκουμάδες Αιγαίον» είναι ιστορικό κατάστημα της Αθήνας που σερβίρει λουκουμάδες από το 1926, στην οδό Πανεπιστημίου.",
    "lk.p2": "Με ρίζες σχεδόν έναν αιώνα και σεβασμό στην παράδοση, η επιχείρηση ανανεώνεται και επιστρέφει με σύγχρονη ματιά, κρατώντας την αυθεντική της γεύση.",

    "cim.tag": "Διαχείριση Ακίνητης Περιουσίας",
    "cim.tagline": "Διαχείριση και αξιοποίηση ακίνητης περιουσίας.",
    "cim.p1": "Η Cimolus A.E. δραστηριοποιείται στη διαχείριση και αξιοποίηση ακίνητης περιουσίας, με στόχο τη μακροπρόθεσμη ανάπτυξη και τη βέλτιστη απόδοση του χαρτοφυλακίου ακινήτων.",
    "cim.p2": "Αναλαμβάνει τη συντήρηση, τη μίσθωση και τη στρατηγική αξιοποίηση ακινήτων, με έμφαση στην ποιότητα, τη διαφάνεια και τη δημιουργία βιώσιμης υπεραξίας.",
    "cim.sector": "Διαχείριση Ακίνητης Περιουσίας",
    "cim.contactBtn": "Επικοινωνία →",

    "contact.label": "03 — Επικοινωνία",
    "contact.title": "Μιλήστε με την ομάδα μας.",
    "contact.intro": "Για ερωτήματα σχετικά με τον όμιλο, τις συμμετοχές ή συνεργασίες, επικοινωνήστε μαζί μας.",

    "form.name": "Ονοματεπώνυμο",
    "form.namePh": "Το όνομά σας",
    "form.email": "Email",
    "form.message": "Μήνυμα",
    "form.messagePh": "Το μήνυμά σας…",
    "form.submit": "Αποστολή",
    "form.note": "Ευχαριστούμε! Το μήνυμά σας εστάλη.",
    "form.error": "Κάτι πήγε στραβά. Δοκιμάστε ξανά αργότερα.",

    "e404.code": "Σφάλμα 404",
    "e404.title": "Η σελίδα δεν βρέθηκε.",
    "e404.text": "Η σελίδα που ζητήσατε δεν υπάρχει ή έχει μετακινηθεί.",
    "e404.home": "← Επιστροφή στην αρχική",

    "footer.rights": "Με επιφύλαξη κάθε δικαιώματος."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.holdings": "Holdings",
    "nav.contact": "Contact",

    "hero.eyebrow": "Holding Company · Est. 2021",
    "hero.title": "We invest in the growth<br>and modernisation of businesses.",
    "hero.lead": "FOREST HOLDING S.A. invests in healthy businesses and actively supports their growth and modernisation, creating sustainable value with a long-term outlook.",
    "hero.cta1": "Our holdings",
    "hero.cta2": "Get in touch",

    "about.label": "01 — About us",
    "about.title": "A group with a long-term approach.",
    "about.p1": "FOREST HOLDING S.A. is a Greek holding company managing a diversified portfolio of businesses across strategic sectors of the economy. Our aim is to create sustainable value for shareholders, employees and local communities.",
    "about.p2": "With a focus on transparency, corporate governance and long-term stability, we support the group's companies so they can grow responsibly and consistently.",
    "about.v1t": "Endurance",
    "about.v1d": "We invest with a horizon of decades, not quarters.",
    "about.v2t": "Transparency",
    "about.v2d": "Clear processes and responsible corporate governance.",
    "about.v3t": "Partnership",
    "about.v3d": "We support teams, we do not replace them.",

    "holdings.label": "02 — Holdings",
    "holdings.title": "Our portfolio",
    "holdings.intro": "Selected investments in companies with character, quality and an authentic Greek identity.",
    "holdings.c1tag": "Wine & Spirits",
    "holdings.c1d": "One of the largest online wine cellars in Greece, with 1,000+ labels of wine and spirits.",
    "holdings.c2tag": "Winery",
    "holdings.c2d": "A winery of indigenous Greek varieties in Santorini and Nemea, exporting to 25+ countries.",
    "holdings.c3tag": "Food & Beverage",
    "holdings.c3name": "Aigaion Loukoumades",
    "holdings.c3d": "A historic loukoumades shop in Athens, since 1926.",
    "holdings.c4tag": "Real Estate Management",
    "holdings.c4d": "The group's real estate management and development company.",
    "holdings.more": "Learn more →",

    "sub.back": "← Back to holdings",
    "sub.aboutLabel": "The company",
    "sub.contactLabel": "Contact details",
    "sub.websiteLabel": "Website",
    "sub.emailLabel": "Email",
    "sub.phoneLabel": "Phone",
    "sub.addrLabel": "Address",
    "sub.visit": "Visit website →",
    "sub.previewCap": "Screenshot of the official website",
    "sub.detailsLabel": "Details",
    "sub.sectorLabel": "Sector",
    "sub.groupLabel": "Group",

    "hw.tag": "Wine & Spirits",
    "hw.tagline": "Your online cellar, with 1,000+ labels.",
    "hw.p1": "House of Wine (houseofwine.gr) is one of the largest online wine cellars in Greece, with more than 1,000 labels of wine, spirits, beer and delicatessen products.",
    "hw.p2": "It offers carefully curated labels from top producers in Greece and around the world, with nationwide delivery.",

    "gaia.tag": "Winery",
    "gaia.tagline": "Greek indigenous varieties, since 1994.",
    "gaia.p1": "Gaia Wines was founded in 1994 by oenologist Yiannis Paraskevopoulos and agronomist Leon Karatsalos, with the aim of bringing Greek indigenous grape varieties to the world.",
    "gaia.p2": "It operates two wineries — on Santorini, home of Assyrtiko, and in Koutsi, Nemea, land of Agiorgitiko. Wines such as Thalassitis and Gaia Estate are exported to more than 25 countries.",

    "lk.tag": "Food & Beverage",
    "lk.name": "Aigaion Loukoumades",
    "lk.tagline": "Loukoumades in the heart of Athens, since 1926.",
    "lk.p1": "“Aigaion Loukoumades” is a historic Athens shop that has been serving loukoumades since 1926, on Panepistimiou Street.",
    "lk.p2": "With almost a century of roots and respect for tradition, the business is being renewed and returns with a modern touch, keeping its authentic flavour.",

    "cim.tag": "Real Estate Management",
    "cim.tagline": "Management and development of real estate.",
    "cim.p1": "Cimolus S.A. operates in the management and development of real estate, aiming for long-term growth and optimal performance of the property portfolio.",
    "cim.p2": "It handles the maintenance, leasing and strategic development of properties, with an emphasis on quality, transparency and the creation of sustainable value.",
    "cim.sector": "Real Estate Management",
    "cim.contactBtn": "Contact →",

    "contact.label": "03 — Contact",
    "contact.title": "Talk to our team.",
    "contact.intro": "For enquiries about the group, our holdings or partnerships, get in touch with us.",

    "form.name": "Full name",
    "form.namePh": "Your name",
    "form.email": "Email",
    "form.message": "Message",
    "form.messagePh": "Your message…",
    "form.submit": "Send",
    "form.note": "Thank you! Your message has been sent.",
    "form.error": "Something went wrong. Please try again later.",

    "e404.code": "Error 404",
    "e404.title": "Page not found.",
    "e404.text": "The page you requested does not exist or has been moved.",
    "e404.home": "← Back to home",

    "footer.rights": "All rights reserved."
  }
};

// Περιμένουμε να φορτώσει πλήρως το HTML πριν «πιάσουμε» στοιχεία.
document.addEventListener("DOMContentLoaded", function () {

  /* ----- 1. Έτος στο footer (ενημερώνεται αυτόματα) ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ----- 2. Αλλαγή γλώσσας (i18n) ----- */
  var langToggle = document.getElementById("langToggle");

  function applyLanguage(lang) {
    var dict = translations[lang];
    if (!dict) return;

    // Ενημερώνουμε το κείμενο κάθε στοιχείου με data-i18n.
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Ενημερώνουμε τα placeholder των πεδίων φόρμας.
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    // Ενημερώνουμε το <html lang> (SEO/accessibility) και το κουμπί.
    document.documentElement.setAttribute("lang", lang);
    if (langToggle) langToggle.textContent = lang === "el" ? "EN" : "ΕΛ";

    // Αποθηκεύουμε την επιλογή ώστε να τη «θυμάται» ο browser.
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  // Διαβάζουμε αποθηκευμένη προτίμηση, αλλιώς ξεκινάμε στα ελληνικά.
  var saved = "el";
  try { saved = localStorage.getItem("lang") || "el"; } catch (e) {}
  applyLanguage(saved);

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("lang");
      applyLanguage(current === "el" ? "en" : "el");
    });
  }

  /* ----- 3. Μενού για κινητά (hamburger) ----- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ----- 4. Ενεργός σύνδεσμος ανάλογα με την ενότητα στην οθόνη ----- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

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

  /* ----- 5. Φόρμα επικοινωνίας — αποστολή μέσω Web3Forms ----- */
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
            if (note) note.hidden = false;   // επιτυχία
            form.reset();
          } else {
            if (errNote) errNote.hidden = false;  // η υπηρεσία απάντησε με σφάλμα
          }
        })
        .catch(function () {
          // Αποτυχία δικτύου
          if (btn) btn.disabled = false;
          if (errNote) errNote.hidden = false;
        });
    });
  }

});
