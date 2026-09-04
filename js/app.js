/**
 * Nahar General Hospital - Application Core Script
 * Features:
 * - Bilingual Support (English / Bengali)
 * - Doctor Directory dynamic filtering & search
 * - Interactive Carbon Modal for Appointment & Inquiries
 * - Form Validation & WhatsApp/Call handoff
 * - Mobile Navigation Toggle
 */

const translations = {
  en: {
    topEmergency: "24/7 EMERGENCY & AMBULANCE HOTLINE:",
    slogan: "Dedicated Healthcare in Savar",
    navAbout: "About Us",
    navServices: "Services",
    navDoctors: "Doctors",
    navDiagnostics: "Diagnostics",
    navMaternity: "Maternity Care",
    navContact: "Contact",
    bookBtn: "Book Appointment",
    heroTag: "Govt. Registered Hospital & Diagnostic Center",
    heroTitle: "Compassionate, Advanced <strong>Healthcare for Savar</strong>",
    heroDesc: "Nahar General Hospital provides modern 24/7 emergency medical care, general and laparoscopic surgery, specialized gynecology & maternity services, pediatrics, and diagnostic facilities at Parboti Nagar, Thana Road, Savar.",
    emergencyCallBtn: "Call Emergency Hotline",
    viewDoctorsBtn: "Find a Specialist",
    stat247: "24/7 Hours",
    stat247Desc: "Emergency, Pharmacy & Lab",
    statDoctors: "Specialists",
    statDoctorsDesc: "Surgical, Gynae & Medicine",
    statDelivery: "100% Safe",
    statDeliveryDesc: "Normal & C-Section Delivery",
    statLocation: "Savar Heart",
    statLocationDesc: "Opp. Enam Medical College",
    tile1Title: "24/7 Emergency & Pharmacy",
    tile1Desc: "Immediate trauma response, critical patient care, and full in-house pharmacy day and night.",
    tile2Title: "Doctor Appointments",
    tile2Desc: "Consult experienced surgeons, gynecologists, pediatricians, and general physicians.",
    tile3Title: "Laparoscopic Surgery",
    tile3Desc: "Minimally invasive appendix, gallbladder, hernia, and emergency surgical operations.",
    tile4Title: "Maternity & Normal Delivery",
    tile4Desc: "Dedicated obstetrics team ensuring safe normal delivery and emergency C-section support.",
    servicesSubhead: "Clinical Departments",
    servicesTitle: "Comprehensive Medical & Surgical Care",
    servicesDesc: "Our hospital brings together modern medical technologies and dedicated healthcare professionals to serve the community of Savar and surrounding areas.",
    doctorsSubhead: "Consultant Directory",
    doctorsTitle: "Specialist Doctors & Surgeons",
    doctorsDesc: "Book regular and urgent appointments with leading professors, consultants, and surgeons.",
    filterAll: "All Specialists",
    filterSurgery: "General & Laparoscopic Surgery",
    filterGynae: "Gynecology & Obstetrics",
    filterPediatrics: "Pediatrics & Child Care",
    filterMedicine: "Internal Medicine",
    contactSubhead: "Visit or Reach Us",
    contactTitle: "Hospital Location & Contact Center",
    addressTitle: "Hospital Address",
    addressDesc: "1/2 Parboti Nagar, Thana Road, Savar, Dhaka, Bangladesh (Opposite Enam Medical College Hospital)",
    phoneTitle: "Direct Hotlines",
    hoursTitle: "Working Hours",
    hoursDesc: "Emergency, OT, Diagnostics & Pharmacy: Open 24 Hours / 7 Days a Week. Specialist Chambers: Daily 4:00 PM – 9:00 PM (Prior appointment recommended).",
    modalTitle: "Request an Appointment",
    modalDesc: "Fill in patient information below. Our hotline desk will confirm your appointment instantly via phone or WhatsApp.",
    formFullName: "Patient Full Name",
    formPhone: "Mobile Phone Number",
    formDept: "Select Department",
    formDoctor: "Preferred Specialist",
    formDate: "Preferred Date",
    formNotes: "Symptoms / Reason for Visit (Optional)",
    formSubmit: "Confirm & Send Request",
    formCancel: "Cancel",
    formSuccess: "Thank you! Your appointment request has been initiated. You will now be redirected to WhatsApp / Hotline confirmation.",
    footerAboutTitle: "About Nahar General Hospital",
    footerAboutText: "A premier private healthcare institution and diagnostic center situated opposite Enam Medical College in Savar, Dhaka. Committed to compassionate, ethical, and affordable clinical care.",
    footerServicesTitle: "Key Facilities",
    footerContactTitle: "Emergency 24/7",
    footerCopyright: "© 2026 Nahar General Hospital, Savar. All rights reserved. Designed to IBM Carbon UI specifications."
  },
  bn: {
    topEmergency: "২৪/৭ জরুরী ও এম্বুলেন্স হটলাইন:",
    slogan: "সাভারে আপনার আস্থার স্বাস্থ্যসেবা",
    navAbout: "আমাদের সম্পর্কে",
    navServices: "সেবাসমূহ",
    navDoctors: "ডাক্তারবৃন্দ",
    navDiagnostics: "ডায়াগনস্টিক",
    navMaternity: "প্রসূতি ও নরমাল ডেলিভারি",
    navContact: "যোগাযোগ",
    bookBtn: "অ্যাপয়েন্টমেন্ট নিন",
    heroTag: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত হাসপাতাল ও ডায়াগনস্টিক সেন্টার",
    heroTitle: "সাভারবাসীর সেবায় আধুনিক ও <strong>নির্ভরযোগ্য চিকিৎসা সেবা</strong>",
    heroDesc: "নাহার জেনারেল হাসপাতাল সাভারের থানা রোডস্থ পার্বতী নগরে অবস্থিত। ২৪ ঘন্টা জরুরি সেবা, অত্যাধুনিক ল্যাপারোস্কোপিক সার্জারি, নিরাপদ নরমাল ও সিজারিয়ান ডেলিভারি এবং আধুনিক ডায়াগনস্টিক সুবিধা নিয়ে আমরা আপনাদের পাশে।",
    emergencyCallBtn: "জরুরি হটলাইনে কল করুন",
    viewDoctorsBtn: "বিশেষজ্ঞ ডাক্তার খুঁজুন",
    stat247: "২৪ ঘন্টা সার্বক্ষণিক",
    stat247Desc: "জরুরি বিভাগ, ফার্মেসী ও ল্যাব",
    statDoctors: "অভিজ্ঞ চিকিৎসক",
    statDoctorsDesc: "সার্জারি, গাইনি ও মেডিসিন বিশেষজ্ঞ",
    statDelivery: "১০০% নিরাপদ ডেলিভারি",
    statDeliveryDesc: "বিশেষজ্ঞ তত্ত্বাবধানে প্রসূতি সেবা",
    statLocation: "সাভারের কেন্দ্রস্থল",
    statLocationDesc: "এনাম মেডিকেল কলেজের বিপরীতে",
    tile1Title: "২৪ ঘন্টা জরুরি সেবা ও ফার্মেসী",
    tile1Desc: "সার্বক্ষণিক জরুরি চিকিৎসা সেবা, ট্রমা কেয়ার এবং নিজস্ব ওষুধের দোকান।",
    tile2Title: "ডাক্তার অ্যাপয়েন্টমেন্ট",
    tile2Desc: "অভিজ্ঞ সার্জন, গাইনী বিশেষজ্ঞ ও শিশু চিকিৎসকের সাথে পরামর্শ।",
    tile3Title: "ল্যাপারোস্কোপিক সার্জারি",
    tile3Desc: "কম কাটাছেঁড়ায় অ্যাপেন্ডিক্স, পিত্তথলির পাথর ও হার্নিয়া অপারেশন।",
    tile4Title: "নিরাপদ নরমাল ডেলিভারি",
    tile4Desc: "দক্ষ গাইনী ও প্রসূতি বিশেষজ্ঞ দল দ্বারা সাশ্রয়ী ডেলিভারি প্যাকেজ।",
    servicesSubhead: "আমাদের সেবাসমূহ",
    servicesTitle: "পরিপূর্ণ ও মানসম্মত চিকিৎসাসেবা",
    servicesDesc: "সাভার ও আশেপাশের সাধারণ মানুষের জন্য উন্নত প্রযুক্তি ও অভিজ্ঞ চিকিৎসকদের সমন্বয়ে সাশ্রয়ী স্বাস্থ্যসেবা।",
    doctorsSubhead: "কনসালটেন্ট তালিকা",
    doctorsTitle: "বিশেষজ্ঞ চিকিৎসকমণ্ডলী",
    doctorsDesc: "আপনার সুবিধাজনক সময়ে অভিজ্ঞ চিকিৎসকদের সিরিয়াল পেতে এখনই অ্যাপয়েন্টমেন্ট বুক করুন।",
    filterAll: "সকল বিশেষজ্ঞ",
    filterSurgery: "জেনারেল ও ল্যাপারোস্কোপিক সার্জারি",
    filterGynae: "গাইনী ও প্রসূতি রোগ",
    filterPediatrics: "শিশু রোগ বিশেষজ্ঞ",
    filterMedicine: "মেডিসিন ও ডায়াবেটিস",
    contactSubhead: "আমাদের ঠিকানা ও যোগাযোগ",
    contactTitle: "হাসপাতালের অবস্থান ও যোগাযোগ কেন্দ্র",
    addressTitle: "হাসপাতালের পূর্ণাঙ্গ ঠিকানা",
    addressDesc: "১/২ পার্বতী নগর, থানা রোড, সাভার, ঢাকা (এনাম মেডিকেল কলেজ হাসপাতালের ঠিক বিপরীত পাশে)",
    phoneTitle: "জরুরি হটলাইন নম্বরসমূহ",
    hoursTitle: "সেবার সময়সূচী",
    hoursDesc: "জরুরি বিভাগ, অপারেশন থিয়েটার, ডায়াগনস্টিক ও ফার্মেসী: সপ্তাহে ৭ দিন ২৪ ঘন্টা খোলা। ডাক্তারদের চেম্বার: প্রতিদিন বিকাল ৪:০০ টা থেকে রাত ৯:০০ টা।",
    modalTitle: "ডাক্তারের সিরিয়াল / অ্যাপয়েন্টমেন্ট",
    modalDesc: "রোগীর তথ্য পূরণ করুন। আমাদের কল সেন্টার থেকে দ্রুত আপনার সিরিয়াল কনফার্ম করা হবে।",
    formFullName: "রোগীর পূর্ণ নাম",
    formPhone: "মোবাইল নম্বর",
    formDept: "বিভাগ নির্বাচন করুন",
    formDoctor: "পছন্দের ডাক্তার",
    formDate: "পরামর্শের তারিখ",
    formNotes: "সমস্যার সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)",
    formSubmit: "সিরিয়াল নিশ্চিত করুন",
    formCancel: "বাতিল",
    formSuccess: "ধন্যবাদ! আপনার অ্যাপয়েন্টমেন্টের তথ্য গ্রহণ করা হয়েছে। এখন নিশ্চিতকরণের জন্য হটলাইন ডেস্কে প্রেরণ করা হচ্ছে।",
    footerAboutTitle: "নাহার জেনারেল হাসপাতাল সম্পর্কে",
    footerAboutText: "সাভারের প্রাণকেন্দ্রে এনাম মেডিকেল কলেজের বিপরীতে অবস্থিত একটি বিশ্বস্ত প্রাইভেট ক্লিনিক ও ডায়াগনস্টিক সেন্টার।",
    footerServicesTitle: "বিশেষায়িত সুবিধাসমূহ",
    footerContactTitle: "জরুরি হটলাইন ২৪/৭",
    footerCopyright: "© ২০২৬ নাহার জেনারেল হাসপাতাল, সাভার। সর্বস্বত্ব সংরক্ষিত। আইবিএম কার্বন ডিজাইন সিস্টেমে নির্মিত।"
  }
};

let currentLang = 'en';

// Doctor Data
const doctors = [
  {
    id: "dr-1",
    name: "Dr. A. K. M. Shamsuddin",
    nameBn: "ডাঃ এ. কে. এম. শামসুদ্দিন",
    dept: "surgery",
    deptName: "General & Laparoscopic Surgery",
    deptNameBn: "জেনারেল ও ল্যাপারোস্কোপিক সার্জন",
    qualification: "MBBS, FCPS (Surgery), MS (Surgery)",
    qualificationBn: "এমবিবিএস, এফসিপিএস (সার্জারি), এমএস (সার্জারি)",
    designation: "Senior Consultant Surgeon",
    designationBn: "সিনিয়র কনসালটেন্ট সার্জন",
    timing: "Sun, Tue, Thu: 5:00 PM – 9:00 PM",
    timingBn: "রবি, মঙ্গল, বৃহস্পতি: বিকাল ৫:০০ - রাত ৯:০০"
  },
  {
    id: "dr-2",
    name: "Dr. Nasrin Sultana",
    nameBn: "ডাঃ নাসরিন সুলতানা",
    dept: "gynae",
    deptName: "Gynecology & Obstetrics",
    deptNameBn: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ",
    qualification: "MBBS, DGO, MCPS (Obs & Gynae)",
    qualificationBn: "এমবিবিএস, ডিজিও, এমসিপিএস (গাইনী ও অবস)",
    designation: "Normal Delivery & Gynae Specialist",
    designationBn: "নরমাল ডেলিভারি ও গাইনী বিশেষজ্ঞ",
    timing: "Daily: 4:30 PM – 8:30 PM (Except Friday)",
    timingBn: "প্রতিদিন: বিকাল ৪:৩০ - রাত ৮:৩০ (শুক্রবার ব্যতীত)"
  },
  {
    id: "dr-3",
    name: "Dr. Tariqul Islam",
    nameBn: "ডাঃ তরিকুল ইসলাম",
    dept: "pediatrics",
    deptName: "Pediatrics & Child Health",
    deptNameBn: "শিশু রোগ বিশেষজ্ঞ",
    qualification: "MBBS, DCH, MD (Pediatrics)",
    qualificationBn: "এমবিবিএস, ডিসিএইচ, এমডি (শিশু স্বাস্থ্য)",
    designation: "Child Health Consultant",
    designationBn: "শিশু বিশেষজ্ঞ কনসালটেন্ট",
    timing: "Sat, Mon, Wed: 4:00 PM – 8:00 PM",
    timingBn: "শনি, সোম, বুধ: বিকাল ৪:০০ - রাত ৮:০০"
  },
  {
    id: "dr-4",
    name: "Dr. Farzana Akhter",
    nameBn: "ডাঃ ফারজানা আক্তার",
    dept: "medicine",
    deptName: "Internal Medicine & Diabetes",
    deptNameBn: "মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ",
    qualification: "MBBS, FCPS (Medicine), CCD (BIRDEM)",
    qualificationBn: "এমবিবিএস, এফসিপিএস (মেডিসিন), সিসিডি (বারডেম)",
    designation: "Specialist Physician",
    designationBn: "মেডিসিন ও ডায়াবেটিস চিকিৎসক",
    timing: "Daily: 5:00 PM – 9:00 PM",
    timingBn: "প্রতিদিন: বিকাল ৫:০০ - রাত ৯:০০"
  },
  {
    id: "dr-5",
    name: "Dr. M. M. Rahman",
    nameBn: "ডাঃ এম. এম. রহমান",
    dept: "surgery",
    deptName: "General & Laparoscopic Surgery",
    deptNameBn: "জেনারেল ও ল্যাপারোস্কোপিক সার্জারি",
    qualification: "MBBS, MS (General Surgery)",
    qualificationBn: "এমবিবিএস, এমএস (জেনারেল সার্জারি)",
    designation: "Consultant Surgeon",
    designationBn: "কনসালটেন্ট সার্জন",
    timing: "Sat, Mon, Wed: 6:00 PM – 9:00 PM",
    timingBn: "শনি, সোম, বুধ: সন্ধ্যা ৬:০০ - রাত ৯:০০"
  },
  {
    id: "dr-6",
    name: "Dr. Shamima Nasreen",
    nameBn: "ডাঃ শামীমা নাসরিন",
    dept: "gynae",
    deptName: "Gynecology & Infertility",
    deptNameBn: "গাইনী ও বন্ধ্যাত্ব রোগ বিশেষজ্ঞ",
    qualification: "MBBS, FCPS (Obs & Gynae)",
    qualificationBn: "এমবিবিএস, এফসিপিএস (গাইনী ও অবস)",
    designation: "Associate Consultant",
    designationBn: "সহযোগী কনসালটেন্ট",
    timing: "Sun, Tue, Thu: 4:00 PM – 7:30 PM",
    timingBn: "রবি, মঙ্গল, বৃহস্পতি: বিকাল ৪:০০ - সন্ধ্যা ৭:৩০"
  }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageToggle();
  renderDoctors('all');
  setupDoctorFilters();
  setupModal();
  setupMobileNav();
  setupAppointmentForm();
  renderDoctorSelectOptions();
});

// Setup Language Switcher
function setupLanguageToggle() {
  const btnEn = document.getElementById('lang-en');
  const btnBn = document.getElementById('lang-bn');

  if (btnEn && btnBn) {
    btnEn.addEventListener('click', () => setLanguage('en'));
    btnBn.addEventListener('click', () => setLanguage('bn'));
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-bn').classList.toggle('active', lang === 'bn');
  
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Re-render dynamic doctor cards
  const activeFilter = document.querySelector('.cds--filter-pill.active');
  const filterVal = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
  renderDoctors(filterVal);
  renderDoctorSelectOptions();
}

// Render Doctor Cards
function renderDoctors(department) {
  const container = document.getElementById('doctors-list');
  if (!container) return;

  const filtered = department === 'all' 
    ? doctors 
    : doctors.filter(doc => doc.dept === department);

  container.innerHTML = filtered.map(doc => {
    const name = currentLang === 'bn' ? doc.nameBn : doc.name;
    const dept = currentLang === 'bn' ? doc.deptNameBn : doc.deptName;
    const qual = currentLang === 'bn' ? doc.qualificationBn : doc.qualification;
    const desig = currentLang === 'bn' ? doc.designationBn : doc.designation;
    const timing = currentLang === 'bn' ? doc.timingBn : doc.timing;
    const initials = name.split(' ').map(n => n.replace(/[^a-zA-Z]/g, '')).filter(Boolean).slice(0, 2).join('');

    return `
      <div class="cds--doctor-card" data-dept="${doc.dept}">
        <div class="cds--doctor-card-header">
          <div class="cds--doctor-avatar">${initials || 'MD'}</div>
          <div class="cds--doctor-header-info">
            <h4>${name}</h4>
            <div class="cds--doctor-dept">${dept}</div>
            <span class="cds--tag cds--tag-blue" style="margin-top: 4px;">${desig}</span>
          </div>
        </div>
        <div class="cds--doctor-card-body">
          <p class="cds--doctor-qualification">${qual}</p>
          <div class="cds--doctor-meta">
            <div class="cds--doctor-meta-row">
              <span class="cds--doctor-meta-label">${currentLang === 'bn' ? 'চেম্বারের সময়:' : 'Visiting Hours:'}</span>
              <span class="cds--doctor-meta-value">${timing}</span>
            </div>
            <div class="cds--doctor-meta-row">
              <span class="cds--doctor-meta-label">${currentLang === 'bn' ? 'সিরিয়াল হটলাইন:' : 'Serial Hotline:'}</span>
              <span class="cds--doctor-meta-value">01819-701090</span>
            </div>
          </div>
          <button class="cds--btn cds--btn-primary cds--btn-sm" onclick="openBookingModal('${doc.id}')" style="width: 100%;">
            <span>${currentLang === 'bn' ? 'সিরিয়াল বুক করুন' : 'Book Appointment'}</span>
            <svg viewBox="0 0 16 16"><path d="M9.3 3.3L8.6 4 12.1 7.5H1v1h11.1L8.6 12l.7.7 4.7-4.7z"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Doctor Filters
function setupDoctorFilters() {
  const pills = document.querySelectorAll('.cds--filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const dept = pill.getAttribute('data-filter');
      renderDoctors(dept);
    });
  });
}

// Populate Doctor Select in Modal
function renderDoctorSelectOptions() {
  const select = document.getElementById('modal-doctor-select');
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = `<option value="">${currentLang === 'bn' ? '-- যে কোন বিশেষজ্ঞ --' : '-- Any Available Specialist --'}</option>` +
    doctors.map(d => {
      const name = currentLang === 'bn' ? d.nameBn : d.name;
      const dept = currentLang === 'bn' ? d.deptNameBn : d.deptName;
      return `<option value="${d.id}">${name} (${dept})</option>`;
    }).join('');

  if (currentVal) {
    select.value = currentVal;
  }
}

// Modal Trigger and Handling
function setupModal() {
  const backdrop = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const cancelBtn = document.getElementById('modal-cancel-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeBookingModal);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeBookingModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBookingModal();
  });
}

window.openBookingModal = function(doctorId = null) {
  const backdrop = document.getElementById('booking-modal');
  if (!backdrop) return;

  if (doctorId) {
    const docSelect = document.getElementById('modal-doctor-select');
    if (docSelect) docSelect.value = doctorId;
  }

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeBookingModal = function() {
  const backdrop = document.getElementById('booking-modal');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Form submission handling
function setupAppointmentForm() {
  const form = document.getElementById('appointment-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('patient-name').value.trim();
    const phone = document.getElementById('patient-phone').value.trim();
    const dept = document.getElementById('patient-dept').value;
    const docId = document.getElementById('modal-doctor-select').value;
    const date = document.getElementById('appointment-date').value;
    const notes = document.getElementById('patient-notes').value.trim();

    if (!name || !phone) {
      alert(currentLang === 'bn' ? 'অনুগ্রহ করে রোগীর নাম ও মোবাইল নম্বর লিখুন।' : 'Please enter patient name and phone number.');
      return;
    }

    const doctorObj = doctors.find(d => d.id === docId);
    const doctorName = doctorObj ? (currentLang === 'bn' ? doctorObj.nameBn : doctorObj.name) : 'General Specialist';

    // Format WhatsApp message
    const msg = `*Appointment Request - Nahar General Hospital*\n` +
      `👤 *Patient:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🏥 *Department:* ${dept || 'General'}\n` +
      `🩺 *Doctor:* ${doctorName}\n` +
      `📅 *Date:* ${date || 'Earliest available'}\n` +
      `📝 *Notes:* ${notes || 'None'}\n` +
      `📍 *Location:* Parboti Nagar, Thana Road, Savar`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/8801819701090?text=${encodedMsg}`;

    alert(currentLang === 'bn' 
      ? 'আপনার অ্যাপয়েন্টমেন্ট সফলভাবে তৈরি হয়েছে! নিশ্চিতকরণের জন্য হোয়াটসঅ্যাপ/হটলাইনে পাঠানো হচ্ছে।' 
      : 'Appointment details recorded! Redirecting to hotline confirmation.');

    closeBookingModal();
    form.reset();

    // Open WhatsApp link or phone dialer
    window.open(whatsappUrl, '_blank');
  });
}

// Mobile Nav Menu
function setupMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    document.querySelectorAll('.cds--mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }
}
