// 遊戲化問卷互動邏輯

// 全域狀態
const gameState = {
  currentQuestion: 8,
  totalQuestions: 12,
  selectedOption: null,
  answers: [],
  stats: {
    life: 80,
    maxLife: 100,
    wisdom: 12,
    friendship: 15,
    courage: 8,
    character: 10
  },
  soundEnabled: true,
  startTime: Date.now()
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initializeQuestion();
  updateProgress();
  updateStats();
  startTimer();
  setupEventListeners();
  
  // 預設禁用「下一題」按鈕
  updateNavigationButtons();
});

// 設定事件監聽器
function setupEventListeners() {
  // 選項卡片點擊
  document.querySelectorAll('.option-card').forEach((card, index) => {
    card.addEventListener('click', () => selectOption(index));
  });

  // 導航按鈕
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', previousQuestion);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextQuestion);
  }

  // 返回按鈕
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (confirm('確定要離開嗎？你的進度將會保存。')) {
        window.location.href = 'index.html';
      }
    });
  }

  // 聲音切換
  const soundToggle = document.querySelector('.sound-toggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', toggleSound);
  }

  // 鍵盤快捷鍵
  document.addEventListener('keydown', handleKeyPress);
}

// 選擇選項
function selectOption(index) {
  const options = document.querySelectorAll('.option-card');
  const validationMsg = document.querySelector('.validation-message');
  
  // 移除所有選中狀態
  options.forEach(opt => opt.classList.remove('selected'));
  
  // 標記選中的選項
  options[index].classList.add('selected');
  gameState.selectedOption = index;
  
  // 如果選擇「其他」選項(F選項，index 5)，聚焦到輸入框
  if (index === 5) {
    const otherInput = document.getElementById('otherInput');
    if (otherInput) {
      setTimeout(() => {
        otherInput.focus();
      }, 100);
    }
  }
  
  // 隱藏驗證訊息
  if (validationMsg) {
    validationMsg.classList.remove('show');
  }
  
  // 啟用「下一題」按鈕
  updateNavigationButtons();
  
  // 播放選擇音效
  playSound('select');
  
  // 添加輕微震動反饋（如果支援）
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

// 上一題
function previousQuestion() {
  if (gameState.currentQuestion <= 1) return;
  
  gameState.currentQuestion--;
  gameState.selectedOption = null;
  
  playSound('navigate');
  transitionToQuestion();
}

// 下一題
function nextQuestion() {
  // 驗證是否已選擇
  if (gameState.selectedOption === null) {
    const validationMsg = document.querySelector('.validation-message');
    if (validationMsg) {
      validationMsg.classList.add('show');
      playSound('error');
    }
    return;
  }
  
  // 保存答案
  let answerData = {
    optionIndex: gameState.selectedOption,
    timestamp: Date.now()
  };
  
  // 如果選擇「其他」選項，保存輸入內容
  if (gameState.selectedOption === 5) {
    const otherInput = document.getElementById('otherInput');
    if (otherInput) {
      answerData.otherText = otherInput.value.trim();
    }
  }
  
  gameState.answers[gameState.currentQuestion - 1] = answerData;
  
  // 更新統計數據
  updateStatsWithSelection(gameState.selectedOption);
  
  // 檢查是否完成
  if (gameState.currentQuestion >= gameState.totalQuestions) {
    completeQuestionnaire();
    return;
  }
  
  gameState.currentQuestion++;
  gameState.selectedOption = null;
  
  playSound('navigate');
  transitionToQuestion();
}

// 更新統計數據
function updateStatsWithSelection(optionIndex) {
  // 根據選項更新數值（實際數值應從資料源讀取）
  const statChanges = [
    { wisdom: 5, character: 2 },
    { friendship: 7, character: 3 },
    { courage: 6, life: 2 },
    { life: 5, character: 4 }
  ];
  
  const changes = statChanges[optionIndex];
  
  // 顯示浮動數字動畫
  for (const [stat, value] of Object.entries(changes)) {
    if (gameState.stats[stat] !== undefined) {
      // 更新數值
      gameState.stats[stat] += value;
      
      // 限制生命值上限
      if (stat === 'life' && gameState.stats.life > gameState.stats.maxLife) {
        gameState.stats.life = gameState.stats.maxLife;
      }
      
      // 顯示浮動文字
      showFloatingText(`+${value}`, stat);
    }
  }
  
  // 更新 UI
  setTimeout(() => updateStats(), 300);
}

// 顯示浮動文字
function showFloatingText(text, stat) {
  const statLabels = {
    life: '生命',
    wisdom: '聰慧',
    friendship: '友誼',
    courage: '勇氣',
    character: '品格'
  };
  
  const float = document.createElement('div');
  float.className = 'stat-float';
  float.textContent = `${text} ${statLabels[stat]}`;
  
  // 定位在角色狀態卡片附近
  const statsCard = document.querySelector('.character-stats');
  if (statsCard) {
    const rect = statsCard.getBoundingClientRect();
    float.style.left = `${rect.right + 20}px`;
    float.style.top = `${rect.top + Math.random() * 50}px`;
  } else {
    // 備用位置：螢幕左側
    float.style.left = '50px';
    float.style.top = `${window.innerHeight / 2 + Math.random() * 100 - 50}px`;
  }
  
  document.body.appendChild(float);
  
  // 動畫結束後移除
  setTimeout(() => {
    float.remove();
  }, 1000);
}

// 更新進度條
function updateProgress() {
  const percentage = ((gameState.currentQuestion - 1) / gameState.totalQuestions * 100).toFixed(2);
  
  const title = document.querySelector('.progress-title');
  const fill = document.querySelector('.progress-fill');
  const percentageText = document.querySelector('.progress-percentage');
  
  if (title) {
    title.textContent = `第 ${gameState.currentQuestion} / ${gameState.totalQuestions} 題 - 你的冒險進度`;
  }
  
  if (fill) {
    fill.style.width = `${percentage}%`;
  }
  
  if (percentageText) {
    percentageText.textContent = `${percentage}%`;
  }
}

// 更新統計數值
function updateStats() {
  // 更新舊的卡片式顯示（如果存在）
  const stats = document.querySelectorAll('.stat-item');
  const statValues = [
    `${gameState.stats.life}/${gameState.stats.maxLife}`,
    `+${gameState.stats.wisdom}`,
    `+${gameState.stats.friendship}`,
    `+${gameState.stats.courage}`,
    `+${gameState.stats.character}`
  ];
  
  stats.forEach((stat, index) => {
    const valueEl = stat.querySelector('.stat-value');
    if (valueEl && statValues[index]) {
      valueEl.style.transition = 'none';
      valueEl.style.color = '#FFD700';
      valueEl.textContent = statValues[index];
      
      setTimeout(() => {
        valueEl.style.transition = 'color 0.5s';
        valueEl.style.color = '#D84315';
      }, 100);
    }
  });

  // 更新血條顯示
  updateStatBars();
}

// 更新血條
function updateStatBars() {
  const statBars = document.querySelectorAll('.stat-bar-item');
  
  // 更新生命值
  const lifeBar = statBars[0];
  if (lifeBar) {
    const lifePercent = (gameState.stats.life / gameState.stats.maxLife * 100);
    const lifeFill = lifeBar.querySelector('.stat-bar-fill');
    const lifeValue = lifeBar.querySelector('.stat-bar-value');
    
    if (lifeFill) {
      lifeFill.style.width = `${lifePercent}%`;
    }
    if (lifeValue) {
      lifeValue.textContent = `${gameState.stats.life}/${gameState.stats.maxLife}`;
      // 閃爍效果
      lifeValue.style.color = '#FFF';
      setTimeout(() => {
        lifeValue.style.color = '#FFD700';
      }, 200);
    }
  }

  // 更新其他屬性（聰慧、友誼、勇氣、品格）
  const statInfo = [
    { index: 1, key: 'wisdom', maxValue: 20 },
    { index: 2, key: 'friendship', maxValue: 20 },
    { index: 3, key: 'courage', maxValue: 20 },
    { index: 4, key: 'character', maxValue: 20 }
  ];

  statInfo.forEach(info => {
    const bar = statBars[info.index];
    if (bar) {
      const percent = Math.min((gameState.stats[info.key] / info.maxValue * 100), 100);
      const fill = bar.querySelector('.stat-bar-fill');
      const value = bar.querySelector('.stat-bar-value');
      
      if (fill) {
        fill.style.width = `${percent}%`;
      }
      if (value) {
        value.textContent = `+${gameState.stats[info.key]}`;
        // 閃爍效果
        value.style.color = '#FFF';
        setTimeout(() => {
          value.style.color = '#FFD700';
        }, 200);
      }
    }
  });
}

// 更新導航按鈕狀態
function updateNavigationButtons() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (prevBtn) {
    prevBtn.disabled = gameState.currentQuestion <= 1;
  }
  
  if (nextBtn) {
    nextBtn.disabled = gameState.selectedOption === null;
    nextBtn.textContent = gameState.currentQuestion >= gameState.totalQuestions ? '完成冒險' : '下一題';
  }
}

// 問題轉場動畫
function transitionToQuestion() {
  const container = document.querySelector('.question-container');
  
  // 淡出
  container.style.opacity = '0';
  container.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    // 重置選項
    document.querySelectorAll('.option-card').forEach(opt => {
      opt.classList.remove('selected');
    });
    
    // 更新進度和按鈕
    updateProgress();
    updateNavigationButtons();
    
    // 淡入
    container.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
    
    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
}

// 計時器
function startTimer() {
  const timerEl = document.querySelector('.timer span:last-child');
  
  setInterval(() => {
    const elapsed = Date.now() - gameState.startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    if (timerEl) {
      timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

// 聲音切換
function toggleSound() {
  gameState.soundEnabled = !gameState.soundEnabled;
  const icon = document.querySelector('.sound-toggle .material-icons');
  
  if (icon) {
    icon.textContent = gameState.soundEnabled ? 'volume_up' : 'volume_off';
  }
  
  playSound('toggle');
}

// 播放音效（模擬）
function playSound(type) {
  if (!gameState.soundEnabled) return;
  
  // 實際專案中應載入並播放音效檔案
  console.log(`Playing sound: ${type}`);
  
  // 可以使用 Web Audio API 播放音效
  // const audioContext = new AudioContext();
  // ... 音效邏輯
}

// 鍵盤控制
function handleKeyPress(event) {
  switch(event.key) {
    case 'ArrowLeft':
      if (gameState.currentQuestion > 1) {
        previousQuestion();
      }
      break;
    case 'ArrowRight':
    case 'Enter':
      if (gameState.selectedOption !== null) {
        nextQuestion();
      }
      break;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      const index = parseInt(event.key) - 1;
      if (index >= 0 && index < 6) {
        selectOption(index);
      }
      break;
    case 'Escape':
      document.querySelector('.back-btn')?.click();
      break;
  }
}

// 初始化問題
function initializeQuestion() {
  // 從保存的狀態或 URL 參數讀取當前題號
  const urlParams = new URLSearchParams(window.location.search);
  const questionParam = urlParams.get('question');
  
  if (questionParam) {
    gameState.currentQuestion = parseInt(questionParam);
  }
  
  // 實際專案中應從 API 或資料庫載入問題內容
  console.log('Loading question:', gameState.currentQuestion);
}

// 完成問卷
function completeQuestionnaire() {
  playSound('complete');
  
  // 計算最終結局
  const ending = calculateEnding();
  
  // 顯示完成動畫
  const container = document.querySelector('.question-container');
  container.style.opacity = '0';
  
  setTimeout(() => {
    // 導航到結果頁面
    window.location.href = `result.html?ending=${ending}`;
  }, 500);
}

// 計算結局
function calculateEnding() {
  const { wisdom, friendship, courage, character } = gameState.stats;
  
  // 根據最高數值決定結局
  const stats = {
    wisdom: wisdom,
    friendship: friendship,
    courage: courage,
    character: character
  };
  
  const highest = Object.entries(stats).reduce((a, b) => a[1] > b[1] ? a : b);
  
  const endings = {
    wisdom: 'sage',
    friendship: 'companion',
    courage: 'hero',
    character: 'noble'
  };
  
  return endings[highest[0]] || 'balanced';
}

// 自動保存進度
setInterval(() => {
  const saveData = {
    currentQuestion: gameState.currentQuestion,
    answers: gameState.answers,
    stats: gameState.stats,
    timestamp: Date.now()
  };
  
  localStorage.setItem('rpg_survey_progress', JSON.stringify(saveData));
  console.log('Progress auto-saved');
}, 30000); // 每 30 秒保存一次
