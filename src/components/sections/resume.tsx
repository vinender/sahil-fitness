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

const SectionTitle = ({ title }: { title: string }) => (
    <h3 className="text-3xl font-bold tracking-tight mb-8">{title}</h3>
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
    <section id="resume" className="py-24 md:py-32 bg-background">
      <div className="container grid md:grid-cols-3 gap-16 items-start">
        <div className="md:col-span-1 space-y-8 sticky top-24">
             <Image
                src="https://i.ibb.co/6y18mJg/sven-mieke-Lx-GDv8-Inset-A-unsplash.jpg"
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
             <Button onClick={handleDownload} className="w-full font-bold rounded-none" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
          </div>
      </div>
    </section>
  );
}
