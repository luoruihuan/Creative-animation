/*!
 * VERSION: 1.7.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=document.documentElement,t=window,n=function(n,r){var i=r==="x"?"Width":"Height",s="scroll"+i,o="client"+i,u=document.body;return n===t||n===e||n===u?Math.max(e[s],u[s])-(t["inner"+i]||Math.max(e[o],u[o])):n[s]-n["offset"+i]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.4",init:function(e,r,i){return this._wdw=e===t,this._target=e,this._tween=i,typeof r!="object"&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),r.x!=null?(this._addTween(this,"x",this.x,r.x==="max"?n(e,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,r.y!=null?(this._addTween(this,"y",this.y,r.y==="max"?n(e,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(e){this._super.setRatio.call(this,e);var r=this._wdw||!this.skipX?this.getX():this.xPrev,i=this._wdw||!this.skipY?this.getY():this.yPrev,s=i-this.yPrev,o=r-this.xPrev;this._autoKill&&(!this.skipX&&(o>7||o<-7)&&r<n(this._target,"x")&&(this.skipX=!0),!this.skipY&&(s>7||s<-7)&&i<n(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?t.scrollTo(this.skipX?r:this.x,this.skipY?i:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),i=r.prototype;r.max=n,i.getX=function(){return this._wdw?t.pageXOffset!=null?t.pageXOffset:e.scrollLeft!=null?e.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},i.getY=function(){return this._wdw?t.pageYOffset!=null?t.pageYOffset:e.scrollTop!=null?e.scrollTop:document.body.scrollTop:this._target.scrollTop},i._kill=function(e){return e.scrollTo_x&&(this.skipX=!0),e.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();