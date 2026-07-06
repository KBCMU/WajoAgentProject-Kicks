import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft } from "lucide-react";
import womensCategory from "@/assets/womens-category.jpg";

export const Route = createFileRoute("/womens")({
  head: () => ({
    meta: [
      { title: "Women's Sneakers — Kicks" },
      { name: "description", content: "Discover the latest women's sneakers at Kicks. From running to lifestyle, find your perfect pair." },
      { property: "og:title", content: "Women's Sneakers — Kicks" },
      { property: "og:description", content: "Discover the latest women's sneakers at Kicks." },
    ],
  }),
  component: WomensPage,
});

const featured = [
  { name: "Kicks Aura", price: "$130", tag: "Trending" },
  { name: "Kicks Cloud Run", price: "$150", tag: "New" },
  { name: "Kicks Classic Low", price: "$110", tag: null },
  { name: "Kicks Elevate", price: "$145", tag: "Limited" },
];

function WomensPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-kicks-dark py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" /> Home
            </Link>
            <h1 className="font-display text-6xl leading-[0.9] text-primary-foreground sm:text-7xl lg:text-8xl">
              WOMEN'S
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/80">
              Designed for every pace of life. Explore the latest women's sneakers.
            </p>
            <div className="mt-8">
              <Link
                to="/kids"
                className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-kicks-dark"
              >
                Shop Kids'
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl lg:max-w-lg">
              <img
                src={womensCategory}
                alt="Women's sneakers collection"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">FEATURED WOMEN'S</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square bg-muted">
                {product.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-kicks px-2.5 py-1 text-xs font-semibold text-kicks-foreground">
                    {product.tag}
                  </span>
                )}
                <img
                  src={womensCategory}
                  alt={product.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-xl text-foreground">{product.name}</h3>
                <p className="mt-1 text-sm font-semibold text-foreground">{product.price}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <Link
            to="/"
            className="font-display text-2xl tracking-tight text-foreground transition-colors hover:text-kicks"
          >
            KICKS
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/mens" className="transition-colors hover:text-foreground">Mens</Link>
            <Link to="/womens" className="transition-colors hover:text-foreground">Womens</Link>
            <Link to="/kids" className="transition-colors hover:text-foreground">Kids</Link>
          </nav>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kicks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
