<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# 數據風向球「創建問卷」頁面規劃

本頁是用戶發起新問卷的主要入口，核心功能包括 AI 自動生成、手動編輯、套用問卷範本，並提供各種 UX 最佳實踐與互動細節，確保創建流程快速、理解無障礙且具個人化彈性[^1][^2][^3][^4].

***

## 介面結構規劃

### Header（與首頁一致）

- **Logo，返回首頁**
- **導航（探索/範本/酒館）**
- **進度指引（Stepper/標示「創建問卷」步驟）**
- **用戶功能（頭像、通知、搜尋）**

***

### 主流程選擇區塊

使用分卡式或分頁式三選一入口：


| 創建方式 | 描述 | 主要互動 |
| :-- | :-- | :-- |
| **AI 生成** | 輸入主題或目的，由 Gemini API 自動生成問卷完整題型、選項與結構 | 提交主題、選擇題數、預設類型（多選、評分、分支）；可編輯結果 |
| **套用範本** | 挑選平台內常用範本（如滿意度、NPS、學術、消費、創意等） | 範本瀏覽與預覽、一鍵套用，支持二次修改 |
| **手動創建** | 從零開始自由設計 | 拖曳式編輯器，題目/選項新增、排序、分組，支援分支跳轉邏輯 |

**分卡區設計建議**：

- 卡片大圖標示 (AI、範本、手動)
- 卡片Hover放大，選定狀態高亮
- 行動裝置改為水平選單或抽屜式切換[^1][^3]

***

### AI 生成問卷區塊

- **問題1：你想調查什麼？**（主題/目標欄｜文本框＋提示範例）
- **問題2：請選擇問卷題型組合**（多選題/評分題/開放式/分支）
- **問題3：預估題目數量**（數值輸入或滑桿）
- **問題4：選擇遊戲化風格**（冒險劇情/心理測驗/多重結局）

**結果區：AI 產生問卷預覽**

- 題目、選項、每題描述、分支邏輯
- AI 建議排序、檢查邏輯一致性
- 支持編輯（直接於預覽處點擊編輯）
- 支援 AI re-generate（重新生成，換主題/風格）
- 記得明顯標示「AI生成內容仍需人工審查」[^1][^2]

***

### 範本庫區塊

- **篩選與搜尋功能**（類型標籤、關鍵字搜尋）
- **範本預覽卡片**（模板名稱、推薦分類、熱門標籤、預覽題型）
- **套用流程**：
    - 一鍵套用 > 進入問卷編輯器
    - 支援修改題目、分支、封面圖
- **範本設計原則**：
    - 各類別均含常見題型範例（學術、行銷、滿意度、心理、知識測驗）
    - 結合分支邏輯預設，提高範本即用性[^5][^4]

***

### 手動編輯器區塊

- **拖曳式編輯器UI**：
    - 新增/排序題目與選項（拖動即可）
    - 支援題目分組（分頁、分段）
    - 自由設定必答/選答
    - 支援多種題型：單選、多選、評分、開放、矩陣、檔案上傳
    - 逐題預設插圖（Gemini API自動生成/手動上傳）
    - 分支邏輯配置：依答案導向不同題目或結局[^3][^2]
    - 問卷封面/說明設定
    - 問卷結束回饋（可自訂結局或說明）
- **進度條\&預覽**：
    - 每新增或修改即時反映在右側問卷預覽區
    - 行動裝置全螢幕預覽切換
    - 支援存檔、離開、回溯修正[^6]

***

### 互動與微動效

- 主要按鈕：高對比色，按下縮小（scale 0.98）
- 編輯器拖曳：平滑過渡動畫
- 預覽切換：淡入淡出
- 處理 AI 生成時：顯示 loading 動畫與生動引導詞（如酒館 NPC：「AI大師正在努力寫題目…」）
- 編輯欄 focus 強調底線/高亮
- 必填欄位未填提示紅色抖動動畫
- 行動裝置：按鈕區域加大、卡片垂直堆疊

***

### 行動呼籲區（CTA）

- 固定於右下/底部：完成編輯後「發布問卷」、「另存為範本」、「預覽問卷」三大按鈕
- 按鈕寬大易操作，清楚文案（ex:「一鍵發布」、「預覽你的冒險」、「存入範本庫」）

***

### 輔助功能

- 支援自動儲存草稿 \& 還原
- 問卷封面插圖：AI自動生成或上傳
- 題目匯入/匯出（CSV、Excel、Google Sheets）
- 協作分工（付費用戶可多人編輯）

***

### 響應式設計原則

| 裝置 | 主要佈局 | 功能提示 |
| :-- | :-- | :-- |
| Desktop | 橫向分三欄（流程卡 + 編輯器 + 預覽） | 編輯區與預覽區並列展示 |
| Tablet | 橫向分二欄，預覽區可隱藏切換 | 切換式預覽、拖曳手勢支援 |
| Mobile | 垂直單欄，流程卡、編輯器、預覽順序 | 編輯區與預覽區分頁切換 |


***

## 使用者旅程設計

1. 進入頁面，選創建方式（AI / 範本 / 手動）
2. 完成主題輸入、類型篩選/設定
3. 產出預覽問卷，審查並修正（可反覆生成調整）
4. 設定問卷封面、說明、插圖、分支
5. 預覽最終效果（桌機/行動皆可模擬）
6. 按「發布」後選定分享方式（公開/邀請/限制）
7. 支援保存草稿，日後續編輯或複製拓展

***

## UX設計細節與檢查建議

- 三方式入口卡片一次只可選一，保持決策清晰
- 主要按鈕色彩與品牌一致，文字大且明亮
- 編輯器支援鍵盤操作與輔助說明
- 範本、AI生成、手動創建都能穿梭切換（不需重載頁面）
- 全流程配進度條、分步驟標示
- AI生成問卷須明顯提醒人工校正
- 編輯器提供回復/還原選項，避免誤操作

***

這份規劃可直接支持 Gemini API 串接流程設計，同時既保留高度彈性又兼顧快速創建的多種場景。詳細 wireframe 及元件設計可參考上述佈局配色與 UX 清單，並可依團隊需求延伸進階互動。每個流程皆可獨立模組化，有助於試行 A/B 測試與未來擴展[^1][^2][^5][^3][^4][^6].
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://formester.com/ai-survey-generator/

[^2]: https://www.involve.me/blog/how-to-generate-feedback-surveys-with-ai-step-by-step-guide

[^3]: https://www.surveymonkey.com/product/features/ai-survey-generator/

[^4]: https://gozen.io/blog/survey-design-best-practices/

[^5]: https://www.userflow.com/blog/50-user-experience-survey-questions-everything-you-need-to-know

[^6]: https://www.reddit.com/r/userexperience/comments/1ay5hgh/help_solving_a_ux_issue_within_questionnaire/

[^7]: https://www.surveymonkey.com/learn/survey-best-practices/

[^8]: https://www.formstack.com/blog/survey-design-best-practices

[^9]: https://www.maptionnaire.com/blog/12-best-practices-in-survey-design

[^10]: https://www.limesurvey.org/blog/tutorials/tips-for-effective-survey-design

[^11]: https://www.kantar.com/inspiration/research-services/11-survey-design-best-practices-to-increase-effectiveness-pf

[^12]: https://delighted.com/blog/survey-design-101

[^13]: https://www.youtube.com/watch?v=oaTx6yDoB4U

[^14]: https://www.typeform.com/blog/user-experience-survey-questions

[^15]: https://www.quantilope.com/resources/online-survey-design-best-practices

[^16]: https://dribbble.com/search/survey-ui

[^17]: https://docs.uipath.com/agents/automation-cloud/latest/user-guide/agent-vs-workflows

[^18]: https://ies.ed.gov/rel-west/2025/01/handout-creating-effective-surveys-best-practices-survey-design

[^19]: https://qualaroo.com/blog/ux-survey/

[^20]: https://www.panoramaed.com/blog/survey-design-checklist

