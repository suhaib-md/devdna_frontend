
'use client';

import { useRouter } from 'next/navigation';
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
  GitCommit,
  GitPullRequest,
  CheckCircle,
  Bot,
  ArrowLeft,
  MessageSquare
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import allUsers from '@/data/users.json';

const developers = allUsers.filter(u => u.role === 'Developer');


export default function DailyStatusPage() {
  const router = useRouter();

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
           <div className="w-full flex-1 flex items-center gap-4">
             <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ArrowLeft />
                <span className="sr-only">Back</span>
            </Button>
            <div>
                <h1 className="text-lg font-semibold md:text-2xl">Daily Status</h1>
                <p className="text-sm text-muted-foreground">Updates from the last 24 hours.</p>
            </div>
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
            <div className="space-y-8">
                {developers.map(dev => (
                    <Card key={dev.id}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={`https://placehold.co/48x48.png?text=${dev.avatar}`} />
                                <AvatarFallback>{dev.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{dev.name}</CardTitle>
                                <CardDescription>{dev.developerType}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2"><GitCommit className="h-4 w-4"/><span>5 Commits</span></div>
                                <div className="flex items-center gap-2"><GitPullRequest className="h-4 w-4"/><span>1 PR Opened</span></div>
                                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/><span>3 Issues Resolved</span></div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Key Updates:</h4>
                                <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300">
                                    <li>
                                        <span className="font-semibold text-white">Merged PR #123:</span> Implemented caching layer for user profiles. Blocked by API key availability.
                                    </li>
                                     <li>
                                        <span className="font-semibold text-white">Fixed Bug #456:</span> Resolved authentication issue on mobile devices.
                                    </li>
                                     <li>
                                        <span className="font-semibold text-white">Pushed 5 commits to `feature/api-throttling`:</span> Completed initial setup for rate limiting.
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
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
