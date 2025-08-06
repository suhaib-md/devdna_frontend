
'use client';

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const projects = [
    { name: 'DevDNA Platform', status: 'Active', teamSize: 8, completion: 75, lead: 'John Doe' },
    { name: 'AI Chatbot Integration', status: 'Active', teamSize: 5, completion: 60, lead: 'Jane Smith' },
    { name: 'Internal Tools', status: 'Completed', teamSize: 3, completion: 100, lead: 'Peter Jones' },
    { name: 'Data Pipeline', status: 'On Hold', teamSize: 4, completion: 20, lead: 'Mary Johnson' },
    { name: 'New Mobile App', status: 'Planning', teamSize: 0, completion: 5, lead: 'TBD' },
];

export default function ManagerProjectsPage() {
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
                Projects
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
                  Projects
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
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
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
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>All Projects</CardTitle>
                        <CardDescription>
                            A list of all projects you are currently managing.
                        </CardDescription>
                    </div>
                     <Dialog>
                        <DialogTrigger asChild>
                           <Button><PlusCircle className="mr-2 h-4 w-4" />Create Project</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Create New Project</DialogTitle>
                            <DialogDescription>
                                Fill in the details below to start a new project.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input id="name" placeholder="Project Phoenix" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="lead" className="text-right">Lead</Label>
                                <Input id="lead" placeholder="Select developer" className="col-span-3" />
                            </div>
                            </div>
                            <DialogFooter>
                            <Button type="submit">Create Project</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Project Name</TableHead>
                        <TableHead>Lead</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Team Size</TableHead>
                        <TableHead className="text-right">Completion</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.name}>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>{project.lead}</TableCell>
                        <TableCell>
                            <Badge variant={project.status === 'Active' ? 'default' : project.status === 'Completed' ? 'secondary' : 'outline'}>{project.status}</Badge>
                        </TableCell>
                         <TableCell>{project.teamSize}</TableCell>
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
