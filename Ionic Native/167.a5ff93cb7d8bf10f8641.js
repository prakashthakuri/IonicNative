(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{"aN/M":function(t,e,i){"use strict";i.r(e),i.d(e,"IonVirtualScroll",function(){return p});var s=i("gDZG");const n="item",r="header",l="footer",o=0,h=1,a=2,c=2;function d(t,e){const i=function(t,e){switch(e){case n:return t.querySelector("template:not([name])");case r:return t.querySelector("template[name=header]");case l:return t.querySelector("template[name=footer]")}}(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null}function u(t,e,i,s,o,h,a,d,u,p){const g=[],m=p+u;for(let f=u;f<m;f++){const u=t[f];if(i){const e=i(u,f,t);null!=e&&g.push({i:d++,type:r,value:e,index:f,height:o,reads:c,visible:!1})}if(g.push({i:d++,type:n,value:u,index:f,height:e?e(u,f):a,reads:e?0:c,visible:!!e}),s){const e=s(u,f,t);null!=e&&g.push({i:d++,type:l,value:e,index:f,height:h,reads:2,visible:!1})}}return g}class p{constructor(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}async componentDidLoad(){const t=this.el.closest("ion-content");t?(await t.componentOnReady(),this.contentEl=t,this.scrollEl=await t.getScrollElement(),this.calcCells(),this.updateState()):console.error("virtual-scroll must be used inside ion-content")}componentDidUpdate(){this.updateState()}componentDidUnload(){this.scrollEl=void 0}onScroll(){this.updateVirtualScroll()}onResize(){this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(function(t,e,i){const s=e.find(e=>e.type===n&&e.index===t);return s?i[s.i]:-1}(t,this.cells,this.getHeightIndex()))}checkRange(t,e=-1){if(!this.items)return;const i=-1===e?this.items.length-t:e,s=function(t,e){return 0===e?0:e===(t[t.length-1].index||0)+1?t.length:t.findIndex(t=>t.index===e)}(this.cells,t),n=u(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,s,t,i);console.debug("[virtual] cells recalculated",n.length),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t}(this.cells,n,s),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,n=i;for(;n&&n!==t;)s+=n.offsetTop,n=n.parentElement;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),s=function(t,e,i){const s=e.top,n=e.bottom;let r=0;for(;r<t.length&&!(t[r]>s);r++);const l=Math.max(r-2-1,0);for(;r<t.length&&!(t[r]>=n);r++);return{offset:l,length:Math.min(r+2,t.length)-l}}(i,e);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,s)&&(this.range=s,function(t,e,i,s){for(const h of t)h.change=o,h.d=!0;const n=[],r=s.offset+s.length;for(let o=s.offset;o<r;o++){const s=i[o],r=t.find(t=>t.d&&t.cell===s);if(r){const t=e[o];t!==r.top&&(r.top=t,r.change=h),r.d=!1}else n.push(s)}const l=t.filter(t=>t.d);for(const o of n){const i=l.find(t=>t.d&&t.cell.type===o.type),s=o.i;i?(i.d=!1,i.change=a,i.cell=o,i.top=e[s]):t.push({d:!1,cell:o,visible:!0,change:a,top:e[s]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=h,t.top=-9999})}(this.virtualDom,i,this.cells,s),this.nodeRender?function(t,e,i,s){const n=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),r=n.length;let l;for(let h=0;h<i.length;h++){const c=i[h],u=c.cell;if(c.change===a){if(h<r)e(l=n[h],u,h);else{const i=d(t,u.type);(l=e(i,u,h)||i).classList.add("virtual-item"),t.appendChild(l)}l.$ionCell=u}else l=n[h];c.change!==o&&(l.style.transform=`translate3d(0,${c.top}px,0)`);const p=u.visible;c.visible!==p&&(p?l.classList.remove("virtual-loading"):l.classList.add("virtual-loading"),c.visible=p),u.reads>0&&(s(u,l),u.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=this.win.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e&&e.componentOnReady?e.componentOnReady().then(i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(console.debug(`[virtual] cell height or visibility changed ${t.height}px -> ${e}px`),t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=u(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),console.debug("[virtual] cells recalculated",this.cells.length),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){let s=t[i];for(let n=i;n<t.length;n++)t[n]=s,s+=e[n].height;return s}(this.heightIndex,this.cells,t),console.debug("[virtual] height index recalculated",this.heightIndex.length-t),this.indexDirty=1/0}enableScrollEvents(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case n:return this.renderItem(i,s);case r:return this.renderHeader(i,s);case l:return this.renderFooter(i,s)}}hostData(){return{style:{height:`${this.totalHeight}px`}}}render(){if(this.renderItem)return Object(s.b)(g,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t)))}static get is(){return"ion-virtual-scroll"}static get properties(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},checkEnd:{method:!0},checkRange:{method:!0},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}}static get listeners(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]}static get style(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}const g=({dom:t},e,i)=>i.map(e,(e,i)=>{const s=t[i],n=e.vattrs||{};let r=n.class||"";return r+="virtual-item ",s.visible||(r+="virtual-loading"),Object.assign({},e,{vattrs:Object.assign({},n,{class:r,style:Object.assign({},n.style,{transform:`translate3d(0,${s.top}px,0)`})})})})}}]);