'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { handleSignup } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const initialState = {
  status: 'initial' as const,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
        </>
      ) : (
        'Submit'
      )}
    </Button>
  );
}

export function SignupForm() {
  const [state, formAction] = useActionState(handleSignup, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'error' && state.message) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: state.message,
      });
    }
    if (state.status === 'success' && state.message) {
      toast({
        title: 'Submission Successful',
        description: state.message,
      });
    }
  }, [state, toast]);

  if (state.status === 'success') {
    return (
      <Card className="fade-in">
        <CardHeader>
          <CardTitle>Thank You!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{state.message}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <form action={formAction}>
        <CardContent className="space-y-6 pt-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here."
              rows={5}
            />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
