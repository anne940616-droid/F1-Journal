# F1 Journal

**Beyond the Race. Explore the World of Formula 1.**

## 專案簡介
F1 Journal 是一個 F1 入門知識網站，整理車隊、車手、賽道和賽事基本知識。這個專案希望讓對 F1 有興趣、但還不熟悉規則或車隊背景的人，可以用比較簡單的方式開始認識這項運動。

網站目前以單頁方式呈現，包含車隊搜尋、車手介紹、賽道資訊及入門知識。內容以示範資料為主，涉及賽季變動的資訊仍應以官方最新公告為準。

## 專案使用方式
直接用瀏覽器開啟 `index.html` 即可預覽，不需要安裝額外套件。

## 檔案結構
```text
f1-journal/
├── index.html
├── AGENTS.md
├── README.md
├── css/
│   └── style.css
└── js/
    ├── data.js
    └── app.js
```

## 為什麼需要 AGENTS.md？
這份文件記錄網站的目的、視覺方向、檔案分工和新增資料的格式。之後如果要增加車手、車隊或知識文章，可以先讓 AI 閱讀 `AGENTS.md`，再依照既有規則修改，避免每次都重新解釋網站架構，也減少 AI 改動到不相關功能的情況。

例如新增一位車手時，原則上只需要在 `js/data.js` 增加符合欄位格式的資料，再確認網站是否正確顯示即可。

## AI 協作說明
本專案有使用 AI 協助整理初步架構、產生部分程式碼及草擬文件。我負責選擇專案主題與內容分類、確認網站需求、檢查檔案結構，並透過 `AGENTS.md` 設定後續新增與修改內容時要遵守的規則。AI 產生的內容仍需要人工檢查，尤其是會隨賽季改變的車手、車隊及賽事資訊。

## GitHub Pages 部署
1. 將專案檔案上傳至 GitHub Repository 根目錄。
2. 進入 **Settings → Pages**。
3. Source 選擇 **Deploy from a branch**。
4. Branch 選擇 `main`，資料夾選擇 `/(root)`，按下 Save。
5. 等待 GitHub Pages 完成部署，再開啟頁面確認。

## 注意事項
F1 Journal 是個人學習作品，與 Formula 1、FIA 或任何車隊沒有官方合作或隸屬關係。
