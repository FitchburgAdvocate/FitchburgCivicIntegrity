import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Book,
  FileText,
  Gavel,
  Megaphone,
  Eye,
  Angry,
  Landmark,
  Leaf,
} from 'lucide-react';
import {
  actionAlerts,
  blogPosts,
  documents,
  legalActions,
} from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { BlogPost, ActionAlert, LegalAction, Document } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const SectionHeader = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => (
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-bold tracking-tight font-headline">
      {title}
    </h2>
    <Button variant="ghost" asChild>
      <Link href={href}>
        View all <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  </div>
);

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const image = PlaceHolderImages.find((img) => img.id === post.imageUrl);
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
        <CardDescription>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          - {post.author}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Button asChild>
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default function DashboardPage() {
  const recentPosts = blogPosts.slice(0, 2);
  const recentAlerts = actionAlerts.slice(0, 2);
  const recentLegal = legalActions.slice(0, 1);
  const recentDocs = documents.slice(0, 3);

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the Fitchburg Civic Integrity hub. Here’s the latest.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-4">
          <SectionHeader title="In the Spotlight" href="/spotlight" />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Eye className="h-6 w-6" />
                Featured Issue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This section highlights the most pressing civic and
                environmental issues currently impacting Fitchburg.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="space-y-4">
          <SectionHeader title="Fitchburg Officials Did What?!?" href="/did-what" />
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Angry className="h-6 w-6" />
                Questionable Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
               Exposing and examining questionable decisions and actions by city officials that demand public scrutiny.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="space-y-6">
        <SectionHeader title="Recent Blog Posts" href="/blog" />
        <div className="grid gap-6 md:grid-cols-2">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-4">
          <SectionHeader title="Latest Action Alerts" href="/alerts" />
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="p-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold font-headline">
                        {alert.title}
                      </h3>
                      <Badge
                        variant={
                          alert.severity === 'High'
                            ? 'destructive'
                            : alert.severity === 'Medium'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {alert.content}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {new Date(alert.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <SectionHeader title="Legal Action Updates" href="/legal" />
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentLegal.map((action) => (
                  <div key={action.id} className="p-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold font-headline">
                        {action.title}
                      </h3>
                      <Badge variant="outline">{action.status}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {action.summary}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Filed: {new Date(action.filingDate).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="space-y-4">
          <SectionHeader title="Fitchburg Land Use Actions" href="/land-use" />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Landmark className="h-6 w-6" />
                Land Use Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Official records and analysis of land-use and development acts in Fitchburg.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="space-y-4">
          <SectionHeader title="Our Natural Resources" href="/natural-resources" />
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Leaf className="h-6 w-6" />
                Natural Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
               Commentary on city actions affecting Fitchburg's natural resources.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
      
      <section className="space-y-6">
        <SectionHeader title="Recent Documents" href="/documents" />
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentDocs.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell className="hidden md:table-cell">{doc.category}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{doc.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
