"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  portfolioImprovementSuggestions,
  type PortfolioImprovementOutput,
} from "@/ai/flows/portfolio-improvement-suggestions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb, Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  portfolioContent: z.string().min(50, "Please provide at least 50 characters of portfolio content."),
  athleteType: z.string().min(3, "Please specify the athlete type."),
  goals: z.string().min(10, "Please describe your goals."),
});

export function AiTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PortfolioImprovementOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioContent: "",
      athleteType: "",
      goals: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await portfolioImprovementSuggestions(values);
      setResult(response);
    } catch (e) {
      console.error(e);
      setError("An error occurred while generating suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
            <Sparkles className="mx-auto h-12 w-12 text-accent mb-4" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
            AI Portfolio Analyzer
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            Get instant, AI-powered feedback on your portfolio. Enter your details below to receive actionable suggestions tailored to your goals.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Analyze Your Portfolio</CardTitle>
              <CardDescription>Fill out the form to get AI suggestions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="portfolioContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Portfolio Content</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste your current bio, experience, skills, and any other relevant portfolio text here..."
                            rows={8}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="athleteType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Athlete Type</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Bodybuilder, Yoga Instructor, CrossFit Athlete" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Goals</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Gain more clients, secure sponsorships" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading} className="w-full font-bold">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Get Suggestions"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="mt-8 md:mt-0">
            {loading && (
                 <Card className="shadow-lg animate-pulse">
                    <CardHeader>
                        <div className="h-6 w-3/4 bg-muted rounded"></div>
                        <div className="h-4 w-1/2 bg-muted rounded mt-2"></div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="h-4 w-full bg-muted rounded"></div>
                        <div className="h-4 w-5/6 bg-muted rounded"></div>
                        <div className="h-4 w-full bg-muted rounded"></div>
                    </CardContent>
                 </Card>
            )}
            {error && <p className="text-destructive text-center">{error}</p>}
            {result && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Improvement Suggestions</CardTitle>
                  <CardDescription>Here's what our AI recommends for your portfolio.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue="suggestions" className="w-full">
                    <AccordionItem value="suggestions">
                      <AccordionTrigger className="font-headline text-lg">Suggestions</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pl-4">
                          {result.suggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm">
                               <Lightbulb className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                               <span>{suggestion}</span> 
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="reasoning">
                      <AccordionTrigger className="font-headline text-lg">Reasoning</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        {result.reasoning}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
