'use server';

import {
  prioritizeWaterQualityIssues,
  PrioritizeWaterQualityIssuesOutput,
} from '@/ai/flows/prioritize-water-quality-issues';
import { z } from 'zod';

const PrioritizeSchema = z.object({
  documentText: z.string().min(50, 'Document text must be at least 50 characters long.'),
});

type State = {
  status: 'initial' | 'pending' | 'success' | 'error';
  message: string;
  data: PrioritizeWaterQualityIssuesOutput | null;
};

export async function handlePrioritize(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = PrioritizeSchema.safeParse({
    documentText: formData.get('documentText'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Invalid input. ' + validatedFields.error.flatten().fieldErrors.documentText?.join(', '),
      data: null,
    };
  }
  
  try {
    const result = await prioritizeWaterQualityIssues({ documentText: validatedFields.data.documentText });
    return {
      status: 'success',
      message: 'Analysis complete.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'An unexpected error occurred during analysis.',
      data: null,
    };
  }
}
