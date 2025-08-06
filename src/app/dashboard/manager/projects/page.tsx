

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package2,
  Projector,
  Users,
  BarChart,
  PlusCircle,
  Trophy,
  Bot
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
import { Progress } from '@/components/ui/progress';


const tasks = [
    { id: 'TASK-101', name: 'Implement user authentication flow', assignee: 'John Doe', status: 'Done', progress: 100 },
    { id: 'TASK-102', name: 'Design dashboard layout', assignee: 'Jane Smith', status: 'In Progress', progress: 60 },
    { id: 'TASK-103', name: 'Develop API for user profiles', assignee: 'Mary Johnson', status: 'In Progress', progress: 40 },
    { id: 'TASK-104', name: 'Setup CI/CD pipeline', assignee: 'Peter Jones', status: 'To Do', progress: 10 },
];

function ManagerProjectPageComponent() {
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/manager/projects"
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <Projector className="h-4 w-4" />
                Project
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
               <Link
                href="/dashboard/manager/ai-assistant"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Bot className="h-4 w-4" />
                AI Assistant
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
                  href="/dashboard/manager/projects"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                  <Projector className="h-5 w-5" />
                  Project
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
                 <Link
                  href="/dashboard/manager/ai-assistant"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Bot className="h-5 w-5" />
                  AI Assistant
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">Project Details</h1>
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
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
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
                <>
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
                                <div>12 Developers</div>
                                <div className="font-semibold text-muted-foreground">GitHub Repo:</div>
                                <Link href="#" className="text-primary hover:underline">devdna/platform</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Project Health</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium">Overall Progress</span>
                                        <span className="text-sm font-medium">75%</span>
                                    </div>
                                    <Progress value={75} />
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium">Sprint Velocity</span>
                                        <span className="text-sm font-medium">18 SP / sprint</span>
                                    </div>
                                    <Progress value={90} />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Task Overview</CardTitle>
                    <CardDescription>Current status of all tasks in the project.</CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Task ID</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Task Name</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Assignee</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Status</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Progress</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {tasks.map((task) => (
                                    <tr key={task.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-mono text-xs">{task.id}</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">{task.name}</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{task.assignee}</td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                            <Badge variant={task.status === 'Done' ? 'default' : task.status === 'In Progress' ? 'outline' : 'secondary'}>
                                                {task.status}
                                            </Badge>
                                        </td>
                                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <span>{task.progress}%</span>
                                                <Progress value={task.progress} className="w-24" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
            </>
            )}
        </main>
      </div>
    </div>
  );
}


export default function ManagerProjectPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ManagerProjectPageComponent />
        </Suspense>
    )
}
