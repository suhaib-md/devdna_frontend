
import { redirect } from 'next/navigation';
import allUsers from '@/data/users.json';

export default function DashboardPage() {
  // Find the first developer to redirect to. In a real app this would come from auth.
  const firstDev = allUsers.find(u => u.role === 'Developer');
  const devId = firstDev ? firstDev.id : '1';
  
  redirect(`/dashboard/developer/${devId}`);
}
