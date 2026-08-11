/* Particles */
(function(){
  const c=document.getElementById('particles'),x=c.getContext('2d');
  let w,h,ps=[];
  function rs(){w=c.width=innerWidth;h=c.height=innerHeight}
  rs();addEventListener('resize',rs);
  class P{
    constructor(){this.r()}
    r(){this.x=Math.random()*w;this.y=Math.random()*h;this.s=Math.random()*1.5+.3;
      this.sy=-(Math.random()*.12+.02);this.sx=(Math.random()-.5)*.08;
      this.o=Math.random()*.2+.04;this.l=Math.random()*500+200;this.ml=this.l}
    u(){this.x+=this.sx;this.y+=this.sy;this.l--;if(this.l<=0||this.y<-10)this.r()}
    d(){x.beginPath();x.arc(this.x,this.y,this.s,0,Math.PI*2);
      x.fillStyle=`rgba(166,137,60,${this.o*(this.l/this.ml)})`;x.fill()}
  }
  for(let i=0;i<35;i++)ps.push(new P);
  (function lp(){x.clearRect(0,0,w,h);ps.forEach(p=>{p.u();p.d()});requestAnimationFrame(lp)})();
})();

/* ===== 手风琴轮播逻辑 ===== */
(function(){
  const track = document.getElementById('carouselTrack');
  const cards = Array.from(track.querySelectorAll('.carousel-card'));
  const detail = document.getElementById('carouselDetail');
  const detailClose = document.getElementById('carouselDetailClose');
  const detailImg = document.getElementById('carouselDetailImg');
  const detailName = document.getElementById('carouselDetailName');
  const detailSub = document.getElementById('carouselDetailSub');
  const detailDesc = document.getElementById('carouselDetailDesc');

  const total = cards.length;
  const ACTIVE_PCT = 55; // 展开卡片占 55%

  function activate(index){
    index = ((index % total) + total) % total;
    const inactivePct = ((100 - ACTIVE_PCT) / (total - 1));
    cards.forEach((card, i) => {
      if(i === index){
        card.classList.add('active');
        card.style.width = ACTIVE_PCT + '%';
      } else {
        card.classList.remove('active');
        card.style.width = inactivePct + '%';
      }
    });
  }

  // 点击切换
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if(card.classList.contains('active')){
        // 点击已展开 → 打开详情
        const key = card.dataset.game;
        const data = gameData[key];
        if(!data) return;
        detailImg.style.background = data.bg;
        detailName.textContent = data.name;
        detailSub.textContent = data.sub;
        detailDesc.innerHTML = data.desc;
        detail.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        activate(i);
      }
    });
  });

  // 详情弹窗
  const gameData = {
    owl: {
      name: 'Mr. Owl',
      sub: '猫头鹰先生 · 锈湖守护者',
      bg: 'url(images/owl.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Mr. Owl</span> 是锈湖世界的最高守护者，拥有操控记忆和时间的强大力量。他居住在锈湖中的小岛上，掌管着锈湖旅馆。</p><p>他最著名的能力是记忆提取——通过特殊装置将人的记忆凝结为方块。这项能力既是解谜的关键工具，也是整个锈湖宇宙运转的核心机制。</p><p>在锈湖宇宙的时间线中，Mr. Owl 扮演着幕后推手的角色，策划了许多事件，引导不同角色走向各自的命运。</p>'
    },
    crow: {
      name: 'Mr. Crow',
      sub: '乌鸦先生 · 穿梭者',
      bg: 'url(images/crow.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Mr. Crow</span> 的前身是 Vanderboom 家族的 Aldous Vanderboom。在《根源》中，他通过炼金术获得了永生，化身为乌鸦。</p><p>作为锈湖世界中仅次于 Mr. Owl 的重要存在，Mr. Crow 游走于各个故事线之间，有时是引导者，有时是旁观者，有时是参与者。</p><p>他与 Mr. Owl 之间存在着复杂的合作关系——两人共同维系着锈湖的秩序。</p>'
    },
    laura: {
      name: 'Laura Vanderboom',
      sub: '关键人物 · 记忆之钥',
      bg: 'url(images/Laura.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Laura Vanderboom</span> 是锈湖宇宙中最关键的人物之一。她是 Vanderboom 家族的后裔，也是多条故事线的交汇点。</p><p>Laura 的一生充满了悲剧色彩。她从小就被锈湖的力量所影响，拥有特殊的感知能力。她的死亡并非终点——她的记忆被锈湖保存，成为解开诸多谜题的关键。</p><p>在《Underground Blossom》中，玩家穿越 Laura 的记忆地铁，体验她人生的不同阶段。</p>'
    },
    dale: {
      name: 'Dale Vandermeer',
      sub: '侦探 · 调查者',
      bg: 'url(images/Dale.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Dale Vandermeer</span> 是一名侦探，也是 Vandermeer 家族的后裔。他在调查一起神秘案件时被卷入了锈湖的世界。</p><p>Dale 的故事始于《Case 23》——一起看似普通的谋杀案调查，却将他引向了锈湖深处的超自然真相。他逐渐发现自己的命运与 Laura Vanderboom 紧密相连。</p>'
    },
    harvey: {
      name: 'Harvey',
      sub: '鹦鹉 · Mr. Owl 的伙伴',
      bg: 'url(images/harvey.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Harvey</span> 是一只鹦鹉，也是 Mr. Owl 最忠实的伙伴。它在多部作品中出现，有时作为可操控角色，有时作为关键线索的传递者。</p><p>Harvey 曾属于 Laura Vanderboom，在她去世后辗转来到锈湖旅馆。它似乎能感知到普通人无法察觉的事物，经常在关键时刻发出警告或提示。</p>'
    },
    william: {
      name: 'William Vanderboom',
      sub: '家族始祖 · 炼金术士',
      bg: 'url(images/long.png) center/cover no-repeat',
      desc: '<p><span class="highlight">William Vanderboom</span> 是 Vanderboom 家族的始祖，生活在 19 世纪。他是一名炼金术士，对锈湖的秘密有着浓厚的兴趣。</p><p>William 的研究和实验为整个家族的命运埋下了伏笔。他的炼金术笔记和配方成为后代解开锈湖之谜的重要线索。</p><p>在《Roots》中，William 的故事是整个家族传奇的起点。</p>'
    },
    bob: {
      name: 'Bob',
      sub: '旅馆客人 · 受困者',
      bg: 'url(images/bob.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Bob</span> 是锈湖旅馆的一位客人，也是《Case 23》中的关键人物。他的死亡案件是 Dale 侦探调查的起点。</p><p>Bob 与 Laura 是前任关系。他的故事揭示了锈湖旅馆的黑暗面——这里不仅是超自然力量的汇聚之地，也是无辜者陷入困境的陷阱。</p>'
    },
    rose: {
      name: 'Rose Vanderboom',
      sub: '家族后裔 · 命运承担者',
      bg: 'url(images/rose.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Rose Vanderboom</span> 是 Vanderboom 家族的后裔，她在家族的衰落时期承担起了延续血脉和探寻真相的重任。</p><p>Rose 的故事充满了牺牲与坚韧。她不仅要面对家族内部的复杂关系，还要应对锈湖力量带来的超自然威胁。</p>'
    },
    albert: {
      name: 'Albert Vanderboom',
      sub: 'Vanderboom家族后裔 · 孤僻之子',
      bg: 'url(images/Albert.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Albert Vanderboom</span> 是 Vanderboom 家族的重要后裔，James Vanderboom 与 Mary 之子。他性格内向孤僻，人生轨迹与家族命运深度交织。</p><p>Albert 的一生笼罩在家族的阴影之下。作为 Vanderboom 家族的一员，他无法逃脱锈湖力量对家族的侵蚀与操控。他的经历折射出这个家族世代相传的悲剧宿命。</p><p>在《Roots》中，Albert 的故事线展现了家族衰落时期一个成员的挣扎与无奈，是理解 Vanderboom 家族全貌不可或缺的一环。</p>'
    },
    frank: {
      name: 'Frank Vanderboom',
      sub: '被囚禁者 · 困兽',
      bg: 'url(images/Frank.png) center/cover no-repeat',
      desc: '<p><span class="highlight">Frank Vanderboom</span> 是 Vanderboom 家族中命运最为悲惨的成员之一。他被囚禁在地下，度过了漫长的岁月。</p><p>在《Roots》中，Frank 的困境是玩家需要解决的核心谜题之一。他的获救方式出人意料，也揭示了锈湖力量的另一面。</p><p>Frank 的经历象征着 Vanderboom 家族的悲剧命运——被锈湖的力量所困，却无法挣脱。</p>'
    }
  };

  function closeDetail(){
    detail.classList.remove('open');
    document.body.style.overflow = '';
  }
  detailClose.addEventListener('click', closeDetail);
  detail.addEventListener('click', e => { if(e.target === detail) closeDetail(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDetail(); });

  // 初始化：第一张展开
  activate(0);
})();