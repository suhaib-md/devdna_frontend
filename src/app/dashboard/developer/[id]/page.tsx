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
import allDevelopers from '@/data/developers.json';


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


export default function DeveloperProfilePage() {
  const params = useParams();
  const developer = allDevelopers.find(d => d.id === params.id);
  const workData = developer?.metrics?.workType || [];

  if (!developer) {
    return &lt;div className="flex items-center justify-center h-screen bg-black text-white"&gt;Developer not found.&lt;/div&gt;;
  }

  const averageCommitsPerDay = developer.metrics.commits.last30 / 30;

  return (
    &lt;div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-black text-white"&gt;
      &lt;div className="hidden border-r border-neutral-800 bg-neutral-950/40 md:block"&gt;
        &lt;div className="flex h-full max-h-screen flex-col gap-2"&gt;
          &lt;div className="flex h-14 items-center border-b border-neutral-800 px-4 lg:h-[60px] lg:px-6"&gt;
            &lt;Link href="/" className="flex items-center gap-2 font-semibold"&gt;
              &lt;Package2 className="h-6 w-6" /&gt;
              &lt;span className=""&gt;DevDNA&lt;/span&gt;
            &lt;/Link&gt;
            &lt;Button variant="outline" size="icon" className="ml-auto h-8 w-8"&gt;
              &lt;Bell className="h-4 w-4" /&gt;
              &lt;span className="sr-only"&gt;Toggle notifications&lt;/span&gt;
            &lt;/Button&gt;
          &lt;/div&gt;
          &lt;div className="flex-1"&gt;
            &lt;nav className="grid items-start px-2 text-sm font-medium lg:px-4"&gt;
              &lt;Link
                href="/dashboard/developer"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              &gt;
                &lt;Home className="h-4 w-4" /&gt;
                Dashboard
              &lt;/Link&gt;
              &lt;Link
                href="/dashboard/developer/project"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              &gt;
                &lt;Projector className="h-4 w-4" /&gt;
                Current Project
              &lt;/Link&gt;
               &lt;Link
                href="/dashboard/developer/tasks"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              &gt;
                &lt;ClipboardList className="h-4 w-4" /&gt;
                My Tasks
              &lt;/Link&gt;
              &lt;Link
                href="/dashboard/developer/team"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              &gt;
                &lt;Users className="h-4 w-4" /&gt;
                Team
              &lt;/Link&gt;
              &lt;Link
                href="/dashboard/developer/project-history"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              &gt;
                &lt;History className="h-4 w-4" /&gt;
                Project History
              &lt;/Link&gt;
               &lt;Link
                href={`/dashboard/developer/${params.id}`}
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              &gt;
                &lt;Code className="h-4 w-4" /&gt;
                Skill Profile
              &lt;/Link&gt;
            &lt;/nav&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div className="flex flex-col"&gt;
        &lt;header className="flex h-14 items-center gap-4 border-b border-neutral-800 bg-neutral-950/40 px-4 lg:h-[60px] lg:px-6"&gt;
          &lt;Sheet&gt;
            &lt;SheetTrigger asChild&gt;
              &lt;Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              &gt;
                &lt;Menu className="h-5 w-5" /&gt;
                &lt;span className="sr-only"&gt;Toggle navigation menu&lt;/span&gt;
              &lt;/Button&gt;
            &lt;/SheetTrigger&gt;
            &lt;SheetContent side="left" className="flex flex-col"&gt;
              &lt;nav className="grid gap-2 text-lg font-medium"&gt;
                &lt;Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                &gt;
                  &lt;Package2 className="h-6 w-6" /&gt;
                  &lt;span className="sr-only"&gt;DevDNA&lt;/span&gt;
                &lt;/Link&gt;
                &lt;Link
                  href="/dashboard/developer"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                &gt;
                  &lt;Home className="h-5 w-5" /&gt;
                  Dashboard
                &lt;/Link&gt;
                &lt;Link
                  href="/dashboard/developer/project"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                &gt;
                  &lt;Projector className="h-5 w-5" /&gt;
                  Current Project
                &lt;/Link&gt;
                &lt;Link
                  href="/dashboard/developer/tasks"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                &gt;
                  &lt;ClipboardList className="h-5 w-5" /&gt;
                  My Tasks
                &lt;/Link&gt;
                &lt;Link
                  href="/dashboard/developer/team"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                &gt;
                   &lt;Users className="h-5 w-5" /&gt;
                  Team
                &lt;/Link&gt;
                &lt;Link
                  href="/dashboard/developer/project-history"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                &gt;
                  &lt;History className="h-5 w-5" /&gt;
                  Project History
                &lt;/Link&gt;
                 &lt;Link
                  href={`/dashboard/developer/${params.id}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                &gt;
                  &lt;Code className="h-5 w-5" /&gt;
                  Skill Profile
                &lt;/Link&gt;
              &lt;/nav&gt;
            &lt;/SheetContent&gt;
          &lt;/Sheet&gt;
          &lt;div className="w-full flex-1"&gt;
             &lt;h1 className="text-lg font-semibold md:text-2xl"&gt;Developer DNA: {developer.name}&lt;/h1&gt;
          &lt;/div&gt;
          &lt;DropdownMenu&gt;
            &lt;DropdownMenuTrigger asChild&gt;
              &lt;Button variant="secondary" size="icon" className="rounded-full"&gt;
                &lt;CircleUser className="h-5 w-5" /&gt;
                &lt;span className="sr-only"&gt;Toggle user menu&lt;/span&gt;
              &lt;/Button&gt;
            &lt;/DropdownMenuTrigger&gt;
            &lt;DropdownMenuContent align="end"&gt;
              &lt;DropdownMenuLabel&gt;My Account&lt;/DropdownMenuLabel&gt;
              &lt;DropdownMenuSeparator /&gt;
              &lt;DropdownMenuItem&gt;Settings&lt;/DropdownMenuItem&gt;
              &lt;DropdownMenuItem&gt;Support&lt;/DropdownMenuItem&gt;
              &lt;DropdownMenuSeparator /&gt;
               &lt;DropdownMenuItem&gt;
                &lt;Link href="/login"&gt;Logout&lt;/Link&gt;
              &lt;/DropdownMenuItem&gt;
            &lt;/DropdownMenuContent&gt;
          &lt;/DropdownMenu&gt;
        &lt;/header&gt;
        &lt;main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8"&gt;
            &lt;Card&gt;
                &lt;CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-4"&gt;
                    &lt;Avatar className="h-24 w-24"&gt;
                        &lt;AvatarImage src={`https://placehold.co/96x96.png?text=${developer.avatar}`} /&gt;
                        &lt;AvatarFallback&gt;{developer.avatar}&lt;/AvatarFallback&gt;
                    &lt;/Avatar&gt;
                    &lt;div className="flex-grow"&gt;
                        &lt;div className='flex justify-between items-start'&gt;
                             &lt;div&gt;
                                &lt;CardTitle className="text-3xl"&gt;{developer.name}&lt;/CardTitle&gt;
                                &lt;a href={`https://github.com/${developer.github.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary"&gt;{developer.github}&lt;/a&gt;
                            &lt;/div&gt;
                             &lt;Badge variant="outline" className="text-base"&gt;{developer.developerType}&lt;/Badge&gt;
                        &lt;/div&gt;
                        &lt;div className="mt-4 flex flex-col md:flex-row items-start md:items-center gap-4"&gt;
                            &lt;div className="flex flex-col"&gt;
                                &lt;span className='text-sm text-muted-foreground flex items-center gap-1.5'&gt;&lt;Code className="h-3.5 w-3.5" /&gt; Top Skills&lt;/span&gt;
                                &lt;div className='flex gap-2 mt-1 flex-wrap'&gt;
                                    {developer.topSkills.map(skill =&gt; &lt;Badge key={skill} variant="secondary"&gt;{skill}&lt;/Badge&gt;)}
                                &lt;/div&gt;
                            &lt;/div&gt;
                             &lt;div className="flex flex-col"&gt;
                                &lt;span className='text-sm text-muted-foreground flex items-center gap-1.5'&gt;&lt;Layers className="h-3.5 w-3.5" /&gt; Top Domains&lt;/span&gt;
                                &lt;div className='flex gap-2 mt-1 flex-wrap'&gt;
                                    {developer.topDomains.map(domain =&gt; &lt;Badge key={domain} variant="secondary"&gt;{domain}&lt;/Badge&gt;)}
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                         &lt;div className="mt-4 flex items-center gap-4"&gt;
                            &lt;div className="flex flex-col"&gt;
                               &lt;span className='text-sm text-muted-foreground'&gt;Activity Score&lt;/span&gt;
                               &lt;div className='flex items-center gap-2 mt-1'&gt;
                                &lt;Progress value={developer.activityScore} className="w-32" /&gt;
                                &lt;span className='font-semibold'&gt;{developer.activityScore}%&lt;/span&gt;
                               &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/CardHeader&gt;
            &lt;/Card&gt;

           &lt;div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"&gt;
                &lt;Card&gt;
                  &lt;CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"&gt;
                    &lt;CardTitle className="text-sm font-medium"&gt;Commits (30d)&lt;/CardTitle&gt;
                    &lt;GitCommit className="h-4 w-4 text-muted-foreground" /&gt;
                  &lt;/CardHeader&gt;
                  &lt;CardContent&gt;
                    &lt;div className="text-2xl font-bold"&gt;{developer.metrics.commits.last30}&lt;/div&gt;
                    &lt;p className="text-xs text-muted-foreground"&gt;Avg {averageCommitsPerDay.toFixed(1)}/day&lt;/p&gt;
                  &lt;/CardContent&gt;
                &lt;/Card&gt;
                &lt;Card&gt;
                  &lt;CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"&gt;
                    &lt;CardTitle className="text-sm font-medium"&gt;PR Approval Rate&lt;/CardTitle&gt;
                    &lt;GitPullRequest className="h-4 w-4 text-muted-foreground" /&gt;
                  &lt;/CardHeader&gt;
                  &lt;CardContent&gt;
                    &lt;div className="text-2xl font-bold"&gt;{developer.metrics.prs.approvalRate}%&lt;/div&gt;
                    &lt;p className="text-xs text-muted-foreground"&gt;{developer.metrics.prs.created} PRs created&lt;/p&gt;
                  &lt;/CardContent&gt;
                &lt;/Card&gt;
                 &lt;Card&gt;
                  &lt;CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"&gt;
                    &lt;CardTitle className="text-sm font-medium"&gt;Reviews Given&lt;/CardTitle&gt;
                    &lt;CheckCircle className="h-4 w-4 text-muted-foreground" /&gt;
                  &lt;/CardHeader&gt;
                  &lt;CardContent&gt;
                     &lt;div className="text-2xl font-bold"&gt;{developer.metrics.reviews}&lt;/div&gt;
                     &lt;p className="text-xs text-muted-foreground"&gt;Peer reviews completed&lt;/p&gt;
                  &lt;/CardContent&gt;
                &lt;/Card&gt;
                 &lt;Card&gt;
                    &lt;CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"&gt;
                        &lt;CardTitle className="text-sm font-medium"&gt;Top Languages&lt;/CardTitle&gt;
                        &lt;Codepen className="h-4 w-4 text-muted-foreground" /&gt;
                    &lt;/CardHeader&gt;
                    &lt;CardContent&gt;
                        &lt;div className='flex flex-wrap gap-2 mt-2'&gt;
                           {developer.metrics.languages.slice(0, 3).map(lang =&gt; &lt;Badge key={lang} variant="outline"&gt;{lang}&lt;/Badge&gt;)}
                        &lt;/div&gt;
                    &lt;/CardContent&gt;
                &lt;/Card&gt;
              &lt;/div&gt;
            &lt;div className="grid gap-4 md:gap-8 lg:grid-cols-5"&gt;
                 &lt;Card className="lg:col-span-3"&gt;
                    &lt;CardHeader&gt;
                        &lt;CardTitle&gt;Strengths &amp; Weaknesses&lt;/CardTitle&gt;
                        &lt;CardDescription&gt;AI-generated analysis of development patterns.&lt;/CardDescription&gt;
                    &lt;/CardHeader&gt;
                    &lt;CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6"&gt;
                        &lt;div&gt;
                            &lt;h4 className="font-semibold flex items-center mb-2"&gt;&lt;ThumbsUp className="h-5 w-5 mr-2 text-green-500" /&gt; Strengths&lt;/h4&gt;
                            &lt;ul className="space-y-2 list-inside"&gt;
                                {developer.strengths.map((strength, i) =&gt; (
                                     &lt;li key={i} className="flex items-start text-sm"&gt;&lt;CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" /&gt;{strength}&lt;/li&gt;
                                ))}
                            &lt;/ul&gt;
                        &lt;/div&gt;
                         &lt;div&gt;
                            &lt;h4 className="font-semibold flex items-center mb-2"&gt;&lt;ThumbsDown className="h-5 w-5 mr-2 text-red-500" /&gt; Weaknesses&lt;/h4&gt;
                            &lt;ul className="space-y-2 list-inside"&gt;
                                {developer.weaknesses.map((weakness, i) =&gt; (
                                     &lt;li key={i} className="flex items-start text-sm"&gt;&lt;Activity className="h-4 w-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" /&gt;{weakness}&lt;/li&gt;
                                ))}
                            &lt;/ul&gt;
                        &lt;/div&gt;
                    &lt;/CardContent&gt;
                &lt;/Card&gt;
                 &lt;Card className="lg:col-span-2"&gt;
                    &lt;CardHeader&gt;
                        &lt;CardTitle&gt;Work Type Breakdown&lt;/CardTitle&gt;
                        &lt;CardDescription&gt;Distribution of commits by category.&lt;/CardDescription&gt;
                    &lt;/CardHeader&gt;
                    &lt;CardContent&gt;
                         &lt;ChartContainer config={chartConfig} className="min-h-[250px] w-full"&gt;
                            &lt;PieChart&gt;
                                &lt;ChartTooltip content=&lt;ChartTooltipContent nameKey="type" /&gt; /&gt;
                                &lt;Pie data={workData} dataKey="value" nameKey="type" cx="50%" cy="50%" outerRadius={80} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) =&gt; {
                                        const RADIAN = Math.PI / 180;
                                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                        return (
                                          &lt;text x={x} y={y} fill="white" textAnchor={x &gt; cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-bold"&gt;
                                            {(percent * 100).toFixed(0)}%
                                          &lt;/text&gt;
                                        );
                                      }}&gt;
                                        {workData.map((entry, index) =&gt; (
                                          &lt;Cell key={`cell-${index}`} fill={entry.fill} /&gt;
                                        ))}
                                &lt;/Pie&gt;
                            &lt;/PieChart&gt;
                        &lt;/ChartContainer&gt;
                    &lt;/CardContent&gt;
                &lt;/Card&gt;
            &lt;/div&gt;
        &lt;/main&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
