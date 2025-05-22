import { Metadata } from "next";
import { SignInForm } from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In | Pizza Palace Dashboard",
  description: "Sign in to Pizza Palace Dashboard",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome to Pizza Palace</h1>
          <p className="text-muted-foreground">Sign in to access your dashboard</p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
} 