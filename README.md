# Colophon

HTML written in Jade (now Pug), CSS in Stylus, JS in LiveScript, and uses Roots for builds.  

Icons designed and created in Inkscape, as well as the header font, which can be found in this repo as `enmod.ttf`.

Uses a simple JS pattern for switching divs in and out using jQuery-selected elements, along with Velocity and Blast for element animations and section transitions.  Uses Lost grid for positioning pretty much everything, with Rupture for mobile adjustments.

Check out the `just-vanilla-w-spike` branch for development of my next version of this site!

### Setup

- make sure [node.js](http://nodejs.org) and [roots](http://roots.cx) are installed
- clone this repo down and `cd` into the folder
- run `npm install`
- run `roots watch`
- ???
- done

### Deploying

- If you just want to compile the production build, run `roots compile -e production` and it will build to public.
- To deploy your site with a single command, run `roots deploy -to XXX` with `XXX` being whichever [ship](https://github.com/carrot/ship#usage) deployer you want to use.
