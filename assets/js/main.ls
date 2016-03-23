$ '#frontends-owl' .owlCarousel {
	singleItem: true
	lazyLoad: true
}

nameTime = 1500
animationDur = 300

# Animations for #title-screen

$ 'h1.title' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {duration: nameTime, stagger:300 }
$ 'div.descript h3' .velocity {opacity:1} {duration: 1000, stagger:300}
$ 'div.descript h3' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {duration: 1000, stagger:300 } 