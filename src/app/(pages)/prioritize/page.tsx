import { IssuePrioritizer } from '@/components/issue-prioritizer';

export default function PrioritizePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          AI Issue Prioritizer
        </h1>
        <p className="text-lg text-muted-foreground">
          Use our AI tool to analyze public documents and highlight issues
          pertinent to water quality, streams, wetlands, groundwater, and the
          Clean Water Act.
        </p>
      </header>

      <IssuePrioritizer />
    </div>
  );
}
