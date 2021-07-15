const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/websites/index.svelte"),
	() => import("../../../src/routes/writing/index.svelte"),
	() => import("../../../src/routes/audio/index.svelte"),
	() => import("../../../src/routes/games/index.svelte"),
	() => import("../../../src/routes/blog/__layout.reset.svelte"),
	() => import("../../../src/routes/blog/index.svelte"),
	() => import("../../../src/routes/blog/categories/index.svelte"),
	() => import("../../../src/routes/blog/categories/[category]/index.svelte"),
	() => import("../../../src/routes/blog/about/index.svelte"),
	() => import("../../../src/routes/blog/posts/index.svelte"),
	() => import("../../../src/routes/blog/[post]/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/websites/index.svelte
	[/^\/websites\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/websites/query.js
	[/^\/websites\/query\/?$/],

	// src/routes/writing/index.svelte
	[/^\/writing\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/writing/query.js
	[/^\/writing\/query\/?$/],

	// src/routes/audio/index.svelte
	[/^\/audio\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/audio/query.js
	[/^\/audio\/query\/?$/],

	// src/routes/games/index.svelte
	[/^\/games\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/games/query.js
	[/^\/games\/query\/?$/],

	// src/routes/query.js
	[/^\/query\/?$/],

	// src/routes/blog/index.svelte
	[/^\/blog\/?$/, [c[7], c[8]], []],

	// src/routes/blog/categories/index.svelte
	[/^\/blog\/categories\/?$/, [c[7], c[9]], []],

	// src/routes/blog/categories/[category]/index.svelte
	[/^\/blog\/categories\/([^/]+?)\/?$/, [c[7], c[10]], [], (m) => ({ category: d(m[1])})],

	// src/routes/blog/about/index.svelte
	[/^\/blog\/about\/?$/, [c[7], c[11]], []],

	// src/routes/blog/posts/index.svelte
	[/^\/blog\/posts\/?$/, [c[7], c[12]], []],

	// src/routes/blog/[post]/index.svelte
	[/^\/blog\/([^/]+?)\/?$/, [c[7], c[13]], [], (m) => ({ post: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];