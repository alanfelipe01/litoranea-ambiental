import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Mission } from "@/components/site/Mission";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Litorânea Ambiental — Empresa Júnior de Ciências Ambientais da UFC";
const description =
  "Soluções ambientais desenvolvidas com conhecimento, inovação e compromisso com a sustentabilidade. PRAD, RAS, EVA e PGRS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
