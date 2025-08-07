
'use client';

import { useState } from 'react';
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
  UserPlus,
  BarChart,
  Search,
  Users2,
  GitCommit,
  Bot
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import notifications from '@/data/notifications.json';
import adminDashboardData from '@/data/admin-dashboard.json';

const { projects } = adminDashboardData;


export default function AdminDashboard() {

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
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
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
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
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
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
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
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Admin's Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Admin!</p>
            </div>
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
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1250</div>
                        <p className="text-xs text-muted-foreground">+50 since last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Managers</CardTitle>
                         <Building className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">15</div>
                        <p className="text-xs text-muted-foreground">+2 since last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Commits</CardTitle>
                        <GitCommit className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,890</div>
                         <p className="text-xs text-muted-foreground">This quarter</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
                        <Bot className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                       <Button variant="outline" size="sm">Generate Report</Button>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>An overview of recent system-wide activities.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead>Details</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">User</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell><Badge variant="default">User Added</Badge></TableCell>
                                <TableCell>New developer account created.</TableCell>
                                <TableCell>2023-10-18</TableCell>
                                <TableCell className="text-right">Admin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Badge variant="secondary">Project Started</Badge></TableCell>
                                <TableCell>New project "Phoenix" initiated.</TableCell>
                                <TableCell>2023-10-17</TableCell>
                                <TableCell className="text-right">Manager A</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell><Badge variant="outline">Permission Change</Badge></TableCell>
                                <TableCell>Developer role permissions updated.</TableCell>
                                <TableCell>2023-10-16</TableCell>
                                <TableCell className="text-right">Admin</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell><Badge variant="destructive">System Alert</Badge></TableCell>
                                <TableCell>High memory usage detected on server.</TableCell>
                                <TableCell>2023-10-15</TableCell>
                                <TableCell className="text-right">System</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
