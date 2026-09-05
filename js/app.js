/* ============================================================
   NAHAR GENERAL HOSPITAL — app.js
   Bilingual (EN/BN), Doctor directory, Modal, WhatsApp
   ============================================================ */

/* ── Translations ─────────────────────────────────────────── */
const translations = {
  en: {
    // Top strip / header
    topEmergency:     "24/7 EMERGENCY & AMBULANCE:",
    slogan:           "Dedicated Healthcare in Savar",
    bookBtn:          "Book Appointment",
    navAbout:         "About",
    navServices:      "Services",
    navGallery:       "Facility",
    navDoctors:       "Consultants",
    navTeam:          "Photo Directory",
    navDiagnostics:   "Diagnostics",
    navMaternity:     "Maternity",
    navContact:       "Contact",

    // Hero
    heroTag:          "Govt. Registered Hospital & Diagnostic Center",
    heroTitle:        "Advanced & Compassionate Healthcare",
    heroDesc:         "Trusted, ethical medical care for families in Savar — 24/7 emergency response, advanced laparoscopic surgery, safe maternity, and full diagnostics under one roof, opposite Enam Medical College.",
    emergencyCallBtn: "Call Emergency Hotline",
    viewDoctorsBtn:   "Find a Specialist",
    stat247:          "24/7",
    stat247Desc:      "Emergency, Pharmacy & Lab",
    statDoctors:      "Specialists",
    statDoctorsDesc:  "Surgery, Gynae & Medicine",
    statDelivery:     "Safe",
    statDeliveryDesc: "Normal & C-Section Delivery",
    statLocation:     "Savar",
    statLocationDesc: "Opposite Enam Medical College",

    // Tiles
    tile1Title: "24/7 Emergency & Pharmacy",
    tile1Desc:  "Immediate trauma response and full in-house pharmacy round the clock.",
    tile2Title: "Doctor Appointments",
    tile2Desc:  "Book chambers with surgeons, gynecologists, pediatricians, and physicians.",
    tile3Title: "Laparoscopic Surgery",
    tile3Desc:  "Minimally invasive appendix, gallbladder, hernia, and emergency operations.",
    tile4Title: "Maternity & Normal Delivery",
    tile4Desc:  "Dedicated obstetrics team for safe normal delivery and C-section support.",

    // Services
    servicesSubhead: "Clinical Departments",
    servicesTitle:   "Comprehensive Medical & Surgical Care",
    servicesDesc:    "Modern medical technologies and dedicated healthcare professionals serving the community of Savar and surrounding areas.",

    // Gallery
    gallerySubhead: "Hospital Facility",
    galleryTitle:   "Our Departments & Capabilities",
    galleryDesc:    "A look at the key clinical areas inside Nahar General Hospital. For photos, videos, and community outreach updates, follow our official Facebook page.",

    // Doctors
    doctorsSubhead:   "Consultant Directory",
    doctorsTitle:     "Distinguished Clinical Experts — Ultra Specialist Doctors & Surgeons",
    doctorsDesc:      "Book appointments with experienced consultants. Call 01819-701090 to confirm visiting hours and chamber availability.",
    filterAll:        "All Specialists",
    filterSurgery:    "Surgery",
    filterGynae:      "Gynecology",
    filterPediatrics: "Pediatrics",
    filterMedicine:   "Medicine",

    // Contact
    contactSubhead:   "Find Us",
    contactTitle:     "Location & Contact",
    addressTitle:     "Address",
    addressDesc:      "1/2 Parboti Nagar, Thana Road, Savar, Dhaka\n(Opposite Enam Medical College Hospital)",
    phoneTitle:       "Hotlines",
    hoursTitle:       "Hours",
    hoursDesc:        "Emergency, OT, Diagnostics & Pharmacy — Open 24 Hours, 7 Days. Specialist Chambers — Daily 4:00 PM – 9:00 PM.",

    // Modal / Form
    modalTitle:  "Request an Appointment",
    modalDesc:   "Our desk will confirm via phone or WhatsApp shortly after submission.",
    formFullName: "Patient Full Name *",
    formPhone:    "Mobile Number *",
    formDept:     "Department",
    formDoctor:   "Preferred Specialist",
    formDate:     "Preferred Date",
    formNotes:    "Symptoms / Notes (optional)",
    formCancel:   "Cancel",
    formSubmit:   "Confirm & Send Request",

    // Footer
    footerAboutText:    "A certified private hospital and diagnostic centre opposite Enam Medical College, Savar — committed to affordable and ethical healthcare.",
    footerServicesTitle: "Key Services",
    footerContactTitle:  "Emergency 24/7",
    footerCopyright:    "© 2026 Nahar General Hospital, Savar. All rights reserved. IBM Carbon Design System.",
  },

  bn: {
    topEmergency:     "২৪/৭ জরুরি ও অ্যাম্বুলেন্স সেবা:",
    slogan:           "সাভারে নিবেদিত স্বাস্থ্যসেবা",
    bookBtn:          "অ্যাপয়েন্টমেন্ট বুক করুন",
    navAbout:         "পরিচিতি",
    navServices:      "সেবাসমূহ",
    navGallery:       "সুযোগ-সুবিধা",
    navDoctors:       "পরামর্শক",
    navTeam:          "ফটো ডিরেক্টরি",
    navDiagnostics:   "ডায়াগনস্টিক",
    navMaternity:     "মাতৃসেবা",
    navContact:       "যোগাযোগ",

    heroTag:          "সরকার নিবন্ধিত হাসপাতাল ও ডায়াগনস্টিক সেন্টার",
    heroTitle:        "আধুনিক ও মানবিক স্বাস্থ্যসেবা",
    heroDesc:         "সাভারের পরিবারগুলোর জন্য বিশ্বস্ত ও নৈতিক চিকিৎসা সেবা — ২৪ ঘণ্টা জরুরি সেবা, উন্নত ল্যাপারোস্কোপিক সার্জারি, নিরাপদ মাতৃসেবা এবং এক ছাদের নিচে সম্পূর্ণ ডায়াগনস্টিক সুবিধা, এনাম মেডিকেল কলেজের বিপরীতে।",
    emergencyCallBtn: "জরুরি হটলাইনে ফোন করুন",
    viewDoctorsBtn:   "বিশেষজ্ঞ খুঁজুন",
    stat247:          "২৪/৭",
    stat247Desc:      "জরুরি সেবা, ফার্মেসি ও ল্যাব",
    statDoctors:      "বিশেষজ্ঞ",
    statDoctorsDesc:  "সার্জারি, গাইনি ও মেডিসিন",
    statDelivery:     "নিরাপদ",
    statDeliveryDesc: "স্বাভাবিক ও সিজার ডেলিভারি",
    statLocation:     "সাভার",
    statLocationDesc: "এনাম মেডিকেলের বিপরীতে",

    tile1Title: "২৪/৭ জরুরি ও ফার্মেসি",
    tile1Desc:  "তাৎক্ষণিক ট্রমা সেবা এবং সার্বক্ষণিক ইন-হাউস ফার্মেসি।",
    tile2Title: "ডাক্তার অ্যাপয়েন্টমেন্ট",
    tile2Desc:  "সার্জন, গাইনি, শিশু বিশেষজ্ঞ ও মেডিসিন চিকিৎসকের সিরিয়াল নিন।",
    tile3Title: "ল্যাপারোস্কোপিক সার্জারি",
    tile3Desc:  "পেটের অ্যাপেন্ডিক্স, পিত্তথলি, হার্নিয়া অপারেশন।",
    tile4Title: "মাতৃসেবা ও স্বাভাবিক ডেলিভারি",
    tile4Desc:  "বিশেষজ্ঞ গাইনি দলের তত্ত্বাবধানে নিরাপদ ও সুলভ মাতৃসেবা।",

    servicesSubhead: "ক্লিনিকাল বিভাগ",
    servicesTitle:   "ব্যাপক চিকিৎসা ও শল্যচিকিৎসা সেবা",
    servicesDesc:    "আধুনিক চিকিৎসা সরঞ্জাম ও অভিজ্ঞ স্বাস্থ্যসেবা প্রদানকারীরা সাভার ও আশেপাশের এলাকার মানুষদের সেবায় নিয়োজিত।",

    gallerySubhead: "হাসপাতালের সুযোগ-সুবিধা",
    galleryTitle:   "আমাদের বিভাগ ও সক্ষমতা",
    galleryDesc:    "নাহার জেনারেল হাসপাতালের গুরুত্বপূর্ণ ক্লিনিকাল এলাকার একটি ওভারভিউ। ছবি, ভিডিও ও কমিউনিটি কার্যক্রমের আপডেটের জন্য আমাদের অফিসিয়াল ফেসবুক পেজ ফলো করুন।",

    doctorsSubhead:   "চিকিৎসক পরিচিতি",
    doctorsTitle:     "বিশিষ্ট ক্লিনিকাল বিশেষজ্ঞ — আল্ট্রা স্পেশালিস্ট চিকিৎসক ও সার্জন",
    doctorsDesc:      "অভিজ্ঞ চিকিৎসকদের সাথে অ্যাপয়েন্টমেন্ট নিন। ভিজিটিং আওয়ার নিশ্চিত করতে ০১৮১৯-৭০১০৯০ তে কল করুন।",
    filterAll:        "সকল বিশেষজ্ঞ",
    filterSurgery:    "সার্জারি",
    filterGynae:      "গাইনি",
    filterPediatrics: "শিশু বিভাগ",
    filterMedicine:   "মেডিসিন",

    contactSubhead:   "আমাদের খুঁজুন",
    contactTitle:     "ঠিকানা ও যোগাযোগ",
    addressTitle:     "ঠিকানা",
    addressDesc:      "১/২ পারবতী নগর, থানা রোড, সাভার, ঢাকা\n(এনাম মেডিকেল কলেজ হাসপাতালের বিপরীতে)",
    phoneTitle:       "হটলাইন",
    hoursTitle:       "সময়সূচী",
    hoursDesc:        "জরুরি বিভাগ, ওটি, ডায়াগনস্টিক ও ফার্মেসি — ২৪ ঘণ্টা, সপ্তাহে ৭ দিন। বিশেষজ্ঞ চেম্বার — প্রতিদিন বিকাল ৪টা – রাত ৯টা।",

    modalTitle:  "অ্যাপয়েন্টমেন্টের আবেদন করুন",
    modalDesc:   "আপনার তথ্য পাঠানোর পর আমরা ফোন বা WhatsApp-এ নিশ্চিত করব।",
    formFullName: "রোগীর পূর্ণ নাম *",
    formPhone:    "মোবাইল নম্বর *",
    formDept:     "বিভাগ",
    formDoctor:   "পছন্দের চিকিৎসক",
    formDate:     "পছন্দের তারিখ",
    formNotes:    "লক্ষণ / নোট (ঐচ্ছিক)",
    formCancel:   "বাতিল",
    formSubmit:   "নিশ্চিত করুন ও পাঠান",

    footerAboutText:    "সাভারের এনাম মেডিকেল কলেজের বিপরীতে অবস্থিত একটি অনুমোদিত বেসরকারি হাসপাতাল ও ডায়াগনস্টিক সেন্টার — সাশ্রয়ী ও নৈতিক স্বাস্থ্যসেবায় প্রতিশ্রুতিবদ্ধ।",
    footerServicesTitle: "প্রধান সেবাসমূহ",
    footerContactTitle:  "জরুরি সেবা ২৪/৭",
    footerCopyright:    "© ২০২৬ নাহার জেনারেল হাসপাতাল, সাভার। সর্বস্বত্ব সংরক্ষিত। আইবিএম কার্বন ডিজাইন সিস্টেম।",
  }
};

/* ── Doctors Data ─────────────────────────────────────────── */
const doctors = [
  {
    name:   "Dr. Md. Mizanur Rahman",
    dept:   "surgery",
    title:  "General & Laparoscopic Surgeon",
    qual:   "MBBS, FCPS (Surgery) | Senior Surgical Consultant",
    spec:   "Cholecystectomy, Appendectomy, Hernia, Breast & Thyroid surgery",
    sched:  "Sat – Thu: 5:00 PM – 8:00 PM",
    exp:    "18+ years",
    initials: "MR"
  },
  {
    name:   "Dr. Md. Saiful Islam",
    dept:   "surgery",
    title:  "Emergency & Paediatric Surgeon",
    qual:   "MBBS, MS (Surgery) | Emergency &amp; Trauma Surgeon",
    spec:   "Acute abdomen, Trauma surgery, Paediatric emergency procedures",
    sched:  "24/7 Emergency + Sat – Thu: 6:00 PM – 9:00 PM",
    exp:    "12+ years",
    initials: "SI"
  },
  {
    name:   "Dr. Nasrin Akter",
    dept:   "gynae",
    title:  "Gynecologist & Obstetrician",
    qual:   "MBBS, FCPS (Obs & Gynae) | Senior Consultant",
    spec:   "Safe normal delivery, high-risk pregnancy, C-section, infertility",
    sched:  "Sat – Thu: 4:00 PM – 8:00 PM; Fri: 10:00 AM – 1:00 PM",
    exp:    "16+ years",
    initials: "NA"
  },
  {
    name:   "Dr. Sadia Islam",
    dept:   "gynae",
    title:  "Junior Gynecologist",
    qual:   "MBBS, MCPS (Obs & Gynae) | Resident Consultant",
    spec:   "Antenatal care, normal delivery, postnatal support, contraception",
    sched:  "Daily: 6:00 PM – 9:00 PM",
    exp:    "8+ years",
    initials: "SI"
  },
  {
    name:   "Dr. Md. Rabiul Hasan",
    dept:   "pediatrics",
    title:  "Pediatrician & Neonatologist",
    qual:   "MBBS, DCH, MD (Pediatrics) | Child Health Specialist",
    spec:   "Neonatal jaundice, child fever, nutrition, immunisation, infections",
    sched:  "Sat – Thu: 5:00 PM – 9:00 PM",
    exp:    "14+ years",
    initials: "RH"
  },
  {
    name:   "Dr. Md. Anisur Rahman",
    dept:   "medicine",
    title:  "Internal Medicine Specialist",
    qual:   "MBBS, FCPS (Medicine) | Medicine & Diabetes Consultant",
    spec:   "Hypertension, Diabetes, Fever, Liver & Kidney disorders, Cardiology",
    sched:  "Sat – Thu: 5:00 PM – 8:30 PM",
    exp:    "20+ years",
    initials: "AR"
  }
];

/* ── Language switching ───────────────────────────────────── */
let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
  const btn = document.getElementById("lang-" + lang);
  if (btn) btn.classList.add("active");
  document.documentElement.lang = lang === "bn" ? "bn" : "en";
}

/* ── Render Doctors ──────────────────────────────────────── */
function renderDoctors(dept) {
  const filtered = dept === "all" ? doctors : doctors.filter(d => d.dept === dept);
  const container = document.getElementById("doctors-list");
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;color:var(--gray-70);padding:var(--sp-4) 0;">No consultants listed for this department. Please call 01819-701090.</p>`;
    return;
  }

  container.innerHTML = filtered.map(doc => `
    <div class="doctor-card">
      <div class="doctor-card-head">
        <div class="doctor-avatar">${doc.initials}</div>
        <div>
          <div class="doctor-name">${doc.name}</div>
          <div class="doctor-dept">${doc.title}</div>
        </div>
      </div>
      <div class="doctor-card-body">
        <p class="doctor-qual">${doc.qual}</p>
        <div class="doctor-meta">
          <div class="meta-row">
            <span class="meta-label">Speciality</span>
            <span class="meta-val" style="max-width:55%;text-align:right;">${doc.spec}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Chamber</span>
            <span class="meta-val">${doc.sched}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Experience</span>
            <span class="meta-val">${doc.exp}</span>
          </div>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="openBookingModal('${doc.name.replace(/'/g,"\\'")}')">
          Book Appointment &#8594;
        </button>
      </div>
    </div>
  `).join("");
}

/* ── Filter pills ────────────────────────────────────────── */
function setupFilters() {
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderDoctors(pill.dataset.filter);
    });
  });
}

/* ── Doctor select in modal ─────────────────────────────── */
function renderDoctorSelectOptions(preferredName) {
  const sel = document.getElementById("modal-doctor-select");
  if (!sel) return;
  sel.innerHTML = `<option value="">No preference</option>` +
    doctors.map(d =>
      `<option value="${d.name}" ${d.name === preferredName ? "selected" : ""}>${d.name} — ${d.title}</option>`
    ).join("");
}

/* ── Modal ──────────────────────────────────────────────── */
function openBookingModal(preferredDoctor) {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  renderDoctorSelectOptions(preferredDoctor || "");
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── Appointment form → WhatsApp ─────────────────────────── */
function setupAppointmentForm() {
  const form = document.getElementById("appointment-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name  = document.getElementById("patient-name")?.value.trim()  || "";
    const phone = document.getElementById("patient-phone")?.value.trim() || "";
    const dept  = document.getElementById("patient-dept")?.value         || "";
    const doc   = document.getElementById("modal-doctor-select")?.value  || "No preference";
    const date  = document.getElementById("appointment-date")?.value     || "Not specified";
    const notes = document.getElementById("patient-notes")?.value.trim() || "—";

    if (!name || !phone) { alert("Please enter patient name and mobile number."); return; }

    const msg = encodeURIComponent(
      `*Nahar General Hospital — Appointment Request*\n\n` +
      `*Patient:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Department:* ${dept}\n` +
      `*Specialist:* ${doc}\n` +
      `*Date:* ${date}\n` +
      `*Notes:* ${notes}`
    );
    window.open(`https://wa.me/8801819701090?text=${msg}`, "_blank");
    closeBookingModal();
  });
}

/* ── Mobile nav ──────────────────────────────────────────── */
function setupMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ── Sticky nav active link ─────────────────────────────── */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item[href^='#']");
  if (!sections.length || !navItems.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove("active"));
        const active = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => obs.observe(s));
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Language buttons
  document.getElementById("lang-en")?.addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-bn")?.addEventListener("click", () => setLanguage("bn"));

  // Modal close
  document.getElementById("modal-close-btn")?.addEventListener("click", closeBookingModal);
  document.getElementById("modal-cancel-btn")?.addEventListener("click", closeBookingModal);
  document.getElementById("booking-modal")?.addEventListener("click", e => {
    if (e.target === document.getElementById("booking-modal")) closeBookingModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeBookingModal();
  });

  // Initialise all features
  renderDoctors("all");
  setupFilters();
  setupAppointmentForm();
  setupMobileNav();
  setupScrollSpy();

  // Set today as min date for appointment picker
  const dateInput = document.getElementById("appointment-date");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
});
