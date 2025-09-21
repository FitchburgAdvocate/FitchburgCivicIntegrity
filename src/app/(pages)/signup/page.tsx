import { SignupForm } from '@/components/signup-form';

export default function SignupPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="space-y-2 mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter font-headline">
          Sign Up for Updates
        </h1>
        <p className="text-lg text-muted-foreground">
          Register your email address to receive information and updates from
          Fitchburg Civic Integrity.
        </p>
      </header>

      <SignupForm />
    </div>
  );
}
