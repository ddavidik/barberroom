import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { BarbersSection } from "~/components/BarbersSection";

const HomePage = () => (
  <>
    {/* Desktop: Hero + About = exact one viewport. Mobile: free-flow, no height cap */}
    <div className="flex flex-col md:overflow-hidden md:h-[calc(100vh-4rem)]">
      <Hero />
      <About />
    </div>
    <BarbersSection />
  </>
);

export const Route = createFileRoute("/")({
  component: HomePage,
});
