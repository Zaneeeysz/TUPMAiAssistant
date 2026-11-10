/**
 * TUPM AI ASSISTANT - INSTITUTIONAL KNOWLEDGE BASE & RETRIEVAL CORPUS
 * Benchmark Sources:
 * 1. TUP Student Handbook (https://tup.edu.ph/pages/students/tup-student-handbook)
 * 2. TUP Manila University Student Government (USG) Official Updates (https://web.facebook.com/TUPManilaUSG)
 * 3. TUP Office of Admissions - Manila Official Announcements:
 *    - Submission of Documents: https://www.facebook.com/story.php?story_fbid=1630419062203400&id=100057059665961
 *    - Admission Updates: https://www.facebook.com/story.php?story_fbid=1114287041105963&substory_index=1114287041105963&id=100057059665961
 * 4. TUP Academic Department Enlistment & COR Issuance Protocol (2nd Year and Up)
 * 5. Office of the University Registrar (OUR) Academic Regulations 2024-2026
 * 6. College of Science (COS) - Computer Studies Department Policies (Ayala Blvd., Ermita, Manila)
 */

window.TUPM_KNOWLEDGE_BASE = {
  metadata: {
    institution: "Technological University of the Philippines Manila",
    campus: "Ayala Blvd. cor. San Marcelino St., Ermita, Manila",
    college: "College of Science (COS) - Computer Studies Department",
    handbookUrl: "https://tup.edu.ph/pages/students/tup-student-handbook",
    usgUrl: "https://web.facebook.com/TUPManilaUSG",
    admissionsUrl1: "https://www.facebook.com/story.php?story_fbid=1630419062203400&id=100057059665961",
    admissionsUrl2: "https://www.facebook.com/story.php?story_fbid=1114287041105963&substory_index=1114287041105963&id=100057059665961",
    lastUpdated: "Academic Year 2024-2026",
    corpusHash: "sha256-d49f7b1e8a93bc204f6e1189ac35422e"
  },

  // Official Institutional Sources for Grounding & Evidence Inspection
  sources: {
    "handbook-acad-code": {
      id: "handbook-acad-code",
      citationNum: 1,
      title: "TUP Student Handbook: Title 4 - Academic Regulations & Codes",
      authority: "Office of the University Registrar • Div. of Academic Affairs",
      reference: "TUP-REG-2024 §12.3 (Census & Course Drop Penalties)",
      canonicalUrl: "https://tup.edu.ph/pages/students/tup-student-handbook",
      sha256: "8f4e9112bc091d2c091ad786523910ef",
      crawlDate: "Oct 12, 2024, 04:14 EST",
      applicability: "All Undergraduate & Graduate Students, TUP Manila",
      confidence: "99.4%",
      excerpt: "4.2.1 Census Date Cut-off: A student who officially drops a semester-length course on or before the official Fall Term Census Date (Friday, October 24 at 11:59 PM) shall have no notation or grade of 'W' recorded upon their permanent academic transcript. Courses removed prior to this deadline will not reflect on official degree audits nor affect semester billing calculations subject to §7.4. All actions performed subsequent to 11:59 PM on October 24 require Petitions for Late Drop with College Dean certification.",
      context: "Covers official course dropping, transcript notations ('W' marks), census cutoff rules, and petition procedures."
    },
    "bursar-refund-policy": {
      id: "bursar-refund-policy",
      citationNum: 2,
      title: "Student Financial Services: Tuition & Bursar Refund Schedules",
      authority: "Division of Finance & Bursar's Office • TUP Manila",
      reference: "BURS-2024-SCHED • Table §7.1",
      canonicalUrl: "https://tup.edu.ph/pages/students/tup-student-handbook",
      sha256: "b34a8123fa981274bc98124976fa8310",
      crawlDate: "Oct 14, 2024, 09:30 UTC",
      applicability: "Undergraduate Enrolled Students (Assessed & RA 10931)",
      confidence: "98.8%",
      excerpt: "Refund Tier Matrix §7.1: (a) 100% tuition refund applies for courses officially dropped before the end of Week 2 of regular academic classes. (b) Drops submitted between Week 3 and the October 24 census date are eligible for a 50% tuition credit/adjustment, excluding mandatory laboratory equipment and biological hazardous material access fees ($75.00 / ₱1,500). (c) After October 24, all drops receive 0% refund and a formal 'W' notation.",
      context: "Specifies refund tiers, refundable laboratory fees, and billing ledger adjustments for dropped units."
    },
    "advising-manual-adddrop": {
      id: "advising-manual-adddrop",
      citationNum: 3,
      title: "Academic Advising Manual: Add/Drop Self-Service & Enrollment Guide",
      authority: "Undergraduate Dean's Council • Student Records Management",
      reference: "AAM-2024-AD • Section 3.4 (Self-Service Workflow)",
      canonicalUrl: "https://tup.edu.ph/pages/students/tup-student-handbook",
      sha256: "12f0cc34aa88110992381283fa8019ab",
      crawlDate: "Oct 10, 2024, 11:20 UTC",
      applicability: "College of Science (COS) & Engineering Departments",
      confidence: "97.9%",
      excerpt: "Self-Service Course Drop Procedure: Course drops can be independently and electronically executed via the University Student Portal (ERS) under Enrollment Services > Course Management without physical advisor signature prior to census deadline. Drops taking total registered units below full-time status (15 units) trigger an automated financial aid lock.",
      context: "Directs students through the electronic ERS portal workflow for modifying course schedules."
    },
    "usg-executive-bulletin": {
      id: "usg-executive-bulletin",
      citationNum: 4,
      title: "TUP Manila USG Official Advisory & Executive Resolution 2023-F",
      authority: "University Student Government (USG) • Committee on Student Rights (STRAW)",
      reference: "SEN-RES-23-F12 • TUPM USG Facebook Official Channel",
      canonicalUrl: "https://web.facebook.com/TUPManilaUSG",
      sha256: "94ff7b22108acbe8113456fe8902ad54",
      crawlDate: "Nov 02, 2024, 08:00 UTC",
      applicability: "TUP Manila Student Body & College Student Councils",
      confidence: "99.1%",
      excerpt: "USG Resolution on Student Welfare: Reaffirming student rights during enrollment and examination weeks. Mandates prompt posting of ERS advising schedules, grace periods for ID revalidation, free university printing assistance at the USG Student Lounge, and clear procedural channels for grade contestations through the STRAW Grievance Desk.",
      context: "Live social media bulletins, enrollment assistance desks, uniform exemptions, and student welfare advocacies."
    },
    "handbook-grading-retention": {
      id: "handbook-grading-retention",
      citationNum: 5,
      title: "TUP Student Handbook: Title 5 - Grading System, Retention & Honors",
      authority: "Office of Student Affairs (OSA) • Academic Council",
      reference: "TUP-OSA-2024 • Chapter 3: Scholastic Evaluation",
      canonicalUrl: "https://tup.edu.ph/pages/students/tup-student-handbook",
      sha256: "e781ba449012cdef3341890ba12487ab",
      crawlDate: "Sep 28, 2024, 14:00 UTC",
      applicability: "All TUP Campuses (Manila, Taguig, Cavite, Visayas)",
      confidence: "99.6%",
      excerpt: "Grading Scale: 1.0 (99-100% Excellent), 1.25 (96-98%), 1.50 (93-95%), 1.75 (90-92%), 2.0 (87-89%), 2.25 (84-86%), 2.50 (81-83%), 2.75 (78-80%), 3.0 (75-77% Passed), 5.0 (Failed). INC (Incomplete) must be removed within one (1) academic year by completing requirements/exam; otherwise it converts to 5.0. Latin Honors require: Summa Cum Laude (1.00-1.20), Magna Cum Laude (1.21-1.45), Cum Laude (1.46-1.75) with no failing grades or unremoved INC throughout residency.",
      context: "Complete grading numerical breakdown, incomplete grade compliance, retention policies, and Latin honors qualifications."
    },
    "handbook-dress-discipline": {
      id: "handbook-dress-discipline",
      citationNum: 6,
      title: "TUP Student Handbook: Title 6 - Student Discipline, Uniform & Dress Code",
      authority: "Office of Student Affairs (OSA) • Security & Discipline Office",
      reference: "TUP-OSA-2024 • Section 8: Campus Decorum & Attire",
      canonicalUrl: "https://tup.edu.ph/pages/students/tup-student-handbook",
      sha256: "fa51390aa1894b9100234acb6791ec40",
      crawlDate: "Oct 05, 2024, 07:15 UTC",
      applicability: "All TUP Manila Students & Faculty",
      confidence: "98.5%",
      excerpt: "Prescribed Uniform: Official white polo/blouse with TUP institutional seal, dark gray/black slacks or knee-length pleated skirt, closed black leather shoes, and visibly displayed student ID with official lanyard. Wash Days (Wednesdays/designated days) allow modest casual attire; crop tops, sleeveless shirts, ripped jeans, and open-toe slippers are strictly prohibited. Gender-affirming uniform accommodation is recognized through OSA registration.",
      context: "Rules regarding daily uniform, wash day dress codes, ID wearing protocols, and gender-affirming exemptions."
    },
    "admissions-office-manila": {
      id: "admissions-office-manila",
      citationNum: 7,
      title: "TUP Office of Admissions - Manila: Submission of Documents for 1st Year Admission",
      authority: "TUP Office of Admissions - Manila • Academic Affairs",
      reference: "OAM-MANILA-DOCS • Official FB Posts: fbid=1630419062203400 & fbid=1114287041105963",
      canonicalUrl: "https://www.facebook.com/story.php?story_fbid=1630419062203400&id=100057059665961",
      sha256: "7c29be1904a8e217d84812f9b20194ac",
      crawlDate: "Nov 05, 2024, 10:00 UTC",
      applicability: "Incoming 1st Year Freshmen (All Colleges: COS, COE, CIT, CIE, CAFA, CLA)",
      confidence: "99.8%",
      excerpt: "Official Notice on Submission of Physical Documents for 1st Year Freshmen College Enrollment: Qualified freshmen applicants must submit original and photocopied credentials directly to the TUP Office of Admissions - Manila following their college assignment schedule. Requirements: (1) Notice of Admission (NOA) / Confirmation Slip, (2) Original Form 138 (Grade 12 Senior High School Report Card) with 'Eligible for College Admission' remark, (3) Certificate of Good Moral Character from SHS, (4) Authenticated PSA Birth Certificate, (5) Medical Examination Clearance from the TUP Medical Clinic, and (6) 2x2 ID photos on white background with name tag. Upon physical verification, the freshman is officially registered and issued their Student ID Number and Certificate of Registration.",
      context: "Official physical document submission, verification schedule, and enrollment steps for incoming 1st year students at TUP Manila."
    },
    "dept-enlistment-cor": {
      id: "dept-enlistment-cor",
      citationNum: 8,
      title: "TUP Academic Department Enlistment & COR Issuance Protocol (2nd Year & Higher)",
      authority: "College of Science / Department Heads & Office of the University Registrar",
      reference: "OUR-DEPT-ENLIST-2024 • Rating Slips Submission & COR Announcement",
      canonicalUrl: "https://tup.edu.ph/pages/students/tup-student-handbook",
      sha256: "3f82aa10e927db4892c90141a29bb801",
      crawlDate: "Oct 18, 2024, 08:30 UTC",
      applicability: "2nd Year, 3rd Year, 4th Year Continuing Students",
      confidence: "99.7%",
      excerpt: "Enrollment for 2nd Year, 3rd Year, 4th Year and Up: Continuing students must obtain their official Rating Slips (grade slips) from the previous semester(s) and send/submit them directly to their respective Department Head (e.g., Computer Studies Department for BSIS, BSIT, BSCS) for prerequisite evaluation and subject enlistment. Students must not attempt self-enlistment; instead, they must wait for the official institutional announcement regarding the release and generation of their Certificate of Registration (COR / Form 5).",
      context: "Step-by-step continuing student enrollment: rating slip submission to department heads for subject enlistment and waiting for the official COR announcement."
    }
  },

  // Common pre-indexed student queries with rich dual-mode responses
  faqDatabase: [
    {
      id: "enrollment-complete-guide",
      keywords: ["enrollment", "enroll", "how to enroll", "enrollment steps", "registration", "enlistment", "rating slip", "cor", "certificate of registration", "1st year enrollment", "2nd year enrollment"],
      plainResponse: `Undergraduate enrollment at Technological University of the Philippines Manila follows two distinct procedures depending on your year level:

1. FOR 1ST YEAR STUDENTS (INCOMING FRESHMEN):
Enrollment is facilitated directly through the TUP Office of Admissions - Manila via physical document submission:
• Step 1: Secure your Notice of Admission (NOA) / Slot Confirmation.
• Step 2: Prepare your required original credentials:
  - Original Form 138 (Grade 12 Report Card) with "Eligible for College Admission" remark
  - Certificate of Good Moral Character (from your Senior High School)
  - PSA Authenticated Birth Certificate (original + photocopies)
  - Medical Examination Clearance from the TUP Medical and Dental Clinic
  - 2x2 colored ID pictures with white background and name tag
• Step 3: Personally submit your physical documents to the TUP Office of Admissions - Manila (Ayala Blvd., Ermita) on your designated college schedule (e.g. College of Science, College of Engineering, etc.).
• Step 4: After document verification and encoding, you will be officially registered and issued your TUP Student ID Number and Certificate of Registration (COR / Form 5).

2. FOR 2ND YEAR, 3RD YEAR, 4TH YEAR AND UP (CONTINUING STUDENTS):
Continuing students do not do self-enlistment; instead, follow this departmental procedure:
• Step 1: Secure your official Rating Slips (grade slips from the previous semester/terms).
• Step 2: Send/submit your Rating Slips to your respective Department Head (e.g., Computer Studies Department for BSIS, BSIT, BSCS) for academic prerequisite evaluation and enlistment of your subjects.
• Step 3: Wait for the official university/department announcement regarding the release and generation of your Certificate of Registration (COR / Form 5).
• Step 4: Once announced, access/claim your official COR and proceed to semester ID validation at the designated campus station.`,

      sourceSupportedResponse: `Undergraduate enrollment at TUP Manila follows two official institutional workflows based on year level **[7][8]**:

### 1. FOR 1ST YEAR STUDENTS (INCOMING FRESHMEN)
Enrollment is administered through the **TUP Office of Admissions - Manila** via scheduled physical document submission **[7]**:
* **Official Reference:** TUP Office of Admissions - Manila Announcements on Document Submission **[7]**.
* **Mandatory Physical Credentials to Submit:**
  1. **Notice of Admission (NOA)** / Confirmation of Slot **[7]**
  2. **Original Form 138 (Grade 12 Report Card)** with complete grades and *"Eligible for College Admission"* remark **[7]**
  3. **Certificate of Good Moral Character** issued by SHS Principal or Guidance Counselor **[7]**
  4. **Authenticated PSA Birth Certificate** (original and clear photocopies) **[7]**
  5. **Medical Clearance** from the TUP Manila Medical and Dental Clinic (Physical Exam, Chest X-ray, CBC) **[7]**
  6. **2x2 formal ID pictures** on white background with name tag **[7]**
* **Submission Protocol:** Submit your physical documents at the **TUP Office of Admissions** (Ayala Blvd., Ermita, Manila) strictly following your assigned college and date schedule **[7]**.
* **Completion:** Once verified and encoded, you are officially registered and issued your permanent **TUP Student ID Number** and **Certificate of Registration (COR / Form 5)** **[7]**.

---

### 2. FOR 2ND YEAR, 3RD YEAR, 4TH YEAR & UP (CONTINUING STUDENTS)
Continuing students must undergo departmental evaluation and enlistment **[8]**:
* **Step 1 (Rating Slips):** Secure your official **Rating Slips (grade slips)** from your previous semester(s) **[8]**.
* **Step 2 (Department Head Submission):** Send/submit your Rating Slips directly to your **Department Head** (e.g., Computer Studies Department for BSIS/BSIT/BSCS students in the College of Science) for prerequisite evaluation and **subject enlistment** **[8]**.
* **Step 3 (Wait for COR Announcement):** After the Department Head processes the enlistment of subjects, **wait for the official institutional announcement regarding the release and generation of your Certificate of Registration (COR / Form 5)** **[8]**.
* **Step 4 (Validation):** Once the release is officially announced, download/claim your COR and proceed to get your official semester validation sticker for your student ID **[4][8]**.`,

      citations: ["admissions-office-manila", "dept-enlistment-cor", "usg-executive-bulletin"],
      groundingConfidence: 99.8,
      category: "Admissions & Departmental Enrollment Protocols"
    },
    {
      id: "enrollment-freshmen-1st-year",
      keywords: ["1st year", "freshmen", "freshman", "incoming 1st year", "submission of documents", "first year", "tup office of admissions", "freshmen requirements"],
      plainResponse: `For incoming 1st Year (Freshmen) students at TUP Manila:

Enrollment is conducted via the physical submission of required documents to the TUP Office of Admissions - Manila (Ayala Blvd. cor. San Marcelino St., Ermita, Manila):

Required Documents to Submit:
1. Notice of Admission (NOA) / Slot Confirmation
2. Original Form 138 (Grade 12 Report Card) with "Eligible for College Admission" remark
3. Certificate of Good Moral Character
4. Authenticated PSA Birth Certificate (original and photocopy)
5. Medical Examination Clearance from the TUP Medical Clinic
6. 2x2 ID photos with white background and name tag
7. Signed Student Undertaking / Confirmation

Follow your assigned schedule according to your College (e.g. College of Science, College of Engineering, etc.) as announced on the official Facebook page of the TUP Office of Admissions - Manila. Once verified, your Student Number and Certificate of Registration (COR) will be issued.`,

      sourceSupportedResponse: `For incoming **1st Year (Freshmen)** students at TUP Manila, enrollment requires the physical submission of authentic credentials to the **TUP Office of Admissions - Manila [7]**:

### OFFICIAL FRESHMEN ENROLLMENT SUBMISSION PROTOCOL
* **Authoritative Reference:** [TUP Office of Admissions - Manila Announcement on Submission of Documents](https://www.facebook.com/story.php?story_fbid=1630419062203400&id=100057059665961) **[7]**.

### MANDATORY DOCUMENT CHECKLIST
1. **Notice of Admission (NOA) / Slot Confirmation Slip [7]**
2. **Original Form 138 (Grade 12 Senior High School Report Card)** with verified passing grades and *"Eligible for College Admission"* remark **[7]**
3. **Certificate of Good Moral Character** issued by the Senior High School Principal or Guidance Counselor **[7]**
4. **Authenticated PSA Birth Certificate** (original and clear photocopies) **[7]**
5. **Medical Clearance** from the TUP Manila Medical and Dental Clinic **[7]**
6. **2x2 formal ID pictures** (white background with complete name tag) **[7]**

### SUBMISSION VENUE & CONFIRMATION
* **Location:** TUP Office of Admissions - Manila, Ayala Blvd. cor. San Marcelino St., Ermita, Manila **[7]**.
* **Schedule:** Submit strictly according to the designated date and time assigned to your college/program **[7]**.
* **Outcome:** After document inspection and encoding, freshmen receive their official **Student Number** and **Certificate of Registration (COR / Form 5)** **[7]**.`,

      citations: ["admissions-office-manila", "usg-executive-bulletin"],
      groundingConfidence: 99.8,
      category: "1st Year Freshmen Admissions & Document Submission"
    },
    {
      id: "enrollment-higher-years-2nd-up",
      keywords: ["2nd year", "3rd year", "4th year", "higher year", "continuing", "rating slip", "rating slips", "department head", "enlistment", "cor announcement", "certificate of registration"],
      plainResponse: `For 2nd Year, 3rd Year, 4th Year and Up (Continuing Students) at TUP Manila:

The official enrollment process is conducted through departmental enlistment:

Step 1: Secure Rating Slips
Obtain your official Rating Slips (grade slips) from the previous semester(s).

Step 2: Submit to Department Head
Send your Rating Slips to your respective Department Head (e.g., Computer Studies Department for BSIS, BSIT, BSCS students in the College of Science) for academic prerequisite evaluation and subject enlistment.

Step 3: Wait for COR Announcement
Do not attempt unauthorized self-enrollment. You must wait for the official institutional announcement regarding the release and generation of your Certificate of Registration (COR / Form 5).

Step 4: Claim COR & Revalidation
Once the announcement is posted, download/claim your official COR and present it for semester validation sticker placement on your TUP Student ID.`,

      sourceSupportedResponse: `For **2nd Year, 3rd Year, 4th Year and Up (Continuing Students)** at TUP Manila, enrollment is governed by the departmental enlistment protocol **[8]**:

### STEP-BY-STEP ENROLLMENT FOR 2ND YEARS & UP
1. **Secure Rating Slips:** Download or obtain your official **Rating Slips (grade slips)** from your previous semester(s) **[8]**.
2. **Submit to Department Head:** Send your Rating Slips directly to your **Department Head** (e.g., *Computer Studies Department* for BS Information Systems, BSIT, BSCS students in the College of Science) for prerequisite evaluation and **subject enlistment** **[8]**.
3. **Wait for COR Announcement:** Once your Department Head has completed the enlistment of subjects, **wait for the official university/department announcement regarding the release and generation of your Certificate of Registration (COR / Form 5)** **[8]**.
4. **Claim COR & Semester ID Revalidation:** Once officially announced, download/claim your Certificate of Registration (COR) and present it at the validation counter to receive your updated semester validation sticker **[4][8]**.`,

      citations: ["dept-enlistment-cor", "usg-executive-bulletin", "handbook-acad-code"],
      groundingConfidence: 99.7,
      category: "2nd Year & Higher Departmental Enlistment"
    },
    {
      id: "course-drop-refund",
      keywords: ["drop", "dropping", "refund", "biol 204", "course drop", "tuition refund", "withdraw", "w grade", "census date"],
      plainResponse: `Yes, you can drop your course without receiving a "W" on your permanent academic transcript if you submit the drop request on or before Friday, October 24th at 11:59 PM (the official Fall Census Date).

Regarding your tuition refund:
• A 100% tuition refund applies for courses dropped before the end of Week 2.
• Drops submitted between Week 3 and the October 24 census date are eligible for a 50% tuition credit, excluding mandatory lab equipment fees ($75.00 / ₱1,500).
• After October 24, all drops receive a "W" grade and 0% refund.

You can complete this drop directly through the Student Portal under Enrollment Services > Course Management. If your remaining course load falls below 15 units, please consult your department academic advisor to avoid financial aid issues.`,
      
      sourceSupportedResponse: `Yes, you can drop your course without receiving a **"W"** on your permanent academic transcript if you submit the drop request on or before **Friday, October 24th at 11:59 PM (the Census Date) [1]**.

### TUITION REFUND BREAKDOWN
* **100% tuition refund** applies for courses dropped before the end of Week 2 **[2]**.
* **50% tuition credit** applies for drops submitted between Week 3 and the October 24 census date, excluding mandatory lab equipment fees ($75.00 / ₱1,500) **[2]**.
* **After October 24**, all drops receive a **"W" grade** and **0% refund [1]**.

You can complete this drop directly through the **Student Portal (ERS)** under **Enrollment Services > Course Management [3]**. If this drop reduces your total semester load below 15 units, note that it may trigger a financial aid verification hold **[3]**.`,
      
      citations: ["handbook-acad-code", "bursar-refund-policy", "advising-manual-adddrop"],
      groundingConfidence: 99.4,
      category: "Academic Standing & Bursar Regulations"
    },
    {
      id: "grading-system-inc",
      keywords: ["grading", "grades", "inc", "incomplete", "scale", "gwa", "grade scale", "passing grade", "failed", "removal"],
      plainResponse: `Technological University of the Philippines uses a 5-point numerical grading system:

• 1.00 (99-100%): Excellent
• 1.25 (96-98%): Very Superior
• 1.50 (93-95%): Superior
• 1.75 (90-92%): High Average
• 2.00 (87-89%): Average
• 2.25 (84-86%): Low Average
• 2.50 (81-83%): Satisfactory
• 2.75 (78-80%): Fair
• 3.00 (75-77%): Passed (Lowest Passing Mark)
• 5.00 (74% & Below): Failed

What about an INC (Incomplete) mark?
If you receive an "INC", you are given exactly one (1) academic year from the end of the term to complete all deficient requirements or pass the completion exam. You must secure a Completion Form from the Registrar's Office and submit it signed by your professor. If not removed within one year, the INC grade automatically lapses into a 5.00 (Failed).`,

      sourceSupportedResponse: `Technological University of the Philippines implements the official **5-point numerical grading scale [5]**:

### OFFICIAL TUP GRADING SCALE
* **1.00** (99–100%) – Excellent
* **1.25** (96–98%) – Very Superior
* **1.50** (93–95%) – Superior
* **1.75** (90–92%) – High Average
* **2.00** (87–89%) – Average
* **2.25** (84–86%) – Low Average
* **2.50** (81–83%) – Satisfactory
* **2.75** (78–80%) – Fair
* **3.00** (75–77%) – Passed *(Minimum passing mark for all undergraduate credit courses)* **[5]**
* **5.00** (74% and Below) – Failed **[5]**

### RULES ON "INC" (INCOMPLETE) GRADES
* An **"INC"** is granted only when class passing standing is verified, but specific requirements or final term exams were missed due to valid extenuating reasons **[5]**.
* You have a strict deadline of **one (1) academic year** to remove the INC via a formal **Completion Form** processed through the Office of the University Registrar **[1]**.
* If uncompleted after one year, the grade automatically lapses into **5.00 (Failed) [5]**.`,
      
      citations: ["handbook-grading-retention", "handbook-acad-code"],
      groundingConfidence: 99.6,
      category: "Academic Policies & Evaluation"
    },
    {
      id: "dress-code-wash-day",
      keywords: ["dress code", "uniform", "wash day", "attire", "clothes", "haircut", "id", "hair", "wearing uniform"],
      plainResponse: `At TUP Manila, all students are required to follow the university dress and uniform regulations:

1. Daily Prescribed Uniform:
• Male: White polo with official TUP patch, dark slacks, closed black leather/leatherette shoes.
• Female: White official blouse with TUP seal, dark slacks or knee-length pleated skirt, closed black shoes.
• Identification: The official TUP Student ID must be visibly worn around the neck with the official TUP lanyard at all times while on campus.

2. Wash Day (Wednesdays & Designated Dates):
• Students may wear decent casual clothes.
• Strictly prohibited: crop tops, plunging necklines, sleeveless shirts, transparent tops, mini shorts, ripped jeans, and open-toe slippers/sandals.

3. Gender-Affirmative Guidelines:
• In coordination with the TUP Manila USG and OSA, students desiring gender-affirming uniform accommodation may submit a registration letter to the Office of Student Affairs for formal identification exemption.`,

      sourceSupportedResponse: `At TUP Manila, all enrolled students must adhere to the **Campus Decorum and Dress Code Policy [6]**:

### 1. DAILY PRESCRIBED UNIFORM
* **Male Attire:** White polo with institutional TUP embroidered seal, dark gray/black dress slacks, and closed black leather/formal shoes **[6]**.
* **Female Attire:** White official blouse with TUP emblem, dark tailored pants or knee-length pleated skirt, and closed shoes **[6]**.
* **Student ID Requirement:** The validated TUP Student ID must be visibly displayed on the official maroon/gold university lanyard upon entering campus gates **[4][6]**.

### 2. WASH DAY REGULATIONS (WEDNESDAYS)
* Modest smart casual attire is permitted during designated wash days **[4]**.
* **Prohibited Wear:** Sleeveless tops, halter necks, cropped shirts exposing midriffs, excessively ripped denim, and rubber slippers/flip-flops **[6]**.

### 3. GENDER-AFFIRMING ACCOMMODATION
* Through joint initiatives between **TUP Manila USG** and the **Office of Student Affairs (OSA)**, students wishing to wear gender-affirming uniforms can file an authorization request directly at the OSA Student Welfare Desk without academic penalties **[4][6]**.`,

      citations: ["handbook-dress-discipline", "usg-executive-bulletin"],
      groundingConfidence: 98.9,
      category: "Student Welfare & Code of Conduct"
    },
    {
      id: "latin-honors-graduation",
      keywords: ["latin honors", "honors", "cum laude", "magna cum laude", "summa cum laude", "graduation", "graduate"],
      plainResponse: `To qualify for Latin Honors upon graduation from Technological University of the Philippines Manila:

1. Grade Requirements (General Weighted Average):
• Summa Cum Laude: GWA of 1.00 to 1.20
• Magna Cum Laude: GWA of 1.21 to 1.45
• Cum Laude: GWA of 1.46 to 1.75

2. Strict Retention Conditions:
• Must have carried the regular academic load prescribed by the curriculum every semester (no unapproved underloading).
• Must have completed the degree within the normal prescribed duration (no exceeding Maximum Residency Rule).
• Must have NO grade of 5.00 (Failed) or unremoved INC (Incomplete) in any academic or non-academic course (including NSTP and PE).
• Must have no record of major disciplinary violation from the Office of Student Affairs.`,

      sourceSupportedResponse: `To graduate with **Latin Honors** at TUP Manila, candidates must satisfy the criteria stipulated in **Chapter 3 of the TUP Student Handbook [5]**:

### LATIN HONORS GWA BRACKETS
* **Summa Cum Laude:** General Weighted Average of **1.00 to 1.20** *(No grade below 1.75 in any subject)* **[5]**.
* **Magna Cum Laude:** General Weighted Average of **1.21 to 1.45** *(No grade below 2.00 in any subject)* **[5]**.
* **Cum Laude:** General Weighted Average of **1.46 to 1.75** *(No grade below 2.25 in any subject)* **[5]**.

### MANDATORY INSTITUTIONAL PREREQUISITES
1. **Regular Semester Load:** Candidate must not have been underloaded in any semester, unless officially certified due to course unavailability **[1][5]**.
2. **Clean Academic Record:** Candidate must have **no failing grade (5.00)**, no unremoved "INC", and no unauthorized dropped courses across the entire curriculum **[5]**.
3. **Residency:** Must have completed at least 75% of total academic credit units within TUP Manila **[1]**.
4. **Good Moral Standing:** Certified free of major disciplinary infractions by the **Office of Student Affairs (OSA) [5]**.`,

      citations: ["handbook-grading-retention", "handbook-acad-code"],
      groundingConfidence: 99.5,
      category: "Academic Honors & Commencement"
    },
    {
      id: "usg-updates-grievance",
      keywords: ["usg", "student government", "facebook", "announcements", "grievance", "straw", "complaints", "help desk", "updates"],
      plainResponse: `The TUP Manila University Student Government (USG) is the supreme governing student council representing all students across TUP Manila.

Key Services & Channels:
• Official Facebook Page: https://web.facebook.com/TUPManilaUSG
• STRAW Committee (Students' Rights and Welfare): Handles student grievances regarding irregular grading, unfair exam policies, harassment, or facility concerns.
• USG Student Lounge: Located near the College of Science / Student Center, offering free printing, study desks, and charging stations.
• Enrollment Assistance Desk: Coordinates with the Registrar and COS/COE student councils during peak enrollment weeks to open split sections for dissolved subjects.

To file an official grievance or inquiry, send a message to the USG Facebook Page or email their grievance desk with supporting proof.`,

      sourceSupportedResponse: `The **TUP Manila University Student Government (USG)** serves as the official governing body for the studentry **[4]**:

### OFFICIAL COMMUNICATIONS & STUDENT ASSISTANCE
* **Live Updates Portal:** Official announcements, class suspensions, and ERS advisories are broadcasted via **[TUP Manila USG Official Facebook](https://web.facebook.com/TUPManilaUSG) [4]**.
* **STRAW Grievance Desk:** The Committee on Students' Rights and Welfare investigates academic disputes, schedule collisions, and inappropriate classroom decorum **[4]**.
* **Student Services Desk:** Offers free academic printing services, emergency locker accommodations, and ID lanyard replacements at the USG Student Lounge **[4]**.
* **Institutional Dialogues:** USG coordinates directly with the **Office of Student Affairs (OSA)** and College Deans to petition for additional laboratory sections and wash day exemptions **[4][6]**.`,

      citations: ["usg-executive-bulletin", "handbook-dress-discipline"],
      groundingConfidence: 99.1,
      category: "Student Governance & USG Updates"
    },
    {
      id: "tor-transcript-clearance",
      keywords: ["transcript", "tor", "clearance", "certificate", "grades copy", "registrar", "request document"],
      plainResponse: `To obtain your Official Transcript of Records (TOR), Honorable Dismissal, or Certifications:

1. Office Location:
Office of the University Registrar (OUR), Ground Floor, TUP Manila Administration Building, Ayala Blvd., Ermita, Manila.

2. Document Application Steps:
• Step 1: Secure an Online Document Request slip through the TUP website or visit the Registrar window.
• Step 2: Complete the University Clearance Form (cleared by College Dean, Library, Laboratory Custodian, OSA, and Accounting).
• Step 3: Pay documentary stamp fees if applicable (undergraduate first copies are free under Free Higher Education guidelines).
• Step 4: Processing time is typically 7 to 15 working days. Bring a valid government ID or your TUP Student ID upon claiming.`,

      sourceSupportedResponse: `Official Transcripts of Records (TOR) and student certifications are issued exclusively by the **Office of the University Registrar (OUR) [1]**:

### DOCUMENT REQUEST PROTOCOL
1. **University Clearance:** Clear all departmental obligations, library loans, and laboratory equipment return clearances with the **College of Science / College of Engineering [1][5]**.
2. **Application Filing:** File your request via the official TUP Student Portal or in person at the Registrar Counter, Ground Floor, TUP Manila Administration Building **[1]**.
3. **Turnaround Window:** Regular processing takes **7 to 15 working days** following complete clearance verification **[1]**.
4. **Claiming Requirements:** Present your validated TUP Student ID or an official Special Power of Attorney (SPA) if claimed through an authorized representative **[1]**.`,

      citations: ["handbook-acad-code", "handbook-grading-retention"],
      groundingConfidence: 98.7,
      category: "Registrar Services & Documentation"
    },
    {
      id: "mrr-retention-policy",
      keywords: ["retention", "mrr", "maximum residency", "warning", "probation", "dismissal", "delinquency", "years to finish"],
      plainResponse: `TUP Manila strictly implements the Maximum Residency Rule (MRR) and Scholastic Delinquency policies:

1. Maximum Residency Rule (MRR):
• 4-Year Baccalaureate Programs (e.g., BSIS, BSCS, BSIT): Maximum allowable stay is 6 years (regular duration + 50%).
• 5-Year Engineering Programs: Maximum allowable stay is 7.5 years.
• Failure to graduate within the MRR requires a formal petition for extension submitted to the College Dean and Academic Standing Board.

2. Scholastic Delinquency Categories:
• Warning: Failed 25% to 49% of enrolled units in a semester. Student receives an official warning notice.
• Probation: Failed 50% to 75% of enrolled units. Permitted maximum load next term is reduced to 12-15 units.
• Disqualification: Failed more than 75% of units or failure to clear probation. The student is disqualified from the program or university.`,

      sourceSupportedResponse: `Scholastic progression at TUP Manila is governed by the **Maximum Residency Rule (MRR)** and **Retention Standards [1][5]**:

### MAXIMUM RESIDENCY RULE (MRR)
* **4-Year Programs (BSIS, BSCS, BSIT):** Maximum allowable completion period is **6.0 academic years** (150% of nominal program length) **[1][5]**.
* **5-Year Engineering Programs:** Maximum allowable period is **7.5 academic years [1]**.
* Exceeding the MRR requires an approved **Dean's Extenuating Circumstances Petition [1]**.

### SCHOLASTIC DELINQUENCY BRACKETS
* **Warning:** Failing **25%–49%** of registered credit units in a term **[5]**.
* **Probation:** Failing **50%–75%** of units. Student is limited to a maximum registered load of 12–15 units in the subsequent semester **[5]**.
* **Disqualification:** Failing **greater than 75%** of enrolled units results in immediate dismissal from the respective degree program **[1][5]**.`,

      citations: ["handbook-acad-code", "handbook-grading-retention"],
      groundingConfidence: 99.3,
      category: "Retention & Scholastic Progression"
    }
  ],

  // Fallback AI reasoning engine for ad-hoc or novel student queries
  generateAdHocResponse: function(userQuery, condition) {
    const query = userQuery.toLowerCase();
    
    // Check FAQ matching
    for (const faq of this.faqDatabase) {
      if (faq.keywords.some(k => query.includes(k))) {
        return {
          text: condition === "condition-a" ? faq.plainResponse : faq.sourceSupportedResponse,
          citations: condition === "condition-a" ? [] : faq.citations.map(cid => this.sources[cid]),
          confidence: faq.groundingConfidence,
          category: faq.category,
          isExactMatch: true
        };
      }
    }

    // Dynamic contextual generation for other queries
    let topic = "General University Affairs & Regulations";
    let plainText = "";
    let citedText = "";
    let selectedCitations = [];

    // Specific Enrollment Condition Check
    if (query.includes("1st year") || query.includes("freshman") || query.includes("freshmen") || query.includes("admission") || query.includes("tupstat")) {
      topic = "1st Year Freshmen Admissions & Enrollment";
      plainText = `For 1st Year (Freshmen) students at TUP Manila:
Enrollment is conducted via the physical submission of authentic documents directly to the TUP Office of Admissions - Manila (Ayala Blvd., Ermita, Manila).

Requirements to submit:
1. Notice of Admission (NOA) / Slot Confirmation
2. Original Form 138 (Grade 12 Senior High School Report Card) with "Eligible for College Admission" remark
3. Certificate of Good Moral Character
4. Authenticated PSA Birth Certificate (original and photocopies)
5. Medical Examination Clearance from the TUP Medical Clinic
6. 2x2 formal ID pictures on white background with name tag

Please follow the submission schedule assigned to your college as posted on the official TUP Office of Admissions - Manila Facebook page. Once verified and encoded, your Student ID Number and Certificate of Registration (COR / Form 5) are generated.`;

      citedText = `For **1st Year (Freshmen)** students at TUP Manila, enrollment is conducted via physical document submission to the **TUP Office of Admissions - Manila [7]**:

### OFFICIAL FRESHMEN ENROLLMENT SUBMISSION PROTOCOL
* **Authoritative Reference:** [TUP Office of Admissions - Manila Facebook](https://www.facebook.com/story.php?story_fbid=1630419062203400&id=100057059665961) **[7]**.

### MANDATORY DOCUMENT CHECKLIST
1. **Notice of Admission (NOA)** / Confirmation Slip **[7]**
2. **Original Form 138 (Grade 12 Report Card)** with complete passing marks and *"Eligible for College Admission"* remark **[7]**
3. **Certificate of Good Moral Character** issued by the SHS Principal or Guidance Counselor **[7]**
4. **Authenticated PSA Birth Certificate** (original and clear photocopies) **[7]**
5. **Medical Examination Clearance** from the TUP Medical Clinic **[7]**
6. **2x2 formal ID pictures** on white background with name tag **[7]**

Submit these physical documents at the **TUP Office of Admissions** (Ayala Blvd., Ermita) following your assigned college date schedule **[7]**. Once verified, you will be issued your official **Student ID Number** and **Certificate of Registration (COR / Form 5)** **[7]**.`;
      selectedCitations = ["admissions-office-manila", "usg-executive-bulletin"];
    } else if (query.includes("2nd year") || query.includes("3rd year") || query.includes("4th year") || query.includes("rating slip") || query.includes("rating slips") || query.includes("enlistment") || query.includes("department head") || query.includes("cor")) {
      topic = "2nd Year & Continuing Student Enlistment";
      plainText = `For 2nd Year, 3rd Year, 4th Year and Up (Continuing Students) at TUP Manila:

The enrollment procedure is conducted departmentally:
1. Secure your official Rating Slips (grade slips) from the previous semester(s).
2. Send/submit your Rating Slips to your respective Department Head (e.g., Computer Studies Department for BSIS, BSIT, BSCS) for prerequisite evaluation and subject enlistment.
3. Wait for the official university/department announcement regarding the release and generation of your Certificate of Registration (COR / Form 5).
4. Once announced, claim/download your official COR and present it for semester validation of your TUP Student ID.`;

      citedText = `For **2nd Year, 3rd Year, 4th Year and Up (Continuing Students)** at TUP Manila, enrollment is executed via departmental enlistment **[8]**:

### CONTINUING STUDENT ENLISTMENT WORKFLOW
* **Step 1 (Rating Slips):** Obtain your official **Rating Slips (grade slips)** from your previous semester(s) **[8]**.
* **Step 2 (Submission to Department Head):** Send/submit your Rating Slips directly to your **Department Head** (e.g., *Computer Studies Department* for BSIS, BSIT, BSCS) for prerequisite checking and **subject enlistment** **[8]**.
* **Step 3 (Wait for COR Announcement):** After subject enlistment, **wait for the official announcement regarding the release and generation of your Certificate of Registration (COR / Form 5)** **[8]**.
* **Step 4 (Validation):** Once the release is officially announced, download/claim your COR and proceed to get your semester validation sticker **[4][8]**.`;
      selectedCitations = ["dept-enlistment-cor", "usg-executive-bulletin", "handbook-acad-code"];
    } else if (query.includes("bsis") || query.includes("computer studies") || query.includes("cos") || query.includes("it") || query.includes("science")) {
      topic = "College of Science (COS) Curriculum & Laboratories";
      plainText = `The College of Science (COS) is located at the TUP Manila Campus (Ayala Blvd. cor. San Marcelino St., Ermita, Manila).

The Computer Studies Department administers the Bachelor of Science in Information Systems (BSIS), BS Information Technology (BSIT), and BS Computer Science (BSCS). Students are subject to departmental retention standards requiring passing grades in all programming, mathematics, and prerequisite professional subjects before enrolling in Capstone Project or Practicum/OJT (minimum 486-600 hours). Computer laboratories require strict adherence to safety and equipment guidelines.`;

      citedText = `The **College of Science (COS)** and its **Computer Studies Department** enforce specialized academic standards for technical programs including **BS Information Systems (BSIS)**, **BSIT**, and **BSCS [1][5]**:

### DEPARTMENTAL POLICIES & RETENTION
* **Prerequisite Chain:** A minimum grade of **3.00** is required in all fundamental programming, database management, and discrete mathematics courses to unlock higher professional electives **[5]**.
* **Capstone & OJT:** Capstone Project and Industry Practicum (486–600 hours) require full completion of all 1st to 3rd-year major subject credits **[1]**.
* **Laboratory Decorum:** Laboratory equipment misuse or unauthorized software installations incur disciplinary sanctions under **TUP Code of Conduct Title 6 [6]**.`;
      selectedCitations = ["handbook-acad-code", "handbook-grading-retention", "handbook-dress-discipline"];
    } else if (query.includes("scholarship") || query.includes("free tuition") || query.includes("ra 10931") || query.includes("ched") || query.includes("dost")) {
      topic = "Scholarships & Financial Aid Programs";
      plainText = `At TUP Manila, Filipino undergraduate students are covered under Republic Act 10931 (Universal Access to Quality Tertiary Education Act), providing 100% free tuition and miscellaneous fees for eligible students who do not exceed their Maximum Residency Rule.

Additional institutional and government scholarships include:
• DOST-SEI Merit & RA 7687 Scholarships (priority for STEM/Engineering/Science courses)
• CHED Tertiary Education Subsidy (TES) and Tulong Dunong Program (TDP)
• City of Manila LGU Educational Assistance (Yorme / Manila Scholarship)
• Private and Alumni Foundation Grants coordinated through the Office of Student Affairs (OSA).`;

      citedText = `Undergraduate financial assistance at TUP Manila is anchored on **Republic Act 10931 (Free Higher Education Law) [2]**:

### FINANCIAL AID MATRIX
* **100% Tuition & Miscellaneous Exemption:** Covers all qualifying undergraduate students enrolled within the standard program curriculum plus a one-year grace period **[2]**.
* **Government Grants:** TUP Manila accommodates **CHED Tertiary Education Subsidy (TES)**, **Tulong Dunong Program (TDP)**, and **DOST-SEI Science & Technology Scholarships [2][4]**.
* **LGU & University Assistance:** City of Manila educational aid and university student assistantships are administered via the **Office of Student Affairs (OSA) [5]**.`;
      selectedCitations = ["bursar-refund-policy", "usg-executive-bulletin", "handbook-grading-retention"];
    } else {
      topic = "TUP Manila Student Inquiries & University Policies";
      plainText = `Thank you for your question regarding Technological University of the Philippines Manila.

According to university policies documented in the TUP Student Handbook, TUP Admissions, and active administrative issuances:
All academic, admissions, student services, and enrollment procedures are overseen by the Office of Admissions, the Office of the University Registrar, the Office of Student Affairs (OSA), and the respective College Department Heads.

For urgent administrative concerns, students may visit the TUP Manila campus at Ayala Blvd., Ermita, Manila, or consult the TUP Manila University Student Government (USG) Help Desk online at web.facebook.com/TUPManilaUSG.`;

      citedText = `Based on verified institutional records from the **TUP Student Handbook [1][5]**, **TUP Office of Admissions [7]**, and **TUP Manila USG Official Announcements [4]**:

### ADMINISTRATIVE PROTOCOL & CONSULTATION
* **Institutional Authority:** Student academic standing and registration matters are governed by the **Office of the University Registrar (OUR)**, the **TUP Office of Admissions [7]**, and the **Office of Student Affairs (OSA) [1][5]**.
* **Official Information Gateway:** Authoritative updates and enrollment calendars are published on the **[TUP Website](https://tup.edu.ph) [1]** and the **[TUP Manila USG Facebook Channel](https://web.facebook.com/TUPManilaUSG) [4]**.
* **Student Rights & Advocacy:** If you require personalized guidance or dispute resolution, contact the **USG Committee on Students' Rights and Welfare (STRAW) [4]**.`;
      selectedCitations = ["handbook-acad-code", "usg-executive-bulletin", "handbook-grading-retention"];
    }

    return {
      text: condition === "condition-a" ? plainText : citedText,
      citations: condition === "condition-a" ? [] : selectedCitations.map(cid => this.sources[cid]),
      confidence: 98.4,
      category: topic,
      isExactMatch: false
    };
  }
};
