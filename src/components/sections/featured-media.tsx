import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Youtube } from "lucide-react";
import { Badge } from "../ui/badge";

const mediaItems = [
  {
    type: "Article",
    icon: Newspaper,
    image: "https://i.ibb.co/wJv0wJd/tim-miel-9-C-o-S-b3-Xp8-unsplash.jpg",
    hint: "magazine cover",
    title: "The Rise of a Fitness Icon: Sahil Fitness's Journey",
    source: "Fitness Weekly Magazine",
    link: "#",
  },
  {
    type: "Video",
    icon: Youtube,
    image: "https://i.ibb.co/mS3p4kF/jason-briscoe-y-I9-ECW8-D-AE-unsplash.jpg",
    hint: "youtube thumbnail",
    title: "A Day in the Life: Training with Sahil Fitness",
    source: "YouTube Originals",
    link: "#",
  },
  {
    type: "Podcast",
    icon: Newspaper,
    image: "https://i.ibb.co/C2qj5fh/gordon-cowie-K4-R-b-C4-Mns-unsplash.jpg",
    hint: "podcast logo",
    title: "Mind Over Muscle: The Philosophy of a Champion",
    source: "The Performance Podcast",
    link: "#",
  },
];

export function FeaturedMedia() {
  return (
    <section id="media" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
          Featured Media
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Card key={index} className="flex flex-col shadow-lg overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    data-ai-hint={item.hint}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.source}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 font-bold text-primary">
                  <Link href={item.link}>
                    {item.type === "Video" ? "Watch Now" : "Read More"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
