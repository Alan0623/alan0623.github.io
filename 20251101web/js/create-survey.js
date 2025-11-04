// Create Survey Page JavaScript

// State management
let currentStep = 1;
let selectedMethod = null;
let surveyData = {
  title: '',
  description: '',
  questions: [],
  settings: {}
};

// Gemini API configuration - should be loaded from backend for security
const GEMINI_API_KEY = 'AIzaSyCzQaFjMdJTtMe--Qz7t5qr9NAPLjDfJD4';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initMethodSelection();
  initAIForm();
  initTemplateSection();
  initEditor();
  initCTA();
});

// Method Selection
function initMethodSelection() {
  const methodBtns = document.querySelectorAll('.select-method-btn');
  
  methodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.dataset.method;
      selectMethod(method);
    });
  });
}

function selectMethod(method) {
  selectedMethod = method;
  
  // Hide method selection
  document.getElementById('method-selection').style.display = 'none';
  
  // Show selected section
  const sections = {
    'ai': 'ai-section',
    'template': 'template-section',
    'manual': 'editor-section'
  };
  
  document.getElementById(sections[method]).style.display = 'block';
  
  // Update progress
  updateProgress(2);
}

// Progress Management
function updateProgress(step) {
  currentStep = step;
  
  document.querySelectorAll('.step').forEach((stepEl, index) => {
    if (index + 1 <= step) {
      stepEl.classList.add('active');
    } else {
      stepEl.classList.remove('active');
    }
  });
}

// AI Form
function initAIForm() {
  const aiForm = document.getElementById('ai-form');
  const generateBtn = document.getElementById('generate-btn');
  
  generateBtn.addEventListener('click', async () => {
    const topic = document.getElementById('survey-topic').value;
    const questionCount = document.getElementById('question-count').value;
    const targetAudience = document.getElementById('target-audience').value;
    
    if (!topic) {
      alert('請輸入問卷主題');
      return;
    }
    
    // Get selected question types
    const questionTypes = Array.from(
      document.querySelectorAll('input[name="question-types"]:checked')
    ).map(cb => cb.value);
    
    const gamifyOptions = Array.from(
      document.querySelectorAll('input[name="gamify-options"]:checked')
    ).map(cb => cb.value);
    
    // Show loading
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<span class="spinner"></span> 生成中...';
    
    try {
      const questions = await generateQuestionsWithAI({
        topic,
        questionCount,
        targetAudience,
        questionTypes,
        gamifyOptions
      });
      
      surveyData.questions = questions;
      displayGeneratedQuestions(questions);
      
    } catch (error) {
      console.error('AI generation error:', error);
      alert('生成失敗，請稍後再試');
    } finally {
      generateBtn.disabled = false;
      generateBtn.innerHTML = '🤖 生成問卷';
    }
  });
  
  // Back button
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.creation-section').forEach(sec => {
        sec.style.display = 'none';
      });
      document.getElementById('method-selection').style.display = 'block';
      updateProgress(1);
    });
  });
}

// AI Question Generation using Gemini API
async function generateQuestionsWithAI(params) {
  const { topic, questionCount, targetAudience, questionTypes, gamifyOptions } = params;
  
  // Build prompt
  let prompt = `請根據以下要求，生成一份問卷調查的題目。以 JSON 格式回傳，包含問題陣列。

主題：${topic}
題目數量：${questionCount}
目標受眾：${targetAudience}
題型包含：${questionTypes.join('、')}
${gamifyOptions.length > 0 ? `遊戲化特色：${gamifyOptions.join('、')}` : ''}

請為每個問題產生以下資訊：
1. question: 問題文字
2. type: 題型（single-choice, multiple-choice, text, rating, matrix）
3. options: 選項陣列（若為選擇題）
4. required: 是否必填（true/false）

請確保：
- 問題清晰明確，避免引導性問題
- 選項涵蓋完整，包含「其他」選項
- 問題順序由淺入深，從基本資訊到深入意見
- 融入遊戲化元素（如有勾選）

回傳格式範例：
{
  "questions": [
    {
      "question": "您的年齡範圍？",
      "type": "single-choice",
      "options": ["18歲以下", "18-25歲", "26-35歲", "36-45歲", "46歲以上"],
      "required": true
    }
  ]
}`;

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048
        }
      })
    });
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;
    
    // Parse JSON from response (remove markdown code blocks if present)
    let jsonText = aiResponse.trim();
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    }
    
    const result = JSON.parse(jsonText);
    return result.questions || [];
    
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Fallback to sample questions
    return generateSampleQuestions(params);
  }
}

// Fallback sample questions
function generateSampleQuestions(params) {
  const { topic, questionCount } = params;
  
  const samples = [
    {
      question: `關於「${topic}」，您最關心的面向是什麼？`,
      type: 'multiple-choice',
      options: ['功能特色', '價格方案', '使用體驗', '客戶服務', '其他'],
      required: true
    },
    {
      question: `您有多常接觸「${topic}」相關的產品或服務？`,
      type: 'single-choice',
      options: ['每天', '每週', '每月', '很少', '從未'],
      required: true
    },
    {
      question: `您對「${topic}」的整體滿意度如何？`,
      type: 'rating',
      options: ['1', '2', '3', '4', '5'],
      required: true
    },
    {
      question: `請分享您對「${topic}」的建議或想法`,
      type: 'text',
      options: [],
      required: false
    }
  ];
  
  return samples.slice(0, parseInt(questionCount));
}

// Display Generated Questions
function displayGeneratedQuestions(questions) {
  const resultDiv = document.getElementById('ai-result');
  const previewDiv = document.getElementById('questions-preview');
  
  previewDiv.innerHTML = questions.map((q, index) => {
    const typeLabels = {
      'single-choice': '單選題',
      'multiple-choice': '多選題',
      'text': '文字題',
      'rating': '評分題',
      'matrix': '矩陣題'
    };
    
    return `
      <div class="question-item">
        <div class="question-number">題目 ${index + 1}</div>
        <div class="question-text">${q.question}</div>
        <span class="question-type">${typeLabels[q.type] || q.type}</span>
        ${q.options && q.options.length > 0 ? `
          <ul class="question-options">
            ${q.options.map(opt => `<li>${opt}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `;
  }).join('');
  
  resultDiv.style.display = 'block';
  
  // Scroll to result
  resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Use AI Result
function useAIResult() {
  document.getElementById('ai-section').style.display = 'none';
  document.getElementById('editor-section').style.display = 'block';
  
  // Load questions into editor
  loadQuestionsToEditor(surveyData.questions);
  
  updateProgress(3);
}

// Template Section
function initTemplateSection() {
  const templates = getTemplates();
  displayTemplates(templates);
  
  // Search
  const searchInput = document.getElementById('template-search');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = templates.filter(t => 
      t.title.toLowerCase().includes(query) || 
      t.description.toLowerCase().includes(query)
    );
    displayTemplates(filtered);
  });
  
  // Filters
  document.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('active');
      
      const activeFilters = Array.from(
        document.querySelectorAll('.filter-tag.active')
      ).map(t => t.dataset.category);
      
      if (activeFilters.length === 0) {
        displayTemplates(templates);
      } else {
        const filtered = templates.filter(t => 
          activeFilters.includes(t.category)
        );
        displayTemplates(filtered);
      }
    });
  });
}

function getTemplates() {
  return [
    {
      id: 1,
      title: '線上學習平台滿意度調查',
      category: 'education',
      description: '了解學生對線上課程的滿意度與改善建議',
      questions: 12,
      uses: 1250
    },
    {
      id: 2,
      title: '產品市場調查問卷',
      category: 'market',
      description: '評估新產品的市場接受度與價格敏感度',
      questions: 15,
      uses: 2100
    },
    {
      id: 3,
      title: '員工滿意度調查',
      category: 'hr',
      description: '評估員工對工作環境、福利與文化的滿意度',
      questions: 18,
      uses: 980
    },
    {
      id: 4,
      title: '活動回饋問卷',
      category: 'event',
      description: '蒐集參與者對活動內容、流程與體驗的意見',
      questions: 10,
      uses: 1560
    },
    {
      id: 5,
      title: '顧客服務體驗調查',
      category: 'customer',
      description: '了解顧客對服務品質與購物體驗的評價',
      questions: 14,
      uses: 1820
    },
    {
      id: 6,
      title: '學術研究問卷',
      category: 'research',
      description: '適用於學術研究的標準化問卷模板',
      questions: 20,
      uses: 750
    }
  ];
}

function displayTemplates(templates) {
  const grid = document.getElementById('template-grid');
  
  const categoryLabels = {
    'education': '教育',
    'market': '市場研究',
    'hr': '人資',
    'event': '活動',
    'customer': '客戶服務',
    'research': '學術研究'
  };
  
  grid.innerHTML = templates.map(t => `
    <div class="template-card" onclick="selectTemplate(${t.id})">
      <h4>${t.title}</h4>
      <span class="template-category">${categoryLabels[t.category] || t.category}</span>
      <p>${t.description}</p>
      <div class="template-stats">
        <span>📋 ${t.questions} 題</span>
        <span>👥 ${t.uses} 次使用</span>
      </div>
    </div>
  `).join('');
}

function selectTemplate(templateId) {
  // Load template data
  const template = getTemplates().find(t => t.id === templateId);
  if (!template) return;
  
  // Generate sample questions for template
  const templateQuestions = generateTemplateQuestions(template);
  surveyData.questions = templateQuestions;
  
  // Switch to editor
  document.getElementById('template-section').style.display = 'none';
  document.getElementById('editor-section').style.display = 'block';
  
  loadQuestionsToEditor(templateQuestions);
  
  updateProgress(3);
}

function generateTemplateQuestions(template) {
  // Return sample questions based on template
  const baseQuestions = [
    {
      question: '請選擇您的身份',
      type: 'single-choice',
      options: ['學生', '教師', '家長', '其他'],
      required: true
    },
    {
      question: '您對此項目的整體滿意度',
      type: 'rating',
      options: ['1', '2', '3', '4', '5'],
      required: true
    },
    {
      question: '您的建議與回饋',
      type: 'text',
      options: [],
      required: false
    }
  ];
  
  return baseQuestions;
}

// Editor
function initEditor() {
  // Add question buttons
  document.querySelectorAll('.add-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      addNewQuestion(type);
    });
  });
}

function addNewQuestion(type) {
  const question = {
    id: Date.now(),
    question: '新問題',
    type: type,
    options: type.includes('choice') ? ['選項 1', '選項 2'] : [],
    required: false
  };
  
  surveyData.questions.push(question);
  renderQuestions();
}

function loadQuestionsToEditor(questions) {
  surveyData.questions = questions;
  renderQuestions();
}

function renderQuestions() {
  const container = document.getElementById('questions-container');
  
  if (surveyData.questions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>尚未新增任何題目</p>
        <p>從左側選擇題型開始建立問卷</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = surveyData.questions.map((q, index) => `
    <div class="question-item" data-id="${q.id}">
      <div class="question-number">題目 ${index + 1}</div>
      <div class="question-text">${q.question}</div>
      <span class="question-type">${getTypeLabel(q.type)}</span>
      ${q.options && q.options.length > 0 ? `
        <ul class="question-options">
          ${q.options.map(opt => `<li>${opt}</li>`).join('')}
        </ul>
      ` : ''}
      <div style="margin-top: 1rem;">
        <button onclick="editQuestion(${q.id})" class="secondary-btn" style="padding: 0.5rem 1rem;">編輯</button>
        <button onclick="deleteQuestion(${q.id})" class="secondary-btn" style="padding: 0.5rem 1rem; color: #dc2626;">刪除</button>
      </div>
    </div>
  `).join('');
  
  updatePreview();
}

function getTypeLabel(type) {
  const labels = {
    'single-choice': '單選題',
    'multiple-choice': '多選題',
    'text': '文字題',
    'rating': '評分題',
    'matrix': '矩陣題'
  };
  return labels[type] || type;
}

function editQuestion(id) {
  // Simple implementation - in production, open modal editor
  const question = surveyData.questions.find(q => q.id === id);
  if (!question) return;
  
  const newText = prompt('編輯問題：', question.question);
  if (newText) {
    question.question = newText;
    renderQuestions();
  }
}

function deleteQuestion(id) {
  if (confirm('確定要刪除此問題嗎？')) {
    surveyData.questions = surveyData.questions.filter(q => q.id !== id);
    renderQuestions();
  }
}

function updatePreview() {
  const preview = document.getElementById('preview-content');
  
  preview.innerHTML = `
    <div style="background: white; padding: 1rem; border-radius: 8px;">
      <h3 style="margin-bottom: 1rem;">問卷預覽</h3>
      ${surveyData.questions.map((q, i) => `
        <div style="margin-bottom: 1.5rem;">
          <p style="font-weight: 600; margin-bottom: 0.5rem;">${i + 1}. ${q.question}</p>
          ${renderPreviewOptions(q)}
        </div>
      `).join('')}
    </div>
  `;
}

function renderPreviewOptions(question) {
  switch(question.type) {
    case 'single-choice':
      return question.options.map(opt => `
        <label style="display: block; margin-bottom: 0.5rem;">
          <input type="radio" name="q${question.id}" disabled> ${opt}
        </label>
      `).join('');
    
    case 'multiple-choice':
      return question.options.map(opt => `
        <label style="display: block; margin-bottom: 0.5rem;">
          <input type="checkbox" disabled> ${opt}
        </label>
      `).join('');
    
    case 'text':
      return '<textarea style="width: 100%; padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 4px;" rows="3" disabled></textarea>';
    
    case 'rating':
      return '<div style="display: flex; gap: 0.5rem;">' + 
        Array.from({length: 5}, (_, i) => `<span style="cursor: pointer;">⭐</span>`).join('') +
        '</div>';
    
    default:
      return '';
  }
}

// CTA Actions
function initCTA() {
  document.getElementById('save-draft-btn')?.addEventListener('click', saveDraft);
  document.getElementById('preview-btn')?.addEventListener('click', previewSurvey);
  document.getElementById('publish-btn')?.addEventListener('click', publishSurvey);
}

function saveDraft() {
  // Save to localStorage
  localStorage.setItem('survey-draft', JSON.stringify(surveyData));
  alert('✅ 草稿已儲存');
}

function previewSurvey() {
  // Open preview in new window or modal
  if (surveyData.questions.length === 0) {
    alert('請至少新增一個問題');
    return;
  }
  
  alert('🔍 預覽功能：將在新視窗開啟問卷預覽');
  // window.open('/preview.html', '_blank');
}

function publishSurvey() {
  if (surveyData.questions.length === 0) {
    alert('請至少新增一個問題');
    return;
  }
  
  if (!confirm('確定要發布此問卷嗎？')) {
    return;
  }
  
  // In production, send to backend
  console.log('Publishing survey:', surveyData);
  alert('🎉 問卷已發布！');
  
  // Redirect to survey list or dashboard
  // window.location.href = '/surveys';
}

// Make functions global for onclick handlers
window.selectTemplate = selectTemplate;
window.editQuestion = editQuestion;
window.deleteQuestion = deleteQuestion;
window.useAIResult = useAIResult;
