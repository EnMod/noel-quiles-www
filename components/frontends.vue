<template lang="pug">
section#frontends
	h2 frontends
	p UI/UX for websites, graphics, flyers...if a user's going to look at it I can make it.  Those are my frontends: that which helps my audience interface with desired information.  Here's a few I"ve done:

	#gallery
		//- create buttons for slider, make first checked by default
		input#slide1(checked="" type="radio" name="slider" selected="false")
		input#slide2(type="radio" name="slider" selected="false")
		input#slide3(type="radio" name="slider" selected="false")
		input#slide4(type="radio" name="slider" selected="false")
		input#slide5(type="radio" name="slider" selected="false")
		input#slide6(type="radio" name="slider" selected="false")

		#slides
			#overflow
				#inner
					article
						slot(name="1")

					article
						slot(name="2")

					article
						slot(name="3")

					article
						slot(name="4")

					article
						slot(name="5")

					article
						slot(name="6")

			label(for="slide1")
			label(for="slide2")
			label(for="slide3")
			label(for="slide4")
			label(for="slide5")
			label(for="slide6")
</template>

<script>

</script>

<style>

</style>
