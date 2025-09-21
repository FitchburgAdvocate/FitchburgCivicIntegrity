import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail } from 'lucide-react';

export default function AboutPage() {
  const founderImage = PlaceHolderImages.find((img) => img.id === '7');

  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          About Fitchburg Civic Integrity
        </h1>
        <p className="text-lg text-muted-foreground">
          Advocating for transparency, accountability, and environmental
          stewardship in Fitchburg.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-card-foreground">
              <p>
                Fitchburg Civic Integrity is a watchdog organization dedicated to
                ensuring that the government of Fitchburg, Massachusetts,
                operates with transparency and accountability. We curate and
                present information on city actions, plans, and issues to keep
                the public informed and engaged.
              </p>
              <p>
                A core focus of our work is the protection of our natural
                resources. We prioritize issues related to water quality,
                streams, wetlands, groundwater, and the diligent enforcement of
                the Clean Water Act. Through research, advocacy, and community
                mobilization, we strive to hold public officials accountable and
                safeguard our environment for future generations.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-card-foreground">
                <p>
                    If you have questions, comments, or information to share, you are invited to contact David M. Haight directly.
                </p>
                <div className="flex items-center gap-2 mt-4">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:david.haight@fitchburgnaturalresourceswatch.org" className="text-primary hover:underline">
                        david.haight@fitchburgnaturalresourceswatch.org
                    </a>
                </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">The Founder</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {founderImage && (
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                  data-ai-hint={founderImage.imageHint}
                />
              )}
              <h3 className="text-xl font-semibold font-headline">
                David M. Haight
              </h3>
              <p className="text-muted-foreground">
                With a lifelong commitment to public service and environmental
                protection, David M. Haight founded Fitchburg Civic Integrity to
                empower citizens with the information they need to participate
                effectively in local governance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
