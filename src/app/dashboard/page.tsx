
import { redirect } from 'next/navigation';

export default function DashboardPage() {
  // Redirect to the developer dashboard by default
  redirect('/dashboard/developer');
}
