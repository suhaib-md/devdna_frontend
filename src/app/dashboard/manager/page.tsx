
'use client';

import { useState } from 'react';
import {
  Bell,
  Bot,
  CircleUser,
  Home,
  Menu,
  Package2,
  Projector,
  Search,
  Users,
  UserPlus,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const developers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', topSkill: 'React', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', topSkill: 'Node.js', status: 'Active' },
    { id: '3', name: 'Peter Jones', email: 'peter@example.com', topSkill: 'Vue.js', status: 'On Leave' },
    { id: '4', name: 'Mary Johnson', email: 'mary@example.com', topSkill: 'Angular', status: 'Active' },
];

export default function ManagerDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const filteredDevelopers = developers.filter(dev =>
    dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dev.topSkill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDevClick = (id: string) => {
    router.push(`/dashboard/developer/${id}`);
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
                href="#"
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Projector className="h-4 w-4" />
                Project Details
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Developers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Bot className="h-4 w-4" />
                Chatbot
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
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Projector className="h-5 w-5" />
                  Project Details
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Users className="h-5 w-5" />
                  Developers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Bot className="h-5 w-5" />
                  Chatbot
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">Manager Dashboard</h1>
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
          <Tabs defaultValue="developers">
            <TabsList>
              <TabsTrigger value="projects">Project Details</TabsTrigger>
              <TabsTrigger value="developers">Developers</TabsTrigger>
              <TabsTrigger value="chatbot">Chatbot</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
                <Card>
                    <CardHeader>
                        <CardTitle>Project Details</CardTitle>
                        <CardDescription>Details about ongoing projects.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Project details content will go here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="developers" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Search Developers</CardTitle>
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
                    <Button><UserPlus className="mr-2 h-4 w-4" /> Add New Dev</Button>
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
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDevelopers.map((dev) => (
                        <TableRow key={dev.id} onClick={() => handleDevClick(dev.id)} className="cursor-pointer">
                          <TableCell>{dev.name}</TableCell>
                          <TableCell>{dev.email}</TableCell>
                          <TableCell>{dev.topSkill}</TableCell>
                          <TableCell>
                            <Badge variant={dev.status === 'Active' ? 'default' : 'secondary'}>{dev.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
             <TabsContent value="chatbot">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Chatbot</CardTitle>
                        <CardDescription>Your AI assistant for project management.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Chatbot interface will go here.</p>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
