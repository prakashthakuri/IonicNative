(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{WYlR:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",function(){return o}),n("gDZG");var r=n("vr+h");function o(t,e,n,o,i,c){const a=t.ownerDocument.defaultView;return Object(r.createGesture)({el:t,queue:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&n()},onStart:o,onMove:function(t){i(t.deltaX/a.innerWidth)},onEnd:function(t){const e=a.innerWidth,n=t.deltaX/e,r=t.velocityX,o=r>=0&&(r>.2||t.deltaX>e/2),i=(o?1-n:n)*e;let u=0;if(i>5){const t=i/Math.abs(r);u=Math.min(t,300)}c(o,n,u)}})}}}]);