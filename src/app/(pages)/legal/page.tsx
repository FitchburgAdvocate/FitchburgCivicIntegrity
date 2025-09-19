import { Gavel } from 'lucide-react';
import { legalActions } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LegalPage() {
    const sortedActions = [...legalActions].sort(
        (a, b) => new Date(b.filingDate).getTime() - new Date(a.filingDate).getTime()
    );

  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          Legal Action Tracker
        </h1>
        <p className="text-lg text-muted-foreground">
          Up-to-date information on legal actions taken by David M. Haight or
          Fitchburg Civic Integrity.
        </p>
      </header>
      <Card>
        <CardContent className="p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {sortedActions.map((action) => (
              <AccordionItem value={action.id} key={action.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left pr-4">
                    <div className="flex-1 mb-2 md:mb-0">
                      <h3 className="font-semibold text-base font-headline">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {action.summary}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className='text-xs text-muted-foreground'>
                            Filed: {new Date(action.filingDate).toLocaleDateString()}
                        </p>
                        <Badge
                        variant={action.status === 'Ongoing' ? 'secondary' : 'outline'}
                        >
                        {action.status}
                        </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none dark:prose-invert text-muted-foreground pl-2 border-l-2 ml-2">
                    <p>{action.details}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
