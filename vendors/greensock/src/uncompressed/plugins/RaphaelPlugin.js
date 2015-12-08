/*!
 * VERSION: 0.2.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=/[^\d\-\.]/g,t=Math.PI/180,n=/(\d|\.)+/g,r={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},i=function(e){return typeof e=="number"?[e>>16,e>>8&255,e&255]:e===""||e==null||e==="none"||typeof e!="string"?r.transparent:r[e]?r[e]:e.charAt(0)==="#"?(e.length===4&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),e=parseInt(e.substr(1),16),[e>>16,e>>8&255,e&255]):e.match(n)||r.transparent},s={scaleX:1,scaleY:1,tx:1,ty:1,rotation:1,shortRotation:1,skewX:1,skewY:1,scale:1},o=function(e,t){var n=e.matrix,r=1e-6,i=n.a,s=n.b,o=n.c,u=n.d,a=t?e._gsTransform||{skewY:0}:{skewY:0},f=a.scaleX<0;return a.tx=n.e-(a.ox||0),a.ty=n.f-(a.oy||0),a.scaleX=Math.sqrt(i*i+s*s),a.scaleY=Math.sqrt(u*u+o*o),a.rotation=i||s?Math.atan2(s,i):a.rotation||0,a.skewX=o||u?Math.atan2(o,u)+a.rotation:a.skewX||0,Math.abs(a.skewX)>Math.PI/2&&(f?(a.scaleX*=-1,a.skewX+=a.rotation<=0?Math.PI:-Math.PI,a.rotation+=a.rotation<=0?Math.PI:-Math.PI):(a.scaleY*=-1,a.skewX+=a.skewX<=0?Math.PI:-Math.PI)),a.rotation<r&&a.rotation>-r&&(i||s)&&(a.rotation=0),a.skewX<r&&a.skewX>-r&&(s||o)&&(a.skewX=0),t&&(e._gsTransform=a),a},u=function(e,t){return e==null?t:typeof e=="string"&&e.indexOf("=")===1?parseInt(e.charAt(0)+"1",10)*Number(e.substr(2))+t:Number(e)},a=function(n,r){var i=n.indexOf("rad")===-1?t:1,s=n.indexOf("=")===1;return n=Number(n.replace(e,""))*i,s?n+r:n},f=_gsScope._gsDefine.plugin({propName:"raphael",version:"0.2.2",API:2,init:function(t,n,r){if(!t.attr)return!1;this._target=t,this._tween=r,this._props=t._gsProps=t._gsProps||{};var o,u,a,f,l,c,h;for(o in n){a=n[o];if(o==="transform"){this._parseTransform(t,a);continue}if(s[o]||o==="pivot"){this._parseTransform(t,n);continue}u=t.attr(o),this._firstPT=f={_next:this._firstPT,t:this._props,p:o,b:u,f:!1,n:"raphael_"+o,r:!1,type:0},o==="fill"||o==="stroke"?(l=i(u),c=i(a),f.e=a,f.s=Number(l[0]),f.c=Number(c[0])-f.s,f.gs=Number(l[1]),f.gc=Number(c[1])-f.gs,f.bs=Number(l[2]),f.bc=Number(c[2])-f.bs,l.length>3||c.length>3?(f.as=l.length<4?1:Number(l[3]),f.ac=(c.length<4?1:Number(c[3]))-f.as,f.type=2):f.type=1):(u=typeof u=="string"?parseFloat(u.replace(e,"")):Number(u),typeof a=="string"?(h=a.charAt(1)==="=",a=parseFloat(a.replace(e,""))):h=!1,f.e=a||a===0?h?a+u:a:n[o],!u&&u!==0||!a&&a!==0||!(f.c=h?a:a-u)?(f.type=-1,f.i=n[o],f.s=f.c=0):f.s=u),this._overwriteProps.push("raphael_"+o),f._next&&(f._next._prev=f)}return!0},set:function(e){var t=this._firstPT,n;while(t)n=t.c*e+t.s,t.r&&(n=Math.round(n)),t.type?t.type===1?t.t[t.p]="rgb("+(n>>0)+", "+(t.gs+e*t.gc>>0)+", "+(t.bs+e*t.bc>>0)+")":t.type===2?t.t[t.p]="rgba("+(n>>0)+", "+(t.gs+e*t.gc>>0)+", "+(t.bs+e*t.bc>>0)+", "+(t.as+e*t.ac)+")":t.type===-1&&(t.t[t.p]=t.i):t.t[t.p]=n,t=t._next;this._target.attr(this._props);if(this._transform){t=this._transform;var r=t.rotation,i=r-t.skewX,s=Math.cos(r)*t.scaleX,o=Math.sin(r)*t.scaleX,u=Math.sin(i)*-t.scaleY,a=Math.cos(i)*t.scaleY,f=1e-6,l=this._pxl,c=this._pyl;o<f&&o>-f&&(o=0),u<f&&u>-f&&(u=0),t.ox=this._pxg-(l*s+c*u),t.oy=this._pyg-(l*o+c*a),this._target.transform("m"+s+","+o+","+u+","+a+","+(t.tx+t.ox)+","+(t.ty+t.oy))}}}),l=f.prototype;l._parseTransform=function(e,n){if(this._transform)return;var r=this._transform=o(e,!0),i=1e-6,f,l,c,h,p,d,v,m,g;if(typeof n=="object"){f={scaleX:u(n.scaleX!=null?n.scaleX:n.scale,r.scaleX),scaleY:u(n.scaleY!=null?n.scaleY:n.scale,r.scaleY),tx:u(n.tx,r.tx),ty:u(n.ty,r.ty)};if(n.shortRotation!=null){f.rotation=typeof n.shortRotation=="number"?n.shortRotation*t:a(n.shortRotation,r.rotation);var y=(f.rotation-r.rotation)%(Math.PI*2);y!==y%Math.PI&&(y+=Math.PI*(y<0?2:-2)),f.rotation=r.rotation+y}else f.rotation=n.rotation==null?r.rotation:typeof n.rotation=="number"?n.rotation*t:a(n.rotation,r.rotation);f.skewX=n.skewX==null?r.skewX:typeof n.skewX=="number"?n.skewX*t:a(n.skewX,r.skewX),f.skewY=n.skewY==null?r.skewY:typeof n.skewY=="number"?n.skewY*t:a(n.skewY,r.skewY);if(l=f.skewY-r.skewY)f.skewX+=l,f.rotation+=l;f.skewY<i&&f.skewY>-i&&(f.skewY=0),f.skewX<i&&f.skewX>-i&&(f.skewX=0),f.rotation<i&&f.rotation>-i&&(f.rotation=0),g=n.localPivot||n.globalPivot,typeof g=="string"?(p=g.split(","),d=Number(p[0]),v=Number(p[1])):typeof g=="object"?(d=Number(g.x),v=Number(g.y)):n.localPivot?(p=e.getBBox(!0),d=p.width/2,v=p.height/2):(p=e.getBBox(),d=p.x+p.width/2,v=p.y+p.height/2),n.localPivot?(m=e.matrix,d+=e.attr("x"),v+=e.attr("y"),this._pxl=d,this._pyl=v,this._pxg=d*m.a+v*m.c+m.e-r.tx,this._pyg=d*m.b+v*m.d+m.f-r.ty):(m=e.matrix.invert(),this._pxl=d*m.a+v*m.c+m.e,this._pyl=d*m.b+v*m.d+m.f,this._pxg=d-r.tx,this._pyg=v-r.ty)}else{if(typeof n!="string")return;p=this._target.transform(),e.transform(n),f=o(e,!1),e.transform(p)}for(c in s)r[c]!==f[c]&&c!=="shortRotation"&&c!=="scale"&&(this._firstPT=h={_next:this._firstPT,t:r,p:c,s:r[c],c:f[c]-r[c],n:c,f:!1,r:!1,b:r[c],e:f[c],type:0},h._next&&(h._next._prev=h),this._overwriteProps.push("raphael_"+c))}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();