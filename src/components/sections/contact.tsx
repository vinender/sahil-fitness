"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full font-bold">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export function Contact() {
  const initialState = { message: "", errors: {}, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Let's Connect
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/80 mt-4 px-4">
            Have a question, a project proposal, or just want to say hi? Send me a message, and I'll get back to you as soon as possible.
          </p>
        </div>
        <Card className="max-w-xl mx-auto bg-card/10 border-border/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Mail className="w-6 h-6" />
              Contact Form
            </CardTitle>
            <CardDescription className="text-primary-foreground/70">
              Your next chapter starts here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={dispatch} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-background/90 text-foreground" />
                {state.errors?.name && <p className="text-accent text-sm mt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-background/90 text-foreground" />
                 {state.errors?.email && <p className="text-accent text-sm mt-1">{state.errors.email[0]}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me about your fitness goals..." required className="bg-background/90 text-foreground" />
                 {state.errors?.message && <p className="text-accent text-sm mt-1">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
