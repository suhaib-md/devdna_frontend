
import { redirect } from 'next/navigation';

export default function ManagerProjectsRedirect() {
  // This page is no longer needed, redirect to the main manager dashboard.
  redirect('/dashboard/manager');
}
