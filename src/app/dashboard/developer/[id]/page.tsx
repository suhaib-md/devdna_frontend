
'use client';

import {
  Bell,
  Bot,
  CircleUser,
  GitCommit,
  Home,
  Menu,
  Package2,
  Projector,
  Trophy,
  Code,
  Users,
  GitPullRequest,
  CheckCircle,
  FolderKanban,
  BrainCircuit,
  History,
  ClipboardList
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useParams } from 'next/navigation';

const developers = [
    { id: '1', name: 'John Doe', email: 'john@example.com', topSkill: 'React', status: 'Active', commits: 1254, projects: 3, avatar: 'JD', prs: 231, issues: 89 },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', topSkill: 'Node.js', status: 'Active', commits: 987, projects: 4, avatar: 'JS', prs: 180, issues: 120 },
    { id: '3', name: 'Peter Jones', email: 'peter@example.com', topSkill: 'Vue.js', status: 'On Leave', commits: 450, projects: 2, avatar: 'PJ', prs: 95, issues: 45 },
    { id: '4', name: 'Mary Johnson', email: 'mary@example.com', topSkill: 'Angular', status: 'Active', commits: 1500, projects: 5, avatar: 'MJ', prs: 310, issues: 150 },
];

const projectHistory = [
    { name: 'AI Chatbot Integration', role: 'AI Engineer', duration: '6 months', tech: ['Python', 'TensorFlow', 'Next.js'] },
    { name: 'Internal Tools', role: 'Full-stack Developer', duration: '1 year', tech: ['React', 'Node.js', 'PostgreSQL'] },
];

export default function DeveloperProfilePage() {
  const params = useParams();
  const developer = developers.find(d => d.id === params.id);

  if (!developer) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Developer not found.</div>;
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
                href="/dashboard/developer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/developer/project"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Projector className="h-4 w-4" />
                Current Project
              </Link>
               <Link
                href="/dashboard/developer/tasks"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <ClipboardList className="h-4 w-4" />
                My Tasks
              </Link>
              <Link
                href="/dashboard/developer/team"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
              <Link
                href="/dashboard/developer/project-history"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <History className="h-4 w-4" />
                Project History
              </Link>
               <Link
                href={`/dashboard/developer/${developer.id}`}
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <Code className="h-4 w-4" />
                Skill Profile
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
                  href="/dashboard/developer/project"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Projector className="h-5 w-5" />
                  Current Project
                </Link>
                <Link
                  href="/dashboard/developer/tasks"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <ClipboardList className="h-5 w-5" />
                  My Tasks
                </Link>
                <Link
                  href="/dashboard/developer/team"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                   <Users className="h-5 w-5" />
                  Team
                </Link>
                <Link
                  href="/dashboard/developer/project-history"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <History className="h-5 w-5" />
                  Project History
                </Link>
                 <Link
                  href={`/dashboard/developer/${developer.id}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                  <Code className="h-5 w-5" />
                  Skill Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
             <h1 className="text-lg font-semibold md:text-2xl">Developer DNA: {developer.name}</h1>
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
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={`https://placehold.co/80x80.png?text=${developer.avatar}`} />
                        <AvatarFallback>{developer.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-3xl">{developer.name}</CardTitle>
                        <CardDescription className="text-lg">{developer.email}</CardDescription>
                        <Badge className="mt-2" variant={developer.status === 'Active' ? 'default' : 'secondary'}>{developer.status}</Badge>
                    </div>
                </CardHeader>
            </Card>

           <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Commits
                    </CardTitle>
                    <GitCommit className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{developer.commits}</div>
                    <p className="text-xs text-muted-foreground">
                      All time
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Pull Requests
                    </CardTitle>
                    <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{developer.prs}</div>
                    <p className="text-xs text-muted-foreground">
                       All time
                    </p>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Issues Resolved</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">{developer.issues}</div>
                      <p className="text-xs text-muted-foreground">
                       All time
                    </p>
                  </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">AI Insight</CardTitle>
                        <Bot className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            {developer.name} shows strong proficiency in frontend frameworks. Consider for UI/UX intensive projects.
                        </p>
                    </CardContent>
                </Card>
              </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Skill Set</CardTitle>
                        <CardDescription>An overview of identified skills and domains.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="text-sm font-semibold mb-2 flex items-center"><BrainCircuit className="mr-2 h-4 w-4" /> Domains</h4>
                            <div className="flex flex-wrap gap-2">
                               <Badge variant="secondary">FinTech</Badge>
                               <Badge variant="secondary">AI/ML</Badge>
                               <Badge variant="secondary">E-commerce</Badge>
                            </div>
                        </div>
                        <div>
                             <h4 className="text-sm font-semibold mb-2 flex items-center"><Code className="mr-2 h-4 w-4" /> Tech & Languages</h4>
                            <div className="flex flex-wrap gap-2">
                               <Badge variant="outline">JavaScript</Badge>
                               <Badge variant="outline">TypeScript</Badge>
                               <Badge variant="outline">React</Badge>
                               <Badge variant="outline">Next.js</Badge>
                               <Badge variant="outline">Tailwind CSS</Badge>
                               <Badge variant="outline">Figma</Badge>
                               <Badge variant="outline">Node.js</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle>Project History</CardTitle>
                    <CardDescription>A summary of past project experience.</CardDescription>
                </CardHeader>
                <CardContent>
                   <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Project</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead className="text-right">Duration</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projectHistory.map((project, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{project.name}</TableCell>
                                    <TableCell>{project.role}</TableCell>
                                    <TableCell className="text-right">{project.duration}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                </Card>
            </div>
        </main>
      </div>
    </div>
  );
}

    