
(function(){
  const RING_CIRCUMFERENCE = 2 * Math.PI * 70; // ~439.82
  const ringFill = document.getElementById('ringFill');
  const pctText = document.getElementById('pctText');
  const unlockNum = document.getElementById('unlockNum');
  const totalNum = document.getElementById('totalNum');
  const badgeContainer = document.getElementById('badgeContainer');
  const detailPanel = document.getElementById('detailPanel');

  let detailWorkId = null;

  totalNum.textContent = WORKS.length;

  function render(){
    const unlocked = getUnlocked();
    const groups = [
      {title:'🗝️ 主线作品', works:MAIN_WORKS},
      {title:'📦 外传逃离方块系列', works:SUB_WORKS}
    ];

    let html = '';
    groups.forEach(g => {
      html += `<div class="badge-section"><h2>${g.title}</h2><div class="badge-grid">`;
      g.works.forEach(w => {
        const ul = unlocked.includes(w.id);
        html += `
          <div class="badge ${ul?'unlocked':'locked'}" data-id="${w.id}" onclick="openDetail('${w.id}')">
            <span class="lock-icon">${ul?'':'🔒'}</span>
            <div class="badge-icon"><img src="${w.img}" alt="${w.name}"></div>
            <div class="badge-name">${w.name}</div>
            <div class="badge-sub">${w.date}</div>
            <div class="badge-status">${ul?'✦ 已解锁':'点击解锁'}</div>
          </div>`;
      });
      html += '</div></div>';
    });

    badgeContainer.innerHTML = html;
    updateProgress(unlocked.length);
  }

  function updateProgress(count){
    unlockNum.textContent = count;
    const pct = WORKS.length ? Math.round(count / WORKS.length * 100) : 0;
    pctText.textContent = pct + '%';
    const offset = RING_CIRCUMFERENCE * (1 - count / WORKS.length);
    ringFill.style.strokeDashoffset = offset;

    // stats footer
    const mainUl = MAIN_WORKS.filter(w => getUnlocked().includes(w.id)).length;
    const subUl = SUB_WORKS.filter(w => getUnlocked().includes(w.id)).length;
    document.getElementById('statsFooter').innerHTML =
      `主线 <span class="sv">${mainUl}/${MAIN_WORKS.length}</span> · 外传 <span class="sv">${subUl}/${SUB_WORKS.length}</span> · 总进度 <span class="sv">${pct}%</span>`;
  }

  window.openDetail = function(id){
    const w = WORKS.find(x => x.id === id);
    if(!w) return;
    detailWorkId = id;
    const ul = isUnlocked(id);
    document.getElementById('detailImg').src = w.img;
    document.getElementById('detailImg').alt = w.name;
    document.getElementById('detailIcon').textContent = w.cover;
    document.getElementById('detailTitle').textContent = w.name;
    document.getElementById('detailMeta').textContent = `${w.nameEn} · ${w.date} · ${w.type}`;
    document.getElementById('detailDesc').textContent = w.desc;
    document.getElementById('detailFeature').textContent = '✦ ' + w.feature;
    document.getElementById('detailPlatforms').textContent = '🖥 ' + w.platforms;
    const btn = document.getElementById('detailToggle');
    btn.textContent = ul ? '🔒 重置此成就' : '✦ 解锁此成就';
    btn.className = ul ? 'btn' : 'btn btn-primary';
    detailPanel.classList.add('show');
  };

  document.getElementById('detailClose').addEventListener('click', () => {
    detailPanel.classList.remove('show');
    detailWorkId = null;
  });
  detailPanel.addEventListener('click', (e) => {
    if(e.target === detailPanel){
      detailPanel.classList.remove('show');
      detailWorkId = null;
    }
  });

  document.getElementById('detailToggle').addEventListener('click', () => {
    if(!detailWorkId) return;
    const wasUnlocked = isUnlocked(detailWorkId);
    toggleUnlock(detailWorkId);
    render();

    // animate badge
    const badge = badgeContainer.querySelector(`[data-id="${detailWorkId}"]`);
    if(badge && !wasUnlocked){
      badge.classList.add('just-unlocked');
      setTimeout(() => badge.classList.remove('just-unlocked'), 700);
    }

    // update detail button
    const ul = isUnlocked(detailWorkId);
    const btn = document.getElementById('detailToggle');
    btn.textContent = ul ? '🔒 重置此成就' : '✦ 解锁此成就';
    btn.className = ul ? 'btn' : 'btn btn-primary';
    showToast(ul ? '✦ 成就已解锁' : '已重置');
  });

  document.getElementById('btnUnlockAll').addEventListener('click', () => {
    setUnlocked(WORKS.map(w => w.id));
    render();
    showToast('✦ 全部成就已解锁');
  });
  document.getElementById('btnLockAll').addEventListener('click', () => {
    if(!confirm('确定要重置所有成就吗？')) return;
    setUnlocked([]);
    render();
    showToast('已全部重置');
  });

  render();
  initParticles();
})();
