import { Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandUsePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          Fitchburg Land Use Actions
        </h1>
        <p className="text-lg text-muted-foreground">
          Documents, analysis, and commentary on land-use and land-development acts of the City of Fitchburg.
        </p>
      </header>

       <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Landmark className="h-6 w-6" />
              Example Land Use Action
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-card-foreground">
            <p>
              This section will contain documents from the official public record of land-use and land-development acts of the City of Fitchburg. Some records will be excerpts with analysis and commentary.
            </p>
            <p>
              This page will provide access to the full set of these important documents, ensuring transparency and public awareness of development in our city.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
