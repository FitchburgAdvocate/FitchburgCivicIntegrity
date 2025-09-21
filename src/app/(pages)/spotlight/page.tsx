import { Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SpotlightPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          In the Spotlight
        </h1>
        <p className="text-lg text-muted-foreground">
          Highlighting the most pressing civic and environmental issues
          currently impacting Fitchburg.
        </p>
      </header>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Eye className="h-6 w-6" />
              Focus on Water Quality
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-card-foreground">
            <p>
              This month, we are focusing on the persistent issue of industrial
              runoff into the Nashua River. Recent tests have shown elevated
              levels of contaminants that pose a risk to both the ecosystem and
              public health.
            </p>
            <p>
              We are calling on the City Council to take immediate action by
              enforcing existing regulations and commissioning a new,
              independent study to identify the primary sources of pollution.
              Stay tuned for updates and learn how you can get involved in our
              campaign for a cleaner river.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
