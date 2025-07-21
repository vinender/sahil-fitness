import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        <p className="text-lg md:text-xl text-white/80 mb-4 animate-fade-in-up animation-delay-300">
          Fitness Professional & Lifestyle Influencer
        </p>
        <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-8 animate-fade-in-up">
          SAHIL FITNESS
        </h1>
        <div className="animate-fade-in-up animation-delay-600">
          <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-6 text-base font-semibold tracking-widest">
            <Link href="#resume">
              Explore
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
