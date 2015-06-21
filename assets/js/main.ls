<- $

$ '#slick-frontends' .slick {
	dots: true,
	slidesToShow:1
}

$ '#slick-frontends' .slick-lightbox {
	itemSelector: 'div.item div.img img',
	src:'src',
	caption:'caption'
}

nameTime = 1500

$ 'div.subnav' .velocity {translateY:'-70vh'}
$ 'h1.title' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {delay: nameTime/4, duration: nameTime, stagger:300 }
$ 'div.descript h3' .velocity {opacity:1} {delay: nameTime/4, duration: 1000, stagger:300}
$ 'div.descript h3' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {delay: nameTime/4, duration: 1000, stagger:300 } 
$ 'div.subnav' .velocity {opacity:1} {delay:nameTime,duration:nameTime} .velocity {translateY:[0,'-70vh']} {duration:nameTime,easing: [0 0.9 0.75 1]}

animationDur = 300

$ 'div.subnav a' .click (e) ->
	rel = $ this .attr 'rel'         
	$ '#'+rel
		.velocity {scale:[1,0.5],opacity:1} {display:'block',duration:animationDur, easing:'easeInOutSine'}
		.siblings 'div'
		.velocity {scale:0.5,opacity:0} {duration:animationDur, easing:'easeInOutSine', display:'none'}
	return false
