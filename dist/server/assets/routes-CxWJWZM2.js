import { t as mens_category_default } from "./mens-category-Bf1w5wHs.js";
import { t as womens_category_default } from "./womens-category-Bd5JfPmX.js";
import { t as kids_category_default } from "./kids-category-DX8_V3X8.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ChevronRight, ShieldCheck, Truck, Zap } from "lucide-react";
//#region src/assets/hero-sneaker.png
var hero_sneaker_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQI12P4z8AAAAACAAHiIbwzAAAAAElFTkSuQmCC";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var categories = [
	{
		label: "Mens",
		to: "/mens",
		image: mens_category_default,
		alt: "Men's sneakers category"
	},
	{
		label: "Womens",
		to: "/womens",
		image: womens_category_default,
		alt: "Women's sneakers category"
	},
	{
		label: "Kids",
		to: "/kids",
		image: kids_category_default,
		alt: "Kids' sneakers category"
	}
];
var features = [
	{
		icon: Zap,
		title: "Latest Drops",
		description: "New styles released weekly, curated for every lane."
	},
	{
		icon: Truck,
		title: "Fast Shipping",
		description: "Free delivery on orders over $75. Arrives in 2–5 days."
	},
	{
		icon: ShieldCheck,
		title: "Authentic Guarantee",
		description: "Every pair is verified, quality-checked, and ready to wear."
	}
];
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "relative overflow-hidden bg-kicks-dark py-20 sm:py-28 lg:py-36",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 flex flex-col items-start text-left",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "mb-4 inline-block rounded-full bg-kicks/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kicks",
								children: "New Season"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-6xl leading-[0.9] text-primary-foreground sm:text-7xl lg:text-8xl",
								children: [
									"RUN THE",
									/* @__PURE__ */ jsx("br", {}),
									"STREETS."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-md text-lg text-primary-foreground/80",
								children: "Engineered for performance. Styled for everyday. Find your next pair at Kicks."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap gap-4",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/mens",
									className: "group inline-flex items-center gap-2 rounded-full bg-kicks px-6 py-3 text-sm font-semibold text-kicks-foreground transition-transform hover:scale-105",
									children: ["Shop Men", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								}), /* @__PURE__ */ jsx(Link, {
									to: "/womens",
									className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-kicks-dark",
									children: "Shop Women"
								})]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "relative flex justify-center lg:justify-end",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative w-full max-w-md lg:max-w-lg",
							children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-kicks/20 blur-3xl" }), /* @__PURE__ */ jsx("img", {
								src: hero_sneaker_default,
								alt: "Kicks flagship sneaker floating on a dark background",
								width: 1024,
								height: 1024,
								className: "relative z-10 w-full drop-shadow-2xl",
								fetchPriority: "high"
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-10 flex items-end justify-between",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl text-foreground sm:text-5xl",
						children: "SHOP BY CATEGORY"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-muted-foreground",
						children: "Find the perfect fit for every runner."
					})] }), /* @__PURE__ */ jsxs(Link, {
						to: "/mens",
						className: "hidden items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-kicks sm:inline-flex",
						children: ["View all ", /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: categories.map((category) => /* @__PURE__ */ jsxs(Link, {
						to: category.to,
						className: "group relative overflow-hidden rounded-2xl bg-muted",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "aspect-[4/3] overflow-hidden",
								children: /* @__PURE__ */ jsx("img", {
									src: category.image,
									alt: category.alt,
									width: 1024,
									height: 1024,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute bottom-0 left-0 p-6",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-3xl text-white",
									children: category.label
								}), /* @__PURE__ */ jsxs("span", {
									className: "mt-1 inline-flex items-center gap-1 text-sm font-medium text-white/90 transition-colors group-hover:text-kicks",
									children: ["Shop now ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
					}, category.label))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-t border-border bg-secondary",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:py-24",
					children: features.map((feature) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-start",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background text-kicks",
								children: /* @__PURE__ */ jsx(feature.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl text-foreground",
								children: feature.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: feature.description
							})
						]
					}, feature.title))
				})
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "font-display text-2xl tracking-tight text-foreground transition-colors hover:text-kicks",
							children: "KICKS"
						}),
						/* @__PURE__ */ jsxs("nav", {
							className: "flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/mens",
									className: "transition-colors hover:text-foreground",
									children: "Mens"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/womens",
									className: "transition-colors hover:text-foreground",
									children: "Womens"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/kids",
									className: "transition-colors hover:text-foreground",
									children: "Kids"
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Kicks. All rights reserved."
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
