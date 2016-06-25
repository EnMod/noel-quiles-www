<template lang="pug">
section#frontends
	h2 frontends
	p UI/UX for websites, graphics, flyers...if a user's going to look at it I can make it.  Those are my frontends: that which helps my audience interface with desired information.  Here's a few I"ve done:

	//- slider start
	#gallery.container

		//- pagination
		.timeline
			//- loop to simplify label making for pagination
			template(v-for="item in itemList")
				.item(@click="turnTo ({{item.num}})" :class="{'active': slide.init.currentPage == {{item.num}}}") {{item.num}}

		//- prev/next buttons
		img.slider-left(src="/img/slide-arrow.svg" @click="slidePre" :class="{'disable': !this.slide.init.canPre}")
		img.slider-right(src="/img/slide-arrow.svg" @click="slideNext" :class="{'disable': !this.slide.init.canNext}")

		//- the main area for slides, this is where a lot of the vue bindings that matter will be going
		slide(:pages="itemList" :slide="slide")
			.slider-item(v-for="item in itemList" class="page{{$index}}" :style="itemList[$index].style")
				.info
					h2 {{item.title}}
					h3 {{item.subtitle}}
					{{item.desc}}

				.img
					img(src="{{item.imgsrc}}" alt="{{item.imgalt}}")
</template>
