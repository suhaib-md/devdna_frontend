'use server';

import { aiToolInsightGeneration } from '@/ai/flows/ai-tool-insight-generation';
import type { AiToolInsightGenerationOutput } from '@/ai/flows/ai-tool-insight-generation';

export async function getInsight(text: string): Promise<{ summary: string | null; error: string | null }> {
  if (!text) {
    return { summary: null, error: 'Text cannot be empty.' };
  }

  try {
    const result: AiToolInsightGenerationOutput = await aiToolInsightGeneration({ text });
    return { summary: result.summary, error: null };
  } catch (e) {
    console.error(e);
    // Provide a more user-friendly error message
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return { summary: null, error: `Failed to generate insight: ${errorMessage}` };
  }
}
