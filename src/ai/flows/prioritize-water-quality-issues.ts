'use server';
/**
 * @fileOverview An AI tool to analyze city documents and highlight those related to water quality.
 *
 * - prioritizeWaterQualityIssues - A function that handles the analysis and prioritization of water quality issues.
 * - PrioritizeWaterQualityIssuesInput - The input type for the prioritizeWaterQualityIssues function.
 * - PrioritizeWaterQualityIssuesOutput - The return type for the prioritizeWaterQualityIssues function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrioritizeWaterQualityIssuesInputSchema = z.object({
  documentText: z
    .string()
    .describe('The text content of the city document to analyze.'),
});
export type PrioritizeWaterQualityIssuesInput = z.infer<
  typeof PrioritizeWaterQualityIssuesInputSchema
>;

const PrioritizeWaterQualityIssuesOutputSchema = z.object({
  relevantIssues: z
    .string()
    .describe(
      'A summary of the issues in the document that are most relevant to water quality, streams, wetlands, groundwater, and the Clean Water Act.'
    ),
  isRelevant: z
    .boolean()
    .describe(
      'Whether the document contains information relevant to water quality, streams, wetlands, groundwater, and the Clean Water Act.'
    ),
});
export type PrioritizeWaterQualityIssuesOutput = z.infer<
  typeof PrioritizeWaterQualityIssuesOutputSchema
>;

export async function prioritizeWaterQualityIssues(
  input: PrioritizeWaterQualityIssuesInput
): Promise<PrioritizeWaterQualityIssuesOutput> {
  return prioritizeWaterQualityIssuesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'prioritizeWaterQualityIssuesPrompt',
  input: {schema: PrioritizeWaterQualityIssuesInputSchema},
  output: {schema: PrioritizeWaterQualityIssuesOutputSchema},
  prompt: `You are an expert in environmental science and regulations. Your task is to analyze a city document and identify the issues that are most relevant to water quality, streams, wetlands, groundwater, and the Clean Water Act.

Document Text: {{{documentText}}}

Based on the document, provide a summary of the relevant issues and indicate whether the document is relevant to water quality concerns.
`,
});

const prioritizeWaterQualityIssuesFlow = ai.defineFlow(
  {
    name: 'prioritizeWaterQualityIssuesFlow',
    inputSchema: PrioritizeWaterQualityIssuesInputSchema,
    outputSchema: PrioritizeWaterQualityIssuesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
