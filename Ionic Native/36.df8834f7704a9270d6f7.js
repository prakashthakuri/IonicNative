(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{CBwu:function(t,e,n){"use strict";n.r(e),n.d(e,"IonRoute",function(){return s}),n.d(e,"IonRouteRedirect",function(){return c}),n.d(e,"IonRouter",function(){return k}),n.d(e,"IonRouterOutlet",function(){return E});var o=n("gDZG"),i=n("ybXd"),a=n("mXPe"),r=(n("pIOj"),n("b556"));class s{constructor(){this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],o=e?Object.keys(e):[];if(n.length===o.length){for(const i of n)if(t[i]!==e[i])return void this.onUpdate(t)}else this.onUpdate(t)}componentDidLoad(){this.ionRouteDataChanged.emit()}componentDidUnload(){this.ionRouteDataChanged.emit()}static get is(){return"ion-route"}static get properties(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}}static get events(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]}}class c{propDidChange(){this.ionRouteRedirectChanged.emit()}componentDidLoad(){this.ionRouteRedirectChanged.emit()}componentDidUnload(){this.ionRouteRedirectChanged.emit()}static get is(){return"ion-route-redirect"}static get properties(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}}static get events(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]}}const h="root",u="forward",l="back";function d(t){return"/"+t.filter(t=>t.length>0).join("/")}function p(t){if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e}const m=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function g(t){if(t)return t.matches(m)?t:t.querySelector(m)||void 0}function f(t,e){return e.find(e=>(function(t,e){const{from:n,to:o}=e;if(void 0===o)return!1;if(n.length>t.length)return!1;for(let i=0;i<n.length;i++){const e=n[i];if("*"===e)return!0;if(e!==t[i])return!1}return n.length===t.length})(t,e))}function w(t,e){const n=Math.min(t.length,e.length);let o=0;for(;o<n&&t[o].toLowerCase()===e[o].id;o++);return o}function b(t,e){const n=new y(t);let o,i=!1;for(let a=0;a<e.length;a++){const t=e[a].path;if(""===t[0])i=!0;else{for(const e of t){const t=n.next();if(":"===e[0]){if(""===t)return null;((o=o||[])[a]||(o[a]={}))[e.slice(1)]=t}else if(t!==e)return null}i=!1}}return i&&i!==(""===n.next())?null:o?e.map((t,e)=>({id:t.id,path:t.path,params:v(t.params,o[e])})):e}function v(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function R(t){let e=1,n=1;for(const o of t)for(const t of o.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e}class y{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}function C(t){return Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=S(t,"to");return{from:p(S(t,"from")),to:null==e?void 0:p(e)}})}function P(t){return function(t){const e=[];for(const n of t)D([],e,n);return e}(function t(e,n=e){return Array.from(n.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(n=>{const o=S(n,"component");if(null==o)throw new Error("component missing in ion-route");return{path:p(S(n,"url")),id:o.toLowerCase(),params:n.componentProps,children:t(e,n)}})}(t))}function S(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function D(t,e,n){const o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(const i of n.children)D(o,e,i);else e.push(o)}class k{constructor(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){var t;console.debug("[ion-router] router will load"),await(t=this.win,g(t.document.body)?Promise.resolve():new Promise(e=>{t.addEventListener("ionNavWillLoad",e,{once:!0})})),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){this.win.addEventListener("ionRouteRedirectChanged",Object(i.j)(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",Object(i.j)(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,e="forward"){t.startsWith(".")&&(t=new URL(t,this.win.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);const n=p(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)}back(){return this.win.history.back(),Promise.resolve(this.waitPromise)}printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const n=e.map(t=>t.id);console.debug(`%c ${d(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()}(P(this.el)),function(t){console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${d(e.from)}`,"font-weight: bold"," TO: ",`$c ${d(e.to)}`,"font-weight: bold");console.groupEnd()}(C(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await async function(t){const e=[];let n,o=t;for(;n=g(o);){const t=await n.getRouteId();if(!t)break;o=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}}(this.win.document.body),o=function(t,e){let n=null,o=0;const i=t.map(t=>t.id);for(const a of e){const t=w(i,a);t>o&&(n=a,o=t)}return n?n.map((e,n)=>({id:e.id,path:e.path,params:v(e.params,t[n]&&t[n].params)})):null}(e,P(this.el));if(!o)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const i=function(t){const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const o=n.params&&n.params[t.slice(1)];if(!o)return null;e.push(o)}else""!==t&&e.push(t);return e}(o);return i?(console.debug("[ion-router] nav changed -> update URL",e,i),this.setPath(i,t),await this.safeWriteNavState(n,o,h,i,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&f(t,C(this.el))&&this.writeNavStateRoot(t,h)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),h)}historyDirection(){const t=this.win;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,n=this.lastState;return this.lastState=e,e>n?u:e<n?l:h}async writeNavStateRoot(t,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=f(t,C(this.el));let o=null;n&&(this.setPath(n.to,e),o=n.from,t=n.to);const i=function(t,e){let n=null,o=0;for(const i of e){const e=b(t,i);if(null!==e){const t=R(e);t>o&&(o=t,n=e)}}return n}(t,P(this.el));return i?this.safeWriteNavState(this.win.document.body,i,e,t,o):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,o,i,a=0){const r=await this.lock();let s=!1;try{s=await this.writeNavState(t,e,n,o,i,a)}catch(c){console.error(c)}return r(),s}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async writeNavState(t,e,n,o,i,a=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const r=this.routeChangeEvent(o,i);r&&this.ionRouteWillChange.emit(r);const s=await async function t(e,n,o,i,a=!1){try{const s=g(e);if(i>=n.length||!s)return a;await s.componentOnReady();const c=n[i],u=await s.setRouteId(c.id,c.params,o);return u.changed&&(o=h,a=!0),a=await t(u.element,n,o,i+1,a),u.markVisible&&await u.markVisible(),a}catch(r){return console.error(r),!1}}(t,e,n,a);return this.busy=!1,s&&console.debug("[ion-router] route changed",o),r&&this.ionRouteDidChange.emit(r),s}setPath(t,e){this.state++,function(t,e,n,o,i,a){let r=d([...p(e),...o]);n&&(r="#"+r),i===u?t.pushState(a,"",r):t.replaceState(a,"",r)}(this.win.history,this.root,this.useHash,t,e,this.state)}getPath(){return function(t,e,n){let o=t.pathname;if(n){const e=t.hash;o="#"===e[0]?e.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(p(e),p(o))}(this.win.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,o=d(t);return this.previousPath=o,o===n?null:{from:n,redirectedFrom:e?d(e):null,to:o}}static get is(){return"ion-router"}static get properties(){return{back:{method:!0},config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}}static get events(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]}}class E{constructor(){this.animated=!0}swipeHandlerChanged(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)}componentWillLoad(){this.ionNavWillLoad.emit()}async componentDidLoad(){this.gesture=(await Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"WYlR"))).createSwipeBackGesture(this.el,this.queue,()=>!!this.swipeHandler&&this.swipeHandler.canStart(),()=>this.swipeHandler&&this.swipeHandler.onStart(),t=>this.ani&&this.ani.progressStep(t),(t,e,n)=>{this.ani&&this.ani.progressEnd(t,e,n),this.swipeHandler&&this.swipeHandler.onEnd(t)}),this.swipeHandlerChanged()}componentDidUnload(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,e,n){const o=await this.lock();let i=!1;try{i=await this.transition(t,e,n)}catch(a){console.error(a)}return o(),i}async setRouteId(t,e,n){return{changed:await this.setRoot(t,e,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,e,n){if(this.activeComponent===t)return!1;const o=this.activeEl,i=await Object(a.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e);return this.activeComponent=t,this.activeEl=i,await this.commit(i,o,n),await Object(a.b)(this.delegate,o),!0}async transition(t,e,n={}){if(e===t)return!1;this.ionNavWillChange.emit();const{mode:o,queue:i,win:a,el:s}=this,c=this.animated&&this.config.getBoolean("animated",!0),h=this.animation||n.animationBuilder||this.config.get("navAnimation");return await Object(r.c)(Object.assign({mode:o,queue:i,animated:c,animationBuilder:h,window:a,enteringEl:t,leavingEl:e,baseEl:s,progressCallback:n.progressAnimation?t=>this.ani=t:void 0},n)),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}render(){return Object(o.b)("slot",null)}static get is(){return"ion-router-outlet"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},setRouteId:{method:!0},swipeHandler:{type:"Any",attr:"swipe-handler",watchCallbacks:["swipeHandlerChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}}}]);