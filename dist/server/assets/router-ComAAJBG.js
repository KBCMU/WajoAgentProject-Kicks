import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/styles.css?url
var styles_default = "/assets/styles-D9tbl4KU.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/Header.tsx
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/mens",
		label: "Mens"
	},
	{
		to: "/womens",
		label: "Womens"
	},
	{
		to: "/kids",
		label: "Kids"
	}
];
function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "font-display text-3xl tracking-tight text-foreground transition-colors hover:text-kicks",
					children: "KICKS"
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
						to: link.to,
						activeProps: { className: "text-foreground" },
						inactiveProps: { className: "text-muted-foreground" },
						activeOptions: { exact: link.to === "/" },
						className: "font-body text-sm font-medium uppercase tracking-wide transition-colors hover:text-foreground",
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Search",
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted",
							children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Cart",
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted",
							children: /* @__PURE__ */ jsx(ShoppingBag, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Open menu",
							onClick: () => setMobileOpen(true),
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden",
							children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: cn("fixed inset-0 z-50 bg-background transition-opacity md:hidden", mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex h-16 items-center justify-between px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/",
				onClick: () => setMobileOpen(false),
				className: "font-display text-3xl tracking-tight text-foreground",
				children: "KICKS"
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				"aria-label": "Close menu",
				onClick: () => setMobileOpen(false),
				className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted",
				children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
			})]
		}), /* @__PURE__ */ jsx("nav", {
			className: "flex flex-col items-center gap-8 pt-12",
			children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
				to: link.to,
				onClick: () => setMobileOpen(false),
				className: "font-display text-4xl text-foreground transition-colors hover:text-kicks",
				children: link.label
			}, link.to))
		})]
	})] });
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-7xl text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Kicks — Premium Sneakers for Every Step" },
			{
				name: "description",
				content: "Shop the latest men's, women's, and kids' sneakers at Kicks. Modern, clean, and built for movement."
			},
			{
				name: "author",
				content: "Kicks"
			},
			{
				property: "og:title",
				content: "Kicks — Premium Sneakers for Every Step"
			},
			{
				property: "og:description",
				content: "Shop the latest men's, women's, and kids' sneakers at Kicks. Modern, clean, and built for movement."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@kicks"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) })]
	});
}
//#endregion
//#region src/routes/womens.tsx
var $$splitComponentImporter$3 = () => import("./womens-BJKxp05H.js");
var Route$4 = createFileRoute("/womens")({
	head: () => ({ meta: [
		{ title: "Women's Sneakers — Kicks" },
		{
			name: "description",
			content: "Discover the latest women's sneakers at Kicks. From running to lifestyle, find your perfect pair."
		},
		{
			property: "og:title",
			content: "Women's Sneakers — Kicks"
		},
		{
			property: "og:description",
			content: "Discover the latest women's sneakers at Kicks."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "https://id-preview--e7160e2b-9e2d-4140-b4c6-083f81045347.lovable.app";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/mens",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/womens",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/kids",
				changefreq: "weekly",
				priority: "0.8"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/mens.tsx
var $$splitComponentImporter$2 = () => import("./mens-Bs3Sd3Z8.js");
var Route$2 = createFileRoute("/mens")({
	head: () => ({ meta: [
		{ title: "Men's Sneakers — Kicks" },
		{
			name: "description",
			content: "Discover the latest men's sneakers at Kicks. Performance, street style, and everyday comfort."
		},
		{
			property: "og:title",
			content: "Men's Sneakers — Kicks"
		},
		{
			property: "og:description",
			content: "Discover the latest men's sneakers at Kicks."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/kids.tsx
var $$splitComponentImporter$1 = () => import("./kids-UUNKmZjd.js");
var Route$1 = createFileRoute("/kids")({
	head: () => ({ meta: [
		{ title: "Kids' Sneakers — Kicks" },
		{
			name: "description",
			content: "Discover colorful kids' sneakers at Kicks. Comfortable, durable, and ready for play."
		},
		{
			property: "og:title",
			content: "Kids' Sneakers — Kicks"
		},
		{
			property: "og:description",
			content: "Discover colorful kids' sneakers at Kicks."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-CxWJWZM2.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Kicks — Premium Sneakers for Every Step" },
		{
			name: "description",
			content: "Shop the latest men's, women's, and kids' sneakers at Kicks. Modern, clean, and built for movement."
		},
		{
			property: "og:title",
			content: "Kicks — Premium Sneakers for Every Step"
		},
		{
			property: "og:description",
			content: "Shop the latest men's, women's, and kids' sneakers at Kicks."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var WomensRoute = Route$4.update({
	id: "/womens",
	path: "/womens",
	getParentRoute: () => Route$5
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$5
});
var MensRoute = Route$2.update({
	id: "/mens",
	path: "/mens",
	getParentRoute: () => Route$5
});
var KidsRoute = Route$1.update({
	id: "/kids",
	path: "/kids",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	KidsRoute,
	MensRoute,
	SitemapDotxmlRoute,
	WomensRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
