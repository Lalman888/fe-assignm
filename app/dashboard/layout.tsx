"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-slate-50 dark:bg-slate-900 border-r">
        <div className="flex flex-col h-full px-4 py-6">
          <div className="mb-6">
            <Link href="/dashboard" className="flex items-center gap-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#FD9D3E" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM11 14C11 13.4477 11.4477 13 12 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H12C11.4477 15 11 14.5523 11 14ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19H16C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17H12Z" fill="white" />
                </svg>
              </motion.div>
              <span className="font-bold text-xl">Pizza Palace</span>
            </Link>
          </div>

          <nav className="space-y-1 mb-6">
            <Link href="/dashboard" 
              className={`flex items-center px-3 py-2 rounded-md ${
                pathname === "/dashboard"
                  ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}>
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Home</span>
            </Link>
            <Link href="/dashboard/orders" 
              className={`flex items-center px-3 py-2 rounded-md ${
                pathname === "/dashboard/orders"
                  ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}>
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Orders</span>
            </Link>
          </nav>
          
          <div className="mt-auto">
            {session && session.user && (
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarImage src={session.user.image || undefined} />
                  <AvatarFallback>{session.user.name ? getInitials(session.user.name) : "U"}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{session.user.name}</p>
                  <p className="text-xs text-slate-500">{session.user.email}</p>
                </div>
              </div>
            )}
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full" 
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
} 