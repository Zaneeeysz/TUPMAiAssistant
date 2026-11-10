# TUPM AI Assistant · Research Suite
**Milestone 3: Design and Plan — Human Computer Interaction (HCI)**  
**Technological University of the Philippines Manila**  
*College of Science • Computer Studies Department • BS Information Systems (BSIS - 2B)*  
*Academic Year 2026–2027*

---

## 👥 Research & Project Team
- **Course Instructor:** Prof. Jonathan M. Caballero
- **Submitted by:**
  - Alcantara III, Rolando
  - Petiluna, Leonnie Suzanne
  - Gado, Laurence
  - Recto, John Clarence

---

## 🎯 Research Purpose & Setup
This website implements the full interactive prototype and evaluation suite designed in **Milestone 3: Design and Plan (m3-hci)**. It investigates students' trust calibration and cognitive perception when interacting with an academic AI advisor under two controlled experimental conditions:

1. **Condition A: Plain Answer Condition (Control Group)**
   - The AI assistant outputs direct, polite, and comprehensive guidance without source citations, reference cards, or handbook anchors.
2. **Condition B: Source-Supported Condition (Treatment Group)**
   - The AI assistant grounds every assertion with numbered citation badges (`[1]`, `[2]`, `[3]`), institutional source cards, cryptographic SHA-256 integrity hashes, retrieval pipeline metrics, and interactive audit dossiers.

---

## 🏛️ Knowledge Base & Memory Sources
The AI assistant's memory is grounded on official university sources:
- **TUP Office of Admissions - Manila (1st Year Freshmen Enrollment)**:
  - [Official Announcement: Submission of Physical Documents](https://www.facebook.com/story.php?story_fbid=1630419062203400&id=100057059665961)
  - [Admissions Updates & Schedules](https://www.facebook.com/story.php?story_fbid=1114287041105963&substory_index=1114287041105963&id=100057059665961)  
  *Mandatory physical document submission for incoming freshmen: Notice of Admission (NOA), original Form 138 (Grade 12 Report Card) with "Eligible for College Admission", Certificate of Good Moral Character, authenticated PSA Birth Certificate, Medical Clearance from TUP Clinic, and 2x2 ID photos. Verified and encoded to generate Student Number and Certificate of Registration (COR).*
- **Continuing Student Departmental Enlistment (2nd Year, 3rd Year, 4th Year & Up)**:
  - *Students send/submit their official **Rating Slips** to their respective **Department Head** (e.g., Computer Studies Department for BSIS/BSIT/BSCS) for prerequisite evaluation and subject enlistment.*
  - *Students then wait for the official university/department announcement regarding the release and generation of their **Certificate of Registration (COR / Form 5)**.*
- **TUP Student Handbook**: [https://tup.edu.ph/pages/students/tup-student-handbook](https://tup.edu.ph/pages/students/tup-student-handbook)  
  *Covers Academic Code Title 4, Grading Scale (1.0 to 5.0), INC Removal (1-year limit), Maximum Residency Rule (MRR), Add/Drop & Course Withdrawal, Retention & Scholastic Delinquency, Graduation with Latin Honors, Prescribed Uniforms & Wash Day dress code.*
- **TUP Manila USG Official Updates**: [https://web.facebook.com/TUPManilaUSG](https://web.facebook.com/TUPManilaUSG)  
  *Covers latest student government advisories, ID revalidation, free printing at USG Student Lounge, and STRAW (Students' Rights and Welfare) grievance filing.*
- **Office of the University Registrar (OUR)**: Academic Regulations & Calendar 2024–2026.
- **College of Science (COS)**: Computer Studies Department curriculum (BSIS, BSCS, BSIT).

---

## 🖥️ The Five Core Screens (Desktop & Mobile)

| Screen | Description | Features |
|---|---|---|
| **1. Welcome / Home Screen (Overview)** | Research orientation and task briefing. | Protocol tag `#2025-AI-084`, Three-stage roadmap, Case ACAD-01 scenario premise, Participant checklist, Experimental controls. |
| **2. Chat Screen - Plain Answer** | Control Condition (A). | Natural language responses without citations, Condition A notice, experimental workflow tracker, Fall term deadlines sidebar. |
| **3. Chat Screen - Source-Supported** | Treatment Condition (B). | Inline citations `[1]`, `[2]`, `[3]`, Verified Institutional Sources shelf, SHA-256 match, retrieval metrics (100% sourced, 0 hallucinations, 3 docs parsed), Human advisor fallback. |
| **4. Source Verification Modal / Dossier** | Evidence inspection. | Side-by-side comparison of AI Generated Claim vs Primary Canonical Corpus Text with exact lexical match highlight, grounding analysis matrix (99.4% confidence), IRB human oversight check. |
| **5. Trust / Feedback Screen (TAAS-4)** | Psychometric evaluation instrument. | 5-point Likert scale across 4 dimensions: Accuracy (Q1), Epistemic Trust (Q2), Source Provenance (Q3), Tool Reliance (Q4), qualitative rationale textarea, and FERPA-compliant submission. |

---

## 🚀 How to Run & View

1. **Direct Browser Open (Zero Install)**:
   Simply double-click or open `index.html` in any web browser:
   ```
   file:///C:/Users/petil/.gemini/antigravity/scratch/tupm-ai-chatbot/index.html
   ```

2. **Device Viewport Toggle**:
   Use the switcher at the top right of the application:
   - `🖥️ Desktop`: Full widescreen desktop experience.
   - `📱 Mobile Frame`: Simulated mobile device frame (375px) matching Pages 4–6 of Milestone 3.
   - `📟 Tablet`: 768px tablet layout.

3. **Condition Switcher**:
   Click `(A) Plain Answer` or `(B) Source-Supported` in the top bar to test how each condition alters the chat experience and user perception.
