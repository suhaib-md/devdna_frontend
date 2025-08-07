
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Bell,
  Bot,
  CircleUser,
  Home,
  Menu,
  Package2,
  Users,
  GitCommit,
  Users2,
  BarChart,
  LineChart,
  Trophy,
  PlusCircle,
  CalendarClock
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import allUsers from '@/data/users.json';
import { Progress } from '@/components/ui/progress';
import Breadcrumbs from '@/components/ui/breadcrumbs';

const developers = allUsers.filter(u => u.role === 'Developer');

function ManagerDashboardComponent() {
  const searchParams = useSearchParams();
  const [noProject, setNoProject] = useState(true);

  useEffect(() => {
    if (searchParams.get('created') === 'true') {
      setNoProject(false);
    }
  }, [searchParams]);

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
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
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
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
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
           {noProject ? (
                 <Card>
                    <CardHeader>
                        <CardTitle>No Active Project</CardTitle>
                        <CardDescription>You are not currently managing any project.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Create a new project to get started.</p>
                         <Link href="/dashboard/manager/create-project">
                            <Button className="mt-4">
                                <PlusCircle className="mr-2 h-4 w-4"/>
                                Create New Project
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-8">
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">DevDNA Platform</CardTitle>
                            <CardDescription>
                            An intelligent AI agent that revolutionizes performance management and project allocation through automated tracking and data-driven insights.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                        <div className="font-semibold text-muted-foreground">Status:</div>
                                        <div><Badge variant="outline">Active</Badge></div>
                                        <div className="font-semibold text-muted-foreground">Start Date:</div>
                                        <div>2023-01-15</div>
                                        <div className="font-semibold text-muted-foreground">Team Size:</div>
                                        <Link href="/dashboard/manager/team" className="text-primary hover:underline">{developers.length} Developers</Link>
                                        <div className="font-semibold text-muted-foreground">GitHub Repo:</div>
                                        <Link href="#" className="text-primary hover:underline">devdna/platform</Link>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Project Health</h3>
                                    <div className="space-y-4">
                                        <Link href="/dashboard/manager/analytics" className='block hover:bg-neutral-950/50 p-2 rounded-lg'>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium">Overall Progress</span>
                                                <span className="text-sm font-medium">75%</span>
                                            </div>
                                            <Progress value={75} />
                                        </Link>
                                        <Link href="/dashboard/manager/analytics" className='block hover:bg-neutral-950/50 p-2 rounded-lg'>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium">Sprint Velocity</span>
                                                <span className="text-sm font-medium">18 SP / sprint</span>
                                            </div>
                                            <Progress value={90} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                             <div className="pt-4">
                                <Link href="/dashboard/manager/daily-status">
                                    <Button variant="outline">
                                        <CalendarClock className="mr-2"/> View Daily Status
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Team Overview</CardTitle>
                            <CardDescription>Current assignments for developers on this project. Click a developer to view their project-specific profile.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                    <thead className="[&_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50">
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Developer</th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Current Task</th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                        </tr>
                                    </thead>
                                     <tbody className="[&_tr:last-child]:border-0">
                                        {developers.map((dev) => (
                                            <tr key={dev.id} className="border-b transition-colors hover:bg-muted/50">
                                                <td className="p-4 align-middle">
                                                    <Link href={`/dashboard/manager/project-developer/${dev.id}`}>
                                                        <div className="flex items-center gap-3 group">
                                                            <Avatar>
                                                                <AvatarImage src={`https://placehold.co/40x40.png?text=${dev.avatar}`} />
                                                                <AvatarFallback>{dev.avatar}</AvatarFallback>
                                                            </Avatar>
                                                            <span className="font-medium group-hover:text-primary">{dev.name}</span>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="p-4 align-middle">API Integration for User Profiles</td>
                                                <td className="p-4 align-middle"><Badge variant="outline">In Progress</Badge></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

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

export default function ManagerDashboard() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ManagerDashboardComponent />
        </Suspense>
    )
}
