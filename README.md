# Nahar General Hospital Website (সাভার, ঢাকা)

Modern, accessible, responsive healthcare website for **Nahar General Hospital** with a clean, modern healthcare UI.

Official Facebook Page: [https://www.facebook.com/share/19K7Uxj7i6/](https://www.facebook.com/share/19K7Uxj7i6/)

Repository: [https://github.com/verioralabs/Nahar-Hospital](https://github.com/verioralabs/Nahar-Hospital)

---

## Key Features

1. **Modern Healthcare UI**:
   - Responsive CSS Grid & Flexbox layout with a custom spacing scale (`--sp-1` … `--sp-9`).
   - Inter & Plus Jakarta Sans typography, with IBM Plex Sans Bengali for Bangla and JetBrains Mono for numeric/hotline text.
   - Modern healthcare palette: primary blue (`#1f6feb`), navy (`#0a2a6b`), teal, green and red accents, clinical tags, and interactive tiles.
   - Accessible keyboard focus states (`outline: 2px solid var(--blue-60)`).

2. **Core Hospital Services & Information**:
   - **Emergency 24/7 Hotline Bar** with pulse indicator (`01819-701090`, `01896-271146`, `01896-271147`).
   - **General & Laparoscopic Surgery**: Laparoscopic cholecystectomy, appendectomy, hernia, breast tumor removal.
   - **Maternity & Safe Delivery**: Painless normal delivery and emergency C-section coverage.
   - **Pediatrics & Child Care**: Neonatal assessment and child specialist chambers.
   - **Diagnostics Directory & Table**: 4D Color Doppler USG, Digital X-Ray, Hematology, and Biochemistry.
   - **Doctor & Specialist Directory**: Filterable by surgical, gynecology, pediatrics, and medicine departments.

3. **Bilingual Support (English & বাংলা)**:
   - Instant language toggle in the top navigation bar without page reload.
   - Localized specialist details, hospital timings, and clinical terms for Savar residents.

4. **Interactive Appointment Booking Modal**:
   - Accessible modal dialog with focus management and keyboard trap.
   - Department and doctor selector with preferred dates.
   - Direct integration with WhatsApp hotline for instantaneous serial confirmation.

5. **Location & Contact**:
   - 1/2 Parboti Nagar, Thana Road, Savar, Dhaka (Opposite Enam Medical College Hospital).
   - Interactive Google Map embed with landmark guide.

---

## Automated CI/CD (GitHub Actions to GitHub Pages)

This repository includes an automated CI/CD pipeline configured at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

- **Continuous Integration (CI)**: Verifies that all required files (`index.html`, `css/carbon.css`, `js/app.js`) exist and are valid.
- **Continuous Deployment (CD)**: Automatically deploys the site to **GitHub Pages** whenever changes are pushed to the `main` branch.

### Initial Setup for GitHub Pages

1. Open your repository on GitHub: [https://github.com/verioralabs/Nahar-Hospital](https://github.com/verioralabs/Nahar-Hospital)
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. Every push to `main` will now automatically build and publish the live site.
