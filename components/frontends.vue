<template lang="jade">
section#frontends
    h2 frontends
    p UI/UX for websites, graphics, flyers...if a user's going to look at it I can make it.  Those are my frontends: that which helps my audience interface with desired information.  Here's a few I've done:
    
    #frontends-owl.owl-carousel
        .item
            .frontends-owl__info
                :markdown
                    ## Melissa's Website
                    ### Independent Filmmaker

                    Personal website and logo for Melissa De Leon, a Greater New York area independent filmmaker with experience in producing.  The site features galleries of her film and photography work, as well as her bio and professional contact info.  Give her a shout!

                    You can view Melissa's site <a target='_blank' href='http://melissadeleon.me'>here</a>.

            .frontends-owl__img
                img.lazyOwl(data-src="img/melissa.jpg" data-caption="Melissa De Leon's Website" alt="Melissa De Leon's Website")

        .item
            .frontends-owl__info
                :markdown
                    ## MCCC Teach Page
                    ### Mercer County Community College

                    Currently a work in progress.  With MercerOnline providing content and support, I'm putting together a site for our faculty which will provide teaching resources, LMS resources, and training information.

                    Check it out <a target='_blank' href='https://teach.mccc.edu'>here</a>, but remember: **it's a work in progress!**

            .frontends-owl__img
                img.lazyOwl(data-src="img/mteach.jpg" data-caption='MCCC Teach Page' alt="MCCC Teach Page")
        
        .item
            .frontends-owl__info
                :markdown
                    ## Summer Session 2015 Info
                    ### Mercer County Community College
                    
                    Information page for the MCCC Summer Session of 2015.  Designed to reduce scrolling and provide relevant information for students taking summer courses online.
                    
                    You can check out the page <a target='_blank' href='http://www.mccc.edu/~virtcoll/summerinfo'>here</a>.

            .frontends-owl__img
                img.lazyOwl(data-src="img/summerinfo.jpg" data-caption="MCCC Summer Session 2015 Information Page" alt="MCCC Summer Session 2015 Information Page")
        
        .item
            .frontends-owl__info
                :markdown
                    ## Information Site/Blog
                    ### A Bird Without Wings

                    Site created for the independent documentary *A Bird Without Wings*, currently in production.  First venture into using Anchor CMS, styled with heavy modification of the default Anchor theme.

                    Click <a target='_blank' href='http://www.abirdwithoutwings.com'>here</a> to go to the site. If you like, go to the <a target='_blank' href='http://www.abirdwithoutwings.com/news'>news section</a> to check out the blog.

            .frontends-owl__img
                img.lazyOwl(data-src="img/abwow.jpg" data-caption="A Bird Without Wings Information Site/Blog" alt="A Bird Without Wings Information Site/Blog")
        
        .item
            .frontends-owl__info
                :markdown
                    ## Squarespace Design/Layout
                    ### South Jersey Heart Group

                    Site created for the South Jersey Heart Group of NJ's Our Lady of Lourdes hospital. This is my second time using Squarespace for design and layout, as well as updating site contents. Currently, SJHG has responsibility for handling updates and minor design; the current color scheme is their creation.

                    Click <a href='http://www.sjhg.org'>here</a> to check out the site.

            .img
                img.lazyOwl(data-src="img/sjhg.jpg" data-caption="South Jersey Heart Group Site" alt="South Jersey Heart Group Site")

        .item
            .frontends-owl__info
                :markdown
                    ## David Silverman Talk Flyer
                    ### Humanist Chaplaincy at Rutgers University
                    
                    Made this flyer to advertise an event for the Humanist Chaplaincy at Rutgers University, in which the (then) president of American Atheists would be giving a talk.  Not my idea to use the meme, but in retrospect its inclusion worked well considering the event featured the man who inspired it.

            .frontends-owl__img
                img.lazyOwl(data-src="img/daveflyer.jpg" data-caption='David Silverman Talk Flyer' alt="David Silverman Talk Flyer")

        //- .item
        //- 	img(src="img/", alt="Hand sketches")
        //- .item
        //- 	img(src="img/", alt="Eye sketches")
        //- .item
        //- 	img(src="img/", alt="find")
        //- .item
        //- 	img(src="img/", alt="some")
        //- .item
        //- 	img(src="img/", alt="more")
        //- .item
        //- 	img(src="img/", alt="examples")
</template>

<script>
$('#frontends-owl').owlCarousel({
	singleItem: true,
	lazyLoad: true
})
</script>

<style lang="stylus">
.frontends-owl__info
    lost-column: 1/2
    link(underline)
.frontends-owl__img
    lost-column: 1/2
    transition(all 0.1s ease-in-out-sine)
    hover-pop(0.9)
#frontends-owl img
    max-width 100%
</style>