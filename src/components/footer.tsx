import { Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const socialLinks = [
  {
    href: "https://www.instagram.com/_leveling._.up_?igsh=MW5xb24ybjM5cnd6Mw==",
    icon: Instagram,
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="font-bold text-base md:text-lg tracking-widest">SAHIL FITNESS</span>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider text-center">
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
