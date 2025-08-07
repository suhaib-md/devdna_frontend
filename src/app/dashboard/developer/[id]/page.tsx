
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
  Layers,
  Codepen
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useParams } from 'next/navigation';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Pie, PieChart, Cell } from 'recharts';
import allUsers from '@/data/users.json';
import Breadcrumbs from '@/components/ui/breadcrumbs';

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
  documentation: {
    label: "Documentation",
    color: "hsl(var(--chart-3))",
  },
  infrastructure: {
    label: "Infrastructure",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;


export default function DeveloperDashboard() {
  const params = useParams();
  const developer = allUsers.find(d => d.id === params.id && d.role === 'Developer');

  if (!developer || !developer.profile) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Developer not found.</div>;
  }
  
  const { profile, metrics } = developer;

  const workData = [
    { type: "Features", value: profile.type_of_work_in_percentage.features, fill: "hsl(var(--primary))" },
    { type: "Bugs", value: profile.type_of_work_in_percentage.bugs, fill: "hsl(var(--destructive))" },
    { type: "Infrastructure", value: profile.type_of_work_in_percentage.infrastructure, fill: "hsl(var(--chart-4))" },
    { type: "Documentation", value: profile.type_of_work_in_percentage.documentation, fill: "hsl(var(--chart-3))" }
  ];


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
                href={`/dashboard/developer/${params.id}`}
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href={`/dashboard/developer/${params.id}/project`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Projector className="h-4 w-4" />
                Current Project
              </Link>
               <Link
                href={`/dashboard/developer/${params.id}/tasks`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <ClipboardList className="h-4 w-4" />
                My Tasks
              </Link>
              <Link
                href={`/dashboard/developer/${params.id}/team`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                Team
              </Link>
              <Link
                href={`/dashboard/developer/${params.id}/project-history`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <History className="h-4 w-4" />
                Project History
              </Link>
               <Link
                href={`/dashboard/developer/${params.id}/profile`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
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
                  href={`/dashboard/developer/${params.id}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href={`/dashboard/developer/${params.id}/project`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Projector className="h-5 w-5" />
                  Current Project
                </Link>
                <Link
                  href={`/dashboard/developer/${params.id}/tasks`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <ClipboardList className="h-5 w-5" />
                  My Tasks
                </Link>
                <Link
                  href={`/dashboard/developer/${params.id}/team`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                   <Users className="h-5 w-5" />
                  Team
                </Link>
                <Link
                  href={`/dashboard/developer/${params.id}/project-history`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <History className="h-5 w-5" />
                  Project History
                </Link>
                 <Link
                  href={`/dashboard/developer/${params.id}/profile`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                  <Code className="h-5 w-5" />
                  Skill Profile
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Commits (30d)</CardTitle>
                  <GitCommit className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{profile.monthly_commits}</div>
                  <p className="text-xs text-muted-foreground">Avg {profile.average_commits_per_day.toFixed(1)}/day</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">PR Approval Rate</CardTitle>
                  <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.prs.approvalRate}%</div>
                   <p className="text-xs text-muted-foreground">{metrics.prs.created} PRs created</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Issues Resolved</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metrics.issues_resolved}</div>
                  <p className="text-xs text-muted-foreground">In the last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Dev Type</CardTitle>
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-base font-bold">{developer.developerType}</div>
                   <p className="text-xs text-muted-foreground">Based on recent activity</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Work Type Breakdown</CardTitle>
                        <CardDescription>Distribution of your commits by category.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent nameKey="type" />} />
                                <Pie data={workData} dataKey="value" nameKey="type" cx="50%" cy="50%" outerRadius={80} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                        const RADIAN = Math.PI / 180;
                                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                        return (
                                          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold">
                                            {(percent * 100).toFixed(0)}%
                                          </text>
                                        );
                                      }}>
                                        {workData.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Skill Cloud</CardTitle>
                        <CardDescription>Your top languages and domains.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center"><Codepen className="h-4 w-4 mr-2" /> Languages</h4>
                            <div className="flex flex-wrap gap-2">
                                {profile.languages.slice(0, 8).map(lang => <Badge key={lang} variant="secondary">{lang}</Badge>)}
                            </div>
                        </div>
                         <div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center"><Layers className="h-4 w-4 mr-2" /> Domains</h4>
                             <div className="flex flex-wrap gap-2">
                                {profile.skills_domains.map(domain => <Badge key={domain} variant="outline">{domain}</Badge>)}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
      </div>
    </div>
  );
}
