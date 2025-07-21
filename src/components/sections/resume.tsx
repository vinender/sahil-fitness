"use client";

import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";

const experiences = [
  {
    role: "Fitness Trainer",
    company: "Warrior Gym, Mandi, Himachal Pradesh",
    period: "2024",
    description: "Lead trainer for high-performance athletes, responsible for personalized program design and nutrition planning. Increased client retention by 40%.",
  },
  {
    role: "Personal Trainer",
    company: "Warrior Gym, Mandi, Himachal Pradesh",
    period: "2018 - 2020",
    description: "Provided one-on-one and group training sessions. Specialized in functional strength and HIIT workouts.",
  },
];

const certifications = [
  "Fresher",
  "5 months experience in Warrior Gym, Mandi since 2021",
  "Certified Personal Trainer (CPT) - NASM",
  "Corrective Exercise Specialist (CES) - NASM",
  "Certified Nutrition Coach (CNC) - Precision Nutrition",
  "First Aid & CPR/AED Certified - Red Cross",
];

const skills = [
  "Strength & Conditioning", "Functional Training", "Bodybuilding",
  "Nutrition Planning", "Client Motivation", "Corrective Exercise", "Group Fitness"
];

const SectionTitle = ({ title }: { title: string }) => (
    <h3 className="text-3xl font-bold tracking-tight mb-8">{title}</h3>
);

export function Resume() {
    const resumeRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        const input = resumeRef.current;
        if (input) {
            try {
                const canvas = await html2canvas(input, {
                    scale: 2,
                    useCORS: true, 
                    backgroundColor: null,
                });
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px',
                    format: [canvas.width, canvas.height]
                });
                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                pdf.save('SahilFitness-Resume.pdf');
            } catch (error) {
                console.error("Error generating PDF:", error);
            }
        }
        setIsDownloading(false);
    };

  return (
    <section id="resume" className="py-24 md:py-32 bg-background">
      <div className="container grid md:grid-cols-3 gap-16 items-start" ref={resumeRef}>
        <div className="md:col-span-1 space-y-8 sticky top-24">
             <Image
                src="/2.jpg"
                alt="Sahil Fitness portrait"
                data-ai-hint="fitness portrait"
                width={800}
                height={1000}
                className="w-full h-auto object-cover grayscale"
              />
        </div>
        <div className="md:col-span-2 space-y-16">
            <div>
              <SectionTitle title="Experience" />
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-xl">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                    <p className="mt-2 text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title="Certifications" />
               <ul className="space-y-2 text-base list-disc pl-5">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
            </div>
            
             <div>
              <SectionTitle title="Skills" />
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <div key={skill} className="text-sm font-medium border border-border rounded-full px-4 py-2 bg-transparent">
                      {skill}
                    </div>
                  ))}
                </div>
            </div>
             <Button onClick={handleDownload} disabled={isDownloading} className="w-full font-bold rounded-none mt-8" size="lg">
                {isDownloading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume PDF
                  </>
                )}
              </Button>
          </div>
      </div>
    </section>
  );
}
