'use server';

import {
  prioritizeWaterQualityIssues,
  PrioritizeWaterQualityIssuesOutput,
} from '@/ai/flows/prioritize-water-quality-issues';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

const PrioritizeSchema = z.object({
  documentText: z.string().min(50, 'Document text must be at least 50 characters long.'),
});

type PrioritizeState = {
  status: 'initial' | 'pending' | 'success' | 'error';
  message: string;
  data: PrioritizeWaterQualityIssuesOutput | null;
};

export async function handlePrioritize(
  prevState: PrioritizeState,
  formData: FormData
): Promise<PrioritizeState> {
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


const SignupSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().optional(),
});

type SignupState = {
  status: 'initial' | 'pending' | 'success' | 'error';
  message: string;
};

export async function handleSignup(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const validatedFields = SignupSchema.safeParse({
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Invalid input. ' + validatedFields.error.flatten().fieldErrors.email?.join(', '),
    };
  }
  
  const { email, message } = validatedFields.data;
  const submissionTime = new Date();
  const fileName = `submission_${submissionTime.getTime()}.txt`;
  const submissionsDir = path.join(process.cwd(), 'src', 'submissions');
  const filePath = path.join(submissionsDir, fileName);

  const content = `Date: ${submissionTime.toISOString()}\nEmail: ${email}\nMessage: ${message || 'No message provided.'}\n`;

  try {
    await fs.mkdir(submissionsDir, { recursive: true });
    await fs.writeFile(filePath, content);
    
    return {
      status: 'success',
      message: 'Thank you for signing up! Your information has been received.',
    };
  } catch (error) {
    console.error('Failed to save submission:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
