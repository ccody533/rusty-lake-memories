
(function(){
  let drawCount = parseInt(localStorage.getItem('rustylake_drawcount') || '0');
  let currentFilter = 'all';
  let currentWork = null;
  let isFlipped = false;

  const cardContainer = document.getElementById('cardContainer');
  const drawBtn = document.getElementById('drawBtn');
  const btnCollect = document.getElementById('btnCollect');
  const btnRedraw = document.getElementById('btnRedraw');
  const wishlistToggle = document.getElementById('wishlistToggle');
  const wishlistSection = document.getElementById('wishlistSection');
  const wishlistGrid = document.getElementById('wishlistGrid');

  document.getElementById('totalWorks').textContent = WORKS.length;
  updateStats();
  renderWishlist();

  // filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
    });
  });

  drawBtn.addEventListener('click', doDraw);
  btnRedraw.addEventListener('click', doDraw);
  btnCollect.addEventListener('click', toggleCollect);
  wishlistToggle.addEventListener('click', () => {
    wishlistSection.classList.toggle('show');
    wishlistToggle.classList.toggle('active');
    if(wishlistSection.classList.contains('show'))
      wishlistSection.scrollIntoView({behavior:'smooth',block:'start'});
  });

  function doDraw(){
    const pool = currentFilter === 'all' ? WORKS : WORKS.filter(w => w.type === currentFilter);
    if(!pool.length) return;

    if(isFlipped){
      cardContainer.classList.remove('flipped');
      isFlipped = false;
      setTimeout(() => doDraw(), 400);
      return;
    }

    const work = pool[Math.floor(Math.random() * pool.length)];
    currentWork = work;
    drawCount++;
    localStorage.setItem('rustylake_drawcount', drawCount);
    updateStats();

    // populate back
    document.getElementById('coverImg').src = work.img;
    document.getElementById('coverImg').alt = work.name;
    document.getElementById('coverContent').innerHTML = `<span class="ci">${work.cover}</span><span>${work.nameEn}</span>`;
    document.getElementById('typeBadge').textContent = work.type;
    document.getElementById('cardTitle').textContent = work.name;
    document.getElementById('cardDate').textContent = work.date;
    document.getElementById('cardType').textContent = '· ' + work.type;
    document.getElementById('cardDesc').textContent = work.desc;
    document.getElementById('cardReason').textContent = '💡 ' + work.reason;
    document.getElementById('cardPlatforms').textContent = '🖥 ' + work.platforms;
    updateCollectBtn();

    cardContainer.classList.add('draw-in');
    setTimeout(() => cardContainer.classList.remove('draw-in'), 500);
    setTimeout(() => { cardContainer.classList.add('flipped'); isFlipped = true; }, 100);
    document.getElementById('idleHint').style.display = 'none';
  }

  function toggleCollect(){
    if(!currentWork) return;
    let wl = getWishlist();
    const idx = wl.findIndex(w => w.id === currentWork.id);
    if(idx > -1){
      wl.splice(idx, 1);
      showToast('已从清单移除');
    } else {
      wl.push({...currentWork});
      showToast('已加入游玩清单 ♡');
    }
    setWishlist(wl);
    updateCollectBtn();
    updateStats();
    renderWishlist();
  }

  function updateCollectBtn(){
    if(!currentWork) return;
    const inList = inWishlist(currentWork.id);
    btnCollect.textContent = inList ? '♥ 已在清单' : '♡ 加入游玩清单';
    btnCollect.classList.toggle('collected', inList);
  }

  function updateStats(){
    document.getElementById('wishCount').textContent = getWishlist().length;
    document.getElementById('drawCount').textContent = drawCount;
  }

  function renderWishlist(){
    const wl = getWishlist();
    if(!wl.length){
      wishlistGrid.innerHTML = '<div class="empty-wish">还没有收藏作品，抽卡后点击收藏吧</div>';
      return;
    }
    wishlistGrid.innerHTML = wl.map(w => `
      <div class="wish-card">
        <button class="wr" data-id="${w.id}" title="移除">✕</button>
        <h4>${w.cover} ${w.name}</h4>
        <div class="wm">${w.date} · ${w.type} · ${w.platforms}</div>
        <div class="wd">${w.reason}</div>
      </div>
    `).join('');
    wishlistGrid.querySelectorAll('.wr').forEach(btn => {
      btn.addEventListener('click', () => {
        let list = getWishlist().filter(w => w.id !== btn.dataset.id);
        setWishlist(list);
        updateStats();
        renderWishlist();
        if(currentWork && currentWork.id === btn.dataset.id) updateCollectBtn();
        showToast('已移除');
      });
    });
  }

  initParticles();
})();
