
'use client';

import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package2,
  Users,
  BarChart,
  Trophy,
  User as UserIcon,
  Briefcase,
  Star,
  Activity
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

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
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default function ManagerProfilePage() {
  const params = useParams();
  const managerId = params.id as string;
  const manager = allUsers.find(u => u.id === managerId);
  const router = useRouter();

  if (!manager) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Manager not found.</div>;
  }
  
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
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
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
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
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
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <Card>
                <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={`https://placehold.co/96x96.png?text=${manager.avatar}`} />
                        <AvatarFallback>{manager.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <CardTitle className="text-3xl">{manager.name}</CardTitle>
                        <p className="text-lg text-muted-foreground">{manager.role}</p>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Size</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{manager.teamSize} Developers</div>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Activity</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-400">High</div>
                  </CardContent>
                </Card>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Experience</CardTitle>
                    <CardDescription>Professional history and areas of expertise.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                            <Star className="h-5 w-5"/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Senior Project Manager</h4>
                            <p className="text-sm text-muted-foreground">Tech Innovators Inc. | 2018 - 2022</p>
                            <p className="mt-1 text-sm">Oversaw the development and launch of three major enterprise SaaS products, managing cross-functional teams of up to 20 engineers.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                            <Star className="h-5 w-5"/>
                        </div>
                        <div>
                            <h4 className="font-semibold">Software Development Lead</h4>
                            <p className="text-sm text-muted-foreground">CodeCrafters LLC | 2015 - 2018</p>
                            <p className="mt-1 text-sm">Led a team of 8 frontend developers, focusing on agile methodologies and improving code quality through rigorous code reviews and pair programming.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </main>
      </div>
    </div>
  );
}
