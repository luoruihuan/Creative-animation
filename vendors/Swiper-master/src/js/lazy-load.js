s.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if(typeof e=="undefined")return;typeof t=="undefined"&&(t=!0);if(s.slides.length===0)return;var n=s.slides.eq(e),r=n.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");n.hasClass("swiper-lazy")&&!n.hasClass("swiper-lazy-loaded")&&!n.hasClass("swiper-lazy-loading")&&r.add(n[0]);if(r.length===0)return;r.each(function(){var e=$(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),i=e.attr("data-src");s.loadImage(e[0],i||r,!1,function(){r?(e.css("background-image","url("+r+")"),e.removeAttr("data-background")):(e.attr("src",i),e.removeAttr("data-src")),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),n.find(".swiper-lazy-preloader, .preloader").remove();if(s.params.loop&&t){var o=n.attr("data-swiper-slide-index");if(n.hasClass(s.params.slideDuplicateClass)){var u=s.wrapper.children('[data-swiper-slide-index="'+o+'"]:not(.'+s.params.slideDuplicateClass+")");s.lazy.loadImageInSlide(u.index(),!1)}else{var a=s.wrapper.children("."+s.params.slideDuplicateClass+'[data-swiper-slide-index="'+o+'"]');s.lazy.loadImageInSlide(a.index(),!1)}}s.emit("onLazyImageReady",s,n[0],e[0])}),s.emit("onLazyImageLoad",s,n[0],e[0])})},load:function(){var e;if(s.params.watchSlidesVisibility)s.wrapper.children("."+s.params.slideVisibleClass).each(function(){s.lazy.loadImageInSlide($(this).index())});else if(s.params.slidesPerView>1)for(e=s.activeIndex;e<s.activeIndex+s.params.slidesPerView;e++)s.slides[e]&&s.lazy.loadImageInSlide(e);else s.lazy.loadImageInSlide(s.activeIndex);if(s.params.lazyLoadingInPrevNext)if(s.params.slidesPerView>1){for(e=s.activeIndex+s.params.slidesPerView;e<s.activeIndex+s.params.slidesPerView+s.params.slidesPerView;e++)s.slides[e]&&s.lazy.loadImageInSlide(e);for(e=s.activeIndex-s.params.slidesPerView;e<s.activeIndex;e++)s.slides[e]&&s.lazy.loadImageInSlide(e)}else{var t=s.wrapper.children("."+s.params.slideNextClass);t.length>0&&s.lazy.loadImageInSlide(t.index());var n=s.wrapper.children("."+s.params.slidePrevClass);n.length>0&&s.lazy.loadImageInSlide(n.index())}},onTransitionStart:function(){s.params.lazyLoading&&(s.params.lazyLoadingOnTransitionStart||!s.params.lazyLoadingOnTransitionStart&&!s.lazy.initialImageLoaded)&&s.lazy.load()},onTransitionEnd:function(){s.params.lazyLoading&&!s.params.lazyLoadingOnTransitionStart&&s.lazy.load()}};