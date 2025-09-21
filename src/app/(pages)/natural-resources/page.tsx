import { Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NaturalResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          Our Natural Resources
        </h1>
        <p className="text-lg text-muted-foreground">
          Commentary on the land-use and land-development acts affecting Fitchburg's natural environment.
        </p>
      </header>

       <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Leaf className="h-6 w-6" />
              Protecting the Nashua River
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-card-foreground">
            <p>
              This page will feature articles, commentary, and official records related to city actions that impact the natural resources within Fitchburg.
            </p>
            <p>
              We will delve into how land-development decisions affect our water, air, and open spaces, providing a resource for citizens concerned about environmental stewardship.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
