
'use client';

import React, { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import users from '@/data/users.json';

// A simple cache to store user names by ID
const userCache: { [key: string]: string } = {};
users.forEach(user => {
  userCache[user.id] = user.name;
});

const breadcrumbNameMap: { [key: string]: string } = {
  'dashboard': 'Dashboard',
  'admin': 'Admin',
  'manager': 'Manager',
  'developer': 'Developer',
  'user-management': 'User Management',
  'manager-accounts': 'Manager Accounts',
  'roles-permissions': 'Roles & Permissions',
  'system-analytics': 'System Analytics',
  'system-settings': 'System Settings',
  'team': 'Team',
  'analytics': 'Analytics',
  'leaderboard': 'Leaderboard',
  'create-project': 'Create Project',
  'daily-status': 'Daily Status',
  'project-developer': 'Project Developer',
  'project': 'Current Project',
  'tasks': 'My Tasks',
  'project-history': 'Project History',
  'profile': 'Skill Profile',
  'ai-assistant': 'AI Assistant',
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  if (pathSegments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground">
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;
        
        let name = breadcrumbNameMap[segment] || segment.replace(/-/g, ' ');
        
        // Check if the segment is a user ID
        if (userCache[segment]) {
            name = userCache[segment];
        }

        return (
          <Fragment key={href}>
            <Link
              href={href}
              className={cn(
                'capitalize hover:text-foreground',
                isLast ? 'text-foreground font-semibold' : 'text-muted-foreground'
              )}
            >
              {name}
            </Link>
            {!isLast && <ChevronRight className="h-4 w-4" />}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
