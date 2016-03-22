$ '#frontends-owl' .owlCarousel {
	singleItem: true,
	lazyLoad: true
}

scrolling = false
contentSections = $ \.cd-section
verticalNavigation = $ \.cd-vertical-nav
navigationItems = verticalNavigation.find \a
navTrigger = $ \.cd-nav-trigger
scrollArrow = $ \.cd-scroll-down

$ window .on 'scroll', checkScroll

# smooth scroll to the selected section
verticalNavigation.on 'click', 'a', (event) ->
    event.preventDefault!
    smoothScroll($ @hash)
    verticalNavigation.removeClass \open

# smooth scroll to the second section
scrollArrow.on 'click', (event) ->
	event.preventDefault!
    smoothScroll($ @hash)

#  open navigation if user clicks the .cd-nav-trigger - small devices only
navTrigger.on 'click', (event) ->
	event.preventDefault!
	verticalNavigation.toggleClass \open

checkScroll = !->
	if not scrolling
		scrolling = true
		if not window.requestAnimationFrame 
			then setTimeout updateSections, 300 
			else window.requestAnimationFrame updateSections

updateSections = !->
	halfWindowHeight = $ window .height!/2
	scrollTop = $ window .scrollTop!
	contentSections.each(->
		section = $ @
		sectionId = section.attr \id
		navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
		if section.offset!.top - halfWindowHeight < scrollTop and section.offset!.top + section.height! - halfWindowHeight > scrollTop 
			then navigationItem.addClass 'active' 
			else navigationItem.removeClass 'active'
	scrolling = false

smoothScroll = (target) !->
    $ 'body,html' .velocity {'scrollTop':target.offset!.top}, 300

nameTime = 1500

$ 'div.subnav' .velocity {translateY:'-70vh'}
$ 'h1.title' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {duration: nameTime, stagger:300 }
$ 'div.descript h3' .velocity {opacity:1} {duration: 1000, stagger:300}
$ 'div.descript h3' .blast { delimiter:'word' } .velocity 'transition.slideUpIn' {duration: 1000, stagger:300 } 
$ 'div.subnav' .velocity {opacity:1} {delay:nameTime,duration:nameTime} .velocity {translateY:[0,'-70vh']} {duration:nameTime,easing: [0 0.9 0.75 1]}

animationDur = 300

$ 'div.subnav a' .click (e) ->
	rel = $ @ .attr 'rel'         
	$ '#'+rel+'-item'
		.velocity {scale:[1,0.5],opacity:1} {display:'block',duration:animationDur, easing:'easeInOutSine'}
		.siblings 'div'
		.velocity {scale:0.5,opacity:0} {duration:animationDur, easing:'easeInOutSine', display:'none'}
	return false
