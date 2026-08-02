/* ============================================================
   首頁「最新動態」卡片資料（最多顯示 4 筆，由上往下取）
   新增動態：複製一個物件放到最上面即可。
   cat_en / cat_zh：分類標籤（Talk 演講、Workshop 工作坊、
   Exhibition 展覽、Award 獲獎、Event 活動…）
   link：連到對應頁面（talks.html / workshops.html /
   project.html?id=… / 影片檔…）
   ============================================================ */

const LATEST = [
  {
    date: '2026.07.12',
    cat_en: 'Talk', cat_zh: '演講',
    title_en: 'Keynote at Taiwan Int’l AI Design Expo',
    title_zh: '臺灣國際 AI 設計應用博覽會 主題演講',
    desc_en: '“Generating Companionship” — AI is more than an image generator. Four course stories (One Sequence Many Generations, Strata of -1, Standby Mode, Dual-Tone) told through two words: “co-creating” with AI as a co-author that talks back, and “companionship” as AI enters daily life. Rescheduled from 7/11 (typhoon day) and delivered on 7/12; lab works exhibited at the ALT03 Future Academy booth.',
    desc_zh: '主題演講「陪伴，生成中」—AI 不只是生圖工具。以四個課程故事（一序百衍、-1 的地層、待機中、雙頻）講兩個字：「陪」創作（AI 是會回話的共同作者）、「伴」生活（AI 走進日常成為陪伴）。原訂 7/11 因颱風假取消，7/12 如期完成；同場於未來學院 ALT03 展區展出實驗室作品。',
    image: 'assets/projects/alt-keynote.jpg',
    link: 'talks.html'
  },
  {
    date: '2026.07.04',
    cat_en: 'USR Event', cat_zh: 'USR 活動',
    title_en: 'Intergenerational Play Hackathon',
    title_zh: '跨代童玩 Hackathon',
    desc_en: 'Planned and led under the MOE 4th-phase USR seed project “Intergenerational Smart Co-Creation” (PI): 12 families competed for five awards, creating 13 playful works linking the physical world to digital interfaces — designing games with AI, messaging through six kinds of sensors, AI-generated and 3D-printed characters. Outcomes to be exhibited at the YZU Art Center. Click to watch the 2-minute video.',
    desc_zh: '教育部第四期（114–116 年）USR 萌芽計畫「跨代智慧共創：設計思考引領科技與幸福」（主持人）規劃執行—12 個家庭組隊 PK 五大獎項，完成 13 種從實體連結數位介面的創意童玩：用 AI 設計遊戲、6 種感測器傳訊息、AI 生成＋3D 列印遊戲角色、實虛互動裝置。成果將於藝術中心展出。點擊觀看 2 分鐘影片。',
    image: 'assets/projects/hackathon.jpg',
    link: 'assets/media/hackathon-2026.mp4'
  },
  {
    date: '2026.07.02',
    cat_en: 'Workshop', cat_zh: '工作坊',
    title_en: 'AI 3D Generative Modeling & 3D Printing — Humanities Camp',
    title_zh: '人社營「AI 人文智造所」：AI 3D 生成創意建模與 3D 列印實作',
    desc_en: 'Opening session of the YZU humanities camp: 60+ senior-high students from 40+ schools across 9 counties. With a custom-built, no-install creation system and six 3D printers, every student went from “one sentence → model → print” in three hours — and took home a one-of-a-kind lampshade.',
    desc_zh: '人社院高中營隊首場：來自 9 縣市、40 多校的 60 餘位國高中生。自行開發免安裝的創作系統與資料庫 Dashboard，搬出 6 台 3D 印表機，三小時完成「用一句話—建模—列印實體」，每位學員帶走獨一無二的小燈罩。',
    image: 'assets/projects/camp-3dprint.jpg',
    link: 'workshops.html'
  },
  {
    date: '2026.06.13',
    cat_en: 'Workshop', cat_zh: '工作坊',
    title_en: 'AI × Design Practitioner Industry Workshop',
    title_zh: 'AI × 設計職人產業實戰工作坊',
    desc_en: 'Series with Taiwan AI Academy — CK’s session “Product Space: Rhino × AI Rendering Workflow”; invited mentor Shao Wei-Yen on 5/09.',
    desc_zh: '與台灣人工智慧學校（AIA）合辦系列—CK 場次「產品空間：Rhino × AI 渲染工作流」；5/09 場邀請竹工凡木邵唯晏主講。',
    image: 'assets/projects/aia-workshop.jpg',
    link: 'workshops.html'
  },
  {
    date: '2025.07',
    cat_en: 'Award', cat_zh: '獲獎',
    title_en: 'Best Presentation Award — AIVR 2025, Osaka',
    title_zh: 'AIVR 2025 最佳發表獎（大阪）',
    desc_en: '“Multimodal Analysis of Human-AI Collaborative Design: Eye-Tracking and Think-Aloud Insights into Cognitive Transitions” (Springer SIST).',
    desc_zh: '「Multimodal Analysis of Human-AI Collaborative Design」—人機共創設計之眼動與放聲思考研究（Springer SIST）。',
    image: 'assets/projects/genai-eyetracking.jpg',
    link: 'talks.html'
  },
  {
    date: '2025.06',
    cat_en: 'Award', cat_zh: '獲獎',
    title_en: 'TSAA Sustainability Action Award — SDG 10 Silver',
    title_zh: 'TSAA 台灣永續行動獎 SDG10 銀級獎',
    desc_en: '“Intergenerational AI: Warm Inclusion” — GenAI co-creation between students and elders, an action of the USR program.',
    desc_zh: '「跨代 AI：暖心共融」—學生與長輩的 GenAI 共創行動，USR 計畫的永續實踐。',
    image: 'assets/projects/tsaa.jpg',
    link: 'people.html'
  }
];
