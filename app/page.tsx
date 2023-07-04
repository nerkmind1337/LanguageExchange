'use client';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { signIn, signOut } from "next-auth/react";
import { UserTest } from "@/components/user-test"
import { useSession } from "next-auth/react";

export default function IndexPage() {
   const { data: session } =  useSession();


  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
         <button style={{ marginRight: 10 }} onClick={() => signIn()}>
          Sign in
        </button>
        <button style={{ marginRight: 10 }} onClick={() => signOut()}>
          Sign Out
        </button>
        
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>

           <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      </div>
    </section>
  )
}
