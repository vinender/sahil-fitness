"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log the data and simulate success.
  console.log("Contact form submitted:", validatedFields.data);

  return { success: true, message: "Your message has been sent successfully!" };
}


export async function downloadResume() {
  const resume = `
Alex Steel - Certified Fitness Trainer & Lifestyle Influencer

---
Experience
---

Head Fitness Trainer - Apex Gym, New York (2020 - Present)
Lead trainer for high-performance athletes, responsible for personalized program design and nutrition planning. Increased client retention by 40%.

Personal Trainer - Core Strength Center, Miami (2018 - 2020)
Provided one-on-one and group training sessions. Specialized in functional strength and HIIT workouts.

---
Certifications
---

- Certified Personal Trainer (CPT) - NASM
- Corrective Exercise Specialist (CES) - NASM
- Certified Nutrition Coach (CNC) - Precision Nutrition
- First Aid & CPR/AED Certified - Red Cross

---
Skills
---

Strength & Conditioning, HIIT, Functional Training, Bodybuilding, Nutrition Planning, Client Motivation, Corrective Exercise, Group Fitness
  `;

  return {
    content: resume,
    filename: 'AlexSteel-Resume.txt',
  }
}
