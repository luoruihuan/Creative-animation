require.config({
	baseUrl:'./',
	paths:{
		'jquery':'vendors/jquery/dist/jquery.min',
		'swiper':'vendors/Swiper-master/dist/js/swiper.min',
		'sweetalert':'vendors/sweetalert/lib/sweet-alert.min',
		'validator':'vendors/validator-js/validator.min',
		'modernizr':'vendors/modernizr/modernizr',
		'touchswipe':'vendors/jquery-touchswipe/jquery.touchSwipe.min',
		'domReady':'vendors/requirejs-domready/domReady'
	},
	packages:[
		{name:'greensock',main:'',location:'vendors/greensock/src/minified'},
		{name:'extra',main:'',location:'vendors/extra'}
	]
});


require(['jquery',
		 'validator',
		 'extra/imgPreloading',
		 'modernizr',
		 'greensock/TweenMax.min',
		 'swiper',
		 'sweetalert',
		 'touchswipe',
		 'domReady!'],
	function($,validator,imgPreloading){
	
	var $window = $(window);
    var $body = $('body');
	var music_btn = $('.sound');
	var bgsound = $('#sound')[0];
	var arrow_up = $('.arrow_up');
	var confirmbox = $('.confirmbox');
	var slide1 = $('.slide1');
	var slide2 = $('.slide2');
	var slide3 = $('.slide3');
	var slide4 = $('.slide4');
	var suishu = $('.suishu');
    var swimg = $('.swimg');
	var showsuishu;
	var enterbtn = $('.enterbtn');
	var img3_9 = $('.img3_9');
	var bigbox41 = $('.bigbox41');
	var bigbox42 = $('.bigbox42');


   $('#myvideo')[0].addEventListener('play', function () {
		alert("建议在WiFi环境下播放该视频，土豪随意~");
    	bgsound.pause();
    	music_btn.removeClass('active');
	}, false);

        swimg.on('click', function(){
                $(this).animate({'width':'100%','left':'0%'}, 500, function(){
                    $(this).animate({'top':'145%'}, function(){
                        var ifend = $(this).attr('ifend');
                        if(ifend == 'yes'){
                            bigbox42.removeClass('hidec');
                            bigbox41.addClass('hidec');
                        }
                    });
                });
        });

	img3_9.on('click', function(){
		animation26();
	});

	enterbtn.on('click', function(){
		slide2.removeClass('showslide');
		slide3.addClass('showslide');
		animation2();
	});

	confirmbox.on('click', function(){
		slide1.removeClass('showslide');
		slide2.addClass('showslide');
		showsuishu = parseInt($('.swiper-slide-active').text());
		howold(showsuishu);
		showdothing(showsuishu);
	});

	$window.on('beforeunload',function(){
        bgsound.pause();
    });

    music_btn.on('click', function(){
		if(bgsound.paused){
			music_btn.addClass('active');
			bgsound.play();
		}else{
			music_btn.removeClass('active');
			bgsound.pause();
		}
	});

	var mySwipertime = new Swiper('.help_swipertime', {
		direction: 'vertical',
		loop: false,
		initialSlide :36,
		centeredSlides : true,
		slidesPerView : 5
	});

	var dothing = $('.dothing');
	function showdothing(ss){
		if (ss >= 1999 && ss <= 2015) {
	        dothing.text("我爸妈还没认识呢");
	    } else {
	        if (ss >= 1997 && ss <= 1998) {
	            dothing.text("我爸妈在谈恋爱")
	        } else {
	            if (ss >= 1993 && ss <= 1996) {
	                dothing.text("我在咿呀学语")
	            } else {
	                if (ss >= 1989 && ss <= 1992) {
	                    dothing.text("我正上幼儿园")
	                } else {
	                    if (ss >= 1983 && ss <= 1988) {
	                        dothing.text("我在念小学")
	                    } else {
	                        if (ss >= 1980 && ss <= 1982) {
	                            dothing.text("我在念初中")
	                        } else {
	                            if (ss >= 1977 && ss <= 1979) {
	                                dothing.text("我在念高中")
	                            } else {
	                                if (ss >= 1973 && ss <= 1976) {
	                                    dothing.text("我在念大学")
	                                } else {
	                                    if (ss >= 1971 && ss <= 1972) {
	                                        dothing.text("我刚开始工作")
	                                    } else {
	                                        if (ss == 1970) {
	                                            dothing.text("我正在谈恋爱")
	                                        } else {
	                                            if (ss >= 1968 && ss <= 1969) {
	                                                dothing.text("我正准备结婚")
	                                            } else {
	                                                if (ss >= 1966 && ss <= 1967) {
	                                                    dothing.text("我刚结婚不久")
	                                                } else {
	                                                    if (ss >= 1964 && ss <= 1965) {
	                                                        dothing.text("我刚有孩子")
	                                                    } else {
	                                                        if (ss >= 1947 && ss <= 1963) {
	                                                            dothing.text("我正辛苦抚养孩子")
	                                                        } else {
	                                                            if (ss >= 1943 && ss <= 1946) {
	                                                                dothing.text("我正盼着孩子结婚")
	                                                            } else {
	                                                                if (ss >= 1930 && ss <= 1942) {
	                                                                    dothing.text("我在享受天伦之乐")
	                                                                }
	                                                            }
	                                                        }
	                                                    }
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	}

	function howold(nl){
		var old = 1996 - nl + 1;
		if(old < 1){
			$('.ifbirth').hide();
		}else{
			suishu.text(old);
		}
	}

	function animation1(){
		TweenMax.fromTo('.img1_1', 1.0, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%'
		});

		TweenMax.fromTo('.img1_2', 1.0, {
			autoAlpha: 0,
			y: '-50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 0.6
		});

		TweenMax.fromTo('.alerttxt', 1.0, {
			autoAlpha: 0,
			y: '-100%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 1.6
		});

		TweenMax.fromTo('.help_swipertime', 1.0, {
			autoAlpha: 0,
			y: '30%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.2
		});

		TweenMax.fromTo('.confirmbox', 1.0, {
			autoAlpha: 0,
			scale: 0
		},{
			autoAlpha: 1,
			scale: 1,
			delay: 2.8
		});
	}

	function animation2(){
		TweenMax.fromTo('.img3_1', 1.6, {
			autoAlpha: 0,
			x: '-100%',
			y: '50%',
			scale: 0
		},{
			autoAlpha: 1,
			x: '0%',
			y: '0%',
			scale: 1,
			delay: 1.0
		});

		TweenMax.fromTo('.img3_2', 1.0, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.6,
			onComplete: function(){
				TweenMax.to('.st1', 0.1, {
					autoAlpha: 0,
					delay: 1.0,
					onComplete: function(){
						animation22();
					}
				});
			}
		});
	}

	function animation22(){
		TweenMax.fromTo('.img3_3', 1.6, {
			autoAlpha: 0,
			y: '-50%',
			scale: 0
		},{
			autoAlpha: 1,
			y: '0%',
			scale: 1,
			delay: 1.0
		});

		TweenMax.fromTo('.img3_4', 1.0, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.6,
			onComplete: function(){
				TweenMax.to('.st2', 0.1, {
					autoAlpha: 0,
					delay: 1.0,
					onComplete: function(){
						animation23();
					}
				});
			}
		});
	}

	function animation23(){
		TweenMax.fromTo('.img3_5', 1.6, {
			autoAlpha: 0,
			x: '100%',
			scale: 0
		},{
			autoAlpha: 1,
			x: '0%',
			scale: 1,
			delay: 1.0
		});

		TweenMax.fromTo('.img3_6', 1.0, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.6,
			onComplete: function(){
				TweenMax.to('.st3', 0.1, {
					autoAlpha: 0,
					delay: 1.0,
					onComplete: function(){
						animation24();
					}
				});
			}
		});
	}

	function animation24(){
		TweenMax.fromTo('.img3_7', 1.6, {
			autoAlpha: 0,
			x: '50%',
			y: '-50%',
			scale: 0
		},{
			autoAlpha: 1,
			x: '0%',
			y: '0%',
			scale: 1,
			delay: 1.0
		});

		TweenMax.fromTo('.img3_8', 1.0, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.6,
			onComplete: function(){
				TweenMax.to('.st4', 0.1, {
					autoAlpha: 0,
					delay: 1.0,
					onComplete: function(){
						animation25();
					}
				});
			}
		});
	}

	function animation25(){
		TweenMax.fromTo('.img3_9', 1.6, {
			autoAlpha: 0,
			y: '100%',
			scale: 0
		},{
			autoAlpha: 1,
			y: '0%',
			scale: 1,
			delay: 1.0
		});

		TweenMax.fromTo('.img3_10', 0.6, {
			autoAlpha: 0,
			x: '50%',
			y: '50%'
		},{
			autoAlpha: 1,
			x: '0%',
			y: '0%',
			delay: 2.6,
			onComplete: function(){
				$('.img3_10').addClass('opch');
			}
		});

		TweenMax.fromTo('.img3_11', 1.0, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 3.2
		});
	}

	function animation26(){
		TweenMax.fromTo('.img3_9', 1.0, {
			autoAlpha: 1,
			rotation: '0deg',
			scale: 1
		},{
			autoAlpha: 0,
			rotation: '360deg',
			scale: 0,
			delay: 0.2,
			onComplete: function(){
				TweenMax.to('.st5', 0.1, {
					autoAlpha: 0,
					onComplete: function(){
						slide3.removeClass('showslide');
						slide4.addClass('showslide');
						animation4();
					}
				});
			}
		});
	}

	function animation4(){
		TweenMax.fromTo('.img4_1', 1.0, {
			autoAlpha: 0,
			y: '-100%',
			scaleX: 0
		},{
			autoAlpha: 1,
			y: '0%',
			scaleX: 1,
			delay: 1.0
		});

		TweenMax.fromTo('.img4_6', 0.8, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.0
		});

		TweenMax.fromTo('.img4_5', 0.8, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.4
		});

		TweenMax.fromTo('.img4_4', 0.8, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 2.8
		});

		TweenMax.fromTo('.img4_3', 0.8, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 3.2
		});

		TweenMax.fromTo('.img4_2', 0.8, {
			autoAlpha: 0,
			y: '50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 3.6
		});

		TweenMax.fromTo('.img4_7', 0.6, {
			autoAlpha: 0,
			y: '-50%'
		},{
			autoAlpha: 1,
			y: '0%',
			delay: 4.4,
			onComplete: function(){
				$('.img4_7').addClass('downc');
			}
		});
	}

    var showshu = $('.shuzi');
	var mycanvas = $('.showprogress');
	var pp =$('.pp');
	function loadPicture(){
        imgPreloading.preload({
            onLoad: function(loadCount, totalCount, source){
                var value = parseInt(loadCount / totalCount * 100) + '%'
                showshu.text(value);
                pp.width(value);
                console.log(value, source);
            },
            onComplete: function(){
                TweenMax.to(mycanvas, .5, {
                    // autoAlpha: 0,
                    onComplete: function(){
                        mycanvas.remove();
                        animation1();
                    }
                });
            },
            onError: function(){}
        });
    }
    
	loadPicture();
});