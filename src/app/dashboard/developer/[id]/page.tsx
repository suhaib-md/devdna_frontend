
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
  ClipboardList,
  Activity,
  ThumbsUp,
  ThumbsDown,
  FileText,
  Wrench,
  Bug,
  Codepen,
  Layers
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
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';
import { Progress } from '@/components/ui/progress';


const developers = [
    { 
      id: '1', 
      name: 'John Doe', 
      github: '@johndoe',
      email: 'john@example.com', 
      topSkills: ['React', 'TypeScript', 'Node.js'],
      topDomains: ['Frontend', 'Backend', 'API Design'],
      role: 'Full-Stack Developer',
      activityScore: 92,
      status: 'Active',
      avatar: 'JD', 
      metrics: {
        commits: { last30: 85, last90: 250 },
        prs: { created: 32, approvalRate: 95 },
        reviews: 48,
        languages: ['TypeScript', 'JavaScript', 'Python'],
        workType: [
            { type: 'Features', value: 50, fill: 'hsl(var(--primary))' },
            { type: 'Bug Fixes', value: 25, fill: 'hsl(var(--destructive))' },
            { type: 'Documentation', value: 15, fill: 'hsl(var(--chart-3))' },
            { type: 'Infrastructure', value: 10, fill: 'hsl(var(--chart-4))' },
        ],
      },
      strengths: ['Strong backend logic & API design', 'Quick PR turnaround', 'High bug fix success rate'],
      weaknesses: ['Large PR sizes', 'Low test coverage contributions'],
      developerType: 'Full-Stack Builder'
    },
     { 
      id: '2', 
      name: 'Jane Smith', 
      github: '@janesmith',
      email: 'jane@example.com', 
      topSkills: ['Node.js', 'Python', 'AWS'],
      topDomains: ['Backend', 'System Design', 'Databases'],
      role: 'Backend Specialist',
      activityScore: 88,
      status: 'Active', 
      avatar: 'JS', 
       metrics: {
        commits: { last30: 70, last90: 210 },
        prs: { created: 28, approvalRate: 98 },
        reviews: 55,
        languages: ['Python', 'Go', 'SQL'],
        workType: [
            { type: 'Features', value: 40, fill: 'hsl(var(--primary))' },
            { type: 'Bug Fixes', value: 35, fill: 'hsl(var(--destructive))' },
            { type: 'Documentation', value: 10, fill: 'hsl(var(--chart-3))' },
            { type: 'Infrastructure', value: 15, fill: 'hsl(var(--chart-4))' },
        ],
      },
      strengths: ['High-quality code', 'Excellent reviewer', 'Strong systems design'],
      weaknesses: ['Slow review response time', 'Sometimes over-engineers solutions'],
      developerType: 'Backend Specialist'
    },
    { 
      id: '3', 
      name: 'Peter Jones', 
      github: '@peterjones',
      email: 'peter@example.com', 
      topSkills: ['Vue.js', 'CSS', 'Testing'],
      topDomains: ['Frontend', 'UI/UX', 'Web Performance'],
      role: 'Frontend Developer',
      activityScore: 85,
      status: 'On Leave', 
      avatar: 'PJ', 
       metrics: {
        commits: { last30: 40, last90: 120 },
        prs: { created: 20, approvalRate: 92 },
        reviews: 30,
        languages: ['JavaScript', 'CSS', 'HTML'],
         workType: [
            { type: 'Features', value: 60, fill: 'hsl(var(--primary))' },
            { type: 'Bug Fixes', value: 20, fill: 'hsl(var(--destructive))' },
            { type: 'Documentation', value: 15, fill: 'hsl(var(--chart-3))' },
            { type: 'Infrastructure', value: 5, fill: 'hsl(var(--chart-4))' },
        ],
      },
      strengths: ['Great UI/UX sense', 'Writes clean, maintainable CSS', 'Proactive in documentation'],
      weaknesses: ['Needs to improve TypeScript skills', 'Avoids complex backend tasks'],
      developerType: 'Frontend Specialist'
    },
    { 
      id: '4', 
      name: 'Mary Johnson', 
      github: '@maryj',
      email: 'mary@example.com', 
      topSkills: ['Angular', 'DevOps', 'Kubernetes'],
      topDomains: ['DevOps', 'Cloud Infra', 'CI/CD'],
      role: 'DevOps Engineer',
      activityScore: 95,
      status: 'Active', 
      avatar: 'MJ', 
       metrics: {
        commits: { last30: 95, last90: 280 },
        prs: { created: 40, approvalRate: 99 },
        reviews: 60,
        languages: ['YAML', 'Go', 'Shell'],
        workType: [
            { type: 'Features', value: 10, fill: 'hsl(var(--primary))' },
            { type: 'Bug Fixes', value: 15, fill: 'hsl(var(--destructive))' },
            { type: 'Documentation', value: 25, fill: 'hsl(var(--chart-3))' },
            { type: 'Infrastructure', value: 50, fill: 'hsl(var(--chart-4))' },
        ],
      },
      strengths: ['Expert in CI/CD pipelines', 'High test coverage contributions', 'Excellent problem-solver'],
      weaknesses: ['Can be slow to adopt new frontend frameworks', 'PR descriptions can be brief'],
      developerType: 'Infra & DevOps Engineer'
    },
];

const projectHistory = [
    { name: 'AI Chatbot Integration', role: 'AI Engineer', duration: '6 months', tech: ['Python', 'TensorFlow', 'Next.js'] },
    { name: 'Internal Tools', role: 'Full-stack Developer', duration: '1 year', tech: ['React', 'Node.js', 'PostgreSQL'] },
];

const chartConfig = {
  work: {
    label: "Work Type",
  },
  features: {
    label: "Features",
    color: "hsl(var(--primary))",
  },
  bugs: {
    label: "Bug Fixes",
    color: "hsl(var(--destructive))",
  },
  docs: {
    label: "Documentation",
    color: "hsl(var(--chart-3))",
  },
  infra: {
    label: "Infrastructure",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;


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
                <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={`https://placehold.co/96x96.png?text=${developer.avatar}`} />
                        <AvatarFallback>{developer.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <div className='flex justify-between items-start'>
                             <div>
                                <CardTitle className="text-3xl">{developer.name}</CardTitle>
                                <a href="#" className="text-lg text-muted-foreground hover:text-primary">{developer.github}</a>
                            </div>
                             <Badge variant="outline" className="text-base">{developer.developerType}</Badge>
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row items-start md:items-center gap-4">
                            <div className="flex flex-col">
                                <span className='text-sm text-muted-foreground flex items-center gap-1.5'><Code className="h-3.5 w-3.5" /> Top Skills</span>
                                <div className='flex gap-2 mt-1 flex-wrap'>
                                    {developer.topSkills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                                </div>
                            </div>
                             <div className="flex flex-col">
                                <span className='text-sm text-muted-foreground flex items-center gap-1.5'><Layers className="h-3.5 w-3.5" /> Top Domains</span>
                                <div className='flex gap-2 mt-1 flex-wrap'>
                                    {developer.topDomains.map(domain => <Badge key={domain} variant="secondary">{domain}</Badge>)}
                                </div>
                            </div>
                        </div>
                         <div className="mt-4 flex items-center gap-4">
                            <div className="flex flex-col">
                               <span className='text-sm text-muted-foreground'>Activity Score</span>
                               <div className='flex items-center gap-2 mt-1'>
                                <Progress value={developer.activityScore} className="w-32" />
                                <span className='font-semibold'>{developer.activityScore}%</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>

           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Commits (30d)</CardTitle>
                    <GitCommit className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{developer.metrics.commits.last30}</div>
                    <p className="text-xs text-muted-foreground">Total in last 30 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">PR Approval Rate</CardTitle>
                    <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{developer.metrics.prs.approvalRate}%</div>
                    <p className="text-xs text-muted-foreground">{developer.metrics.prs.created} PRs created</p>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Reviews Given</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl font-bold">{developer.metrics.reviews}</div>
                     <p className="text-xs text-muted-foreground">Peer reviews completed</p>
                  </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Top Languages</CardTitle>
                        <Codepen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className='flex flex-wrap gap-2 mt-2'>
                           {developer.metrics.languages.slice(0, 3).map(lang => <Badge key={lang} variant="outline">{lang}</Badge>)}
                        </div>
                    </CardContent>
                </Card>
              </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-5">
                 <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Strengths & Weaknesses</CardTitle>
                        <CardDescription>AI-generated analysis of development patterns.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold flex items-center mb-2"><ThumbsUp className="h-5 w-5 mr-2 text-green-500" /> Strengths</h4>
                            <ul className="space-y-2 list-inside">
                                {developer.strengths.map((strength, index) => (
                                    <li key={index} className="flex items-start text-sm"><CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />{strength}</li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-semibold flex items-center mb-2"><ThumbsDown className="h-5 w-5 mr-2 text-red-500" /> Weaknesses</h4>
                            <ul className="space-y-2 list-inside">
                                {developer.weaknesses.map((weakness, index) => (
                                     <li key={index} className="flex items-start text-sm"><Activity className="h-4 w-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />{weakness}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Work Type Breakdown</CardTitle>
                        <CardDescription>Distribution of commits by category.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent nameKey="type" />} />
                                <Pie data={developer.metrics.workType} dataKey="value" nameKey="type" cx="50%" cy="50%" outerRadius={80} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                        const RADIAN = Math.PI / 180;
                                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                        return (
                                          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold">
                                            {`${(percent * 100).toFixed(0)}%`}
                                          </text>
                                        );
                                      }}>
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </main>
      </div>
    </div>
  );
}
