import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    src: "https://placehold.co/600x800",
    alt: "Athlete posing after a competition",
    hint: "bodybuilding pose",
    caption: "Championship Win 2023",
  },
  {
    src: "https://placehold.co/800x600",
    alt: "Athlete during a heavy lifting session",
    hint: "gym workout",
    caption: "Pushing the Limits",
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Athlete in a dynamic action shot",
    hint: "fitness action",
    caption: "Explosive Power",
  },
  {
    src: "https://placehold.co/800x600",
    alt: "Athlete leading a group training session",
    hint: "group fitness",
    caption: "Inspiring Others",
  },
  {
    src: "https://placehold.co/600x800",
    alt: "Candid shot of the athlete resting between sets",
    hint: "fitness candid",
    caption: "Focus and Determination",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
          Photo Gallery
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden shadow-lg group">
                  <CardContent className="p-0 relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.hint}
                      width={800}
                      height={600}
                      className="aspect-[3/4] object-cover w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <p className="absolute bottom-4 left-4 text-white font-bold text-lg font-headline">
                      {image.caption}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
