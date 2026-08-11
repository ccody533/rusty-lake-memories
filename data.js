/* ===== Shared Works Data & Utilities ===== */

const WORKS_IMG_BASE = '../mywork/images/';
const WORKS_DEFAULT_IMG = WORKS_IMG_BASE;

const WORKS = [
  // 主线作品
  {
    id:'hotel', name:'锈湖：旅馆', nameEn:'Rusty Lake Hotel',
    date:'2015年12月', type:'主线', category:'主线作品',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG + '旅馆.jpg',
    desc:'欢迎我们的客人来到锈湖酒店，确保他们拥有愉快的住宿体验。本周将有5场晚宴。确保每一顿晚餐都值得为之赴死！六位动物客人将入住Rusty Lake Hotel，你需要在晚餐前为每位客人准备一道"特别"的菜肴。',
    feature:'每个客人都有一道完美料理，想了解动物角色形象设计，请游玩Rusty Lake Paradise。',
    reason:'Rusty Lake系列开山之作，奠定锈湖宇宙的世界观。六个房间六个谜题，叙事与解谜完美融合，解密思路不同寻常。',
    platforms:'PC / iOS / Android',
    lore:'旅馆坐落于锈湖中的小岛上，六位动物客人受邀前来，却不知等待他们的是怎样的命运。'
  },
  {
    id:'roots', name:'锈湖：根源', nameEn:'Rusty Lake Roots',
    date:'2016年10月', type:'主线', category:'主线作品',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ 'new.png',
    desc:'詹姆斯·范德布姆的生活发生了巨大变化，因为他在继承的房子花园里种下一颗特殊的种子。通过解锁生命之树中的肖像来扩展你的血脉。追溯 Vanderboom 家族三代人的命运轮回。从1860年到1935年，每个时间节点都藏着家族的秘密，树根蔓延之处皆是因果。',
    feature:'所谓根源，将以家族树设计为玩家展示，跨越75年的因果链。33个时间节点构成庞大的叙事网络，每次游玩都能发现新的关联。',
    reason:'Rusty Lake系列中叙事最宏大的一部，常被玩家戏称为游戏界的“百年孤独”，是剧情爱好者最佳入门作品。',
    platforms:'PC / iOS / Android',
    lore:'从 James 和 Mary 的结合开始，到 Albert 的疯狂实验，家族的命运与锈湖的力量纠缠不清。'
  },
  {
    id:'paradise', name:'锈湖：天堂岛', nameEn:'Rusty Lake Paradise',
    date:'2018年1月', type:'主线', category:'主线作品',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ '天堂.jpg',
    desc:'Jakob Eilander 回到天堂岛寻找母亲，却发现岛上正经历十灾的诅咒。雅各布是艾兰德家族的长子，母亲去世后正返回天堂岛。自从她神秘去世后，岛屿似乎被十灾诅咒。寻找母亲隐藏的记忆，参与奇异的家族仪式以阻止瘟疫。',
    feature:'天堂岛是 Eilander 家族的领地，十灾主题关卡设计，视觉风格最为华丽，其中各个小游戏都暗示了各个人物的结局。',
    reason:'每一灾的解谜都与灾厄主题深度绑定，以神话暗喻家族悲剧交织。',
    platforms:'PC / iOS / Android',
    lore:'母亲 Caroline 的牺牲、Jakob 的回归、以及十灾的诅咒，都与锈湖深处的力量有关。'
  },
  {
    id:'whitedoor', name:'白门', nameEn:'Rusty Lake: The White Door',
    date:'2020年1月', type:'主线', category:'主线作品',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ 'The White Door.jpg',
    desc:'Robert在精神卫生中心醒来，每天遵循严格的日程表。白天的现实与梦境的碎片交错，你必须帮他找回失去的记忆。',
    feature:'分屏叙事手法惊艳，日程表机制与记忆拼图的结合。左侧是现实的日常流程，右侧是梦境的记忆碎片，双线交织。',
    reason:'Rusty Lake系列风格中最独特的一部，分屏叙事，日程表机制与记忆拼图的结合，让玩家身临其境在秩序与混乱之间感受主角的精神世界。',
    platforms:'PC / iOS / Android',
    lore:'Robert他的记忆被提取、打散，困在白门精神卫生中心。在这里，现实与记忆的边界模糊不清。'
  },
  {
    id:'underground', name:'地铁繁花', nameEn:'Rusty Lake: Underground Blossom',
    date:'2023年9月', type:'主线', category:'主线作品',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG + '繁花2.jpg',
    desc:'Laura Vanderboom 的人生如同一列地铁，每一站都是她生命中的一个节点。从童年到终章，在锈湖地铁中穿越她的一生。深入锈湖地下世界，穿越劳拉·范德布姆的生活与记忆！ 从一个车站到另一个车站，每个地铁站都象征着劳拉过去和未来的一部分。解开各种谜题，找到正确的地铁搭乘，揭开劳拉的时间线之一，同时帮助她理解自己的人生，逃离心灵的腐化！',
    feature:'地铁站与人生节点的隐喻设计极为精巧，每一站都有独特的视觉主题和情感基调。',
    reason:'Rusty Lake系列最新主线作品，联动外传Cube Escape有超难隐藏关卡哦。',
    platforms:'PC / iOS / Android',
    lore:'Laura她的出生、童年、成长、爱情与悲剧，都在锈湖地铁的每一站中缓缓展开。'
  },
  {
    id:'pastwithin', name:'内在昔日', nameEn:'The Past Within',
    date:'2022年11月', type:'主线', category:'主线作品',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ '双人.jpeg',
    desc:'和你认为值得信赖的人一起玩：一个在过去，另一个在未来。观察并传达你周围所见。解开谜题，揭开阿尔伯特·范德布姆的计划。两位玩家分别处于过去和未来，通过交流线索合作解谜。',
    feature:'过去与未来的视角差异设计，一人看到的是因，另一人看到的是果。',
    reason:'最大胆的创新，双人合作解谜独一无二，与朋友一起玩的体验远超预期哦。',
    platforms:'PC / iOS / Android / Nintendo Switch',
    lore:'Rosalie 和 Albert 的故事在时间的两端展开，过去的选择影响未来，未来的线索揭示过去，因果在此完美闭环。'
  },
  {
    id:'Servant', name:'湖之仆从', nameEn:'Servant of the Lake',
    date:'2026年8月', type:'主线', category:'主线作品',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ 'Servant of the Lake.jpg',
    desc:'开启你的新工作，成为神秘的Vanderboom宅邸的仆人吧。在Servant of the Lake中解开谜题，侍奉家族，并揭开他们阴暗的炼金术秘密。',
    feature:'',
    reason:'',
    platforms:'PC / iOS / Android',
    lore:''
  },
    // 外传 / Cube Escape 系列
  {
    id:'Paradox', name:'方块逃脱：悖论', nameEn:'Cube Escape: Paradox',
    date:'2018年9月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ '侦探.png',
    desc:'当臭名昭著的侦探戴尔·范德米尔在一个阴森的房间里醒来，却对过去毫无记忆时，他很快发现自己卷入了一场由老对手策划的奇异游戏，必须解开越来越难的谜题，逃出房间并恢复记忆。',
    feature:'',
    reason:'',
    platforms:'PC / iOS / Android',
    lore:''
  },
  {
    id:'lake', name:'方块逃脱：湖泊', nameEn:'Cube Escape: The Lake',
    date:'2015年4月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ '湖泊.png',
    desc:'在一间破旧的小屋中，你需要解开湖畔的谜团。这是 Cube Escape 系列的第一部作品，简短但奠定了整个系列的解谜基调。你在锈湖的一个小岛上发现了一座废弃的小木屋。你能找到的只有一些渔具、一把刀和一根撬棍。 开始探索，我们一起钓鱼吧！也许你能改变你的命运...... 点击箭头进入小屋内。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。',
    feature:'体量小巧但氛围完整，湖中钓鱼的机制暗藏玄机。',
    reason:'一切的起点。湖中钓出的神秘物品暗示了后续庞大的世界观，是了解系列风格的最佳试玩。',
    platforms:'PC / iOS / Android',
    lore:'锈湖畔的小屋，一个女人被困于此————湖水中的秘密，从这里开始浮出水面。'
  },
  {
    id:'seasons', name:'方块逃脱：四季', nameEn:'Cube Escape: Seasons',
    date:'2015年4月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ '四季.png',
    desc:'穿越春夏秋冬四个季节，每个季节的同一个房间呈现不同的时间线————你需要在季节之间穿梭，拼凑出完整的事件真相。你将从你的第一个记忆开始，1964年春天。 它带你进入一个平静友好的房间。 房间内设有钟表、厨房和花园窗户。你的鹦鹉哈维心情不好。 探索并开始收集物品，你很快就会发现有问题。 通过在记忆方块之间开通路径来解锁其他记忆方块。也许还不算晚...... 点击箭头进入小屋内。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。',
    feature:'同一个房间，四个季节，四段记忆。试着展开魔方背后的故事和谜团。 ',
    reason:'时间线交叉解谜的经典之作————过去从未逝去，它甚至从未过去。',
    platforms:'PC / iOS / Android',
    lore:'春天的希望、夏天的躁动、秋天的衰败、冬天的绝望——时间在这里不是线性的。'
  },
  {
    id:'harvey', name:'方块逃脱：哈维的盒子', nameEn:"Cube Escape: Harvey's Box",
    date:'2015年6月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ 'box.jpg',
    desc:'1969年，哈维被困在一个盒子里，正搬去锈湖......弄清楚发生了什么，并通过解开众多谜题帮助哈维逃脱。',
    feature:'箱中世界光怪陆离，微观空间里藏着通往锈湖深处的线索。纸箱内的世界设计充满想象力，Harvey 这个角色的背景故事在此展开。',
    reason:'微观视角的创意设计，Harvey 是锈湖旅馆中出现的鹦鹉，也是系列的重要角色。',
    platforms:'PC / iOS / Android',
    lore:'它为何被困在纸箱中？箱中的世界又暗示了什么？'
  },
  {
    id:'case23', name:'方块逃脱：案件23', nameEn:'Cube Escape: Case 23',
    date:'2015年7月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ '案件23.jpg',
    desc:'侦探 Dale Vandermeer 调查一起离奇的凶杀案，死者与锈湖有着千丝万缕的联系。在《立方体逃脱：案件23》中，你需要调查一名女性的神秘死亡。收集所有证据，发现通往锈湖的门户。 点击箭头即可在立方体内导航。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。',
    feature:'侦探视角引入代入感极强，案件调查与超自然元素的碰撞，创造了独特的悬疑体验，多场景切换叙事节奏紧凑。',
    reason:'Cube Escape系列叙事张力最强的一部，调查过程穿越多个空间，真相层层剥开。',
    platforms:'PC / iOS / Android',
    lore:'侦探 Dale Vandermeer 被派去调查一起看似普通的凶杀案，却一步步被卷入锈湖的漩涡————真相远比他想象的更加可怕。'
  },
  {
    id:'mill', name:'方块逃脱：磨坊', nameEn:'Cube Escape: The Mill',
    date:'2015年9月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ 'mill.jpg',
    desc:'锈湖畔的磨坊中，机械装置运转不停。欢迎来到锈湖磨坊，克劳先生的住所。一位熟悉的客人很快就会到来，而你的任务是让那台神秘的机器运转起来。 点击箭头即可在立方体内导航。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。',
    feature:'机械解谜设计精巧，磨坊的工业美学与锈湖的自然景观形成独特对比。',
    reason:'你需要操控这些装置，揭开磨坊与锈湖之间的秘密联系。',
    platforms:'PC / iOS / Android',
    lore:'磨坊不只是磨面粉的地方————在这里，记忆被研磨、重组、提取。Mr. Crow在此操控着锈湖的记忆装置。'
  },
  {
    id:'birthday', name:'方块逃脱：生日', nameEn:'Cube Escape: Birthday',
    date:'2016年2月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ '生日.jpg',
    desc:'1939年的生日派对上，不速之客闯入了庆祝。欢迎来到你的9岁生日，1939年冬天。有蛋糕、音乐和一份神秘的礼物。然而，当一位意外的客人出现在你的派对上时，气氛很快就会改变。 点击箭头即可在立方体内导航。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。',
    feature:'在这场被搅乱的生日中，你需要找出隐藏在蛋糕和礼物背后的真相。',
    reason:'生日派对的欢乐表象下暗藏杀机，反差感极强，是主要讲述 Vanderboom 家族历史的关键章节。',
    platforms:'PC / iOS / Android',
    lore:'1939年，Vanderboom 家族的生日派对。蛋糕、蜡烛、礼物——还有不请自来的危险访客。这一天改变了家族的命运。'
  },
  {
    id:'theatre', name:'方块逃脱：剧院', nameEn:'Cube Escape: Theatre',
    date:'2016年4月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG+ 'The Mr. Rabbit Magic Show.jpg',
    desc:'锈湖剧院正在上演一出诡异的戏剧，观众席中坐着的，是活人还是亡灵？欢迎来到你心灵的剧场。今晚我们带来了一个引人入胜的节目，演员阵容熟悉。完成全部6个游戏，才能继续你的旅程。 点击箭头即可在立方体内导航。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。',
    feature:'剧院的舞台设计为解谜提供了绝佳载体。舞台上的每一幕都与观众席的秘密相连，你需要在演出中找到关键线索。',
    reason:'每一幕戏剧都是独立又关联的谜题，表演与真相的交织充满了锈湖式的黑色幽默。',
    platforms:'PC / iOS / Android',
    lore:'锈湖剧院的舞台上，正在上演一部关于记忆与遗忘的戏剧。'
  },
  {
    id:'arles', name:'方块逃脱：阿尔勒', nameEn:'Cube Escape: Arles',
    date:'2016年6月', type:'外传', category:'外传逃离方块系列',
    cover:'️', icon:'️', img: WORKS_DEFAULT_IMG+ 'Aries.png',
    desc:'阿尔勒的阳光下隐藏着通往锈湖的另一条路径。你被困在阿尔勒的卧室里。感觉就像被艺术包围了一样。探索房间，开始完成画作，寻找颜色并收集绘画材料。 点击箭头即可在立方体内导航。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。',
    feature:'在梵高的卧室中醒来，四周是熟悉的画作和陌生的谜团。艺术作品与解谜的结合浑然天成，对梵高生平的隐喻致敬独树一帜。',
    reason:'以梵高为主题的创意大胆而浪漫，艺术与现实的边界，在这里悄然消融。',
    platforms:'PC / iOS / Android',
    lore:'梵高的卧室，阿尔勒的阳光。当你凝视画作时，画作也在凝视你。'
  },
  {
    id:'cave', name:'方块逃脱：洞穴', nameEn:'Cube Escape: The Cave',
    date:'2017年3月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG + 'cave.jpg',
    desc:'一位老人即将进入一个神秘的洞穴。一位熟悉的客人需要你的帮助，然后你将越走越深地进入锈湖。 点击箭头即可在立方体内导航。 通过点击与物体互动。选择背包中找到的物品，点击屏幕上某个地方使用。深入锈湖下方的洞穴，探索地下世界的秘密。古老的壁画和神秘的装置暗示着锈湖力量的真正来源。',
    feature:'洞穴探索的纵深感营造出色，地下世界的视觉设计令人震撼，与系列主线的关联最为紧密。',
    reason:'这里似乎藏着一切谜题的最终答案，与主线rusty lake的关联最为紧密，是通往锈湖核心秘密的关键。',
    platforms:'PC / iOS / Android',
    lore:'锈湖之下，洞穴之中。古老的壁画记录着锈湖的起源，神秘的装置仍在运转。'
  },
  {
    id:'samsara', name:'轮回的房间', nameEn:'Samsara Room',
    date:'2020年5月（重制版）', type:'外传', category:'外传逃离方块系列',
    cover:'️', icon:'️', img: WORKS_DEFAULT_IMG + '轮回的房间.jpeg',
    desc:'你在一间陌生的房间中醒来，时间似乎在循环。你醒来时身处一个你从未见过的陌生房间。有很多杂七杂八的物品和家具，但缺少一样东西......一扇门，可以出去。在这款独特的点击式冒险中，通过与物品互动，找到离开房间的方法。在这个奇异超现实的地方，一切都不像表面那样，只有跳出框架思考，你才能解开谜题并逃脱。',
    feature:'每次轮回房间都会发生变化，你需要找到打破轮回的方法，轮回机制的设计先于许多同类游戏。',
    reason:'重制版的画面大幅提升，作为系列前传作品，对理解锈湖宇宙的时间线至关重要。',
    platforms:'PC / iOS / Android',
    lore:'轮回的房间，生与死的交界。在这里，灵魂在不同的形态间转化——鱼、壁虎、蜗鸟、蝴蝶。打破轮回，才能获得解脱。'
  },
  {
    id:'collection', name:'方块逃脱合集', nameEn:'Cube Escape Collection',
    date:'2020年12月', type:'外传', category:'外传逃离方块系列',
    cover:'', icon:'', img: WORKS_DEFAULT_IMG + '合集.jpeg',
    desc:'将 Cube Escape 系列早期作品合而为一的重制合集，包含全新的谜题和优化的画面。在这部经典的点击式冒险选集中，你跟随凶杀案侦探戴尔·范德米尔的轨迹，调查一名女子的死亡案，并被神秘的锈湖世界吸引。',
    feature:'新玩家的最佳入门选择，是体验系列早期作品的最佳方式。',
    reason:'合集收录的不只是游戏，更是锈湖宇宙的基石。',
    platforms:'PC / iOS / Android',
    lore:'将散落的方块拼合，记忆的全貌逐渐清晰。'
  }
];

const MAIN_WORKS = WORKS.filter(w => w.type === '主线');
const SUB_WORKS = WORKS.filter(w => w.type === '外传');

/* ===== Storage helpers ===== */
function getStorage(key, fallback){
  try{ return JSON.parse(localStorage.getItem(key)) || fallback }catch(e){ return fallback }
}
function setStorage(key, val){
  localStorage.setItem(key, JSON.stringify(val));
}

/* ===== Achievement storage ===== */
function getUnlocked(){
  return getStorage('rustylake_unlocked', []);
}
function setUnlocked(list){
  setStorage('rustylake_unlocked', list);
}
function isUnlocked(id){
  return getUnlocked().includes(id);
}
function toggleUnlock(id){
  let list = getUnlocked();
  if(list.includes(id)){
    list = list.filter(i => i !== id);
  } else {
    list.push(id);
  }
  setUnlocked(list);
  return list;
}

/* ===== Wishlist storage ===== */
function getWishlist(){
  return getStorage('rustylake_wishlist', []);
}
function setWishlist(list){
  setStorage('rustylake_wishlist', list);
}
function inWishlist(id){
  return getWishlist().some(w => w.id === id);
}

/* ===== Toast ===== */
function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ===== Particles ===== */
function initParticles(){
  const c = document.getElementById('particles');
  if(!c) return;
  const ctx = c.getContext('2d');
  let w,h,ps=[];
  function rs(){w=c.width=innerWidth;h=c.height=innerHeight}
  rs();addEventListener('resize',rs);
  class P{
    constructor(){this.r()}
    r(){this.x=Math.random()*w;this.y=Math.random()*h;this.s=Math.random()*1.5+.3;
      this.sy=-(Math.random()*.12+.02);this.sx=(Math.random()-.5)*.08;
      this.o=Math.random()*.18+.03;this.l=Math.random()*500+200;this.ml=this.l}
    u(){this.x+=this.sx;this.y+=this.sy;this.l--;if(this.l<=0||this.y<-10)this.r()}
    d(){ctx.beginPath();ctx.arc(this.x,this.y,this.s,0,Math.PI*2);
      ctx.fillStyle=`rgba(166,137,60,${this.o*(this.l/this.ml)})`;ctx.fill()}
  }
  for(let i=0;i<30;i++)ps.push(new P);
  (function lp(){ctx.clearRect(0,0,w,h);ps.forEach(p=>{p.u();p.d()});requestAnimationFrame(lp)})();
}
