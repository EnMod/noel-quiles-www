<- $

$ '.slick-frontends' .slick {
	dots: true,
	slidesToShow:1
}

$ '.slick-frontends' .slick-lightbox {
	itemSelector: '.item .img img',
	src:'src',
	caption:'caption'
}

nameTime = 1500

$ '.subnav' .velocity {translateY:'-70vh'}
$ '.title' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {duration: nameTime, stagger:300 }
$ '.descript h3' .velocity {opacity:1} {delay: nameTime/2, duration: 1000, stagger:300}
$ '.descript h3' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {delay: nameTime/2, duration: 1000, stagger:300 } 
$ '.subnav' .velocity {opacity:1} {delay:nameTime,duration:nameTime} .velocity {translateY:[0,'-70vh']} {duration:nameTime,easing: [0 0.9 0.75 1]}

animationDur = 300

$ '.subnav a' .click (e) ->
	rel = $ this .attr 'rel'         
	$ '#'+rel
		.velocity {scale:[1,0.5],opacity:1} {display:'block',duration:animationDur, easing:'easeInOutSine'}
		.siblings 'div'
		.velocity {scale:0.5,opacity:0} {duration:animationDur, easing:'easeInOutSine', display:'none'}
	return false
