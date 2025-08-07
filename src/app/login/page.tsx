
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Atom, Building, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import DarkVeil from '@/components/ui/DarkVeil';
import allUsers from '@/data/users.json';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    const user = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
        if (user.role === 'Manager') {
            router.push('/dashboard/manager');
        } else if (user.role === 'Admin') {
            router.push('/dashboard/admin');
        } else {
            router.push(`/dashboard/developer/${user.id}`);
        }
    } else {
        // Fallback for generic dev email
        if(email.toLowerCase().includes('dev@gmail.com') || email.toLowerCase().includes('user@gmail.com')) {
            router.push('/dashboard/developer');
        }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 relative">
       <div className="absolute inset-0 z-0 h-full w-full">
          <DarkVeil />
       </div>
      <div className="absolute top-8 left-8 z-10">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-neutral-300">
          <Atom className="h-6 w-6" />
          <span className="font-bold text-lg">DevDNA</span>
        </Link>
      </div>
      <Card className="w-full max-w-md bg-neutral-950/80 backdrop-blur-sm border-neutral-800 text-white z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription className="text-neutral-400">
            Sign in to access your developer insights.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="user@gmail.com" required className="bg-neutral-900 border-neutral-700" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required className="bg-neutral-900 border-neutral-700" defaultValue="password" />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
