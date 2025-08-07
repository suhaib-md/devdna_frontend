
'use client';

import { redirect } from 'next/navigation';
import allUsers from '@/data/users.json';

export default function ManagerDashboardRedirect() {
  // Find the first manager to redirect to. In a real app this would come from auth.
  const firstManager = allUsers.find(u => u.role === 'Manager');
  const managerId = firstManager ? firstManager.id : '6';
  
  redirect(`/dashboard/manager/${managerId}`);
}
