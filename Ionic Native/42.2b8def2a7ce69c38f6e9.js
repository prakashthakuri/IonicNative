(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{S3lr:function(t,e,n){"use strict";n.r(e),n.d(e,"IonMenu",function(){return a}),n.d(e,"IonMenuButton",function(){return l}),n.d(e,"IonMenuController",function(){return w}),n.d(e,"IonMenuToggle",function(){return y});var i=n("gDZG"),s=n("ybXd"),o=n("vr+h");class a{constructor(){this.lastOnEnd=0,this.blocker=o.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,e){const n=this.contentEl;n&&(void 0!==e&&n.classList.remove(`menu-content-${e}`),n.classList.add(`menu-content-${t}`),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(s.g)(this.win,this.side)}swipeGestureChanged(){this.updateState()}async componentWillLoad(){if(void 0===this.type&&(this.type=this.config.get("menuType","ios"===this.mode?"reveal":"overlay")),this.isServer)return void(this.disabled=!0);const t=this.menuCtrl=await this.lazyMenuCtrl.componentOnReady().then(t=>t._getInstance()),e=this.el.parentNode,i=void 0!==this.contentId?this.doc.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]");i&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),this.gesture=(await Promise.resolve().then(n.bind(null,"vr+h"))).createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}componentDidUnload(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return this.menuCtrl._setOpen(this,t,e)}async _setOpen(t,e=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await this.menuCtrl._createAnimation(this.type,this))}async startAnimation(t,e){const n=this.animation.reverse(!t);e?await n.playAsync():n.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&(e=t.currentX,n=this.maxEdgeStart,this.isEndSide?e>=this.win.innerWidth-n:e<=n));var e,n}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():Object(s.h)(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void Object(s.h)(!1,"isAnimating has to be true");const e=r(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(e/this.width)}onEnd(t){if(!this.isAnimating||!this.animation)return void Object(s.h)(!1,"isAnimating has to be true");const e=this._isOpen,n=this.isEndSide,i=r(t.deltaX,e,n),o=this.width,a=i/o,c=t.velocityX,d=o/2,h=c>=0&&(c>.2||t.deltaX>d),l=c<=0&&(c<-.2||t.deltaX<-d),u=e?n?h:l:n?l:h;let m=!e&&u;e&&!u&&(m=!0);const p=(u?1-a:a)*o;let g=0;if(p>5){const t=p/Math.abs(c);g=Math.min(t,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(()=>this.afterAnimation(m),{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(u,a,g)}beforeAnimation(t){Object(s.h)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(c),this.backdropEl&&this.backdropEl.classList.add(d),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){Object(s.h)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"click",t),t?(this.contentEl&&this.contentEl.classList.add(h),this.ionDidOpen.emit()):(this.el.classList.remove(c),this.contentEl&&this.contentEl.classList.remove(h),this.backdropEl&&this.backdropEl.classList.remove(d),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),Object(s.h)(!this.isAnimating,"can not be animating")}forceClosing(){Object(s.h)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)}hostData(){const{isEndSide:t,type:e,disabled:n,isPaneVisible:i}=this;return{role:"complementary",class:{[`${this.mode}`]:!0,[`menu-type-${e}`]:!0,"menu-enabled":!n,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":i}}}render(){return[Object(i.b)("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},Object(i.b)("slot",null)),Object(i.b)("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1})]}static get is(){return"ion-menu"}static get encapsulation(){return"shadow"}static get properties(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionWillOpen",method:"ionWillOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionWillClose",method:"ionWillClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidOpen",method:"ionDidOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidClose",method:"ionDidClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"click",method:"onBackdropClick",capture:!0,disabled:!0}]}static get style(){return".sc-ion-menu-ios-h{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}.show-menu.sc-ion-menu-ios-h{display:block}.menu-inner.sc-ion-menu-ios{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl].sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios, [dir=rtl]   .sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}.menu-side-start.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{--ion-safe-area-right:0px;right:auto;left:0}.menu-side-end.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop.sc-ion-menu-ios{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner.sc-ion-menu-ios{--width:264px}}.menu-type-reveal.sc-ion-menu-ios-h{z-index:0}.menu-type-reveal.show-menu.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-type-overlay.sc-ion-menu-ios-h{z-index:80}.menu-type-overlay.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block;cursor:pointer}.menu-pane-visible.sc-ion-menu-ios-h   .menu-inner.sc-ion-menu-ios{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.menu-pane-visible.sc-ion-menu-ios-h   ion-backdrop.sc-ion-menu-ios{display:hidden!important}.menu-type-push.sc-ion-menu-ios-h{z-index:80}.menu-type-push.sc-ion-menu-ios-h   .show-backdrop.sc-ion-menu-ios{display:block}"}static get styleMode(){return"ios"}}function r(t,e,n){return Math.max(0,e!==n?-t:t)}const c="show-menu",d="show-backdrop",h="menu-content-open";class l{constructor(){this.autoHide=!0}hostData(){return{class:{[`${this.mode}`]:!0,button:!0,"ion-activatable":!0}}}render(){const t=this.config.get("menuIcon","menu");return Object(i.b)("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},Object(i.b)("button",{type:"button"},Object(i.b)("slot",null,Object(i.b)("ion-icon",{icon:t,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&Object(i.b)("ion-ripple-effect",{type:"unbounded"})))}static get is(){return"ion-menu-button"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-menu-button-ios-h{color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button.sc-ion-menu-button-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:none;background:transparent;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button.sc-ion-menu-button-ios, ion-icon.sc-ion-menu-button-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0}ion-icon.sc-ion-menu-button-ios{padding-top:0;padding-bottom:0;pointer-events:none}.ion-color.sc-ion-menu-button-ios-h   .button-native.sc-ion-menu-button-ios{color:var(--ion-color-base)}.sc-ion-menu-button-ios-h{--color:var(--ion-color-primary,#3880ff)}.activated.sc-ion-menu-button-ios-h{opacity:.4}button.sc-ion-menu-button-ios{padding-left:5px;padding-right:5px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){button.sc-ion-menu-button-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:5px;padding-inline-start:5px;-webkit-padding-end:5px;padding-inline-end:5px}}ion-icon.sc-ion-menu-button-ios{font-size:31px}"}static get styleMode(){return"ios"}}function u(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}const m=8;function p(t,e,n){let i,s;const o=n.width+m;n.isEndSide?(i=o+"px",s="0px"):(i=-o+"px",s="0px");const a=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,s),r=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return u(t).then(t=>t.add(a).add(r))}function g(t,e,n){let i,s;const o=n.width;n.isEndSide?(i=-o+"px",s=o+"px"):(i=o+"px",s=-o+"px");const a=(new t).addElement(n.menuInnerEl).fromTo("translateX",s,"0px"),r=(new t).addElement(n.contentEl).fromTo("translateX","0px",i),c=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return u(t).then(t=>t.add(a).add(c).add(r))}function b(t,e,n){const i=n.width*(n.isEndSide?-1:1)+"px",s=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return u(t).then(t=>t.add(s))}class w{constructor(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",b),this.registerAnimation("push",g),this.registerAnimation("overlay",p)}async open(t){const e=await this.get(t);return!!e&&e.open()}async close(t){const e=await(void 0!==t?this.get(t):this.getOpen());return void 0!==e&&e.close()}async toggle(t){const e=await this.get(t);return!!e&&e.toggle()}async enable(t,e){const n=await this.get(e);return n&&(n.disabled=!t),n}async swipeGesture(t,e){const n=await this.get(e);return n&&(n.swipeGesture=t),n}async isOpen(t){if(null!=t){const e=await this.get(t);return void 0!==e&&e.isOpen()}return void 0!==await this.getOpen()}async isEnabled(t){const e=await this.get(t);return!!e&&!e.disabled}async get(t){return await this.waitUntilReady(),"start"===t||"end"===t?this.find(e=>e.side===t&&!e.disabled)||this.find(e=>e.side===t):null!=t?this.find(e=>e.menuId===t):this.find(t=>!t.disabled)||(this.menus.length>0?this.menus[0].el:void 0)}async getOpen(){return await this.waitUntilReady(),this.getOpenSync()}async getMenus(){return await this.waitUntilReady(),this.getMenusSync()}async isAnimating(){return await this.waitUntilReady(),this.isAnimatingSync()}registerAnimation(t,e){this.menuAnimations.set(t,e)}_getInstance(){return Promise.resolve(this)}_register(t){const e=this.menus;e.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),e.push(t))}_unregister(t){const e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)}_setActiveMenu(t){const e=t.side;this.menus.filter(n=>n.side===e&&n!==t).forEach(t=>t.disabled=!0)}async _setOpen(t,e,n){if(this.isAnimatingSync())return!1;if(e){const e=await this.getOpen();e&&t.el!==e&&await e.setOpen(!1,!1)}return t._setOpen(e,n)}async _createAnimation(t,e){const i=this.menuAnimations.get(t);if(!i)throw new Error("animation not registered");const s=await n.e(1).then(n.bind(null,"/Uz0")).then(t=>t.create(i,null,e));return this.config.getBoolean("animated",!0)||s.duration(0),s}getOpenSync(){return this.find(t=>t._isOpen)}getMenusSync(){return this.menus.map(t=>t.el)}isAnimatingSync(){return this.menus.some(t=>t.isAnimating)}find(t){const e=this.menus.find(t);if(void 0!==e)return e.el}waitUntilReady(){return Promise.all(Array.from(this.doc.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()))}static get is(){return"ion-menu-controller"}static get properties(){return{_getInstance:{method:!0},close:{method:!0},config:{context:"config"},doc:{context:"document"},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}}static get style(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}}class y{constructor(){this.visible=!1,this.autoHide=!0}componentDidLoad(){return this.updateVisibility()}async onClick(){const t=await f(this.doc);t&&await t.get(this.menu)&&t.toggle(this.menu)}async updateVisibility(){const t=await f(this.doc);if(t){const e=await t.get(this.menu);if(e&&await e.isActive())return void(this.visible=!0)}this.visible=!1}hostData(){const t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{[`${this.mode}`]:!0,"menu-toggle-hidden":t}}}render(){return Object(i.b)("slot",null)}static get is(){return"ion-menu-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}}static get listeners(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]}static get style(){return".menu-toggle-hidden.sc-ion-menu-toggle-h{display:none}"}}function f(t){const e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}}}]);