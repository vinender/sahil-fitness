import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Fitness athlete background"
          data-ai-hint="fitness athlete"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      </div>
      <div className="container relative text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 animate-fade-in-up">
          Alex Steel
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up animation-delay-300">
          Certified Fitness Trainer & Lifestyle Influencer dedicated to transforming lives through personalized coaching and science-backed nutrition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button size="lg" asChild className="font-bold">
            <Link href="#contact">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="font-bold">
            <Link href="#resume">View My Resume</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
