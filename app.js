/**
 * TUPM AI ASSISTANT - APPLICATION LOGIC & INTERACTION CONTROLLER
 * Research Suite - Milestone 3: Human Computer Interaction
 * Technological University of the Philippines Manila
 */

(function () {
  'use strict';

  // Application State
  const state = {
    screen: 'overview', // 'overview', 'chat', 'survey', 'sources'
    condition: 'condition-b', // 'condition-a' (Control: Plain), 'condition-b' (Treatment: Source-Supported)
    viewport: 'desktop', // 'desktop', 'mobile-frame', 'tablet-frame'
    currentInspectedSource: 'handbook-acad-code',
    messages: [],
    lastBotResponse: null,
    surveyData: {
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      rationale: ''
    },
    studyLogs: []
  };

  // DOM Elements
  const elements = {
    viewportWrapper: document.getElementById('app-viewport-wrapper'),
    viewportBtns: document.querySelectorAll('.viewport-btn'),
    conditionBtns: document.querySelectorAll('.condition-btn'),
    conditionBadgeText: document.getElementById('condition-badge-text'),
    navTabBtns: document.querySelectorAll('.nav-tab-btn'),
    screens: document.querySelectorAll('.screen-view'),
    
    // Chat Elements
    chatMessagesStream: document.getElementById('chat-messages-stream'),
    chatInputForm: document.getElementById('chat-input-form'),
    chatTextarea: document.getElementById('chat-textarea'),
    btnSendChat: document.getElementById('btn-send-chat'),
    quickInquiryChips: document.querySelectorAll('.query-chip-pill'),
    
    // Sidebar & Telemetry Elements
    conditionArmLabel: document.getElementById('condition-arm-label'),
    citationLayerStatus: document.getElementById('citation-layer-status'),
    metricLatencyDisplay: document.getElementById('metric-latency-display'),
    
    // Modal Elements
    sourceModal: document.getElementById('source-evidence-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalBackBtn: document.getElementById('modal-back-btn'),
    
    // Modal Fields
    modalCitationBadge: document.getElementById('modal-citation-badge'),
    modalDocTitle: document.getElementById('modal-doc-title'),
    modalDocAuthority: document.getElementById('modal-doc-authority'),
    modalIssuingAuthority: document.getElementById('modal-issuing-authority'),
    modalDocReference: document.getElementById('modal-doc-reference'),
    modalCanonicalUrl: document.getElementById('modal-canonical-url'),
    modalSha256: document.getElementById('modal-sha256'),
    modalClaimConfidence: document.getElementById('modal-claim-confidence'),
    modalApplicability: document.getElementById('modal-applicability'),
    modalGeneratedClaimText: document.getElementById('modal-generated-claim-text'),
    modalPrimaryCorpusText: document.getElementById('modal-primary-corpus-text'),
    modalOpenOriginalBtn: document.getElementById('modal-open-original-btn'),
    
    // Survey Elements
    surveyEvaluatedPreview: document.getElementById('survey-evaluated-preview'),
    surveyTaskBadge: document.getElementById('survey-task-badge'),
    surveyForm: document.getElementById('taas4-survey-form'),
    qualitativeTextarea: document.getElementById('qualitative-rationale-input'),
    charCounter: document.getElementById('qualitative-char-count'),
    promptMiniTags: document.querySelectorAll('.prompt-mini-tag'),
    
    // Toast Notification
    toastNotification: document.getElementById('toast-notification'),
    toastText: document.getElementById('toast-text')
  };

  // Pre-seed conversation with the Milestone 3 benchmark inquiry (Course Drop & Tuition Refund)
  const initialBenchmarkChat = [
    {
      id: 'msg-01',
      sender: 'user',
      time: '2:14 PM',
      text: 'Can I still drop my BIOL 204 lab course without a "W" grade, and will I receive a tuition refund?'
    },
    {
      id: 'msg-02',
      sender: 'bot',
      time: '2:15 PM',
      plainText: `Yes, you can drop BIOL 204 without receiving a "W" on your permanent academic transcript if you submit the drop request before Friday, October 24th at 11:59 PM (the Census Date).

Regarding your tuition refund:
• A 100% tuition refund applies for courses dropped before the end of Week 2.
• Drops submitted between Week 3 and the October 24 census date are eligible for a 50% tuition credit, excluding mandatory lab equipment fees ($75.00 / ₱1,500).
• After October 24, all drops receive a "W" grade and 0% refund.

You can complete this drop directly through the Student Portal under Enrollment Services > Course Management.`,
      sourceSupportedText: `Yes, you can drop BIOL 204 without receiving a **"W"** on your permanent academic transcript if you submit the drop request before **Friday, October 24th at 11:59 PM (the Census Date) [1]**.

### TUITION REFUND BREAKDOWN
* **100% tuition refund** applies for courses dropped before the end of Week 2 **[2]**.
* **50% tuition credit** applies for drops submitted between Week 3 and the October 24 census date, excluding mandatory lab equipment fees ($75.00 / ₱1,500) **[2]**.
* **After October 24**, all drops receive a **"W" grade** and **0% refund [1]**.

You can complete this drop directly through the **Student Portal (ERS)** under **Enrollment Services > Course Management [3]**. If this drop reduces your total semester load below 15 units, note that it may trigger a financial aid verification hold **[3]**.`,
      citations: [
        window.TUPM_KNOWLEDGE_BASE.sources['handbook-acad-code'],
        window.TUPM_KNOWLEDGE_BASE.sources['bursar-refund-policy'],
        window.TUPM_KNOWLEDGE_BASE.sources['advising-manual-adddrop']
      ],
      confidence: 99.4,
      category: 'Course Drop Deadlines & Tuition Refund Schedules'
    }
  ];

  // Initialize Application
  function init() {
    state.messages = [...initialBenchmarkChat];
    state.lastBotResponse = initialBenchmarkChat[1];
    
    setupEventListeners();
    updateConditionUI();
    renderChatMessages();
    updateSurveyPreview();
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Viewport Mode Switcher
    elements.viewportBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.viewportBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.viewport;
        state.viewport = mode;
        elements.viewportWrapper.className = `app-viewport-wrapper mode-${mode}`;
        showToast(`Switched view to ${btn.textContent.trim()}`);
      });
    });

    // Condition Switcher (Condition A vs Condition B)
    elements.conditionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cond = btn.dataset.condition;
        setCondition(cond);
      });
    });

    // Navigation Tabs
    elements.navTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetScreen = btn.dataset.screen;
        switchScreen(targetScreen);
      });
    });

    // Quick Query Suggestion Chips
    elements.quickInquiryChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const queryText = chip.dataset.query || chip.textContent.trim();
        elements.chatTextarea.value = queryText;
        switchScreen('chat');
        handleUserSubmit(queryText);
      });
    });

    // Chat Form Submission
    elements.chatInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = elements.chatTextarea.value.trim();
      if (!text) return;
      elements.chatTextarea.value = '';
      elements.chatTextarea.style.height = '24px';
      handleUserSubmit(text);
    });

    // Auto-expand textarea
    elements.chatTextarea.addEventListener('input', () => {
      elements.chatTextarea.style.height = 'auto';
      elements.chatTextarea.style.height = Math.min(elements.chatTextarea.scrollHeight, 120) + 'px';
    });

    // Enter key submits (Shift+Enter for newline)
    elements.chatTextarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        elements.chatInputForm.dispatchEvent(new Event('submit'));
      }
    });

    // Modal Close Triggers
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeModal);
    }
    if (elements.modalBackBtn) {
      elements.modalBackBtn.addEventListener('click', closeModal);
    }
    if (elements.sourceModal) {
      elements.sourceModal.addEventListener('click', (e) => {
        if (e.target === elements.sourceModal) closeModal();
      });
    }

    // Likert Radio Selection in Survey
    const likertLabels = document.querySelectorAll('.likert-btn-label');
    likertLabels.forEach(label => {
      label.addEventListener('click', () => {
        const input = label.querySelector('input[type="radio"]');
        if (!input) return;
        const name = input.name;
        // clear selected class in same group
        document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
          radio.closest('.likert-btn-label').classList.remove('selected');
        });
        label.classList.add('selected');
        input.checked = true;
        state.surveyData[name] = parseInt(input.value, 10);
      });
    });

    // Qualitative tags in Survey
    elements.promptMiniTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const insertText = tag.textContent.trim();
        if (elements.qualitativeTextarea.value.length > 0) {
          elements.qualitativeTextarea.value += ' ' + insertText;
        } else {
          elements.qualitativeTextarea.value = insertText;
        }
        updateCharCount();
      });
    });

    if (elements.qualitativeTextarea) {
      elements.qualitativeTextarea.addEventListener('input', updateCharCount);
    }

    // Survey Form Submit
    if (elements.surveyForm) {
      elements.surveyForm.addEventListener('submit', handleSurveySubmit);
    }
  }

  // Switch Active Screen
  function switchScreen(screenName) {
    state.screen = screenName;
    elements.screens.forEach(screen => {
      screen.classList.remove('active-screen');
      if (screen.id === `screen-${screenName}`) {
        screen.classList.add('active-screen');
      }
    });

    elements.navTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.screen === screenName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.switchScreen = switchScreen;

  // Set Experimental Condition
  function setCondition(cond) {
    state.condition = cond;
    elements.conditionBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.condition === cond);
    });
    updateConditionUI();
    renderChatMessages();
    showToast(`Condition changed to ${cond === 'condition-a' ? 'Condition A: Plain Answer (Control)' : 'Condition B: Source-Supported (Treatment)'}`);
  }
  window.setCondition = setCondition;

  // Update UI Elements Reflecting Current Condition
  function updateConditionUI() {
    const isControl = state.condition === 'condition-a';
    if (elements.conditionBadgeText) {
      elements.conditionBadgeText.textContent = isControl ? 'Condition A (Control Group)' : 'Condition B (Treatment Group)';
    }
    if (elements.conditionArmLabel) {
      elements.conditionArmLabel.textContent = isControl ? 'Control (A)' : 'Treatment (B)';
    }
    if (elements.citationLayerStatus) {
      elements.citationLayerStatus.textContent = isControl ? 'Deactivated' : 'Verified RAG Active';
      elements.citationLayerStatus.style.color = isControl ? '#94A3B8' : '#059669';
    }
  }

  // Handle User Message Submission
  function handleUserSubmit(queryText) {
    const timeStr = getCurrentTime();
    
    // Add User Message
    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      time: timeStr,
      text: queryText
    };
    state.messages.push(userMsg);
    renderChatMessages();

    // Show simulated AI thinking delay
    elements.btnSendChat.disabled = true;
    if (elements.metricLatencyDisplay) {
      elements.metricLatencyDisplay.textContent = 'Generating...';
    }

    setTimeout(() => {
      const generated = window.TUPM_KNOWLEDGE_BASE.generateAdHocResponse(queryText, state.condition);
      const latencyMs = Math.floor(Math.random() * 250) + 320;

      if (elements.metricLatencyDisplay) {
        elements.metricLatencyDisplay.textContent = `${latencyMs}ms`;
      }

      const botMsg = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'bot',
        time: getCurrentTime(),
        plainText: generated.text,
        sourceSupportedText: generated.text,
        citations: generated.citations,
        confidence: generated.confidence,
        category: generated.category
      };

      state.messages.push(botMsg);
      state.lastBotResponse = botMsg;
      elements.btnSendChat.disabled = false;
      renderChatMessages();
      updateSurveyPreview();
    }, 450);
  }

  // Render Chat Messages List
  function renderChatMessages() {
    if (!elements.chatMessagesStream) return;
    elements.chatMessagesStream.innerHTML = '';

    state.messages.forEach((msg, index) => {
      const row = document.createElement('div');
      row.className = `message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`;

      if (msg.sender === 'user') {
        row.innerHTML = `
          <div class="avatar-bubble user-avatar" title="TUP Student Participant">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="message-content-wrapper">
            <div class="message-meta-line">
              <span>Student Participant (You)</span>
              <span>•</span>
              <span>${msg.time}</span>
            </div>
            <div class="message-body">
              <p>${escapeHtml(msg.text)}</p>
            </div>
          </div>
        `;
      } else {
        const isTreatment = state.condition === 'condition-b';
        let bodyContent = isTreatment ? formatBotMarkdown(msg.sourceSupportedText || msg.plainText) : formatBotMarkdown(msg.plainText);

        // Build sources container if Condition B
        let sourcesHtml = '';
        if (isTreatment && msg.citations && msg.citations.length > 0) {
          sourcesHtml = `
            <div class="verified-sources-container">
              <div class="sources-shelf-header">
                <span class="sources-shelf-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Verified Institutional Sources (${msg.citations.length})
                </span>
                <span class="sources-count-badge">✓ Authoritative Grounding</span>
              </div>
              <div class="sources-cards-grid">
                ${msg.citations.map((src, sIdx) => `
                  <div class="source-evidence-card" onclick="window.openSourceModal('${src.id}')" title="Click to view verified evidence dossier">
                    <div class="source-card-left">
                      <span class="source-num-badge">[${src.citationNum || (sIdx + 1)}]</span>
                      <div class="source-text-block">
                        <h5>${escapeHtml(src.title)}</h5>
                        <div class="source-authority-line">${escapeHtml(src.authority)}</div>
                        <div class="source-snippet-quote">"${escapeHtml(src.excerpt.substring(0, 115))}..."</div>
                        <div class="source-hash-row">
                          <span>SHA-256: ${escapeHtml(src.sha256.substring(0, 12))}...</span>
                          <span class="source-action-link">Inspect Evidence ↗</span>
                        </div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        } else if (!isTreatment) {
          sourcesHtml = `
            <div class="control-condition-notice">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span><strong>Condition A Notice (Control Group):</strong> Verification citations, hyperlinked handbook provisions, and syllabus metadata are deliberately omitted from this output.</span>
            </div>
          `;
        }

        // Is this the latest message? Show rating prompt
        const isLatest = index === state.messages.length - 1;
        let evaluateBanner = '';
        if (isLatest) {
          evaluateBanner = `
            <div class="evaluate-response-banner">
              <div class="eval-banner-left">
                <div class="eval-icon-stamp">📋</div>
                <div class="eval-text">
                  <h5>Ready to evaluate this response?</h5>
                  <p>Please rate the perceived reliability, verifiable confidence, and clarity of the ${isTreatment ? 'sourced' : 'plain'} answer.</p>
                </div>
              </div>
              <button class="btn-proceed-rate" onclick="window.proceedToEvaluation()">
                Proceed to Rate This Response →
              </button>
            </div>
          `;
        }

        row.innerHTML = `
          <div class="avatar-bubble bot-avatar" title="TUPM Academic AI Advisor">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5"/></svg>
          </div>
          <div class="message-content-wrapper">
            <div class="message-meta-line">
              <strong>TUPM Academic AI Assistant</strong>
              <span>•</span>
              <span class="telemetry-chip highlight">Verified Grounding</span>
              <span>•</span>
              <span>${msg.time}</span>
            </div>
            <div class="message-body">
              ${bodyContent}
              ${sourcesHtml}
              
              <div class="message-actions-bar">
                <div class="action-btns-left">
                  <button class="chat-util-btn" onclick="window.copyMessageText('${msg.id}')">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    Copy Response
                  </button>
                  ${isTreatment && msg.citations && msg.citations.length ? `
                    <button class="chat-util-btn" onclick="window.openSourceModal('${msg.citations[0].id}')">
                      🔍 Inspect Source Evidence [1]
                    </button>
                  ` : ''}
                </div>
                <div>
                  <button class="chat-util-btn" onclick="window.showToast('Feedback noted: Helpful!')" title="Thumbs up">👍</button>
                  <button class="chat-util-btn" onclick="window.showToast('Feedback noted: Flagged for review')" title="Thumbs down">👎</button>
                </div>
              </div>

              ${evaluateBanner}
            </div>
          </div>
        `;
      }

      elements.chatMessagesStream.appendChild(row);
    });

    // Scroll to bottom
    elements.chatMessagesStream.scrollTop = elements.chatMessagesStream.scrollHeight;
  }

  // Format Markdown & Highlight Citations [1], [2], [3]
  function formatBotMarkdown(text) {
    if (!text) return '';
    let html = escapeHtml(text);

    // Replace [1], [2], [3] with clickable citation buttons
    html = html.replace(/\[(\d+)\]/g, (match, p1) => {
      return `<button class="citation-tag" onclick="window.openSourceByNumber(${p1})" title="Inspect Institutional Citation [${p1}]">[${p1}]</button>`;
    });

    // Replace headers
    html = html.replace(/### (.*?)\n/g, '<h4>$1</h4>');
    html = html.replace(/## (.*?)\n/g, '<h3>$1</h3>');

    // Bold formatting
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Bullet points
    html = html.replace(/^\* (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/^• (.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Paragraph breaks
    html = html.replace(/\n\n/g, '</p><p>');
    return `<p>${html}</p>`;
  }

  // Open Source Modal by Source ID
  function openSourceModal(sourceId) {
    const src = window.TUPM_KNOWLEDGE_BASE.sources[sourceId] || window.TUPM_KNOWLEDGE_BASE.sources['handbook-acad-code'];
    state.currentInspectedSource = src.id;

    elements.modalCitationBadge.textContent = `[${src.citationNum || 1}]`;
    elements.modalDocTitle.textContent = src.title;
    elements.modalDocAuthority.textContent = `${src.authority} • ${src.reference}`;
    elements.modalIssuingAuthority.textContent = src.authority;
    elements.modalDocReference.textContent = src.reference;
    elements.modalCanonicalUrl.textContent = src.canonicalUrl;
    elements.modalSha256.textContent = `SHA-256: ${src.sha256}`;
    elements.modalClaimConfidence.textContent = src.confidence || '99.4%';
    elements.modalApplicability.textContent = src.applicability || 'All Undergraduate & Graduate Students';

    // Claim vs Primary Corpus Comparison
    elements.modalGeneratedClaimText.textContent = `AI Claim: "${src.excerpt.substring(0, 160)}... verified and grounded on institutional records according to ${src.reference}."`;
    elements.modalPrimaryCorpusText.innerHTML = `
      // BEGIN OFFICIAL CORPUS REPOSITORY //
      <br><br>
      "${escapeHtml(src.excerpt).replace(/(Friday, October 24 at 11:59 PM|no notation or grade of 'W'|100% tuition refund|50% tuition credit|one \(1\) academic year|5-point numerical grading|Rating Slips|Notice of Admission|Form 138|Certificate of Registration|Department Head|TUP Office of Admissions)/g, '<span class="highlight-lexical">$1</span>')}"
      <br><br>
      // END REPOSITORY SEGMENT • DIGEST VERIFIED //
    `;

    elements.modalOpenOriginalBtn.onclick = () => {
      window.open(src.canonicalUrl, '_blank');
    };

    elements.sourceModal.classList.add('open');
  }
  window.openSourceModal = openSourceModal;

  // Open Source by Citation Number
  function openSourceByNumber(num) {
    const keys = Object.keys(window.TUPM_KNOWLEDGE_BASE.sources);
    const targetKey = keys.find(k => window.TUPM_KNOWLEDGE_BASE.sources[k].citationNum === num) || keys[0];
    openSourceModal(targetKey);
  }
  window.openSourceByNumber = openSourceByNumber;

  function closeModal() {
    if (elements.sourceModal) {
      elements.sourceModal.classList.remove('open');
    }
  }
  window.closeModal = closeModal;

  // Proceed to Evaluation Screen
  function proceedToEvaluation() {
    switchScreen('survey');
    updateSurveyPreview();
  }
  window.proceedToEvaluation = proceedToEvaluation;

  // Update Survey Header Preview with the Last AI Response
  function updateSurveyPreview() {
    if (!state.lastBotResponse || !elements.surveyEvaluatedPreview) return;
    
    if (elements.surveyTaskBadge) {
      elements.surveyTaskBadge.textContent = state.lastBotResponse.category || 'Evaluating Response: Course Drop & Refund Advice';
    }

    const previewText = state.lastBotResponse.plainText.substring(0, 260) + '...';
    elements.surveyEvaluatedPreview.textContent = previewText;
  }

  // Update Character Counter in Qualitative Feedback
  function updateCharCount() {
    if (!elements.qualitativeTextarea || !elements.charCounter) return;
    const len = elements.qualitativeTextarea.value.length;
    elements.charCounter.textContent = `${len} / 800 chars`;
    state.surveyData.rationale = elements.qualitativeTextarea.value;
  }

  // Handle TAAS-4 Survey Submission
  function handleSurveySubmit(e) {
    e.preventDefault();

    const { q1, q2, q3, q4, rationale } = state.surveyData;
    if (!q1 || !q2 || !q3 || !q4) {
      alert('Please complete all 4 Likert scale dimensions before submitting your evaluation.');
      return;
    }

    const submissionRecord = {
      timestamp: new Date().toISOString(),
      studentId: 'TUPM-25-1399',
      cohort: 'Cohort A-24',
      irbProtocol: 'IRB #2025-AI-084',
      conditionArm: state.condition === 'condition-a' ? 'Control (Plain Answer)' : 'Treatment (Source-Supported)',
      scores: {
        accuracy_q1: q1,
        epistemic_trust_q2: q2,
        source_provenance_q3: q3,
        tool_reliance_q4: q4,
        average_trust: ((q1 + q2 + q3 + q4) / 4).toFixed(2)
      },
      qualitativeRationale: rationale || 'None provided'
    };

    state.studyLogs.push(submissionRecord);
    try {
      localStorage.setItem('tupm_study_evaluations', JSON.stringify(state.studyLogs));
    } catch (err) {
      // ignore
    }

    showToast(`Survey successfully logged! Avg Trust Score: ${submissionRecord.scores.average_trust} / 5.0`);

    // Reset Form
    document.querySelectorAll('.likert-btn-label').forEach(lbl => lbl.classList.remove('selected'));
    elements.surveyForm.reset();
    state.surveyData = { q1: null, q2: null, q3: null, q4: null, rationale: '' };
    updateCharCount();

    // After 1.5 seconds, navigate back to chat or overview
    setTimeout(() => {
      alert(`✅ Evaluation Authenticated and Logged!\n\nProtocol: IRB #2025-AI-084\nCondition: ${submissionRecord.conditionArm}\nOverall Trust Index: ${submissionRecord.scores.average_trust}/5.0\n\nYour data has been anonymized and submitted to the Research Dossier.`);
      switchScreen('chat');
    }, 600);
  }

  // Copy Message Helper
  function copyMessageText(msgId) {
    const msg = state.messages.find(m => m.id === msgId);
    if (!msg) return;
    const textToCopy = state.condition === 'condition-b' ? (msg.sourceSupportedText || msg.plainText) : msg.plainText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('Response text copied to clipboard!');
    }).catch(() => {
      showToast('Copied to clipboard');
    });
  }
  window.copyMessageText = copyMessageText;

  // Toast Notification Helper
  let toastTimer = null;
  function showToast(msg) {
    if (!elements.toastNotification) return;
    elements.toastText.textContent = msg;
    elements.toastNotification.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elements.toastNotification.classList.remove('show');
    }, 3200);
  }
  window.showToast = showToast;

  // Utility Functions
  function getCurrentTime() {
    const d = new Date();
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Boot on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
