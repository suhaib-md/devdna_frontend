
'use client';

import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package2,
  Projector,
  Code,
  Users
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

const projects = [
    { name: 'DevDNA Platform', status: 'Active', role: 'Frontend Developer', completion: 75, startDate: '2023-01-15' },
    { name: 'AI Chatbot Integration', status: 'Active', role: 'AI Engineer', completion: 60, startDate: '2023-03-01' },
    { name: 'Internal Tools', status: 'Completed', role: 'Full-stack Developer', completion: 100, startDate: '2022-09-20' },
    { name: 'Data Pipeline', status: 'On Hold', role: 'Data Engineer', completion: 20, startDate: '2023-05-10' },
];

export default function MyProjectsPage() {
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
                href="/dashboard/developer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/developer/my-projects"
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <Projector className="h-4 w-4" />
                My Projects
              </Link>
              <Link
                href="/dashboard/developer/team"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
               <Link
                href="/dashboard/developer/1"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Code className="h-4 w-4" />
                My Skill Profile
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
                  href="/dashboard/developer"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/developer/my-projects"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                  <Projector className="h-5 w-5" />
                  My Projects
                </Link>
                <Link
                  href="/dashboard/developer/team"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                   <Users className="h-5 w-5" />
                  Team
                </Link>
                 <Link
                  href="/dashboard/developer/1"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Code className="h-5 w-5" />
                  My Skill Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">My Projects</h1>
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
                <CardHeader>
                    <CardTitle>All Projects</CardTitle>
                    <CardDescription>
                        A list of all projects you are currently or have previously been a part of.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Project Name</TableHead>
                        <TableHead>Your Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead className="text-right">Completion</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.name}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>{project.role}</TableCell>
                        <TableCell>
                            <Badge variant={project.status === 'Active' ? 'outline' : project.status === 'Completed' ? 'default' : 'secondary'}>
                                {project.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{project.startDate}</TableCell>
                        <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                                <span>{project.completion}%</span>
                                <Progress value={project.completion} className="w-24" />
                            </div>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}

