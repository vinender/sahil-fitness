import Image from "next/image";

const galleryImages = [
  {
    src: "https://i.ibb.co/wJv0wJd/tim-miel-9-C-o-S-b3-Xp8-unsplash.jpg",
    alt: "Athlete posing after a competition",
    hint: "bodybuilding pose",
    className: "md:col-span-1",
  },
  {
    src: "https://i.ibb.co/mS3p4kF/jason-briscoe-y-I9-ECW8-D-AE-unsplash.jpg",
    alt: "Athlete during a heavy lifting session",
    hint: "gym workout",
    className: "md:col-span-2",
  },
  {
    src: "https://i.ibb.co/C2qj5fh/gordon-cowie-K4-R-b-C4-Mns-unsplash.jpg",
    alt: "Athlete in a dynamic action shot",
    hint: "fitness action",
    className: "md:col-span-2",
  },
  {
    src: "https://i.ibb.co/tTn1Rw2/sven-mieke-Lx-GDv8-Inset-A-unsplash.jpg",
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
