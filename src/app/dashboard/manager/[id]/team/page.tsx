
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
  UserPlus,
  Search,
  Trophy,
  GitBranch,
  Bot,
  User as UserIcon,
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
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import allUsers from '@/data/users.json';
import Breadcrumbs from '@/components/ui/breadcrumbs';

const developers = allUsers.filter(u => u.role === 'Developer');

export default function ManagerTeamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const params = useParams();
  const managerId = params.id as string;

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (dev.profile && dev.profile.languages[0].toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDevClick = (id: string) => {
    router.push(`/dashboard/manager/${managerId}/project-developer/${id}`);
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
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card className="lg:col-span-3">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-medium">Search Developers</CardTitle>
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <Input
                        placeholder="Search by name or skill (e.g., React)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Add Developer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button><UserPlus className="mr-2 h-4 w-4" /> Add New Dev</Button>
                        </DialogTrigger>
                         <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Add Developer to Project</DialogTitle>
                                <DialogDescription>
                                    Assign a developer to the project and set them up for success.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-6 py-4">
                                <div>
                                    <Label htmlFor="developer-search">Search Developer</Label>
                                    <Input id="developer-search" placeholder="Search by name, email, or skill..." className="mt-2" />
                                    {/* In a real app, this would show search results */}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="initial-task">Initial Task</Label>
                                    <Textarea id="initial-task" placeholder="e.g., Set up the initial project structure for the authentication feature."/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="git-branch">Assign Git Branch</Label>
                                     <div className="flex items-center">
                                        <span className="text-sm text-muted-foreground bg-muted px-3 py-2 rounded-l-md border border-r-0 border-input"><GitBranch/></span>
                                        <Input id="git-branch" placeholder="e.g., feature/user-auth" className="rounded-l-none"/>
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Add to Project</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
            </div>
            <Card>
            <CardHeader>
                <CardTitle>Developer Profiles</CardTitle>
                <CardDescription>
                Click on a developer to view their DevDNA.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Top Skill</TableHead>
                    <TableHead>Commits (30d)</TableHead>
                    <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredDevelopers.map((dev) => (
                    <TableRow key={dev.id} onClick={() => handleDevClick(dev.id)} className="cursor-pointer">
                        <TableCell>{dev.name}</TableCell>
                        <TableCell>{dev.email}</TableCell>
                        <TableCell>{dev.profile ? dev.profile.languages[0] : 'N/A'}</TableCell>
                        <TableCell>{dev.profile ? dev.profile.monthly_commits : 'N/A'}</TableCell>
                        <TableCell>
                        <Badge variant={dev.status === 'Active' ? 'default' : 'secondary'}>{dev.status}</Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
            </Card>
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
