import{c as C,u as T,a as _,t as y,n as S,o as i,b as a,r as u,d as c,p as X,e as N,m as f,f as m,g,F as M,h as G}from"./vendor.2292b0bf.js";const E=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}};E();const x=Symbol(),I=C({state:{player:!0,turn:!0,boardValue:"---------",wins:0,loses:0,ties:0,gameState:"menu",oponent:!0,round:""},mutations:{toogleMarker(e){e.player=!e.player},makeMove(e,{index:n,value:s}){e.boardValue=e.boardValue.slice(0,n)+s+e.boardValue.slice(n+1),e.turn=!e.turn},setGameState(e,n){switch(n){case"win":{e.wins++;break}case"lose":{e.loses++;break}case"tie":{e.ties++;break}}e.gameState=n},gamEnd(e,n){e.round=n},setOponent(e,n){e.oponent=n},resetGame(e){e.boardValue="---------",e.turn=!0,e.gameState="playing"},quitGame(e){e.boardValue="---------",e.turn=!0,e.gameState="menu",e.wins=0,e.loses=0,e.ties=0,e.player=!0,e.oponent=!0}},getters:{getPlayer(e){return e.player},getTurn(e){return e.turn},getBoardValue(e){return e.boardValue},getWins(e){return e.wins},getLoses(e){return e.loses},getTies(e){return e.ties},getGameState(e){return e.gameState},getRound(e){return e.round},getOpponent(e){return e.oponent}}});function v(){return T(x)}var p=(e,n)=>{const s=e.__vccOpts||e;for(const[l,r]of n)s[l]=r;return s};const V={props:{text:{type:String,default:"Button"},type:{type:String,default:"primary"}}};function L(e,n,s,l,r,t){return i(),_("div",{class:S(["container",s.type])},y(s.text),3)}var O=p(V,[["render",L],["__scopeId","data-v-7822f384"]]);const P={props:{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},fill:{type:String,default:"rgb(var(--green))"}}},R=["width","height"],A=["width","height"],U=a("circle",{cx:"20",cy:"20",r:"20",fill:"#C4C4C4"},null,-1),Y=[U],D={mask:"url(#mask0_5_32)"},K=["stroke"];function W(e,n,s,l,r,t){return i(),_("svg",{width:s.width,height:s.height,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("mask",{id:"mask0_5_32",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:s.width,height:s.height},Y,8,A),a("g",D,[a("path",{d:"M0 0L20 20M40 40L20 20M20 20L40 0M20 20L0 40",stroke:s.fill,"stroke-width":"10"},null,8,K)])],8,R)}var k=p(P,[["render",W]]);const q={props:{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},fill:{type:String,default:"rgb(var(--yellow))"}}},F=["width","height"],Q=["stroke"];function H(e,n,s,l,r,t){return i(),_("svg",{width:s.width,height:s.height,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("circle",{cx:"20",cy:"20",r:"15",stroke:s.fill,"stroke-width":"10"},null,8,Q)],8,F)}var $=p(q,[["render",H]]);const z={setup(){return{store:v()}},components:{XMark:k,OMark:$},data(){return{state:!0}},methods:{onClick(){this.state=!this.state,this.store.commit("toogleMarker",this.state)}},computed:{xcolor(){return this.state?"rgb(var(--background))":"rgb(var(--yellow))"},ocolor(){return this.state?"rgb(var(--yellow))":"rgb(var(--background))"},position(){return this.state?"select-left":"select-right"}}};function j(e,n,s,l,r,t){const o=u("XMark"),d=u("OMark");return i(),_("div",{class:"switch-container",onClick:n[0]||(n[0]=(...h)=>t.onClick&&t.onClick(...h))},[a("div",{class:S(["switch-select",t.position])},null,2),c(o,{class:"mark",width:60,height:60,fill:t.xcolor},null,8,["fill"]),c(d,{class:"mark",height:60,width:60,fill:t.ocolor},null,8,["fill"])])}var J=p(z,[["render",j],["__scopeId","data-v-3f7be32c"]]);const Z={components:{Switch:J}},b=e=>(X("data-v-0541305e"),e=e(),N(),e),ee={class:"container"},te=b(()=>a("div",{class:"header"},"PICK PLAYER 1'S MARK",-1)),ne=b(()=>a("div",{class:"remainder"},"REMEMBER X GOES FIRST",-1));function se(e,n,s,l,r,t){const o=u("Switch");return i(),_("div",ee,[te,c(o),ne])}var re=p(Z,[["render",se],["__scopeId","data-v-0541305e"]]);const oe={setup(){return{store:v()}},data(){return{player:!0}},components:{Button:O,SelectMark:re,XMark:k,OMark:$},methods:{handleMarker(e){this.player=e},vsPlayer(){this.store.commit("setGameState","playing"),this.store.commit("setOponent",!1)},vsCPU(){this.store.commit("setGameState","playing"),this.store.commit("setOponent",!0)}}},ae={class:"menu-view"},ie={class:"menu-container"};function ce(e,n,s,l,r,t){const o=u("XMark"),d=u("OMark"),h=u("SelectMark"),w=u("Button");return i(),_("div",ae,[a("div",ie,[a("div",null,[c(o,{width:100,height:100}),c(d,{width:100,height:100})]),c(h,{onMarker:t.handleMarker},null,8,["onMarker"]),c(w,{text:"NEW GAME (VS PLAYER)",type:"tertiary",onClick:t.vsPlayer},null,8,["onClick"])])])}var le=p(oe,[["render",ce],["__scopeId","data-v-466c971a"]]);const ue=(e,n="X")=>{e=e.replaceAll("-","*");const s=[[e[0],e[1],e[2]],[e[3],e[4],e[5]],[e[6],e[7],e[8]],[e[0],e[3],e[6]],[e[1],e[4],e[7]],[e[2],e[5],e[8]],[e[0],e[4],e[8]],[e[2],e[4],e[6]]];for(let l=0;l<s.length;l++)if(s[l].every(r=>r===n))return!0;return!1},_e=e=>e.split("").every(s=>s!=="-");const de={setup(){return{store:v()}},components:{XMark:k,OMark:$},props:{value:{type:String,default:"-"},index:{type:Number,default:0}},computed:{...f({turn:"getTurn",player:"getPlayer",board:"getBoardValue",gameState:"getGameState",oponent:"getOpponent"}),showXMark(){return this.value==="X"},showOMark(){return this.value==="O"}},methods:{onClick(){if(this.value!=="-"||this.gameState!=="playing")return;const e=this.turn?"X":"O";if(this.store.commit("makeMove",{index:this.index,value:e}),ue(this.board,this.turn?"O":"X")){this.store.commit("setGameState",this.turn?"lose":"win");return}if(_e(this.board)){this.store.commit("setGameState","tie");return}}}};function pe(e,n,s,l,r,t){const o=u("XMark"),d=u("OMark");return i(),_("div",{class:"cell-container",onClick:n[0]||(n[0]=(...h)=>t.onClick&&t.onClick(...h))},[t.showXMark?(i(),m(o,{key:0,width:"7em",height:"8em"})):g("",!0),t.showOMark?(i(),m(d,{key:1,width:"7em",height:"7em"})):g("",!0)])}var he=p(de,[["render",pe],["__scopeId","data-v-f59c1b96"]]);const me={setup(){return{store:v()}},components:{Cell:he},computed:{...f({value:"getBoardValue"})}},ve={class:"board-container"};function ge(e,n,s,l,r,t){const o=u("Cell");return i(),_("div",ve,[c(o,{value:e.value[0],index:0},null,8,["value"]),c(o,{value:e.value[1],index:1},null,8,["value"]),c(o,{value:e.value[2],index:2},null,8,["value"]),c(o,{value:e.value[3],index:3},null,8,["value"]),c(o,{value:e.value[4],index:4},null,8,["value"]),c(o,{value:e.value[5],index:5},null,8,["value"]),c(o,{value:e.value[6],index:6},null,8,["value"]),c(o,{value:e.value[7],index:7},null,8,["value"]),c(o,{value:e.value[8],index:8},null,8,["value"])])}var fe=p(me,[["render",ge],["__scopeId","data-v-0591f290"]]);const ye={setup(){return{store:v()}},computed:{...f({wins:"getWins",loses:"getLoses",ties:"getTies"})}},ke={class:"score-board-container"},$e={class:"score-board wins"},we=a("div",{class:"title"},"X (YOU)",-1),Se={class:"score"},Me={class:"score-board ties"},xe=a("div",{class:"title"},"TIES",-1),Oe={class:"score"},be={class:"score-board loses"},Be=a("div",{class:"title"},"O (CPU)",-1),Ce={class:"score"};function Te(e,n,s,l,r,t){return i(),_("div",ke,[a("div",$e,[we,a("div",Se,y(e.wins),1)]),a("div",Me,[xe,a("div",Oe,y(e.ties),1)]),a("div",be,[Be,a("div",Ce,y(e.loses),1)])])}var Xe=p(ye,[["render",Te]]);const Ne={setup(){return{store:v()}},components:{XMark:k,OMark:$},computed:{...f({turn:"getTurn"}),isXturn(){return this.turn}}},Ge={class:"turn-container"},Ee={class:"turn-mark"},Ie=a("div",{class:"turn-tex"},"TURN",-1);function Ve(e,n,s,l,r,t){const o=u("XMark"),d=u("OMark");return i(),_("div",Ge,[a("div",Ee,[t.isXturn?(i(),m(o,{key:0,fill:"rgb(var(--gray))"})):(i(),m(d,{key:1,fill:"rgb(var(--gray))"}))]),Ie])}var Le=p(Ne,[["render",Ve]]);const Pe={setup(){return{store:v()}},components:{Button:O,XMark:k,OMark:$},computed:{...f({gameState:"getGameState"}),winnerText(){if(this.gameState==="win")return"YOU WIN!";if(this.gameState==="lose")return"YOU LOSE!";if(this.gameState==="tie")return"IT'S A TIE!"},isXwinner(){return this.gameState==="win"},isOwinner(){return this.gameState==="lose"},isTie(){return this.gameState==="tie"},isBannerVisible(){return this.isXwinner||this.isOwinner||this.isTie}},methods:{onQuit(){this.store.commit("quitGame")},onNextRound(){this.store.commit("resetGame")}}},Re={key:0,class:"banner-view"},Ae={class:"banner-container"},Ue={class:"winner"},Ye={class:"takes-the-round"},De={key:2,class:"tie"},Ke={class:"buttons"};function We(e,n,s,l,r,t){const o=u("XMark"),d=u("OMark"),h=u("Button");return t.isBannerVisible?(i(),_("div",Re,[a("div",Ae,[a("div",Ue,y(t.winnerText),1),a("div",Ye,[t.isXwinner?(i(),m(o,{key:0,width:"100",height:"100"})):g("",!0),t.isOwinner?(i(),m(d,{key:1,width:"100",height:"100"})):g("",!0),t.isTie?(i(),_("div",De,"NOBODY TAKES THE ROUND!")):(i(),_("div",{key:3,class:S(e.gameState)},"TAKES THE ROUND!",2))]),a("div",Ke,[c(h,{text:"QUIT",type:"cancel",class:"quit-btn",onClick:t.onQuit},null,8,["onClick"]),c(h,{text:"NEXT ROUND",type:"secondary",class:"next-btn",onClick:t.onNextRound},null,8,["onClick"])])])])):g("",!0)}var qe=p(Pe,[["render",We],["__scopeId","data-v-3c19989c"]]);const Fe={components:{Banner:qe,Board:fe,Scoreboard:Xe,Turn:Le}},Qe={class:"game-view"},He={class:"game-container"},ze={class:"header"};function je(e,n,s,l,r,t){const o=u("Banner"),d=u("Turn"),h=u("Board"),w=u("Scoreboard");return i(),_(M,null,[c(o),a("div",Qe,[a("div",He,[a("div",ze,[c(d)]),c(h),c(w)])])],64)}var Je=p(Fe,[["render",je],["__scopeId","data-v-6676040b"]]);const Ze={setup(){return{store:v()}},components:{Menu:le,Game:Je},computed:{...f({gameState:"getGameState"}),isMenu(){return this.gameState==="menu"},isPlaying(){return this.gameState!=="menu"}}};function et(e,n,s,l,r,t){const o=u("Menu"),d=u("Game");return i(),_(M,null,[t.isMenu?(i(),m(o,{key:0})):g("",!0),t.isPlaying?(i(),m(d,{key:1})):g("",!0)],64)}var tt=p(Ze,[["render",et]]);const B=G(tt);B.use(I,x);B.mount("#app");