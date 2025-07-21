import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] md:h-screen text-white flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Fitness athlete background"
          data-ai-hint="fitness editorial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative">
        <h1 className="text-4xl md:text-7xl font-light uppercase tracking-widest mb-4 animate-fade-in-up">
          Alex Steel
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-8 animate-fade-in-up animation-delay-300">
          Fitness Professional & Lifestyle Influencer
        </p>
        <div className="animate-fade-in-up animation-delay-600">
          <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full">
            <Link href="#resume">
              Explore
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
