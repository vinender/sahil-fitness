import { Twitter, Instagram, Linkedin, Dumbbell } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const socialLinks = [
  {
    href: "https://twitter.com",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline">FitPro Showcase</span>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button
              key={href}
              variant="ghost"
              size="icon"
              asChild
              aria-label={`Visit our ${label} page`}
            >
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} FitPro Showcase. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
