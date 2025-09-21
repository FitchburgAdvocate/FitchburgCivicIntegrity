import { Angry } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DidWhatPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          Fitchburg Officials Did What?!?
        </h1>
        <p className="text-lg text-muted-foreground">
          Exposing and examining questionable decisions and actions by city
          officials that demand public scrutiny.
        </p>
      </header>

       <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Angry className="h-6 w-6" />
              Secretive Rezoning Vote
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-card-foreground">
            <p>
              A recent vote by the Planning Board to rezone a sensitive wetland area for commercial development was conducted with minimal public notice. The meeting's agenda was vaguely worded, and the session was held at an inconvenient time for public participation.
            </p>
            <p>
              This lack of transparency is unacceptable. Fitchburg Civic Integrity has filed a public records request for all communications related to this decision and is exploring a potential open meeting law violation. Decisions that impact our environment must be made in the full light of day, not behind closed doors.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
