
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

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('user');
  const [userEmail, setUserEmail] = useState('');
  const [managerEmail, setManagerEmail] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  const handleSignIn = () => {
    // In a real app, you'd have authentication logic here.
    let email = '';
    if (role === 'user') email = userEmail;
    if (role === 'manager') email = managerEmail;
    if (role === 'admin') email = adminEmail;

    if (email.toLowerCase() === 'admin@gmail.com') {
      router.push('/dashboard/admin');
    } else if (email.toLowerCase() === 'manager@gmail.com') {
      router.push('/dashboard/manager');
    } else if (email.toLowerCase().includes('dev@gmail.com') || email.toLowerCase().includes('user@gmail.com')) {
      router.push('/dashboard/developer');
    } else {
      // Default redirect for any other user
      router.push('/dashboard/developer');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-white hover:text-neutral-300">
          <Atom className="h-6 w-6" />
          <span className="font-bold text-lg">DevDNA</span>
        </Link>
      </div>
      <Card className="w-full max-w-md bg-neutral-950 border-neutral-800 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription className="text-neutral-400">
            Sign in to access your developer insights.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="user" className="w-full" onValueChange={setRole}>
            <TabsList className="grid w-full grid-cols-3 bg-neutral-900">
              <TabsTrigger value="user">
                <User className="mr-2 h-4 w-4" /> User
              </TabsTrigger>
              <TabsTrigger value="manager">
                <Building className="mr-2 h-4 w-4" /> Manager
              </TabsTrigger>
               <TabsTrigger value="admin">
                <Shield className="mr-2 h-4 w-4" /> Admin
              </TabsTrigger>
            </TabsList>
            <TabsContent value="user">
              <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-email">Email</Label>
                    <Input id="user-email" type="email" placeholder="dev@gmail.com" required className="bg-neutral-900 border-neutral-700" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-password">Password</Label>
                    <Input id="user-password" type="password" required className="bg-neutral-900 border-neutral-700" defaultValue="password" />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In as User
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="manager">
              <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="manager-email">Manager Email</Label>
                    <Input id="manager-email" type="email" placeholder="manager@gmail.com" required className="bg-neutral-900 border-neutral-700" value={managerEmail} onChange={(e) => setManagerEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="manager-password">Password</Label>
                    <Input id="manager-password" type="password" required className="bg-neutral-900 border-neutral-700" defaultValue="password" />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In as Manager
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="admin">
              <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" placeholder="admin@gmail.com" required className="bg-neutral-900 border-neutral-700" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input id="admin-password" type="password" required className="bg-neutral-900 border-neutral-700" defaultValue="password" />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In as Admin
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
