/* ============================================================
   專案詳情頁渲染：project.html?id=<slug>
   資料來源：js/projects-data.js 內各專案的
   slug / gallery / detail_zh / detail_en / facts 欄位
   ============================================================ */
(function () {
  const titleEl = document.getElementById('p-title');
  const DATA = window.DATASET || (typeof PROJECTS !== 'undefined' ? PROJECTS : null);
  if (!titleEl || !DATA) return;

  const slug = new URLSearchParams(location.search).get('id');
  const p = DATA.find(x => x.slug === slug);

  if (!p) {
    titleEl.innerHTML = '<span class="lang-en">Project not found</span><span class="lang-zh">找不到此專案</span>';
    return;
  }

  document.title = p.title_zh + ' — CKfablab';
  const CATL = { ai:['AI & Generative','AI 與生成設計'], interact:['Interaction & Gerontech','互動與高齡科技'], fab:['Digital Fabrication','數位製造'], edu:['Design Education','設計教育'], arch:['Architecture & Exhibition','建築與展覽'] };

  titleEl.innerHTML = `<span class="lang-en"><strong>${p.title_en}</strong></span><span class="lang-zh"><strong>${p.title_zh}</strong></span>`;

  const cat = CATL[p.category] || ['',''];
  document.getElementById('p-meta').innerHTML =
    `<span>${p.year}</span>` +
    `<span><span class="lang-en">${cat[0]}</span><span class="lang-zh">${cat[1]}</span></span>` +
    (p.award ? `<span>★ <span class="lang-en">${p.award_en || p.award}</span><span class="lang-zh">${p.award}</span></span>` : '');

  // 主圖
  if (p.image) {
    const hero = document.getElementById('p-hero');
    hero.src = p.image; hero.alt = p.title_zh; hero.style.display = 'block';
  }

  // 圖文交錯區塊渲染器（story / brand 共用）：h 小標、sub 副標、p 段落、link 連結、img 圖（label=無框全寬小標圖）
  const renderBlocks = (blocks) => blocks.map(b => {
    if (b.t === 'h')    return `<h2 style="font-weight:700;font-size:23px;letter-spacing:.02em;margin:52px 0 6px"><span class="lang-en">${b.en}</span><span class="lang-zh">▌${b.zh}</span></h2>`;
    if (b.t === 'sub')  return `<p style="font-size:19px;font-weight:700;margin:4px 0 18px"><span class="lang-en">${b.en}</span><span class="lang-zh">${b.zh}</span></p>`;
    if (b.t === 'p')    return `<p style="max-width:760px;margin:16px 0;font-size:16.5px;line-height:1.85"><span class="lang-en">${b.en}</span><span class="lang-zh">${b.zh}</span></p>`;
    if (b.t === 'link') return `<p style="margin:14px 0"><a href="${b.href || ('#' + b.to)}" class="link" style="font-size:14px;letter-spacing:.04em"><span class="lang-en">${b.en}</span><span class="lang-zh">${b.zh}</span></a></p>`;
    if (b.t === 'img') {
      if (/\.mp4$/i.test(b.src)) return `<video src="${b.src}" autoplay muted loop playsinline preload="metadata" style="display:block;width:100%;max-width:760px;margin:22px 0;border:1px solid var(--ink)"></video>`;
      return b.label
        ? `<img src="${b.src}" alt="" loading="lazy" style="display:block;width:100%;max-width:760px;height:auto;margin:44px 0 2px">`
        : `<img src="${b.src}" alt="${p.title_zh}" loading="lazy" style="display:block;width:100%;max-width:760px;margin:22px 0;border:1px solid var(--ink)">`;
    }
    return '';
  }).join('');

  // 內文：若有 story（圖文交錯文章，比照舊站排版順序）則渲染 story；否則用 detail 段落
  const body = document.getElementById('p-body');
  if (p.story && p.story.length) {
    body.innerHTML = renderBlocks(p.story);
  } else {
    const zh = (p.detail_zh && p.detail_zh.length ? p.detail_zh : [p.desc_zh]).map(t => `<p class="lang-zh">${t}</p>`).join('');
    const en = (p.detail_en && p.detail_en.length ? p.detail_en : [p.desc_en]).map(t => `<p class="lang-en">${t}</p>`).join('');
    body.innerHTML = en + zh;
  }

  // 遊戲實錄影片（video_mp4）：若有獨立規格頁（spec_page）則影片放在規格頁、不在詳情頁重複
  if (p.video_mp4 && !p.spec_page) {
    body.insertAdjacentHTML('afterbegin',
      '<div style="margin:0 0 34px">' +
      '<video src="' + p.video_mp4 + '" controls preload="none" playsinline style="display:block;width:100%;max-width:760px;border:1px solid var(--ink)"></video>' +
      '<p style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--gray);margin:8px 0 0"><span class="lang-en">Gameplay footage</span><span class="lang-zh">遊戲實錄</span></p></div>');
  }

  // 品牌故事＝獨立頁 pillow-fight-brand.html（比照舊站），主頁 story 內〈品牌故事〉連結會連過去

  // 展覽／得獎等事實列（有 spec_page 時移到規格頁）
  if (p.facts && p.facts.length && !p.spec_page) {
    document.getElementById('p-facts').innerHTML =
      `<div class="row-list fact-list">` +
      p.facts.map(f => `<div class="row-item"><span class="date">${f[0]}</span><span class="title">${f[1]}</span></div>`).join('') +
      `</div>`;
  }

  // YouTube 影片（video 欄位放影片 ID）：縮圖＋播放鈕，點擊於新分頁開啟
  if (p.video) {
    const wrap = document.createElement('a');
    wrap.href = `https://www.youtube.com/watch?v=${p.video}`;
    wrap.target = '_blank'; wrap.rel = 'noopener';
    wrap.style.cssText = 'position:relative;display:block;margin-top:56px;border:1px solid var(--ink);overflow:hidden';
    wrap.innerHTML =
      `<img src="https://img.youtube.com/vi/${p.video}/maxresdefault.jpg" alt="${p.title_zh}" style="width:100%;display:block" onerror="this.src='https://img.youtube.com/vi/${p.video}/hqdefault.jpg'">` +
      `<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:84px;height:84px;border-radius:50%;background:rgba(17,17,17,.82);display:flex;align-items:center;justify-content:center">` +
      `<span style="width:0;height:0;border-left:26px solid #fff;border-top:16px solid transparent;border-bottom:16px solid transparent;margin-left:7px"></span></span>` +
      `<span style="position:absolute;bottom:0;left:0;right:0;padding:12px 18px;background:rgba(17,17,17,.75);color:#fff;font-size:12px;letter-spacing:.2em;text-transform:uppercase">▶ <span class="lang-en">Watch the video on YouTube</span><span class="lang-zh">於 YouTube 觀看影片</span></span>`;
    document.getElementById('p-gallery').before(wrap);
  }

  // 場域應用（venues）：公開頁僅顯示「文字條列」（機構名＋日期）；照片＋圖說改置於密碼保護頁，保護被攝長者與孩童的肖像權
  if (p.venues && p.venues.length) {
    const sec = document.createElement('div');
    sec.id = 'venues'; sec.style.marginTop = '56px'; sec.style.scrollMarginTop = '90px';
    const note =
      `<p style="max-width:760px;margin:10px 0 8px;font-size:15px;color:var(--gray)">` +
      `<span class="lang-en">Pillow Fight travelled to elder day-care centres, dementia-care units, kindergartens and community associations across Taiwan. To protect the privacy of the elders and children pictured, the photo record is kept on a password-protected page.</span>` +
      `<span class="lang-zh">枕頭戰巡迴台灣各地日照中心、失智照護據點、幼兒園與社區發展協會。為保護被攝長者與孩童的肖像權，照片紀錄置於密碼保護頁。</span></p>` +
      (p.venues_page
        ? `<p style="margin:0 0 20px"><a class="link" href="${p.venues_page}" style="font-size:14px;letter-spacing:.04em"><span class="lang-en">View the photo record (password required) →</span><span class="lang-zh">瀏覽場域照片紀錄（需密碼）→</span></a></p>`
        : '');
    sec.innerHTML =
      `<h3 class="eyebrow" style="letter-spacing:.18em;text-transform:uppercase;color:var(--gray);font-size:12px;margin-bottom:6px">` +
      `<span class="lang-en">Field Deployments · 2019–2020</span><span class="lang-zh">場域應用 · 2019–2020</span></h3>` +
      note +
      `<div class="row-list fact-list">` +
      p.venues.map(v => `<div class="row-item"><span class="date">${v.date}</span><span class="title">${v.name}${v.org ? `（${v.org}）` : ''}</span></div>`).join('') +
      `</div>`;
    document.getElementById('p-facts').before(sec);
  }

  // 新聞報導（press_pdf）：有 spec_page 時移到規格頁
  if (p.press_pdf && !p.spec_page) {
    const sec = document.createElement('div');
    sec.style.marginTop = '56px';
    sec.innerHTML =
      `<h3 class="eyebrow" style="letter-spacing:.18em;text-transform:uppercase;color:var(--gray);font-size:12px;margin-bottom:10px">` +
      `<span class="lang-en">In the Media</span><span class="lang-zh">新聞報導</span></h3>` +
      `<p style="max-width:760px;margin:0 0 18px;font-size:15px;color:var(--gray)">` +
      `<span class="lang-en">A compiled PDF of press coverage for Pillow Fight.</span>` +
      `<span class="lang-zh">枕頭戰的新聞報導合輯（PDF）。</span></p>` +
      `<a class="btn" href="${encodeURI(p.press_pdf)}" target="_blank" rel="noopener">` +
      `<span class="lang-en">Open press coverage (PDF) ↗</span><span class="lang-zh">開啟新聞報導合輯（PDF）↗</span></a>`;
    document.getElementById('p-gallery').before(sec);
  }

  // 圖庫
  if (p.gallery && p.gallery.length) {
    document.getElementById('p-gallery').innerHTML =
      p.gallery.map(g => `<img src="${g}" alt="${p.title_zh}" loading="lazy">`).join('');
  }
})();
