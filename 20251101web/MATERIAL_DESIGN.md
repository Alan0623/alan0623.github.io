# Material Design 設計系統應用說明

本專案已全面採用 **Google Material Design 3** 設計系統，打造現代、直觀且一致的使用者體驗。

## 🎨 設計原則

### 1. **色彩系統 (Color System)**
- **Primary Color**: `#1976D2` (藍色) - 主要操作按鈕、連結
- **Primary Variant**: `#1565C0` (深藍) - hover 狀態
- **Secondary Color**: `#0288D1` (淺藍) - 次要動作
- **Surface**: `#FFFFFF` - 卡片、對話框背景
- **Background**: `#FAFAFA` - 頁面背景

### 2. **陰影與層次 (Elevation)**
Material Design 使用陰影來表達 UI 元素的層次關係：
- **Elevation 1**: 靜態卡片 (0-1dp)
- **Elevation 2**: 按鈕、卡片 hover 狀態 (2-4dp)
- **Elevation 3**: 浮動動作按鈕 (6-8dp)
- **Elevation 4**: 對話框 (12-16dp)
- **Elevation 6**: 導航抽屜 (16dp+)

### 3. **字體系統 (Typography)**
使用 Google Roboto 字體家族：
- **Headline 1-6**: 96px - 20px (頁面標題)
- **Subtitle 1-2**: 16px - 14px (副標題)
- **Body 1-2**: 16px - 14px (內文)
- **Button**: 14px (按鈕文字，全大寫)
- **Caption**: 12px (輔助說明)

### 4. **間距系統 (Spacing)**
使用 8dp 網格系統：
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **XXL**: 48px

### 5. **圓角 (Border Radius)**
- **Small**: 4px (按鈕、輸入框)
- **Medium**: 8px (小卡片)
- **Large**: 16px (大卡片)
- **Extra Large**: 24px (特殊元件)

## 🧩 元件應用

### Header (頂部導航)
- 使用 `elevation-2` 陰影
- Sticky 定位保持可見
- Hover 時增加至 `elevation-3`
- 64px 高度符合 Material 標準

### Buttons (按鈕)
- **Contained Button**: 實心背景，用於主要操作
- **Text Button**: 透明背景，用於次要操作
- **Outlined Button**: 邊框按鈕，用於選擇性操作
- 所有按鈕使用大寫字母 + 1.25px 字距

### Cards (卡片)
- 預設 `elevation-2`
- Hover 時 `elevation-4` + 上移 8px
- 圓角 16px
- 內邊距 16-24px

### Chips (標籤)
- 圓角 16px
- Active 狀態使用 primary color
- Hover 使用 8% primary color overlay

### Input Fields (輸入框)
- 2px 邊框
- Focus 時邊框變為 primary color
- 圓角 4px
- 12-16px 內邊距

### Lists (列表)
- 項目間距 16-24px
- Hover 使用 4% primary color overlay
- Divider 使用 12% 透明度黑色線

## 🎯 互動效果

### 1. **Transitions (過渡動畫)**
使用 Material Design 標準緩動函數：
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### 2. **Hover States**
- 按鈕：背景色變深 + 陰影增加
- 卡片：上移 8px + 陰影增強
- 連結：顏色變深

### 3. **Active States**
- 按鈕：陰影減少 + 輕微下壓
- 輸入框：邊框加粗 + primary color

### 4. **Focus States**
- 輸入框：2px primary color 邊框
- 按鈕：outline 顯示

## 📱 響應式設計

### 斷點系統
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### 適配策略
- 手機：單欄佈局，隱藏次要資訊
- 平板：雙欄佈局，保留重要功能
- 桌面：多欄佈局，完整體驗

## 🌙 深色模式支持 (未來規劃)
Material Design 3 原生支持深色主題：
- Surface: `#121212`
- On-Surface: `#FFFFFF`
- Primary: `#BB86FC`

## 📚 參考資源

- [Material Design 3 官方文檔](https://m3.material.io/)
- [Material Design Components](https://material.io/components)
- [Material Design Color Tool](https://material.io/resources/color/)
- [Roboto Font](https://fonts.google.com/specimen/Roboto)

## 🔧 開發者指南

### 使用 CSS 變數
```css
/* 顏色 */
background: var(--md-primary);
color: var(--md-on-primary);

/* 陰影 */
box-shadow: var(--md-elevation-2);

/* 間距 */
padding: var(--md-spacing-md);
margin: var(--md-spacing-lg);

/* 字體 */
font-size: var(--md-type-body1);
```

### 創建新元件
1. 使用標準 Material 色彩
2. 應用適當的 elevation
3. 添加流暢的過渡動畫
4. 確保響應式支援
5. 保持 8dp 網格對齊

---

**設計系統更新日期**: 2025年11月4日
**Material Design 版本**: Material Design 3
**維護者**: 數據風向球開發團隊
