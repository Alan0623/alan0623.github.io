# 數據風向球 — 首頁範例

此檔案為依據 `數據風向球首頁設計規劃.md` 建立的靜態首頁樣式範例，包含：

- `index.html`：首頁結構（Header、Banner、待測問卷列表、類別分析、社群討論區）
- `styles.css`：樣式檔

如何預覽

1. 在 Finder 或終端機進入此專案資料夾：

```zsh
cd /Users/alan/Documents/20251101web
open index.html
```

2. 或在瀏覽器直接打開 `index.html`。

後續建議

- 將問卷與分析資料改為由後端 API 提供，前端改用動態 Template 或 SPA 框架渲染。
- 新增元件：分類過濾、標籤搜尋、分頁與實際的問卷建立流程。
- 改善無障礙 (a11y)：增加更詳細的 ARIA 屬性與鍵盤操作支持。
