# CKfablab 新網站

黑白編輯風、中英雙語、純靜態網站。無框架、無建置流程——直接開 `index.html` 就能預覽，上傳任何靜態主機就能上線。

## 結構

```
index.html        首頁（p5.js 生成視覺 hero）
project.html      專案詳情頁模板（project.html?id=slug，由 projects-data.js 驅動）
course.html       課程詳情頁模板（course.html?id=slug，由 courses-data.js 驅動）
research.html     研究主軸 + 完整著作清單 + 完整計畫清單（國科會/教育部/產學）
projects.html     專案總覽（可篩選，含建築與展覽類）+ 展覽紀錄 + 早期作品
teaching.html     課程 + MOOCs + 教學獎
workshops.html    工作坊完整紀錄（2016–2023 已遷移 + 近期 AI 工作坊待補）
talks.html        國際/國內演講完整清單 + 消息
people.html       CK 簡介 / CV + 歷屆成員
contact.html      聯絡 + Join Us（招生）
css/style.css     設計系統（黑白、Century Gothic、留白）
js/hero.js        首頁 p5.js flow field（Adaptive 概念）
js/projects-data.js  ★ 專案資料（新增專案只改這個檔）
js/latest-data.js    ★ 首頁「最新動態」卡片（新活動放最上面即可，自動取前 4 筆）
js/courses-data.js   課程詳情資料
js/main.js        語言切換 / 選單 / 專案渲染與篩選
assets/projects/  專案照片放這裡
```

## 日常維護

- **新增專案**：在 `js/projects-data.js` 複製一個物件填入內容即可，首頁精選（`featured: true`）與專案頁自動更新。
- **換上照片**：照片放 `assets/projects/`，在專案物件加 `image: 'assets/projects/xxx.jpg'`，幾何佔位圖自動被取代。
- **語言**：所有雙語文字用 `<span class="lang-en">` / `<span class="lang-zh">` 成對出現，右上角按鈕切換並記住選擇。

## 上線（擇一）

1. **GitHub Pages**：repo → Settings → Pages → Deploy from branch。
2. **Vercel / Netlify**：拖曳整個資料夾即可。
3. 到 Wix 網域設定把 `ckfablab.com` DNS 指向新主機，舊站即可退役。

## 內容待補清單（站內以【】灰字標示）

- [x] 2020–2024 著作已補齊（依 2025 著作清單；含 Applied Sciences、Sensors、Menopause、Designs 與 CAADRIA 2021–2024）
- [x] CV PDF 已上架（assets/CK-Lim-CV.pdf，個人簡歷 Draft6）
- [x] 執行中計畫全名已補（USR 萌芽、實務型＝臨場智匯、教學實踐 2025/2026）
- [x] 國科會計畫已依官方查詢系統對齊（115 人機協作形態創生、114 臨場智匯＋高齡失智照護共同主持、113/111 存在貼片等）
- [x] 指導大專生研究計畫已補（114–115 年共 4 筆，來源：國科會學術補助獎勵查詢）
- [x] 站內所有【待補】標記已清除（2026-07-12 全站校對），MIC/iSupport、熊本場次依 CK 指示移除
- [x] 個人照片已上架（assets/ck-portrait.jpg，3:4 裁切）；根目錄的原檔「林楚卿_(1).jpg」部署前可刪除
- [x] 成員名單已補齊至 2023–24（2024 之後暫無新成員，站上不顯示待補）— people.html
- [x] 已接上 7 張專案圖片：AI 創意設計思考、GenAI 眼動研究、AI-VR、生成藝術、陪伴自動生成中、USR、WAX — `assets/projects/`
- [ ] 其餘專案照片（枕頭戰、吋草音、台博雲、AleppoZONE 等早期作品——建議從 Wix 媒體庫或硬碟匯出後放入 `assets/projects/` 並填 image 欄位；WAX 現用圖解析度偏低，有高解析照片可替換 wax.jpg）
- [ ] 社群連結（IG / YouTube / Scholar）— contact.html
- [ ] 學生作品區（可用 2026.01.20 互動課程/數位人文課程成果 Portfolio）— teaching.html
- [ ] 各專案獨立頁（目前卡片 link 為 #，之後可逐案建立）
