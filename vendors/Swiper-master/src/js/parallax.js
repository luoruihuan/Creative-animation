function setParallaxTransform(e,t){e=$(e);var n,r,i;n=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):isH()?(r=n,i="0"):(i=n,r="0"),r.indexOf("%")>=0?r=parseInt(r,10)*t+"%":r=r*t+"px",i.indexOf("%")>=0?i=parseInt(i,10)*t+"%":i=i*t+"px",e.transform("translate3d("+r+", "+i+",0px)")}s.parallax={setTranslate:function(){s.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){setParallaxTransform(this,s.progress)}),s.slides.each(function(){var e=$(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=Math.min(Math.max(e[0].progress,-1),1);setParallaxTransform(this,t)})})},setTransition:function(e){typeof e=="undefined"&&(e=s.params.speed),s.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=$(this),n=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;e===0&&(n=0),t.transition(n)})}};