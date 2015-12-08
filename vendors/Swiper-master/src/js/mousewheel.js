function handleMousewheel(e){e.originalEvent&&(e=e.originalEvent);var t=s.mousewheel.event,n=0;if(e.detail)n=-e.detail;else if(t==="mousewheel")if(s.params.mousewheelForceToAxis)if(isH()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;n=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;n=e.wheelDeltaY}else n=e.wheelDelta;else if(t==="DOMMouseScroll")n=-e.detail;else if(t==="wheel")if(s.params.mousewheelForceToAxis)if(isH()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;n=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;n=-e.deltaY}else n=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;s.params.mousewheelInvert&&(n=-n);if(!s.params.freeMode){if((new window.Date).getTime()-s.mousewheel.lastScrollTime>60)if(n<0){if(!s.isEnd||s.params.loop)s.slideNext();else if(s.params.mousewheelReleaseOnEdges)return!0}else if(!s.isBeginning||s.params.loop)s.slidePrev();else if(s.params.mousewheelReleaseOnEdges)return!0;s.mousewheel.lastScrollTime=(new window.Date).getTime()}else{var r=s.getWrapperTranslate()+n*s.params.mousewheelSensitivity;r>0&&(r=0),r<s.maxTranslate()&&(r=s.maxTranslate()),s.setWrapperTransition(0),s.setWrapperTranslate(r),s.updateProgress(),s.updateActiveIndex(),s.params.freeModeSticky&&(clearTimeout(s.mousewheel.timeout),s.mousewheel.timeout=setTimeout(function(){s.slideReset()},300));if(r===0||r===s.maxTranslate())return}return s.params.autoplay&&s.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}s.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()};if(s.params.mousewheelControl){document.onmousewheel!==undefined&&(s.mousewheel.event="mousewheel");if(!s.mousewheel.event)try{new window.WheelEvent("wheel"),s.mousewheel.event="wheel"}catch(e){}s.mousewheel.event||(s.mousewheel.event="DOMMouseScroll")}s.disableMousewheelControl=function(){return s.mousewheel.event?(s.container.off(s.mousewheel.event,handleMousewheel),!0):!1},s.enableMousewheelControl=function(){return s.mousewheel.event?(s.container.on(s.mousewheel.event,handleMousewheel),!0):!1};