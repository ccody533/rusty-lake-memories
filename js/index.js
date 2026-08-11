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

/* 记忆方块动画 */
const icon = document.querySelector('.hero-icon');
const faces = document.querySelectorAll('.hero-icon .face');
setInterval(() => {
  faces[0].style.transform = 'translateZ(40px)';
  faces[1].style.transform = 'rotateY(180deg) translateZ(40px)';
  faces[2].style.transform = 'rotateY(90deg) translateZ(40px)';
  faces[3].style.transform = 'rotateY(-90deg) translateZ(40px)';
  faces[4].style.transform = 'rotateX(90deg) translateZ(40px)';
  faces[5].style.transform = 'rotateX(-90deg) translateZ(40px)';
  setTimeout(() => {
    faces[0].style.transform = 'translateZ(20px)';
    faces[1].style.transform = 'rotateY(180deg) translateZ(20px)';
    faces[2].style.transform = 'rotateY(90deg) translateZ(20px)';
    faces[3].style.transform = 'rotateY(-90deg) translateZ(20px)';
    faces[4].style.transform = 'rotateX(90deg) translateZ(20px)';
    faces[5].style.transform = 'rotateX(-90deg) translateZ(20px)';
  }, 800);
}, 2000);

/* ===== 图片轮播 ===== */
(function(){
  const carousel = document.getElementById('introCarousel');
  if(!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.slide');
  const dots = carousel.querySelectorAll('.dot');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let current = 0;
  const total = slides.length;
  let autoTimer = null;

  function goTo(index){
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 20}%)`;
    dots.forEach((d,i) => d.classList.toggle('active', i === current));
  }

  function startAuto(){
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), 4000);
  }
  function stopAuto(){
    if(autoTimer){ clearInterval(autoTimer); autoTimer = null; }
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });
  dots.forEach(d => d.addEventListener('click', () => {
    goTo(parseInt(d.dataset.index));
    startAuto();
  }));

  // 鼠标悬停暂停自动播放
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  startAuto();
})();

/* ===== 视频轮播 + 目录联动 ===== */
(function(){
  const carousel = document.getElementById('videoCarousel');
  const directory = document.getElementById('videoDirectory');
  if(!carousel) return;
  const track = carousel.querySelector('.video-carousel-track');
  const slides = carousel.querySelectorAll('.video-slide');
  const dots = carousel.querySelectorAll('.v-dot');
  const prevBtn = carousel.querySelector('.v-prev');
  const nextBtn = carousel.querySelector('.v-next');
  const dirItems = directory ? directory.querySelectorAll('.video-dir-item') : [];
  let current = 0;
  const total = slides.length;

  // 切换时暂停所有非当前视频
  function pauseAllExcept(idx){
    slides.forEach((s,i) => {
      if(i !== idx){
        const iframe = s.querySelector('iframe');
        if(iframe) iframe.src = iframe.src; // 重载以停止播放
        const video = s.querySelector('video');
        if(video) video.pause();
      }
    });
  }

  function goTo(index){
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d,i) => d.classList.toggle('active', i === current));
    dirItems.forEach((d,i) => d.classList.toggle('active', i === current));
    pauseAllExcept(current);
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.index))));
  dirItems.forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.index))));
})();

/* ===== 人物关系图 ===== */
(function(){
  const canvas = document.getElementById('relationCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const tooltip = document.getElementById('relationTooltip');
  const ttName = document.getElementById('ttName');
  const ttFamily = document.getElementById('ttFamily');
  const ttDesc = document.getElementById('ttDesc');

  if(!CanvasRenderingContext2D.prototype.roundRect){
    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r){
      if(typeof r === 'number') r = [r,r,r,r];
      this.moveTo(x+r[0], y);
      this.lineTo(x+w-r[1], y);
      this.arcTo(x+w, y, x+w, y+r[1], r[1]);
      this.lineTo(x+w, y+h-r[2]);
      this.arcTo(x+w, y+h, x+w-r[2], y+h, r[2]);
      this.lineTo(x+r[3], y+h);
      this.arcTo(x, y+h, x, y+h-r[3], r[3]);
      this.lineTo(x, y+r[0]);
      this.arcTo(x, y, x+r[0], y, r[0]);
      this.closePath();
    };
  }

  const DPR = window.devicePixelRatio || 1;
  let W, H;

  function resize(){
    W = canvas.parentElement.clientWidth;
    H = Math.max(600, window.innerHeight - canvas.getBoundingClientRect().top)+ 300;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    layoutNodes();
    draw();
  }

  const families = {
    eilander:  { name:'Eilander 家族',  color:'#d4a855', x:0.08, y:0.08 },
    vanderboom:{ name:'Vanderboom 家族',color:'#7cab6e', x:0.10, y:0.72 },
    vandermeer:{ name:'Vandermeer 家族',color:'#6ca8d4', x:0.82, y:0.06 },
    hotel:     { name:'旅馆相关',       color:'#c87855', x:0.52, y:0.45 },
    whitedoor: { name:'白门',           color:'#8e7cc3', x:0.88, y:0.58 },
    other:     { name:'其他',           color:'#a0a0a0', x:0.48, y:0.90 }
  };

  const nodes = [
    {id:'margaret',  name:'玛格丽特',   en:'Margaret',   fam:'eilander',  desc:'尼古拉斯与杰拉德之母'},
    {id:'nicholas',  name:'尼古拉斯',   en:'Nicholas',   fam:'eilander',  desc:'雅各布之父，转化为野猪'},
    {id:'caroline',  name:'卡罗琳',     en:'Caroline',   fam:'eilander',  desc:'尼古拉斯之妻'},
    {id:'gerard',    name:'杰拉德',     en:'Gerard',     fam:'eilander',  desc:'转化为兔子'},
    {id:'jacob',     name:'雅各布',     en:'Jacob',      fam:'eilander',  desc:'长子，转化为雉鸡'},
    {id:'elizabeth', name:'伊丽莎白',   en:'Elizabeth',  fam:'eilander',  desc:'长女，转化为鹿'},
    {id:'david',     name:'大卫',       en:'David',      fam:'eilander',  desc:'幼子'},
    {id:'william',   name:'威廉',       en:'William',    fam:'vanderboom',desc:'家族始祖，炼金术士'},
    {id:'aldous',    name:'奥尔德斯',   en:'Aldous',     fam:'vanderboom',desc:'威廉之弟，化身为乌鸦'},
    {id:'james',     name:'詹姆斯',     en:'James',      fam:'vanderboom',desc:'威廉与奥尔德斯之侄'},
    {id:'mary',      name:'玛丽',       en:'Mary',       fam:'vanderboom',desc:'詹姆斯之妻'},
    {id:'samuel',    name:'塞缪尔',     en:'Samuel',     fam:'vanderboom',desc:'詹姆斯长子'},
    {id:'albert',    name:'艾伯特',     en:'Albert',     fam:'vanderboom',desc:'詹姆斯幼子，暗恋艾达'},
    {id:'emma',      name:'爱玛',       en:'Emma',       fam:'vanderboom',desc:'詹姆斯长女，花粉受孕生弗兰克'},
    {id:'ida',       name:'艾达',       en:'Ida',        fam:'vanderboom',desc:'塞缪尔之妻'},
    {id:'leonard',   name:'莱昂纳德',   en:'Leonard',    fam:'vanderboom',desc:'塞缪尔与艾达之子'},
    {id:'rose',      name:'罗斯',       en:'Rose',       fam:'vanderboom',desc:'家族后裔'},
    {id:'frank',     name:'弗兰克',     en:'Frank',      fam:'vanderboom',desc:'被囚禁者'},
    {id:'laura',     name:'劳拉',       en:'Laura',      fam:'vanderboom',desc:'关键人物，威廉合成'},
    {id:'grandpa',   name:'祖父',       en:'Grandfather',fam:'vandermeer',desc:'杀害父亲'},
    {id:'father',    name:'父亲',       en:'Father',     fam:'vandermeer',desc:'被祖父杀害'},
    {id:'mother',    name:'母亲',       en:'Mother',     fam:'vandermeer',desc:'戴尔之母'},
    {id:'dale',      name:'戴尔',       en:'Dale',       fam:'vandermeer',desc:'侦探，被猫头鹰培养'},
    {id:'owl',       name:'猫头鹰',     en:'Mr. Owl',    fam:'hotel',     desc:'锈湖守护者'},
    {id:'crow',      name:'乌鸦',       en:'Mr. Crow',   fam:'hotel',     desc:'奥尔德斯化身'},
    {id:'harvey',    name:'哈维',       en:'Harvey',     fam:'hotel',     desc:'鹦鹉，旅馆员工'},
    {id:'toad',      name:'蟾蜍',       en:'Toad',       fam:'hotel',     desc:'旅馆员工'},
    {id:'bat',       name:'蝙蝠',       en:'Bat',        fam:'hotel',     desc:'旅馆员工'},
    {id:'bob',       name:'鲍勃',       en:'Bob',        fam:'hotel',     desc:'旅馆客人，与劳拉是前任'},
    {id:'sarah',     name:'莎拉·怀特',  en:'Sarah White', fam:'whitedoor',desc:'白门员工，给鲍勃清除记忆'},
    {id:'jgrant',    name:'J. Grant',   en:'J. Grant',   fam:'whitedoor',desc:'白门员工'},
    {id:'oldwoman',  name:'老太太',     en:'Old Woman',  fam:'other',     desc:'与奥尔德斯疑似情侣'},
    {id:'pigeon',    name:'鸽子',       en:'Pigeon',     fam:'other',     desc:'玛格丽特转化'},
    {id:'deer',      name:'鹿',         en:'Deer',       fam:'other',     desc:'伊丽莎白转化'},
    {id:'pig',       name:'野猪',       en:'Pig',        fam:'other',     desc:'尼古拉斯转化'},
    {id:'rabbit',    name:'兔子',       en:'Rabbit',     fam:'other',     desc:'杰拉德转化'},
    {id:'pheasant',  name:'雉鸡',       en:'Pheasant',   fam:'other',     desc:'雅各布转化'},
    {id:'dog',       name:'狗',         en:'Dog',        fam:'other',     desc:'詹姆斯的狗，被试药'},
    {id:'cat',       name:'猫',         en:'Cat',        fam:'other',     desc:'戴尔家族的猫'}
  ];

  const edges = [
    {from:'margaret',to:'nicholas', type:'blood', label:'母子'},
    {from:'margaret',to:'gerard',   type:'blood', label:'母子'},
    {from:'nicholas',to:'caroline', type:'blood', label:'夫妻'},
    {from:'nicholas',to:'jacob',    type:'blood', label:'父子'},
    {from:'nicholas',to:'elizabeth',type:'blood', label:'父女'},
    {from:'nicholas',to:'david',    type:'blood', label:'父子'},
    {from:'caroline',to:'jacob',    type:'blood', label:'母子'},
    {from:'margaret',to:'pigeon',   type:'transform',label:'献祭转化'},
    {from:'nicholas',to:'pig',      type:'transform',label:'献祭转化'},
    {from:'gerard',  to:'rabbit',   type:'transform',label:'献祭转化'},
    {from:'jacob',   to:'pheasant', type:'transform',label:'献祭转化'},
    {from:'elizabeth',to:'deer',   type:'transform',label:'献祭转化'},
    {from:'william', to:'aldous',   type:'blood', label:'兄弟'},
    {from:'james',   to:'mary',     type:'blood', label:'夫妻'},
    {from:'james',   to:'samuel',   type:'blood', label:'父子'},
    {from:'james',   to:'albert',   type:'blood', label:'父子'},
    {from:'james',   to:'emma',     type:'blood', label:'父女'},
    {from:'mary',    to:'samuel',   type:'blood', label:'母子'},
    {from:'samuel',  to:'ida',      type:'blood', label:'夫妻'},
    {from:'samuel',  to:'leonard',  type:'blood', label:'父子'},
    {from:'ida',     to:'leonard',  type:'blood', label:'母子'},
    {from:'emma',    to:'frank',    type:'blood', label:'花粉受孕'},
    {from:'albert',  to:'ida',      type:'love',     label:'暗恋'},
    {from:'albert',  to:'frank',    type:'kill',     label:'杀害'},
    {from:'rose',    to:'frank',    type:'employ',   label:'解救'},
    {from:'ida',     to:'leonard',  type:'kill',     label:'杀害'},
    {from:'william', to:'laura',    type:'transform',label:'合成'},
    {from:'aldous',  to:'crow',     type:'transform',label:'喂药转化'},
    {from:'aldous',  to:'dog',      type:'transform',label:'试药'},
    {from:'laura',   to:'samuel',   type:'love',     label:'前任'},
    {from:'laura',   to:'albert',   type:'love',     label:'前任'},
    {from:'grandpa', to:'father',   type:'kill',     label:'杀害'},
    {from:'father',  to:'mother',   type:'blood', label:'夫妻'},
    {from:'father',  to:'dale',     type:'blood', label:'父子'},
    {from:'mother',  to:'dale',     type:'blood', label:'母子'},
    {from:'dale',    to:'owl',      type:'employ',   label:'培养'},
    {from:'pigeon',  to:'grandpa',  type:'kill',     label:'反杀'},
    {from:'owl',     to:'crow',     type:'employ',   label:'协作'},
    {from:'owl',     to:'toad',     type:'employ',   label:'雇佣'},
    {from:'owl',     to:'bat',      type:'employ',   label:'雇佣'},
    {from:'owl',     to:'harvey',   type:'employ',   label:'雇佣'},
    {from:'bob',     to:'laura',    type:'love',     label:'前任'},
    {from:'bob',     to:'laura',    type:'employ',   label:'杀死/放走'},
    {from:'jgrant',  to:'bob',      type:'transform',label:'清除记忆'},
    {from:'sarah',   to:'harvey',   type:'employ',   label:'送信'},
    {from:'oldwoman',to:'aldous',   type:'love',     label:'疑似情侣'},
    {from:'oldwoman',to:'deer',     type:'kill',     label:'杀害'},
    {from:'crow',    to:'owl',      type:'employ',   label:'协助'}
  ];

  let nodeMap = {};

  function layoutNodes(){
    nodeMap = {};
    const pad = 80;
    const usableW = W - pad * 2;
    const usableH = H - pad * 2;
    const famGroups = {};
    nodes.forEach(n => {
      if(!famGroups[n.fam]) famGroups[n.fam] = [];
      famGroups[n.fam].push(n);
    });
    Object.keys(famGroups).forEach(fkey => {
      const fam = families[fkey];
      const group = famGroups[fkey];
      const cx = pad + fam.x * usableW;
      const cy = pad + fam.y * usableH;
      const count = group.length;
      const cols = Math.ceil(Math.sqrt(count));
      const rows = Math.ceil(count / cols);
      const spacingX = Math.min(200, usableW * 0.18);
      const spacingY = Math.min(150, usableH * 0.20);
      group.forEach((n, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        n.x = cx + (col - (cols - 1) / 2) * spacingX;
        n.y = cy + (row - (rows - 1) / 2) * spacingY;
        nodeMap[n.id] = n;
      });
    });
  }

  let hoveredNode = null, selectedNode = null;
  let panX = 0, panY = 0, isPanning = false, panStartX = 0, panStartY = 0;

  function getMousePos(e){
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left - panX, y: e.clientY - rect.top - panY };
  }

  function findNodeAt(pos){
    for(let i = nodes.length - 1; i >= 0; i--){
      const n = nodes[i];
      const dx = pos.x - n.x, dy = pos.y - n.y;
      if(dx*dx + dy*dy < 22*22) return n;
    }
    return null;
  }

  function getRelatedEdges(nodeId){ return edges.filter(e => e.from===nodeId||e.to===nodeId); }
  function getRelatedNodes(nodeId){
    const s = new Set([nodeId]);
    getRelatedEdges(nodeId).forEach(e => { s.add(e.from); s.add(e.to); });
    return s;
  }

  const edgeColors = {
    blood:{stroke:'#c8a86e',dash:[]}, kill:{stroke:'#c0392b',dash:[]},
    transform:{stroke:'#8e44ad',dash:[6,4]}, love:{stroke:'#e67e22',dash:[6,4]},
    employ:{stroke:'#5dade2',dash:[4,3]}
  };

  function draw(){
    ctx.clearRect(0,0,W,H);
    ctx.save();
    ctx.translate(panX, panY);

    const active = selectedNode || hoveredNode;
    const relatedNodes = active ? getRelatedNodes(active.id) : null;
    const relatedEdges = active ? new Set(getRelatedEdges(active.id)) : null;

    edges.forEach(edge => {
      const from = nodeMap[edge.from], to = nodeMap[edge.to];
      if(!from||!to) return;
      const ec = edgeColors[edge.type]||edgeColors.blood;
      const isActive = relatedEdges && relatedEdges.has(edge);
      const isDim = active && !isActive;

      ctx.beginPath();
      ctx.moveTo(from.x,from.y);
      ctx.lineTo(to.x,to.y);
      ctx.strokeStyle = isDim ? 'rgba(60,40,50,.12)' : ec.stroke;
      ctx.globalAlpha = isDim ? 1 : 0.85;
      ctx.lineWidth = isActive ? 2.5 : 1;
      ctx.setLineDash(ec.dash);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      if(!isDim){
        const angle = Math.atan2(to.y-from.y,to.x-from.x);
        const mx=(from.x+to.x)/2, my=(from.y+to.y)/2;
        const aLen=8;
        ctx.beginPath();
        ctx.moveTo(mx,my);
        ctx.lineTo(mx-aLen*Math.cos(angle-0.4),my-aLen*Math.sin(angle-0.4));
        ctx.moveTo(mx,my);
        ctx.lineTo(mx-aLen*Math.cos(angle+0.4),my-aLen*Math.sin(angle+0.4));
        ctx.strokeStyle=ec.stroke;ctx.lineWidth=1.3;ctx.stroke();
      }

      if(isActive && edge.label){
        const mx=(from.x+to.x)/2, my=(from.y+to.y)/2-10;
        ctx.font='11px "Noto Serif SC",serif';
        ctx.fillStyle=ec.stroke;ctx.textAlign='center';
        ctx.fillText(edge.label,mx,my);
      }
    });

    Object.keys(families).forEach(fkey => {
      const fam = families[fkey];
      const group = nodes.filter(n=>n.fam===fkey);
      if(!group.length) return;
      const minX=Math.min(...group.map(n=>n.x))-70;
      const maxX=Math.max(...group.map(n=>n.x))+70;
      const minY=Math.min(...group.map(n=>n.y))-70;
      const maxY=Math.max(...group.map(n=>n.y))+70;

      ctx.fillStyle=fam.color+'08';
      ctx.strokeStyle=fam.color+'20';
      ctx.lineWidth=1;
      ctx.beginPath();
      ctx.roundRect(minX,minY,maxX-minX,maxY-minY,8);
      ctx.fill();ctx.stroke();

      ctx.font='12px "Noto Serif SC",serif';
      ctx.fillStyle=fam.color+'80';
      ctx.textAlign='center';
      ctx.fillText(fam.name,(minX+maxX)/2,minY-10);
    });

    nodes.forEach(n => {
      const fam = families[n.fam];
      const isDim = active && !relatedNodes.has(n.id);
      const isTarget = active && active.id===n.id;
      const isRelated = active && relatedNodes.has(n.id) && !isTarget;

      const r = isTarget?18:isRelated?14:12;
      ctx.beginPath();
      ctx.arc(n.x,n.y,r,0,Math.PI*2);

      if(isDim){
        ctx.fillStyle='rgba(30,20,25,.4)';
        ctx.strokeStyle='rgba(60,40,50,.15)';
      } else if(isTarget){
        ctx.fillStyle=fam.color;
        ctx.strokeStyle='#fff';
        ctx.shadowColor=fam.color;ctx.shadowBlur=18;
      } else if(isRelated){
        ctx.fillStyle=fam.color+'cc';
        ctx.strokeStyle=fam.color;
      } else {
        ctx.fillStyle=fam.color+'88';
        ctx.strokeStyle=fam.color+'44';
      }

      ctx.lineWidth=isTarget?2.5:1.5;
      ctx.fill();ctx.shadowBlur=0;ctx.stroke();

      if(!isDim){
        ctx.font=(isTarget?'bold 13px':'11px')+' "Noto Serif SC",serif';
        ctx.fillStyle=isTarget?'#fff':'#d4c5a0';
        ctx.textAlign='center';
        ctx.fillText(n.name,n.x,n.y+r+16);
      }
    });
    ctx.restore();
  }

  canvas.addEventListener('mousemove', e => {
    if(isPanning){
      panX=e.clientX-panStartX;panY=e.clientY-panStartY;
      draw();return;
    }
    const pos=getMousePos(e);
    const node=findNodeAt(pos);
    if(node!==hoveredNode){
      hoveredNode=node;
      canvas.style.cursor=node?'pointer':'grab';
      draw();
      if(node){
        const fam=families[node.fam];
        ttName.textContent=node.name+(node.en?' · '+node.en:'');
        ttFamily.textContent=fam.name;
        ttDesc.textContent=node.desc;
        tooltip.style.left=(e.clientX+16)+'px';
        tooltip.style.top=(e.clientY-20)+'px';
        tooltip.classList.add('show');
      } else {
        tooltip.classList.remove('show');
      }
    }
  });

  canvas.addEventListener('mousedown', e => {
    const pos=getMousePos(e);
    const node=findNodeAt(pos);
    if(node){
      selectedNode=selectedNode===node?null:node;
      draw();
    } else {
      isPanning=true;
      panStartX=e.clientX-panX;panStartY=e.clientY-panY;
      canvas.style.cursor='grabbing';
    }
  });

  canvas.addEventListener('mouseup', () => {
    isPanning=false;
    canvas.style.cursor=hoveredNode?'pointer':'grab';
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredNode=null;isPanning=false;
    tooltip.classList.remove('show');draw();
  });

  canvas.addEventListener('touchstart', e => {
    const touch=e.touches[0];
    const rect=canvas.getBoundingClientRect();
    const pos={x:touch.clientX-rect.left-panX,y:touch.clientY-rect.top-panY};
    const node=findNodeAt(pos);
    if(node){
      selectedNode=selectedNode===node?null:node;
      hoveredNode=node;draw();
      const fam=families[node.fam];
      ttName.textContent=node.name+(node.en?' · '+node.en:'');
      ttFamily.textContent=fam.name;
      ttDesc.textContent=node.desc;
      tooltip.style.left=(touch.clientX+16)+'px';
      tooltip.style.top=(touch.clientY-20)+'px';
      tooltip.classList.add('show');
      setTimeout(()=>tooltip.classList.remove('show'),2500);
    }
  },{passive:true});

  resize();
  window.addEventListener('resize',resize);
})();