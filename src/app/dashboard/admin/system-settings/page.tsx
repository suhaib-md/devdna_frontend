
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
  Save,
  Mail,
  Database,
  KeyRound
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
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';


const notifications = [
    { user: 'Admin', action: 'updated developer role permissions', time: '15m ago' },
    { user: 'System', action: 'detected high memory usage on server', time: '1h ago', isSystem: true },
    { user: 'Manager A', action: 'initiated a new project "Phoenix"', time: '3h ago' },
    { user: 'Admin', action: 'created a new developer account', time: 'yesterday' },
];

export default function SystemSettingsPage() {
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-400 transition-all hover:text-white"
              >
                <BarChart className="h-4 w-4" />
                System Analytics
              </Link>
              <Link
                href="/dashboard/admin/system-settings"
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
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
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-neutral-400 hover:text-white"
                >
                    <BarChart className="h-5 w-5" />
                    System Analytics
                </Link>
                 <Link
                    href="/dashboard/admin/system-settings"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
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
              <p className="text-sm text-muted-foreground">System Settings</p>
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
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>General Settings</CardTitle>
                        <CardDescription>Manage global application settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <h3 className="font-semibold">Enable Developer Registrations</h3>
                                <p className="text-sm text-muted-foreground">Allow new developers to sign up themselves.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                            <div className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <h3 className="font-semibold">Manager Account Creation</h3>
                                <p className="text-sm text-muted-foreground">Allow managers to be created by other managers.</p>
                            </div>
                            <Switch defaultChecked={false} />
                        </div>
                            <div className="flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <h3 className="font-semibold">AI Insight Level</h3>
                                <p className="text-sm text-muted-foreground">Set the detail level for AI-generated reports.</p>
                            </div>
                            <Select defaultValue="standard">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="basic">Basic</SelectItem>
                                    <SelectItem value="standard">Standard</SelectItem>
                                    <SelectItem value="detailed">Detailed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Integrations</CardTitle>
                        <CardDescription>Connect third-party services like GitHub, JIRA, etc.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                             <div className="flex items-center gap-4">
                                <KeyRound className="h-6 w-6" />
                                <div>
                                    <h3 className="font-semibold">GitHub API Key</h3>
                                    <p className="text-sm text-muted-foreground">Used for fetching repository data.</p>
                                </div>
                            </div>
                           <Input type="password" defaultValue="••••••••••••••••••••" className="w-[240px]" />
                        </div>
                         <div className="flex items-center justify-between rounded-lg border p-4">
                           <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6" />
                                <div>
                                    <h3 className="font-semibold">SMTP Server</h3>
                                    <p className="text-sm text-muted-foreground">Configure email notification settings.</p>
                                </div>
                            </div>
                           <Input placeholder="smtp.example.com" className="w-[240px]" />
                        </div>
                         <div className="flex items-center justify-between rounded-lg border p-4">
                           <div className="flex items-center gap-4">
                                <Database className="h-6 w-6" />
                                <div>
                                    <h3 className="font-semibold">Database Connection</h3>
                                    <p className="text-sm text-muted-foreground">Database connection string.</p>
                                </div>
                            </div>
                           <Input type="password" defaultValue="••••••••••••••••••••" className="w-[240px]" />
                        </div>
                    </CardContent>
                </Card>
                 <div className="flex justify-end">
                    <Button><Save className="mr-2 h-4 w-4"/>Save All Settings</Button>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
}
