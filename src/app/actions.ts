'use server';

import {
  prioritizeWaterQualityIssues,
  PrioritizeWaterQualityIssuesOutput,
} from '@/ai/flows/prioritize-water-quality-issues';
import { z } from 'zod';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, getApps, App } from 'firebase-admin/app';

// Initialize Firebase Admin SDK
let adminApp: App;
if (!getApps().length) {
  adminApp = initializeApp();
} else {
  adminApp = getApps()[0];
}

const db = getFirestore(adminApp);


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
  
  try {
    const submissionTime = new Date();
    await db.collection('submissions').add({
      email,
      message: message || 'No message provided.',
      submittedAt: submissionTime,
    });
    
    return {
      status: 'success',
      message: 'Thank you for signing up! Your information has been received.',
    };
  } catch (error) {
    console.error('Failed to save submission to Firestore:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
