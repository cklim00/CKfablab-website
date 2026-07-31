/* ============================================================
   CKfablab — 共用互動：語言切換 / 手機選單 / 專案渲染與篩選
   ============================================================ */

// ---------- 語言切換（EN ⇄ 中，記住選擇） ----------
(function () {
  const saved = localStorage.getItem('ckfablab-lang') || 'en';
  document.body.dataset.lang = saved;
  document.documentElement.lang = saved === 'zh' ? 'zh-Hant' : 'en';

  const btn = document.querySelector('.lang-toggle');
  if (btn) {
    const label = () => (document.body.dataset.lang === 'en' ? '中文' : 'EN');
    btn.textContent = label();
    btn.addEventListener('click', () => {
      const next = document.body.dataset.lang === 'en' ? 'zh' : 'en';
      document.body.dataset.lang = next;
      document.documentElement.lang = next === 'zh' ? 'zh-Hant' : 'en';
      localStorage.setItem('ckfablab-lang', next);
      btn.textContent = label();
    });
  }
})();

// ---------- 手機選單 ----------
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
})();

// ---------- 專案卡片渲染 ----------
const CAT_LABEL = {
  ai:       { en: 'AI & Generative', zh: 'AI 與生成設計', cls: 'p-ai' },
  interact: { en: 'Interaction & Gerontech', zh: '互動與高齡科技', cls: 'p-interact' },
  fab:      { en: 'Digital Fabrication', zh: '數位製造', cls: 'p-fab' },
  edu:      { en: 'Design Education', zh: '設計教育', cls: 'p-edu' },
  arch:     { en: 'Architecture & Exhibition', zh: '建築與展覽', cls: 'p-fab' }
};

function projectCard(p, idx) {
  const cat = CAT_LABEL[p.category];
  const visualStyle = p.image ? ` style="background-image:url('${p.image}')"` : '';
  const idxNum = p.image ? '' : `<span class="idx">${String(idx + 1).padStart(2, '0')}</span>`;
  const visual = `<div class="visual ${p.image ? '' : cat.cls}"${visualStyle}>${idxNum}</div>`;
  const linked = (p.link && p.link !== '#') ? `<a href="${p.link}">${visual}</a>` : visual;
  return `
  <div class="project-card" data-cat="${p.category}">
    ${linked}
    <div class="meta"><span>${p.year}</span><span class="lang-en">${cat.en}</span><span class="lang-zh">${cat.zh}</span></div>
    <h3><span class="lang-en">${p.title_en}</span><span class="lang-zh">${p.title_zh}</span></h3>
    <p class="desc"><span class="lang-en">${p.desc_en}</span><span class="lang-zh">${p.desc_zh}</span></p>
    ${p.award ? `<p class="award"><span class="lang-en">${p.award_en || p.award}</span><span class="lang-zh">${p.award}</span></p>` : ''}
  </div>`;
}

// 完整專案頁：CKfablab（非 arch）渲染 + 篩選
(function () {
  const grid = document.getElementById('all-projects');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const ckfablab = PROJECTS.filter(p => p.category !== 'arch');
  const render = (cat) => {
    const list = cat === 'all' ? ckfablab : ckfablab.filter(p => p.category === cat);
    grid.innerHTML = list.map(projectCard).join('');
  };
  render('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });
})();

// AleppoZONE 時期（arch 類別）獨立區塊
(function () {
  const grid = document.getElementById('aleppo-projects');
  if (!grid || typeof PROJECTS === 'undefined') return;
  grid.innerHTML = PROJECTS.filter(p => p.category === 'arch').map(projectCard).join('');
})();

// 首頁精選：featured = true 的前 4 筆（保留備用）
(function () {
  const grid = document.getElementById('featured-projects');
  if (!grid || typeof PROJECTS === 'undefined') return;
  grid.innerHTML = PROJECTS.filter(p => p.featured).slice(0, 4).map(projectCard).join('');
})();

// 首頁最新動態：LATEST 前 9 筆
(function () {
  const grid = document.getElementById('latest-grid');
  if (!grid || typeof LATEST === 'undefined') return;
  grid.innerHTML = LATEST.slice(0, 9).map(item => `
  <div class="project-card">
    <a href="${item.link}"><div class="visual" style="background-image:url('${item.image}')"></div></a>
    <div class="meta"><span>${item.date}</span><span class="lang-en">${item.cat_en}</span><span class="lang-zh">${item.cat_zh}</span></div>
    <h3><span class="lang-en">${item.title_en}</span><span class="lang-zh">${item.title_zh}</span></h3>
    <p class="desc"><span class="lang-en">${item.desc_en}</span><span class="lang-zh">${item.desc_zh}</span></p>
  </div>`).join('');
})();
