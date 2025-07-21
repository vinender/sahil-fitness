import Image from "next/image";

const galleryImages = [
  {
    src: "https://placehold.co/800x1200",
    alt: "Athlete posing after a competition",
    hint: "bodybuilding pose",
    className: "md:col-span-1",
  },
  {
    src: "https://placehold.co/1200x800",
    alt: "Athlete during a heavy lifting session",
    hint: "gym workout",
    className: "md:col-span-2",
  },
  {
    src: "https://placehold.co/1200x800",
    alt: "Athlete in a dynamic action shot",
    hint: "fitness action",
    className: "md:col-span-2",
  },
  {
    src: "https://placehold.co/800x1200",
    alt: "Candid shot of the athlete resting between sets",
    hint: "fitness candid",
    className: "md:col-span-1",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-light uppercase tracking-widest mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`overflow-hidden ${image.className}`}>
               <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
