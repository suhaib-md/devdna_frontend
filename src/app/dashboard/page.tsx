import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-neutral-400 mb-8">Welcome to your DevDNA dashboard.</p>
      <Link href="/">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
