"use client";

import { Award, Briefcase, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { downloadResume } from "@/app/actions";

const experiences = [
  {
    role: "Head Fitness Trainer",
    company: "Apex Gym, New York",
    period: "2020 - Present",
    description: "Lead trainer for high-performance athletes, responsible for personalized program design and nutrition planning. Increased client retention by 40%.",
  },
  {
    role: "Personal Trainer",
    company: "Core Strength Center, Miami",
    period: "2018 - 2020",
    description: "Provided one-on-one and group training sessions. Specialized in functional strength and HIIT workouts.",
  },
];

const certifications = [
  "Certified Personal Trainer (CPT) - NASM",
  "Corrective Exercise Specialist (CES) - NASM",
  "Certified Nutrition Coach (CNC) - Precision Nutrition",
  "First Aid & CPR/AED Certified - Red Cross",
];

const skills = [
  "Strength & Conditioning", "HIIT", "Functional Training", "Bodybuilding",
  "Nutrition Planning", "Client Motivation", "Corrective Exercise", "Group Fitness"
];

const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <Icon className="w-7 h-7 text-primary" />
    <h3 className="text-2xl font-light uppercase tracking-wider">{title}</h3>
  </div>
);

const handleDownload = async () => {
    const { content, filename } = await downloadResume();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

export function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionTitle icon={Briefcase} title="Experience" />
              <div className="space-y-8 border-l-2 border-primary/20 pl-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                     <div className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-primary"></div>
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                    <p className="mt-2 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle icon={Award} title="Certifications" />
               <ul className="space-y-2 text-sm">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
            </div>
            
             <div>
              <SectionTitle icon={Star} title="Skills" />
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <div key={skill} className="text-sm font-medium border border-border rounded-full px-3 py-1 bg-background">
                      {skill}
                    </div>
                  ))}
                </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8 sticky top-24">
             <Image
                src="https://placehold.co/800x1000"
                alt="Alex Steel portrait"
                data-ai-hint="fitness portrait"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
              <Button onClick={handleDownload} className="w-full" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
