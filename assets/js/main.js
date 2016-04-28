new Vue({
	el: '#title-screen',
	data: {
		title: '',
		description:''
	}
});

const nameTime = 1500
const animationStagger = 300

// Animate the words in #title-screen individually
$('#title-screen > *')
	.velocity( 'transition.slideUpIn', {duration: nameTime, stagger:animationStagger} )

// Animate the words in "Developer of..." individually while that's happening
$('#title-screen > h3')
	.blast({delimiter:"word"})
	.velocity('transition.slideUpIn', {duration: nameTime, stagger:250})