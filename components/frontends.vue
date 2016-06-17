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

<script>
const slide = require('vue-slide')
export default {
	data(){
		return{
			// Make slide list
			itemList:[
				// Melissa's Site
				{
					num:"1",
					title:"Melissa's Website",
					subtitle:"Independent Filmmaker",
					desc:"<p>Personal website and logo for Melissa De Leon, a Greater New York area independent filmmaker with experience in producing.  The site features galleries of her film and photography work, as well as her bio and professional contact info.  Give her a shout!</p><p>You can view Melissa's site <a href="http://melissadeleon.me">here</a>.</p>",
					imgsrc:"/img/melissa.jpg",
					imgalt:"Melissa De Leon's Website",
					origin: 0,
					current: 0,
					style:{

					}
				},
				// Teach page
				{
					num:"2",
					title:"MCCC Teach Page",
					subtitle:"Mercer County Community College",
					desc:"<p>With MercerOnline providing content and support, I put together a site for MCCC faculty which provides teaching resources, LMS resources, and training information.</p><p>Check it out <a href="https://teach.mccc.edu">here</a>.</p>",
					imgsrc:"/img/mteach.jpg",
					imgalt:"MCCC Teach Page",
					origin: 100,
					current: 0,
					style:{

					}
				},
				// Summer Info Page
				{
					num:"3",
					title:"Summer Session 2015 Info",
					subtitle:"Mercer County Community College",
					desc:"<p>Information page for the MCCC Summer Session of 2015.  Designed to reduce scrolling and provide relevant information for students taking summer courses online.</p><p>You can check out the page <a href="http://www.mccc.edu/~virtcoll/summerinfo">here</a>.</p>",
					imgsrc:"/img/summerinfo.jpg",
					imgalt:"MCCC Summer Session 2015 Information Page",
					origin: 200,
					current: 0,
					style:{

					}
				},
				// Abwow page
				{
					num:"4",
					title:"Information Site/Blog",
					subtitle:" A Bird Without Wings",
					desc:"<p>Site created for the independent documentary *A Bird Without Wings*, currently in production.  First venture into using Anchor CMS, styled with heavy modification of the default Anchor theme.</p><p>Click <a href="http://www.abirdwithoutwings.com">here</a> to go to the site. If you like, go to the <a href="http://www.abirdwithoutwings.com/news">news section</a> to check out the blog.</p>",
					imgsrc:"/img/abwow.jpg",
					imgalt:"A Bird Without Wings Information Site/Blog",
					origin: 300,
					current: 0,
					style:{

					}
				},
				// SJHG page
				{
					num:"5",
					title:"Squarespace Design/Layout",
					subtitle:"South Jersey Heart Group",
					desc:"<p>Site created for the South Jersey Heart Group of NJ's Our Lady of Lourdes hospital. This is my second time using Squarespace for design and layout, as well as updating site contents. Currently, SJHG has responsibility for handling updates and minor design; the current color scheme is their creation.</p><p>Click <a href="http://www.sjhg.org">here</a> to check out the site.</p>",
					imgsrc:"/img/sjhg.jpg",
					imgalt:"South Jersey Heart Group Site",
					origin: 400,
					current: 0,
					style:{

					}
				},
				// David Silverman flyer
				{
					num:"6",
					title:"David Silverman Talk Flyer",
					subtitle:"Humanist Chaplaincy at Rutgers University",
					desc:"<p>Made this flyer to advertise an event for the Humanist Chaplaincy at Rutgers University, in which the (then) president of American Atheists would be giving a talk.  Not my idea to use the meme, but in retrospect its inclusion worked well considering the event featured the man who inspired it.</p>",
					imgsrc:"/img/daveflyer.jpg",
					imgalt:"David Silverman Talk Flyer",
					origin: 500,
					current: 0,
					style:{

					}
				}
			],
			// init the slide options
			slide:{
				init:{
					pageNum: 6,
					currentPage: 1,
					canPre: false,
					canNext: true,
					start:{},
					end:{},
					tracking: false,
					thresholdTime: 500,
					thresholdDistance: 100
				}
			}
		}
	},
	// define methods for the buttons
	methods:{
		turnTo (num){
			console.log(num)
			this.$broadcast('slideTo', num)
		},
		slideNext (){
			this.$broadcast('slideNext')
		},
		slidePre (){
			this.$broadcast('slidePre')
		}
	},
	// export the slide component
	components:{
		slide
	}
}
</script>
