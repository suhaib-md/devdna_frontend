
'use client';

import { useState } from 'react';
import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package2,
  Users,
  Projector,
  BarChart,
  Trophy,
  Github,
  Lock,
  Unlock,
  Bot,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default function CreateProjectPage() {
  const router = useRouter();
  const [repoOption, setRepoOption] = useState('new-repo');

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard/manager?created=true');
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-black text-white">
      <div className="hidden border-r border-neutral-800 bg-neutral-950/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-neutral-800 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">DevDNA</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard/manager"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/manager/team"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
              <Link
                href="/dashboard/manager/analytics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <BarChart className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="/dashboard/manager/leaderboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Trophy className="h-4 w-4" />
                Leaderboard
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-neutral-800 bg-neutral-950/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">DevDNA</span>
                </Link>
                 <Link
                  href="/dashboard/manager"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/manager/team"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Users className="h-5 w-5" />
                  Team
                </Link>
                <Link
                  href="/dashboard/manager/analytics"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <BarChart className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  href="/dashboard/manager/leaderboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Trophy className="h-5 w-5" />
                  Leaderboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <Breadcrumbs />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/login">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 relative">
          <Card className="max-w-2xl mx-auto w-full">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Fill in the information below to create your new project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleCreateProject}>
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" placeholder="e.g., Project Phoenix" defaultValue="DevDNA Platform" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="project-description">Project Description</Label>
                    <Textarea id="project-description" placeholder="A short description of your project." />
                </div>
                <div className="space-y-4">
                  <Label>GitHub Repository</Label>
                   <RadioGroup defaultValue="new-repo" className="flex space-x-6" onValueChange={setRepoOption}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new-repo" id="new-repo" />
                        <Label htmlFor="new-repo">Create a new repository</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="existing-repo" id="existing-repo" />
                        <Label htmlFor="existing-repo">Use an existing repository</Label>
                      </div>
                    </RadioGroup>
                </div>

                {repoOption === 'new-repo' ? (
                   <div className="space-y-6">
                        <div className="space-y-2">
                           <Label htmlFor="repo-name">Repository Name</Label>
                            <div className="flex items-center">
                                <span className="text-sm text-muted-foreground bg-muted px-3 py-2 rounded-l-md border border-r-0 border-input">github.com/your-org/</span>
                                <Input id="repo-name" placeholder="project-phoenix" defaultValue="devdna-platform" className="rounded-l-none"/>
                            </div>
                        </div>
                         <div className="space-y-2">
                             <Label>Visibility</Label>
                             <RadioGroup defaultValue="private" className="flex items-center gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="private" id="private"/>
                                    <Label htmlFor="private" className="flex items-center gap-2"><Lock/> Private</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                     <RadioGroupItem value="public" id="public"/>
                                    <Label htmlFor="public" className="flex items-center gap-2"><Unlock/> Public</Label>
                                </div>
                            </RadioGroup>
                         </div>
                   </div>
                ) : (
                    <div className="space-y-2">
                        <Label htmlFor="repo-link">Repository Link</Label>
                        <Input id="repo-link" placeholder="https://github.com/your-org/existing-repo" />
                    </div>
                )}
                

                <Button type="submit" className="w-full">
                    <Github className="mr-2 h-4 w-4"/>
                    Create Project
                </Button>
              </form>
            </CardContent>
          </Card>
           <Link href="/dashboard/manager/ai-assistant">
                <Button
                    variant="default"
                    size="icon"
                    className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-lg"
                >
                    <Bot className="h-8 w-8" />
                    <span className="sr-only">Open AI Assistant</span>
                </Button>
            </Link>
        </main>
      </div>
    </div>
  );
}
