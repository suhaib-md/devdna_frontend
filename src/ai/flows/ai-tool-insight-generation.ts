'use server';

/**
 * @fileOverview An AI tool that summarizes text related to developer profiling and skills management.
 *
 * - aiToolInsightGeneration - A function that summarizes text for a project manager's briefing book.
 * - AiToolInsightGenerationInput - The input type for the aiToolInsightGeneration function.
 * - AiToolInsightGenerationOutput - The return type for the aiToolInsightGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiToolInsightGenerationInputSchema = z.object({
  text: z
    .string()
    .describe('The text related to developer profiling and skills management.'),
});
export type AiToolInsightGenerationInput = z.infer<typeof AiToolInsightGenerationInputSchema>;

const AiToolInsightGenerationOutputSchema = z.object({
  summary: z.string().describe('The summarized text for the briefing book.'),
});
export type AiToolInsightGenerationOutput = z.infer<typeof AiToolInsightGenerationOutputSchema>;

export async function aiToolInsightGeneration(input: AiToolInsightGenerationInput): Promise<AiToolInsightGenerationOutput> {
  return aiToolInsightGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiToolInsightGenerationPrompt',
  input: {schema: AiToolInsightGenerationInputSchema},
  output: {schema: AiToolInsightGenerationOutputSchema},
  prompt: `You are an AI assistant helping project managers.

  Please summarize the following text related to developer profiling and skills management for a briefing book.

  Text: {{{text}}}
  `,
});

const aiToolInsightGenerationFlow = ai.defineFlow(
  {
    name: 'aiToolInsightGenerationFlow',
    inputSchema: AiToolInsightGenerationInputSchema,
    outputSchema: AiToolInsightGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
