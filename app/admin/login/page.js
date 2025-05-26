// app/admin/login/page.js
import { redirect } from 'next/navigation';

export default function AdminLoginRedirect() {
  redirect('/admin/dashboard');
}
