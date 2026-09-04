# Nahar General Hospital Website (সাভার, ঢাকা)

Modern, accessible, responsive healthcare website for **Nahar General Hospital** built strictly adhering to the **IBM Carbon Design System v11** standards.

Official Facebook Page: [https://www.facebook.com/share/19K7Uxj7i6/](https://www.facebook.com/share/19K7Uxj7i6/)

Repository: [https://github.com/verioralabs/Nahar-Hospital](https://github.com/verioralabs/Nahar-Hospital)

---

## Key Features

1. **IBM Carbon UI Standard**:
   - 16-Column Carbon Layout Grid & standard spacing tokens (`--cds-spacing-*`).
   - IBM Plex Sans & IBM Plex Sans Bengali typography.
   - Carbon Color palette: Carbon Blue (`#0f62fe`), Gray 100 (`#161616`), Gray 10 (`#f4f4f4`), clinical tags, and interactive tiles.
   - Accessible keyboard focus states (`outline: 2px solid #0f62fe`).

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
   - Carbon Design compliant modal dialog with focus management.
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
