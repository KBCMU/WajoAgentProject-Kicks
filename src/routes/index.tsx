import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Zap, Truck, ShieldCheck } from "lucide-react";
import heroSneaker from "@/assets/hero-sneaker.png";
import mensCategory from "@/assets/mens-category.jpg";
import womensCategory from "@/assets/womens-category.jpg";
import kidsCategory from "@/assets/kids-category.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kicks — Premium Sneakers for Every Step" },
      { name: "description", content: "Shop the latest men's, women's, and kids' sneakers at Kicks. Modern, clean, and built for movement." },
      { property: "og:title", content: "Kicks — Premium Sneakers for Every Step" },
      { property: "og:description", content: "Shop the latest men's, women's, and kids' sneakers at Kicks." },
    ],
  }),
  component: Index,
});

const categories = [
  {
    label: "Mens",
    to: "/mens",
    image: mensCategory,
    alt: "Men's sneakers category",
  },
  {
    label: "Womens",
    to: "/womens",
    image: womensCategory,
    alt: "Women's sneakers category",
  },
  {
    label: "Kids",
    to: "/kids",
    image: kidsCategory,
    alt: "Kids' sneakers category",
  },
];

const features = [
  {
    icon: Zap,
    title: "Latest Drops",
    description: "New styles released weekly, curated for every lane.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Free delivery on orders over $75. Arrives in 2–5 days.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Guarantee",
    description: "Every pair is verified, quality-checked, and ready to wear.",
  },
];

function Index() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-kicks-dark py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 flex flex-col items-start text-left">
            <span className="mb-4 inline-block rounded-full bg-kicks/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kicks">
              New Season
            </span>
            <h1 className="font-display text-6xl leading-[0.9] text-primary-foreground sm:text-7xl lg:text-8xl">
              RUN THE<br />STREETS.
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/80">
              Engineered for performance. Styled for everyday. Find your next pair at Kicks.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/mens"
                className="group inline-flex items-center gap-2 rounded-full bg-kicks px-6 py-3 text-sm font-semibold text-kicks-foreground transition-transform hover:scale-105"
              >
                Shop Men
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/womens"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-kicks-dark"
              >
                Shop Women
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-full bg-kicks/20 blur-3xl" />
              <img
                src={heroSneaker}
                alt="Kicks flagship sneaker floating on a dark background"
                width={1024}
                height={1024}
                className="relative z-10 w-full drop-shadow-2xl"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">SHOP BY CATEGORY</h2>
            <p className="mt-2 text-muted-foreground">Find the perfect fit for every runner.</p>
          </div>
          <Link
            to="/mens"
            className="hidden items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-kicks sm:inline-flex"
          >
            View all <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.label}
              to={category.to}
              className="group relative overflow-hidden rounded-2xl bg-muted"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-3xl text-white">{category.label}</h3>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-white/90 transition-colors group-hover:text-kicks">
                  Shop now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:py-24">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background text-kicks">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
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
