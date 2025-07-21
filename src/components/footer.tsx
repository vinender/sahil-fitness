import { Twitter, Instagram, Linkedin } from "lucide-react";
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
    <footer className="bg-background border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg uppercase tracking-widest">Alex Steel</span>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          © {new Date().getFullYear()} All rights reserved.
        </p>
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
      </div>
    </footer>
  );
}
