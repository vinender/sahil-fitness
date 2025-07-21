import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, Star, HeartPulse } from "lucide-react";

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
  { name: "Certified Personal Trainer (CPT)", issuer: "NASM" },
  { name: "Corrective Exercise Specialist (CES)", issuer: "NASM" },
  { name: "Certified Nutrition Coach (CNC)", issuer: "Precision Nutrition" },
  { name: "First Aid & CPR/AED Certified", issuer: "Red Cross" },
];

const skills = [
  "Strength & Conditioning", "HIIT", "Functional Training", "Bodybuilding",
  "Nutrition Planning", "Client Motivation", "Corrective Exercise", "Group Fitness"
];

const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-8 h-8 text-accent" />
    <h3 className="font-headline text-2xl font-semibold">{title}</h3>
  </div>
);

export function Resume() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold mb-12">
          Professional Resume
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>
                <SectionTitle icon={Briefcase} title="Experience" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-1 h-full w-0.5 bg-border"></div>
                  <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-accent"></div>
                  <h4 className="font-bold">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                  <p className="mt-1 text-sm">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>
                  <SectionTitle icon={Award} title="Certifications" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>
                  <SectionTitle icon={Star} title="Skills" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm bg-background">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
