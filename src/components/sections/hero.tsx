"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import { useState, useRef, useEffect } from "react";

export function Hero() {
  const [currentVideoSrc, setCurrentVideoSrc] = useState('/lift.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    // Switch to the looping video only when the first one ends
    if (currentVideoSrc === '/lift.mp4') {
      setCurrentVideoSrc('/video.mp4');
    }
  };

  useEffect(() => {
    // When the video source changes, we load and play the new video
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video autoplay was prevented:", error);
        });
      }
    }
  }, [currentVideoSrc]);

  return (
    <section className="relative h-screen text-white flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={currentVideoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          loop={currentVideoSrc === '/video.mp4'} // Only loop the second video
          poster="/1.jpg" // Poster image while loading
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10">
        <Slide direction="up" triggerOnce>
          <p className="text-lg md:text-xl text-white/80 mb-4 tracking-widest uppercase font-light">
            Fitness Professional & Lifestyle Influencer
          </p>
          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter mb-8">
            SAHIL FITNESS
          </h1>
        </Slide>
        <Fade delay={500} triggerOnce>
          <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-6 text-base font-semibold tracking-widest">
            <Link href="#resume">
              Explore
            </Link>
          </Button>
        </Fade>
      </div>
    </section>
  );
}
