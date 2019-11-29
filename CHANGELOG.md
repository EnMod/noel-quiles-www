# Noel Quiles (.com) Changelog

This project's changelog follows the guidelines set by [Keep a Changelog](http://keepachangelog.com/en/1.1.0/) with version numbers adherent to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- Think of this as some "changelog-driven development" -->

## 4.0.0 - 2019-11-xx

### Changed

- **Code Architecture: A Focus On Components and Now**

  - Convert the whole thing to React/Next.js for a robust, rapid component-oriented workflow
    - Shift any Spike conventions to the equivalent in Next.js, including locals, data fetching, page routing, etc
    - Break each discipline out into "pages"
    - Implement a proper nav, its design modeled after my original vision for this site, as its own component
    - Have the header and footer be components as well
  - Integrate with Zeit's Now to take advantage of their Next.js-specific features (and general features/usability)
    - Reconfigure to deploy to Now
    - Adjust redirects to reflect Now conventions
  - Incorporate each subdomain into this main domain as subdirectories
    - Place the exercises for `js30` and `wtflex` in their own `public` directories
    - Integrate `blog` into the site as a subdirectory

- **Design: Expression of Self**
  - Adjust colors/typography to reflect a recent, total shift in my identity design
  - Paint each discipline with a specific, monochrome color theme
  - Incorporate motion into each page transition, with smooth blending between the colors

## 3.4.1 - 2018-06-11

### Changed

- **`package.json`**

  - Dependency updates
  - Changed npm scripts to better align with usual nomenclature

- **Copy**

  - Adjusted bio line again (I'm going to completely change it at some point, I haven't yet come up with one I'm 5000% happy with)
  - Changed Contentful shoutout to DatoCMS shoutout in the footer
  - Changed the filter on it to compensate for the footer background

- **Styles:** Made some IE11 compat changes so the layout doesn't completely fall over

## 3.4.0 - 2018-03-02

### Changed

- Matched the fonts on this site with the ones for my blog. I REALLY like the combination.
- Converted the CMS I'm using to DatoCMS due to some compelling arguments from @jescalan (and my own good experiences with it).
- Added in my new bio for the introductory line below my name
- Changed the Contact description font to the body font (no idea why it wasn't that)

## 3.3.2 - 2018-02-27

### Changed

- Made my contact info clearer, I felt like the pertinent information wasn't where it needed to be (read: actually visible on the page)

## 3.3.1 - 2018-02-27

### Fixed

- Prevented "Interfaces" from going off the edge, bringing the rest of the headers in line

### Changed

- Body font changed to "Bitter" to be a little less...weird (not sure how to describe what the condensed nature of Cairo made me feel)

## 3.3.0 - 2018-02-26

### Changed

- Body font changed to a rounder font ("Catamaran") as a contrast to my very rigid/square "EnMod" header font.
- Increased the font size to better fit the new font

## 3.2.9 - 2018-02-23

### Changed

- Updated the version number to something that actually follows SemVer and not something I cooked up in my head. I have no other changelogs before this, but I looked at my commit history to arrive at the minor/patch levels. Being that this is my third redesign of the site I figured a 3.x.x major patch level was appropriate. v4 may not be too far behind! After **three years** building confidence and experience I feel that I can finally pull off my original vision for this site. Looking forward to it!

### Added

- This changelog
