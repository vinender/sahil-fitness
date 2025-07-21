import Image from "next/image";

const galleryImages = [
  {
    src: "/bicep.jpeg",
    alt: "Athlete showing bicep",
    hint: "bicep flex",
    className: "md:col-span-1",
  },
  {
    src: "/4.jpg",
    alt: "Athlete during a heavy lifting session",
    hint: "gym workout",
    className: "md:col-span-2",
  },
  {
    src: "/5.jpg",
    alt: "Athlete in a dynamic action shot",
    hint: "fitness action",
    className: "md:col-span-2",
  },
  {
    src: "/6.jpg",
    alt: "Candid shot of the athlete resting between sets",
    hint: "fitness candid",
    className: "md:col-span-1",
  },
  {
    src: "/7.jpg",
    alt: "Athlete during an outdoor workout",
    hint: "outdoor fitness",
    className: "md:col-span-1",
  },
    {
    src: "/8.jpg",
    alt: "Close-up of athlete's focused expression",
    hint: "fitness intense",
    className: "md:col-span-1",
  },
    {
    src: "/9.jpg",
    alt: "Athlete holding weights",
    hint: "lifting weights",
    className: "md:col-span-1",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-center text-2xl md:text-4xl font-light uppercase tracking-widest mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className={`overflow-hidden rounded-md shadow-lg ${image.className}`}>
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
