s.effects={fade:{setTranslate:function(){for(var e=0;e<s.slides.length;e++){var t=s.slides.eq(e),n=t[0].swiperSlideOffset,r=-n;s.params.virtualTranslate||(r-=s.translate);var i=0;isH()||(i=r,r=0);var o=s.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);t.css({opacity:o}).transform("translate3d("+r+"px, "+i+"px, 0px)")}},setTransition:function(e){s.slides.transition(e);if(s.params.virtualTranslate&&e!==0){var t=!1;s.slides.transitionEnd(function(){if(t)return;if(!s)return;t=!0,s.animating=!1;var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];for(var n=0;n<e.length;n++)s.wrapper.trigger(e[n])})}}},cube:{setTranslate:function(){var e=0,t;s.params.cube.shadow&&(isH()?(t=s.wrapper.find(".swiper-cube-shadow"),t.length===0&&(t=$('<div class="swiper-cube-shadow"></div>'),s.wrapper.append(t)),t.css({height:s.width+"px"})):(t=s.container.find(".swiper-cube-shadow"),t.length===0&&(t=$('<div class="swiper-cube-shadow"></div>'),s.container.append(t))));for(var n=0;n<s.slides.length;n++){var r=s.slides.eq(n),i=n*90,o=Math.floor(i/360);s.rtl&&(i=-i,o=Math.floor(-i/360));var u=Math.max(Math.min(r[0].progress,1),-1),a=0,f=0,l=0;n%4===0?(a=-o*4*s.size,l=0):(n-1)%4===0?(a=0,l=-o*4*s.size):(n-2)%4===0?(a=s.size+o*4*s.size,l=s.size):(n-3)%4===0&&(a=-s.size,l=3*s.size+s.size*4*o),s.rtl&&(a=-a),isH()||(f=a,a=0);var c="rotateX("+(isH()?0:-i)+"deg) rotateY("+(isH()?i:0)+"deg) translate3d("+a+"px, "+f+"px, "+l+"px)";u<=1&&u>-1&&(e=n*90+u*90,s.rtl&&(e=-n*90-u*90)),r.transform(c);if(s.params.cube.slideShadows){var h=isH()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),p=isH()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");h.length===0&&(h=$('<div class="swiper-slide-shadow-'+(isH()?"left":"top")+'"></div>'),r.append(h)),p.length===0&&(p=$('<div class="swiper-slide-shadow-'+(isH()?"right":"bottom")+'"></div>'),r.append(p));var d=r[0].progress;h.length&&(h[0].style.opacity=-r[0].progress),p.length&&(p[0].style.opacity=r[0].progress)}}s.wrapper.css({"-webkit-transform-origin":"50% 50% -"+s.size/2+"px","-moz-transform-origin":"50% 50% -"+s.size/2+"px","-ms-transform-origin":"50% 50% -"+s.size/2+"px","transform-origin":"50% 50% -"+s.size/2+"px"});if(s.params.cube.shadow)if(isH())t.transform("translate3d(0px, "+(s.width/2+s.params.cube.shadowOffset)+"px, "+ -s.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+s.params.cube.shadowScale+")");else{var v=Math.abs(e)-Math.floor(Math.abs(e)/90)*90,m=1.5-(Math.sin(v*2*Math.PI/360)/2+Math.cos(v*2*Math.PI/360)/2),g=s.params.cube.shadowScale,y=s.params.cube.shadowScale/m,b=s.params.cube.shadowOffset;t.transform("scale3d("+g+", 1, "+y+") translate3d(0px, "+(s.height/2+b)+"px, "+ -s.height/2/y+"px) rotateX(-90deg)")}var w=s.isSafari||s.isUiWebView?-s.size/2:0;s.wrapper.transform("translate3d(0px,0,"+w+"px) rotateX("+(isH()?0:e)+"deg) rotateY("+(isH()?-e:0)+"deg)")},setTransition:function(e){s.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),s.params.cube.shadow&&!isH()&&s.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){var e=s.translate,t=isH()?-e+s.width/2:-e+s.height/2,n=isH()?s.params.coverflow.rotate:-s.params.coverflow.rotate,r=s.params.coverflow.depth;for(var i=0,o=s.slides.length;i<o;i++){var u=s.slides.eq(i),a=s.slidesSizesGrid[i],f=u[0].swiperSlideOffset,l=(t-f-a/2)/a*s.params.coverflow.modifier,c=isH()?n*l:0,h=isH()?0:n*l,p=-r*Math.abs(l),d=isH()?0:s.params.coverflow.stretch*l,v=isH()?s.params.coverflow.stretch*l:0;Math.abs(v)<.001&&(v=0),Math.abs(d)<.001&&(d=0),Math.abs(p)<.001&&(p=0),Math.abs(c)<.001&&(c=0),Math.abs(h)<.001&&(h=0);var m="translate3d("+v+"px,"+d+"px,"+p+"px)  rotateX("+h+"deg) rotateY("+c+"deg)";u.transform(m),u[0].style.zIndex=-Math.abs(Math.round(l))+1;if(s.params.coverflow.slideShadows){var g=isH()?u.find(".swiper-slide-shadow-left"):u.find(".swiper-slide-shadow-top"),y=isH()?u.find(".swiper-slide-shadow-right"):u.find(".swiper-slide-shadow-bottom");g.length===0&&(g=$('<div class="swiper-slide-shadow-'+(isH()?"left":"top")+'"></div>'),u.append(g)),y.length===0&&(y=$('<div class="swiper-slide-shadow-'+(isH()?"right":"bottom")+'"></div>'),u.append(y)),g.length&&(g[0].style.opacity=l>0?l:0),y.length&&(y[0].style.opacity=-l>0?-l:0)}}if(s.browser.ie){var b=s.wrapper[0].style;b.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){s.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}};