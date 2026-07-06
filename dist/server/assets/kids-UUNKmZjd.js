import { t as kids_category_default } from "./kids-category-DX8_V3X8.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ChevronLeft } from "lucide-react";
//#region src/routes/kids.tsx?tsr-split=component
var featured = [
	{
		name: "Kicks Little Runner",
		price: "$75",
		tag: "Popular"
	},
	{
		name: "Kicks Play Max",
		price: "$85",
		tag: "New"
	},
	{
		name: "Kicks Mini Court",
		price: "$70",
		tag: null
	},
	{
		name: "Kicks Spark",
		price: "$80",
		tag: "Limited"
	}
];
function KidsPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "relative overflow-hidden bg-kicks-dark py-20 sm:py-28 lg:py-32",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ jsxs(Link, {
								to: "/",
								className: "mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground",
								children: [/* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }), " Home"]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "font-display text-6xl leading-[0.9] text-primary-foreground sm:text-7xl lg:text-8xl",
								children: "KIDS'"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-md text-lg text-primary-foreground/80",
								children: "Colorful, comfy, and built to keep up. Explore the latest kids' sneakers."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/mens",
									className: "group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-kicks-dark",
									children: ["Shop Men's", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
								})
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "relative flex justify-center lg:justify-end",
						children: /* @__PURE__ */ jsx("div", {
							className: "relative w-full max-w-md overflow-hidden rounded-2xl lg:max-w-lg",
							children: /* @__PURE__ */ jsx("img", {
								src: kids_category_default,
								alt: "Kids' sneakers collection",
								width: 1024,
								height: 1024,
								className: "h-full w-full object-cover"
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl text-foreground sm:text-5xl",
					children: "FEATURED KIDS'"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: featured.map((product) => /* @__PURE__ */ jsxs("div", {
						className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative aspect-square bg-muted",
							children: [product.tag && /* @__PURE__ */ jsx("span", {
								className: "absolute left-3 top-3 rounded-full bg-kicks px-2.5 py-1 text-xs font-semibold text-kicks-foreground",
								children: product.tag
							}), /* @__PURE__ */ jsx("img", {
								src: kids_category_default,
								alt: product.name,
								width: 1024,
								height: 1024,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-1 flex-col p-4",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl text-foreground",
									children: product.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm font-semibold text-foreground",
									children: product.price
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									className: "mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
									children: "Add to Cart"
								})
							]
						})]
					}, product.name))
				})]
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
export { KidsPage as component };
