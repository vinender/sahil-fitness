'use server';

/**
 * @fileOverview An AI agent that suggests improvements to a fitness athlete's portfolio.
 *
 * - portfolioImprovementSuggestions - A function that provides portfolio improvement suggestions.
 * - PortfolioImprovementInput - The input type for the portfolioImprovementSuggestions function.
 * - PortfolioImprovementOutput - The return type for the portfolioImprovementSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioImprovementInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The current content of the fitness athlete portfolio.'),
  athleteType: z
    .string()
    .describe(
      'The type of fitness athlete (e.g., bodybuilder, CrossFit athlete, yoga instructor).'
    ),
  goals: z
    .string()
    .describe(
      'The goals of the fitness athlete (e.g., gain more clients, secure sponsorships).'
    ),
});
export type PortfolioImprovementInput = z.infer<
  typeof PortfolioImprovementInputSchema
>;

const PortfolioImprovementOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of suggestions to improve the portfolio.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the suggested improvements.'),
});
export type PortfolioImprovementOutput = z.infer<
  typeof PortfolioImprovementOutputSchema
>;

export async function portfolioImprovementSuggestions(
  input: PortfolioImprovementInput
): Promise<PortfolioImprovementOutput> {
  return portfolioImprovementFlow(input);
}

const portfolioImprovementPrompt = ai.definePrompt({
  name: 'portfolioImprovementPrompt',
  input: {schema: PortfolioImprovementInputSchema},
  output: {schema: PortfolioImprovementOutputSchema},
  prompt: `You are an expert in crafting high-performing portfolios for fitness athletes.

  Analyze the following portfolio content and provide specific, actionable suggestions to improve it based on current best practices for attracting clients and opportunities.

  Consider the athlete's type and goals when making suggestions. Explain the reasoning behind each suggestion.

  Portfolio Content: {{{portfolioContent}}}
  Athlete Type: {{{athleteType}}}
  Goals: {{{goals}}}

  Respond with specific and actionable suggestions.
`,
});

const portfolioImprovementFlow = ai.defineFlow(
  {
    name: 'portfolioImprovementFlow',
    inputSchema: PortfolioImprovementInputSchema,
    outputSchema: PortfolioImprovementOutputSchema,
  },
  async input => {
    const {output} = await portfolioImprovementPrompt(input);
    return output!;
  }
);
