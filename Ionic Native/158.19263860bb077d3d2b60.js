(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{wFLr:function(e,t,o){"use strict";o.r(t),o.d(t,"IonPopover",function(){return v}),o.d(t,"IonPopoverController",function(){return f});var n=o("gDZG"),i=o("41Ev"),r=o("FEEj"),s=o("mXPe"),a=(o("pIOj"),o("b556"));function p(e,t,o){let n="top",i="left";const r=t.querySelector(".popover-content"),s=r.getBoundingClientRect(),a=s.width,p=s.height,c=t.ownerDocument.defaultView.innerWidth,d=t.ownerDocument.defaultView.innerHeight,m=o&&o.target&&o.target.getBoundingClientRect(),h=null!=m&&"top"in m?m.top:d/2-p/2,v=null!=m&&"left"in m?m.left:c/2,u=m&&m.width||0,f=m&&m.height||0,b=t.querySelector(".popover-arrow"),y=b.getBoundingClientRect(),g=y.width,w=y.height;null==m&&(b.style.display="none");const x={top:h+f,left:v+u/2-g/2},D={top:h+f+(w-1),left:v+u/2-a/2};let P=!1,k=!1;D.left<l+25?(P=!0,D.left=l):a+l+D.left+25>c&&(k=!0,D.left=c-a-l,i="right"),h+f+p>d&&h-p>0?(x.top=h-(w+1),D.top=h-p-(w-1),t.className=t.className+" popover-bottom",n="bottom"):h+f+p>d&&(r.style.bottom=l+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",r.style.top=D.top+"px",r.style.left=D.left+"px",P&&(r.style.left=`calc(${D.left}px + var(--ion-safe-area-left, 0px))`),k&&(r.style.left=`calc(${D.left}px - var(--ion-safe-area-right, 0px))`),r.style.transformOrigin=n+" "+i;const E=new e,j=new e;j.addElement(t.querySelector("ion-backdrop")),j.fromTo("opacity",.01,.08);const O=new e;return O.addElement(t.querySelector(".popover-wrapper")),O.fromTo("opacity",.01,1),Promise.resolve(E.addElement(t).easing("ease").duration(100).add(j).add(O))}const l=5;function c(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(i))}function d(e,t,o){const n=t.ownerDocument,i="rtl"===n.dir;let r="top",s=i?"right":"left";const a=t.querySelector(".popover-content"),p=a.getBoundingClientRect(),l=p.width,c=p.height,d=n.defaultView.innerWidth,h=n.defaultView.innerHeight,v=o&&o.target&&o.target.getBoundingClientRect(),u=null!=v&&"bottom"in v?v.bottom:h/2-c/2,f=v&&v.height||0,b={top:u,left:null!=v&&"left"in v?i?v.left-l+v.width:v.left:d/2-l/2};b.left<m?(b.left=m,s="left"):l+m+b.left>d&&(b.left=d-l-m,s="right"),u+f+c>h&&u-c>0?(b.top=u-c-f,t.className=t.className+" popover-bottom",r="bottom"):u+f+c>h&&(a.style.bottom=m+"px"),a.style.top=b.top+"px",a.style.left=b.left+"px",a.style.transformOrigin=r+" "+s;const y=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);const w=new e;w.addElement(t.querySelector(".popover-wrapper")),w.fromTo("opacity",.01,1);const x=new e;x.addElement(t.querySelector(".popover-content")),x.fromTo("scale",.001,1);const D=new e;return D.addElement(t.querySelector(".popover-viewport")),D.fromTo("opacity",.01,1),Promise.resolve(y.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(w).add(x).add(D))}const m=12;function h(e,t){const o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));const i=new e;return i.addElement(t.querySelector(".popover-wrapper")),i.fromTo("opacity",.99,0),n.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(i))}class v{constructor(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}onBackdropTap(){this.dismiss(void 0,i.a)}lifecycle(e){const t=this.usersElement,o=u[e.type];if(t&&o){const n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}}async present(){if(this.presented)return;const e=this.el.querySelector(".popover-content");if(!e)throw new Error("container is undefined");const t=Object.assign({},this.componentProps,{popover:this.el});return this.usersElement=await Object(s.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t),await Object(a.a)(this.usersElement),Object(i.c)(this,"popoverEnter",p,d,this.event)}async dismiss(e,t){const o=await Object(i.d)(this,e,t,"popoverLeave",c,h,this.event);return o&&await Object(s.b)(this.delegate,this.usersElement),o}onDidDismiss(){return Object(i.e)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(i.e)(this.el,"ionPopoverWillDismiss")}hostData(){return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(r.a)(this.cssClass),{[`${this.mode}`]:!0,"popover-translucent":this.translucent})}}render(){return[Object(n.b)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(n.b)("div",{class:"popover-wrapper"},Object(n.b)("div",{class:"popover-arrow"}),Object(n.b)("div",{class:"popover-content"}))]}static get is(){return"ion-popover"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]}static get style(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h   .popover-content.sc-ion-popover-md, [dir=rtl]   .sc-ion-popover-md-h   .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"}static get styleMode(){return"md"}}const u={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};class f{create(e){return Object(i.f)(this.doc.createElement("ion-popover"),e)}dismiss(e,t,o){return Object(i.g)(this.doc,e,t,"ion-popover",o)}async getTop(){return Object(i.h)(this.doc,"ion-popover")}static get is(){return"ion-popover-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}}}]);