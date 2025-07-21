"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export function Hero() {
  return (
    <section className="relative h-screen text-white flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Fitness athlete background"
          data-ai-hint="fitness editorial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10">
        <Slide direction="up" triggerOnce>
          <p className="text-lg md:text-xl text-white/80 mb-4">
            Fitness Professional & Lifestyle Influencer
          </p>
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-8">
            SAHIL FITNESS
          </h1>
        </Slide>
        <Fade delay={500} triggerOnce>
          <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-6 text-base font-semibold tracking-widest">
            <Link href="#resume">
              Explore
            </Link>
          </Button>
        </Fade>
      </div>
    </section>
  );
}
