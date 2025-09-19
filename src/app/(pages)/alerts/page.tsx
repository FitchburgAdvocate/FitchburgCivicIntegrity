import { Megaphone } from 'lucide-react';
import { actionAlerts } from '@/lib/data';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import type { ActionAlert as ActionAlertType } from '@/lib/types';

export default function AlertsPage() {
  const sortedAlerts = [...actionAlerts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto">
      <header className="space-y-2 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          Action Alerts
        </h1>
        <p className="text-lg text-muted-foreground">
          Stay informed about urgent City of Fitchburg actions and learn how you
          can make a difference.
        </p>
      </header>

      <div className="space-y-6">
        {sortedAlerts.map((alert: ActionAlertType) => (
          <Alert
            key={alert.id}
            variant={alert.severity === 'High' ? 'destructive' : 'default'}
            className="bg-card"
          >
            <Megaphone className="h-4 w-4" />
            <div className="flex items-center justify-between mb-2">
              <AlertTitle className="font-headline text-lg">
                {alert.title}
              </AlertTitle>
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
            <AlertDescription>
              <p>{alert.content}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {new Date(alert.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
}
