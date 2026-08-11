
(function(){
  const container = document.getElementById('worksContainer');
  const progressFill = document.getElementById('progressFill');
  const unlockCountEl = document.getElementById('unlockCount');
  const totalCountEl = document.getElementById('totalCount');
  const mainCountEl = document.getElementById('mainCount');
  const subCountEl = document.getElementById('subCount');

  totalCountEl.textContent = WORKS.length;
  mainCountEl.textContent = MAIN_WORKS.length;
  subCountEl.textContent = SUB_WORKS.length;

  function render(){
    const unlocked = getUnlocked();
    const groups = [
      {title:'主线作品', icon:'🗝️', works:MAIN_WORKS},
      {title:'外传逃离方块系列', icon:'📦', works:SUB_WORKS}
    ];

    let html = '';
    groups.forEach(g => {
      html += `<h3 class="cat-header">${g.icon} ${g.title} <span class="cat-count">(${g.works.length}部)</span></h3>`;
      html += '<div class="works-grid">';
      g.works.forEach(w => {
        const ul = unlocked.includes(w.id);
        html += `
          <div class="work-card ${ul?'unlocked':'locked'}" data-id="${w.id}">
            <div class="wc-cover">
              <img src="${w.img}" alt="${w.name}" loading="lazy">
              <div class="wc-cover-overlay"></div>
              <span class="wc-cover-icon">${w.cover}</span>
            </div>
            <span class="wc-lock">🔒 未解锁</span>
            <div class="wc-unlock-btn"><button onclick="handleUnlock('${w.id}')">点击解锁</button></div>
            <div class="wc-body">
              <h3>${w.name}</h3>
              <div class="wc-meta">${w.date} · ${w.nameEn}</div>
              <div class="wc-desc">${w.desc}</div>
              <div class="wc-feature">✦ ${w.feature}</div>
              <div class="wc-platforms">🖥 ${w.platforms}</div>
            </div>
          </div>`;
      });
      html += '</div>';
    });

    container.innerHTML = html;
    updateProgress(unlocked.length);
  }

  function updateProgress(count){
    unlockCountEl.textContent = count;
    const pct = WORKS.length ? (count / WORKS.length * 100) : 0;
    progressFill.style.width = pct + '%';
  }

  window.handleUnlock = function(id){
    toggleUnlock(id);
    render();
    showToast(isUnlocked(id) ? '✦ 成就已解锁' : '已重置');
  };

  document.getElementById('btnUnlockAll').addEventListener('click', () => {
    setUnlocked(WORKS.map(w => w.id));
    render();
    showToast('✦ 全部成就已解锁');
  });
  document.getElementById('btnLockAll').addEventListener('click', () => {
    setUnlocked([]);
    render();
    showToast('已全部重置');
  });

  render();
  initParticles();
})();
