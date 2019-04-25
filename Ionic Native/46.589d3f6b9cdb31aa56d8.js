(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{XMgH:function(t,o,e){"use strict";e.r(o),e.d(o,"IonToast",function(){return l}),e.d(o,"IonToastController",function(){return u});var s=e("gDZG"),i=e("41Ev"),a=e("FEEj");function n(t,o,e){const s=new t,i=new t,a=o.host||o,n=o.querySelector(".toast-wrapper");switch(i.addElement(n),e){case"top":i.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":const t=Math.floor(a.clientHeight/2-n.clientHeight/2);n.style.top=`${t}px`,i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(s.addElement(a).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function r(t,o,e){const s=new t,i=new t,a=o.host||o,n=o.querySelector(".toast-wrapper");switch(i.addElement(n),e){case"top":i.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(s.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function c(t,o,e){const s=new t,i=new t,a=o.host||o,n=o.querySelector(".toast-wrapper");switch(i.addElement(n),e){case"top":n.style.top="calc(8px + var(--ion-safe-area-top, 0px))",i.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(a.clientHeight/2-n.clientHeight/2);n.style.top=`${t}px`,i.fromTo("opacity",.01,1);break;default:n.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",i.fromTo("opacity",.01,1)}return Promise.resolve(s.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(i))}function d(t,o){const e=new t,s=new t,i=o.host||o,a=o.querySelector(".toast-wrapper");return s.addElement(a),s.fromTo("opacity",.99,0),Promise.resolve(e.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(s))}class l{constructor(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}async present(){await Object(i.c)(this,"toastEnter",n,c,this.position),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(void 0,"timeout"),this.duration))}dismiss(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(i.d)(this,t,o,"toastLeave",r,d,this.position)}onDidDismiss(){return Object(i.e)(this.el,"ionToastDidDismiss")}onWillDismiss(){return Object(i.e)(this.el,"ionToastWillDismiss")}getButtons(){const t=this.buttons?this.buttons.map(t=>"string"==typeof t?{text:t}:t):[];return this.showCloseButton&&t.push({text:this.closeButtonText||"Close",handler:()=>this.dismiss(void 0,"cancel")}),t}async buttonClick(t){const o=t.role;return Object(i.b)(o)?this.dismiss(void 0,o):await this.callButtonHandler(t)?this.dismiss(void 0,t.role):Promise.resolve()}async callButtonHandler(t){if(t&&t.handler)try{if(!1===await t.handler())return!1}catch(o){console.error(o)}return!0}hostData(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({[`${this.mode}`]:!0},Object(a.c)(this.color),Object(a.a)(this.cssClass),{"toast-translucent":this.translucent})}}renderButtons(t,o){if(0===t.length)return;const e={"toast-button-group":!0,[`toast-button-group-${o}`]:!0};return Object(s.b)("div",{class:e},t.map(t=>Object(s.b)("button",{type:"button",class:p(t),tabIndex:0,onClick:()=>this.buttonClick(t)},Object(s.b)("div",{class:"toast-button-inner"},t.icon&&Object(s.b)("ion-icon",{name:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===this.mode&&Object(s.b)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),o=t.filter(t=>"start"===t.side),e=t.filter(t=>"start"!==t.side),i={"toast-wrapper":!0,[`toast-${this.position}`]:!0};return Object(s.b)("div",{class:i},Object(s.b)("div",{class:"toast-container"},this.renderButtons(o,"start"),Object(s.b)("div",{class:"toast-content"},void 0!==this.header&&Object(s.b)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(s.b)("div",{class:"toast-message"},this.message)),this.renderButtons(e,"end")))}static get is(){return"ion-toast"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},buttons:{type:"Any",attr:"buttons"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-toast-ios-h{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}[dir=rtl].sc-ion-toast-ios-h + b.sc-ion-toast-ios{right:0}.overlay-hidden.sc-ion-toast-ios-h{display:none}.ion-color.sc-ion-toast-ios-h{--button-color:inherit;color:var(--ion-color-contrast)}.ion-color.sc-ion-toast-ios-h   .toast-wrapper.sc-ion-toast-ios{background:var(--ion-color-base)}.toast-wrapper.sc-ion-toast-ios{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl].sc-ion-toast-ios-h   .toast-wrapper.sc-ion-toast-ios, [dir=rtl]   .sc-ion-toast-ios-h   .toast-wrapper.sc-ion-toast-ios{left:var(--end);right:var(--start)}.toast-container.sc-ion-toast-ios{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container.sc-ion-toast-ios, .toast-content.sc-ion-toast-ios{display:-ms-flexbox;display:flex}.toast-content.sc-ion-toast-ios{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message.sc-ion-toast-ios{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group.sc-ion-toast-ios{display:-ms-flexbox;display:flex}.toast-button.sc-ion-toast-ios{outline:none;color:var(--button-color);z-index:0}.toast-icon.sc-ion-toast-ios{font-size:1.4em}.toast-button-inner.sc-ion-toast-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button.sc-ion-toast-ios:hover{cursor:pointer}}.sc-ion-toast-ios-h{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-step-600,#666);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper.sc-ion-toast-ios{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper.sc-ion-toast-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-translucent.sc-ion-toast-ios-h   .toast-wrapper.sc-ion-toast-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-wrapper.toast-top.sc-ion-toast-ios{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle.sc-ion-toast-ios{opacity:.01}.toast-wrapper.toast-bottom.sc-ion-toast-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content.sc-ion-toast-ios{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content.sc-ion-toast-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header.sc-ion-toast-ios{margin-bottom:2px;font-weight:500}.toast-button.sc-ion-toast-ios{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;color:var(--ion-color-primary,#3880ff);font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button.sc-ion-toast-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.activated.sc-ion-toast-ios{opacity:.4}@media (any-hover:hover){.toast-button.sc-ion-toast-ios:hover{opacity:.6}}"}static get styleMode(){return"ios"}}function p(t){return Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},Object(a.a)(t.cssClass))}class u{create(t){return Object(i.f)(this.doc.createElement("ion-toast"),t)}dismiss(t,o,e){return Object(i.g)(this.doc,t,o,"ion-toast",e)}async getTop(){return Object(i.h)(this.doc,"ion-toast")}static get is(){return"ion-toast-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}}}]);