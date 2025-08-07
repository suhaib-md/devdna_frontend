
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
  BarChart,
  Edit
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
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import initialRoles from '@/data/roles.json';
import notifications from '@/data/notifications.json';
import Breadcrumbs from '@/components/ui/breadcrumbs';

type Permission = 'read' | 'write' | 'create' | 'delete';
type Module = 'users' | 'projects' | 'billing' | 'settings';

export default function RolesPermissionsPage() {
  const [currentRoles, setCurrentRoles] = useState(initialRoles);

  const handlePermissionChange = (roleName: string, module: Module, permission: Permission) => {
    setCurrentRoles(prevRoles =>
      prevRoles.map(role => {
        if (role.name === roleName) {
          const newPermissions = { ...role.permissions };
          (newPermissions[module] as any)[permission] = !(newPermissions[module] as any)[permission];
          return { ...role, permissions: newPermissions };
        }
        return role;
      })
    );
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
                className="flex items-center gap-3 rounded-lg bg-neutral-800 px-3 py-2 text-white transition-all hover:text-white"
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
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-neutral-800 px-3 py-2 text-white hover:text-white"
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
            <Card>
                <CardHeader>
                    <CardTitle>Manage Roles</CardTitle>
                    <CardDescription>Define what users can see and do within the application.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Role</TableHead>
                                <TableHead>User Management</TableHead>
                                <TableHead>Project Management</TableHead>
                                <TableHead>Billing</TableHead>
                                <TableHead>System Settings</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentRoles.map((role) => (
                                <TableRow key={role.name}>
                                    <TableCell>
                                        <div className="font-medium">{role.name}</div>
                                        <div className="text-sm text-muted-foreground">{role.description}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`users-read-${role.name}`} checked={role.permissions.users.read} onCheckedChange={() => handlePermissionChange(role.name, 'users', 'read')} />
                                                <label htmlFor={`users-read-${role.name}`} className="text-sm">Read</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`users-write-${role.name}`} checked={role.permissions.users.write} onCheckedChange={() => handlePermissionChange(role.name, 'users', 'write')} />
                                                <label htmlFor={`users-write-${role.name}`} className="text-sm">Write</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`users-create-${role.name}`} checked={role.permissions.users.create} onCheckedChange={() => handlePermissionChange(role.name, 'users', 'create')} />
                                                <label htmlFor={`users-create-${role.name}`} className="text-sm">Create</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`users-delete-${role.name}`} checked={role.permissions.users.delete} onCheckedChange={() => handlePermissionChange(role.name, 'users', 'delete')} />
                                                <label htmlFor={`users-delete-${role.name}`} className="text-sm">Delete</label>
                                            </div>
                                        </div>
                                    </TableCell>
                                     <TableCell>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`projects-read-${role.name}`} checked={role.permissions.projects.read} onCheckedChange={() => handlePermissionChange(role.name, 'projects', 'read')} />
                                                <label htmlFor={`projects-read-${role.name}`} className="text-sm">Read</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`projects-write-${role.name}`} checked={role.permissions.projects.write} onCheckedChange={() => handlePermissionChange(role.name, 'projects', 'write')} />
                                                <label htmlFor={`projects-write-${role.name}`} className="text-sm">Write</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`projects-create-${role.name}`} checked={role.permissions.projects.create} onCheckedChange={() => handlePermissionChange(role.name, 'projects', 'create')} />
                                                <label htmlFor={`projects-create-${role.name}`} className="text-sm">Create</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`projects-delete-${role.name}`} checked={role.permissions.projects.delete} onCheckedChange={() => handlePermissionChange(role.name, 'projects', 'delete')} />
                                                <label htmlFor={`projects-delete-${role.name}`} className="text-sm">Delete</label>
                                            </div>
                                        </div>
                                    </TableCell>
                                      <TableCell>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`billing-read-${role.name}`} checked={role.permissions.billing.read} onCheckedChange={() => handlePermissionChange(role.name, 'billing', 'read')} />
                                                <label htmlFor={`billing-read-${role.name}`} className="text-sm">Read</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`billing-write-${role.name}`} checked={role.permissions.billing.write} onCheckedChange={() => handlePermissionChange(role.name, 'billing', 'write')} />
                                                <label htmlFor={`billing-write-${role.name}`} className="text-sm">Write</label>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`settings-read-${role.name}`} checked={role.permissions.settings.read} onCheckedChange={() => handlePermissionChange(role.name, 'settings', 'read')} />
                                                <label htmlFor={`settings-read-${role.name}`} className="text-sm">Read</label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id={`settings-write-${role.name}`} checked={role.permissions.settings.write} onCheckedChange={() => handlePermissionChange(role.name, 'settings', 'write')} />
                                                <label htmlFor={`settings-write-${role.name}`} className="text-sm">Write</label>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <div className="flex justify-end">
                <Button>Save Changes</Button>
            </div>
        </main>
      </div>
    </div>
  );
}
