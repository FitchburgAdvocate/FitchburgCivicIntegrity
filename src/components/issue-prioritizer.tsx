'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handlePrioritize } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  status: 'initial' as const,
  message: '',
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
        </>
      ) : (
        'Prioritize Issues'
      )}
    </Button>
  );
}

export function IssuePrioritizer() {
  const [state, formAction] = useFormState(handlePrioritize, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === 'error' && state.message) {
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-6">
        <div className="grid w-full gap-2">
          <Label htmlFor="documentText" className="text-base">
            Paste Document Text
          </Label>
          <Textarea
            id="documentText"
            name="documentText"
            placeholder="Paste the full text of a city document, meeting minutes, or report here..."
            rows={15}
            required
            className="bg-card"
          />
           <p className="text-sm text-muted-foreground">
            Provide at least 50 characters of text for analysis.
          </p>
        </div>
        <SubmitButton />
      </form>

      {state.status === 'success' && state.data && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              {state.data.isRelevant ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : (
                <Info className="h-6 w-6 text-blue-500" />
              )}
              Analysis Result
            </CardTitle>
             <CardDescription>
              AI-powered summary of water quality relevance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.data.isRelevant ? (
                 <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="font-headline">Relevant to Water Quality</AlertTitle>
                    <AlertDescription>
                        This document contains information pertinent to water quality, streams, wetlands, groundwater, or the Clean Water Act.
                    </AlertDescription>
                 </Alert>
            ) : (
                 <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-headline">Not a Water Quality Priority</AlertTitle>
                    <AlertDescription>
                        This document does not appear to contain significant information related to water quality issues.
                    </AlertDescription>
                 </Alert>
            )}

            <div className="mt-6">
              <h3 className="font-semibold mb-2 font-headline">Summary of Relevant Issues:</h3>
              <div className="prose prose-sm max-w-none text-foreground/90">
                <p>{state.data.relevantIssues}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
