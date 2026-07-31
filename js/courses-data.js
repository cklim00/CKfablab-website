/* ============================================================
   CKfablab 課程資料（Teaching 詳情頁）
   course.html?id=<slug> 由本檔驅動，欄位同 projects-data.js
   ============================================================ */

const COURSES = [
  {
    slug: 'programming',
    title_en: 'Programming (Year 1)',
    title_zh: '大一 程式設計',
    year: '大一・上下學期',
    category: 'edu',
    image: 'assets/teaching/programming-a-1.jpg',
    gallery: ['assets/teaching/programming-a-1.jpg','assets/teaching/programming-a-2.jpg','assets/teaching/programming-b-1.jpg','assets/teaching/programming-b-2.jpg','assets/teaching/programming-b-3.jpg'],
    desc_en: 'Coding as another brush.',
    desc_zh: '把 Coding 當成另一支畫筆。',
    detail_en: ['Teaching programming in an art & design department is a real challenge: creativity-driven students think in sensuous, divergent ways, and some resist code outright. This course answers with playful, creative practice — guiding students to treat coding as another brush or design medium, applied directly in artistic creation.','The goal is to cultivate cross-disciplinary digital-humanities designers with computational logic and hands-on digital ability, through a curriculum that weaves design thinking and computational thinking into one interlaced DNA.'],
    detail_zh: ['藝術與設計系開設的程式設計課程，面臨教學上的挑戰：以「創意」為主軸的藝設系學生，思維模式相對「感性」而「發散」，甚至會抗拒學習，程式邏輯的教學更顯困難。本課程以趣味性及創意實作的教學方式回應—引導學生將編程 Coding 視為另一支畫筆或設計媒材，創意應用於藝術與設計創作中。','課程目標是訓練藝術設計科系學生具備科技與程式運算邏輯思考，培養具數位實踐能力的數位人文跨域設計人才，發展兼具設計思維與運算思維融合交織 DNA 之教學設計。']
  },
  {
    slug: 'design-studio',
    title_en: 'Design Creation Studio (Year 2)',
    title_zh: '大二 設計創作 Studio',
    year: '大二・上下學期',
    category: 'edu',
    image: 'assets/teaching/design-studio-a-1.jpg',
    gallery: ['assets/teaching/design-studio-a-1.jpg','assets/teaching/design-studio-a-2.jpg','assets/teaching/design-studio-a-3.jpg','assets/teaching/design-studio-b-1.jpg','assets/teaching/design-studio-b-2.jpg','assets/teaching/design-studio-b-3.jpg'],
    desc_en: 'From digital form to full-scale making, at the scale of home.',
    desc_zh: '以人居生活為關懷，從數位美學形體到實體空間創作。',
    detail_en: ['A studio course centred on dwelling and everyday life: physical design creation of home spaces and objects at or below the scale of a house, spanning architecture, interior, furniture and product design. In the spring semester, interactive mechanisms join the brief.','Learning happens in the studio — making and discussing. Students practise woodworking and digital media, learning to carry a creative concept all the way into a physical artefact, developing from digital-aesthetic form toward three-dimensional space across units of different scales.'],
    detail_zh: ['大二設計 Studio 是一個以人居生活為主要關懷的設計創作課程。設計定位在 HOUSE 尺度以下的各類家居空間（space）及家居物件（object）的實體設計創作，專業知識涵蓋建築設計、室內設計、家具設計、產品設計等；下學期並可加入互動機制概念的發展。','課程以工作室（studio）為學習環境進行實作與討論，訓練木工操作並藉由數位媒材輔助，讓學生熟悉如何從創意的設計概念具體落實成實體，以不同尺度的物件與空間作為單元，從數位美學之形體發展至實體的三度空間創作。']
  },
  {
    slug: 'grasshopper',
    title_en: 'Advanced Computer Graphics — Grasshopper (Year 2)',
    title_zh: '大二 進階電腦繪圖 Grasshopper',
    year: '大二・上學期',
    category: 'edu',
    image: 'assets/teaching/grasshopper-a-1.jpg',
    gallery: ['assets/teaching/grasshopper-a-1.jpg','assets/teaching/grasshopper-a-2.jpg','assets/teaching/grasshopper-a-3.jpg'],
    desc_en: 'Parametric freeform design with Rhino Grasshopper.',
    desc_zh: '以 Rhino Grasshopper 進行參數式自由形體設計。',
    detail_en: ['Building on students’ fluency in 2D drafting (AutoCAD) and 3D modelling (Rhino), this course trains advanced parametric digital tools for the design process, using Rhino Grasshopper — the parametric platform most widely used in digital design.','Students learn complex surface modelling and dynamic simulation to design freeform works rich in artistic aesthetics; the final stage introduces CAD/CAM applications, fabricating results through rapid prototyping, laser cutting and CNC.'],
    detail_zh: ['本課程訓練學生應用進階參數式數位工具進行數位設計過程。基於學生已熟悉 2D 電腦設計繪圖（AutoCAD）與 3D 設計建模（Rhino），進一步學習進階 3D 繪圖軟體的操作與應用，以數位設計領域廣泛應用的參數式設計軟體 Rhino Grasshopper 作為設計操作介面。','課程訓練學生利用複雜曲面建模及動態模擬方法，設計出富有藝術美學與數位設計過程的自由形體設計；最後階段介紹電腦輔助設計與製造（CAD/CAM）應用，藉由快速成型、雷射切割及 CNC 製作實體作品。']
  },
  {
    slug: 'interactive-tech',
    title_en: 'Interactive Technology Devices (Year 3)',
    title_zh: '大三 互動科技裝置',
    year: '大三・上學期',
    category: 'edu',
    image: 'assets/teaching/interactive-tech-a-1.jpg',
    gallery: ['assets/teaching/interactive-tech-a-1.jpg','assets/teaching/interactive-tech-a-2.jpg','assets/teaching/interactive-tech-a-3.jpg'],
    desc_en: 'Sensing, computing and actuating — physical interaction beyond the screen.',
    desc_zh: '感知、運算、致動—跳出螢幕的實體互動。',
    detail_en: ['Beyond traditional on-screen interfaces, physical interaction — artefacts that respond dynamically to their users — has become the new frontier of design. Students integrate sensing, computing and actuation into artefact design, breaking old limits and creating new user experiences, with digital fabrication carrying every device into reality.','The course stresses maker-era interaction design across relationships of people, objects and space, blending design, art, computing and mechanics, and exploring how technology can hide inside everyday objects to quietly support daily life. Built on the “Digit-Cross Design Curriculum” framework, it cultivates cross-disciplinary designers fluent in both design and computational thinking.'],
    detail_zh: ['有別於專注於電腦螢幕內視覺呈現的傳統互動介面設計，實體互動—提供人造物直接與使用者進行動態互動的機制與功能—已成為設計領域的新顯學。課程教授相關理論與技術，使學生能整合感知、運算以及致動科技於各類人造物設計中，突破過去的設計限制，達到創新的使用者經驗，並強調以數位製造技術實踐互動裝置。','課程著重自造者時代的「互動設計」創意發想與實踐：人與物件、人與空間、物件與空間之間的互動性，融合設計、藝術、資訊、機械等專業，探討科技如何隱藏式結合日常物品輔助生活。基於「數位。跨域設計教學」（Digit-Cross Design Curriculum）架構，培育兼具設計思維與運算思維、具實踐能力的跨域設計人才。']
  },
  {
    slug: 'art-studio',
    title_en: 'Art & Design Creation Studio (Year 3)',
    title_zh: '大三 藝術與設計創作 Studio',
    year: '大三・上下學期',
    category: 'edu',
    image: 'assets/teaching/art-studio-a-1.jpg',
    gallery: ['assets/teaching/art-studio-a-1.jpg','assets/teaching/art-studio-a-2.jpg','assets/teaching/art-studio-a-3.jpg','assets/teaching/art-studio-b-1.jpg','assets/teaching/art-studio-b-2.jpg','assets/teaching/art-studio-b-3.jpg'],
    desc_en: 'Adaptive dynamic design — objects that respond to people and environments.',
    desc_zh: '「適應性」動態設計—會回應人與環境的物件。',
    detail_en: ['A studio-based, small-class maker course of cross-disciplinary design and digital technique. The design axis is “Adaptive” dynamic design: works must use dynamic mechanisms to adapt to people and environments, while training form creation, material composition and structural concepts.','Through design thinking, art & design students collaborate with mechanical engineering students — ideating together and realizing works with laser cutting, CNC, 3D printing and 3D scanning. Students gain maker self-learning and hands-on skills, mastering mechanism design so that objects and spaces can actively adapt to their users. Recent semesters produced the “Dual-Tone” and “Standby Mode” outcome booklets.'],
    detail_zh: ['本課程為大三必修 studio-based 小班制課程，以跨領域設計及數位技術實作為主的設計專業創客課程。以「適應性」（Adaptive）動態設計為設計主軸—設計必須以動態機構來適應人類／環境，同時訓練形式（Form）的創造、材料（Material）與單元的組構（Composition）關係及結構（Structure）概念。','藉由設計思考的操作，訓練藝設系與機械系學生共同合作，發想創意並以數位製造技術（雷射切割、CNC、3D 列印、3D 掃描）實踐。學生將具備 maker 跨域自主學習與「動手作」的基本技能，理解並可實作機構設計，達到空間／物件主動適應環境／人的設計目標。近年成果集結為《雙頻》《待機中》兩本課程冊。']
  },
  {
    slug: 'cadcam',
    title_en: 'CAD/CAM — Computer-Aided Design & Manufacturing (Year 2)',
    title_zh: '大二 電腦輔助設計與製造',
    year: '大二・下學期',
    category: 'edu',
    image: 'assets/teaching/cadcam-a-1.jpg',
    gallery: ['assets/teaching/cadcam-a-1.jpg','assets/teaching/cadcam-a-2.jpg','assets/teaching/cadcam-a-3.jpg'],
    desc_en: 'Design-to-fabrication: from digital model to physical object.',
    desc_zh: '從數位模型到實體物件的一貫流程。',
    detail_en: ['The design-to-fabrication backbone course: students carry digital models through laser cutting, 3D printing, 3D scanning and CNC machining into physical objects. This course grew into Taiwan’s first maker MOOC (MOE-funded, 2014–15), opening digital fabrication to more than 750 public learners.'],
    detail_zh: ['「從設計到製造」的主幹課程：學生將數位模型透過雷射切割、3D 列印、3D 掃描與 CNC 加工做成實體物件。本課程並發展為全台第一門 maker 磨課師課程（教育部磨課師計畫，2014–15），開放給一般民眾修習，註冊人數逾 750 人。']
  },
  {
    slug: 'digital-fab',
    title_en: 'Digital Fabrication (Cross-Disciplinary Program)',
    title_zh: '數位製造（跨領域學程）',
    year: '跨領域學程',
    category: 'edu',
    image: 'assets/teaching/digital-fab-a-1.jpg',
    gallery: ['assets/teaching/digital-fab-a-1.jpg','assets/teaching/digital-fab-a-2.jpg','assets/teaching/digital-fab-a-3.jpg'],
    desc_en: 'Maker skills for students across every college.',
    desc_zh: '開給全校跨領域學生的 maker 實作課。',
    detail_en: ['A cross-disciplinary program course bringing design, art and engineering students together in the maker base — digital fabrication tools (laser cutting, 3D scanning and printing, CNC) as a shared language for collaborative making, with flipped-classroom teaching that lets beginners build real, working things.'],
    detail_zh: ['跨領域學程課程，讓設計、藝術與工程學生在創客基地共同動手—以數位製造工具（雷射切割、3D 掃描與列印、CNC）作為跨域協作的共同語言，配合翻轉教室教學，讓初學者也能做出真正可運作的作品。']
  },
  {
    slug: 'thesis',
    title_en: 'Senior Thesis Studio (Lab Interns)',
    title_zh: '畢業製作（實習生制）',
    year: '102–107 學年・延續至今',
    category: 'edu',
    image: 'assets/teaching/thesis-107-1.jpg',
    gallery: ['assets/teaching/thesis-107-1.jpg','assets/teaching/thesis-107-2.jpg','assets/teaching/thesis-107-3.jpg','assets/teaching/thesis-106-1.jpg','assets/teaching/thesis-106-2.jpg','assets/teaching/thesis-106-3.jpg','assets/teaching/thesis-105-1.jpg','assets/teaching/thesis-105-2.jpg','assets/teaching/thesis-104-1.jpg','assets/teaching/thesis-104-2.jpg','assets/teaching/thesis-103-1.jpg','assets/teaching/thesis-103-2.jpg','assets/teaching/thesis-103-3.jpg','assets/teaching/thesis-102-1.jpg','assets/teaching/thesis-102-2.jpg','assets/teaching/thesis-102-3.jpg'],
    desc_en: 'Six documented cohorts of thesis interns, AY102–107 — continuing today.',
    desc_zh: '102–107 學年六屆畢業製作實習生紀錄，延續至今。',
    detail_en: ['Senior thesis under the lab-intern model: students join CKfablab for a full year, working alongside Prof. Lim on real projects while developing their graduation works. Six cohorts are documented here (AY102–107, 2013–2019); the model continues today. Over the years, 24 thesis advisees have graduated, with more than 60% admitted to top national graduate schools.'],
    detail_zh: ['畢業製作採實習生制：學生加入 CKfablab 一整年，在真實計畫中與老師並肩工作，同時發展自己的畢業作品。此處紀錄 102 至 107 學年共六屆（2013–2019），此模式延續至今。歷年共指導 24 位專題生，60% 以上考取國立頂尖大學研究所。'],
    facts: [['107 學年','2018.9–2019.6'],['106 學年','2017.9–2018.6'],['105 學年','2016.9–2017.6'],['104 學年','2015.9–2016.6'],['103 學年','2014.9–2015.6'],['102 學年','2013.9–2014.6']]
  }
];
