const Prism = require('prismjs')
const PrismNormalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')

const pn = new PrismNormalizer({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
	'break-lines': 80,
	'indent': 2,
	'remove-initial-line-feed': false,
	'tabs-to-spaces': 2
})

Prism.highlightAll()
