new Vue({
	el: '#title-screen',
	data: {
		title: '',
		description:''
	}
});

$('#frontends-owl').owlCarousel({
	singleItem: true,
	lazyLoad: true
});

var nameTime = 1500;
var animationDur = 300;

// Animations for #title-screen

$('#title-screen > *').velocity( 'transition.slideUpIn', {duration: nameTime, stagger:600} );
