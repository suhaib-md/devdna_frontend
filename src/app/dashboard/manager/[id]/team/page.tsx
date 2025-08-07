
'use client';

import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package2,
  Users,
  Trophy,
  Bot,
  User as UserIcon,
  BarChart,
  GitCommit,
  GitPullRequest,
  CheckCircle,
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
import { useRouter, useParams } from 'next/navigation';
import allUsers from '@/data/users.json';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TiltedCard from '@/components/ui/TiltedCard';

const developers = allUsers.filter(u => u.role === 'Developer' && u.profile);

export default function ManagerTeamPage() {
  const router = useRouter();
  const params = useParams();
  const managerId = params.id as string;

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
                href={`/dashboard/manager/${managerId}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/team`}
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/developers`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Developers
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/analytics`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <BarChart className="h-4 w-4" />
                Analytics
              </Link>
               <Link
                href={`/dashboard/manager/${managerId}/leaderboard`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Trophy className="h-4 w-4" />
                Leaderboard
              </Link>
              <Link
                href={`/dashboard/manager/${managerId}/profile`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <UserIcon className="h-4 w-4" />
                Profile
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
                  href={`/dashboard/manager/${managerId}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href={`/dashboard/manager/${managerId}/team`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                  <Users className="h-5 w-5" />
                  Team
                </Link>
                <Link
                  href={`/dashboard/manager/${managerId}/developers`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Users className="h-5 w-5" />
                  Developers
                </Link>
                <Link
                  href={`/dashboard/manager/${managerId}/analytics`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <BarChart className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  href={`/dashboard/manager/${managerId}/leaderboard`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Trophy className="h-5 w-5" />
                  Leaderboard
                </Link>
                 <Link
                  href={`/dashboard/manager/${managerId}/profile`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <UserIcon className="h-5 w-5" />
                  Profile
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
            <div className="space-y-8">
                {developers.map((dev) => (
                    <TiltedCard key={dev.id}>
                        <Link href={`/dashboard/manager/${managerId}/developers/${dev.id}`}>
                            <Card className="hover:bg-neutral-900/50 transition-colors">
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    <div className="flex items-center gap-2"><GitCommit className="h-4 w-4"/><span>{dev.profile?.monthly_commits || 0} Commits (30d)</span></div>
                                    <div className="flex items-center gap-2"><GitPullRequest className="h-4 w-4"/><span>{dev.metrics.prs.created} PRs Opened</span></div>
                                    <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4"/><span>{dev.metrics.issues_resolved} Issues Resolved</span></div>
                                     <div className="flex items-center gap-2 text-green-400"><Trophy className="h-4 w-4" /><span>Perf. Score: {dev.activityScore}%</span></div>
                                </div>
                                    <div>
                                        <h4 className="font-semibold mb-2 mt-2">Key Updates:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                                            <li>
                                                <span className="font-semibold text-white">Merged PR #152:</span> Implemented caching for user profiles.
                                            </li>
                                            <li>
                                                <span className="font-semibold text-white">Pushed 3 commits to `feature/api-throttling`:</span> Completed initial setup.
                                            </li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </TiltedCard>
                ))}
            </div>

             <Link href={`/dashboard/manager/${managerId}/ai-assistant`}>
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
