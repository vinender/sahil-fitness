"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Resume } from "@/components/sections/resume";
import { Gallery } from "@/components/sections/gallery";
import { FeaturedMedia } from "@/components/sections/featured-media";
import { AiTool } from "@/components/sections/ai-tool";
import { Contact } from "@/components/sections/contact";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Fade triggerOnce>
          <Resume />
        </Fade>
        <Fade triggerOnce>
          <Gallery />
        </Fade>
        <Fade triggerOnce>
          <FeaturedMedia />
        </Fade>
        <Fade triggerOnce>
          <AiTool />
        </Fade>
        <Fade triggerOnce>
          <Contact />
        </Fade>
      </main>
      <Footer />
    </div>
  );
}
