
'use client';

import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package2,
  Users,
  Building,
  Shield,
  Settings,
  BarChart,
  GitCommit,
  Users2,
  AlertTriangle,
  Server
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from '@/components/ui/sheet';
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
import Link from 'next/link';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart as RechartsBarChart, Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';


const userGrowthData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 700 },
  { month: "May", users: 600 },
  { month: "Jun", users: 800 },
]

const serverLoadData = [
  { time: "12:00", load: 0.4 },
  { time: "13:00", load: 0.5 },
  { time: "14:00", load: 0.3 },
  { time: "15:00", load: 0.6 },
  { time: "16:00", load: 0.7 },
  { time: "17:00", load: 0.5 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--primary))",
  },
  load: {
      label: "CPU Load",
      color: "hsl(var(--destructive))"
  }
} satisfies ChartConfig

const notifications = [
    { user: 'Admin', action: 'updated developer role permissions', time: '15m ago' },
    { user: 'System', action: 'detected high memory usage on server', time: '1h ago', isSystem: true },
    { user: 'Manager A', action: 'initiated a new project "Phoenix"', time: '3h ago' },
    { user: 'Admin', action: 'created a new developer account', time: 'yesterday' },
];


export default function SystemAnalyticsPage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-black text-white">
      <div className="hidden border-r border-neutral-800 bg-neutral-950/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-neutral-800 px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">DevDNA</span>
            </Link>
             <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8 relative">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                         {notifications.length > 0 && (
                            <Badge className="absolute -top-1 -right-1 h-4 w-4 justify-center p-1.5 text-xs">
                                {notifications.length}
                            </Badge>
                        )}
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Notifications</SheetTitle>
                        <SheetDescription>You have {notifications.length} unread messages.</SheetDescription>
                    </SheetHeader>
                    <div className="mt-4 space-y-4">
                        {notifications.map((notification, index) => (
                             <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-neutral-900/50">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>{notification.user.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="text-sm">
                                    <p><span className="font-semibold">{notification.user}</span> {notification.action}</p>
                                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard/admin"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/admin/user-management"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Users className="h-4 w-4" />
                User Management
              </Link>
               <Link
                href="/dashboard/admin/manager-accounts"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Building className="h-4 w-4" />
                Manager Accounts
              </Link>
              <Link
                href="/dashboard/admin/roles-permissions"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Shield className="h-4 w-4" />
                Roles & Permissions
              </Link>
              <Link
                href="/dashboard/admin/system-analytics"
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
              >
                <BarChart className="h-4 w-4" />
                System Analytics
              </Link>
              <Link
                href="/dashboard/admin/system-settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <Settings className="h-4 w-4" />
                System Settings
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
                    href="/dashboard/admin"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <Home className="h-5 w-5" />
                    Dashboard
                </Link>
                <Link
                    href="/dashboard/admin/user-management"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <Users className="h-5 w-5" />
                    User Management
                </Link>
                <Link
                    href="/dashboard/admin/manager-accounts"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <Building className="h-5 w-5" />
                    Manager Accounts
                </Link>
                <Link
                    href="/dashboard/admin/roles-permissions"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <Shield className="h-5 w-5" />
                    Roles & Permissions
                </Link>
                <Link
                    href="/dashboard/admin/system-analytics"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
                >
                    <BarChart className="h-5 w-5" />
                    System Analytics
                </Link>
                 <Link
                    href="/dashboard/admin/system-settings"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <Settings className="h-5 w-5" />
                    System Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold md:text-2xl">System Analytics</h1>
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
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                        <Users2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,250</div>
                        <p className="text-xs text-muted-foreground">+5% from last week</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Server Status</CardTitle>
                        <Server className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-400">Online</div>
                        <p className="text-xs text-muted-foreground">Uptime: 99.98%</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">API Calls</CardTitle>
                        <GitCommit className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2.1M</div>
                        <p className="text-xs text-muted-foreground">In the last 24 hours</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">System Alerts</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Active critical alerts</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>User Growth</CardTitle>
                        <CardDescription>New users over the last 6 months.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <RechartsBarChart accessibilityLayer data={userGrowthData}>
                                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                                <YAxis />
                                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                                <Bar dataKey="users" fill="var(--color-users)" radius={4} />
                            </RechartsBarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Live Server Load</CardTitle>
                        <CardDescription>CPU utilization over the past few hours.</CardDescription>
                    </CardHeader>
                     <CardContent>
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <RechartsLineChart data={serverLoadData}>
                                 <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Line type="monotone" dataKey="load" stroke="var(--color-load)" strokeWidth={2} dot={false} />
                            </RechartsLineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Resource Utilization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">CPU Usage</span>
                            <span className="text-sm font-medium">68%</span>
                        </div>
                        <Progress value={68} />
                    </div>
                     <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Memory Usage</span>
                            <span className="text-sm font-medium">82%</span>
                        </div>
                        <Progress value={82} />
                    </div>
                     <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Storage</span>
                            <span className="text-sm font-medium">45%</span>
                        </div>
                        <Progress value={45} />
                    </div>
                </CardContent>
             </Card>
        </main>
      </div>
    </div>
  );
}
