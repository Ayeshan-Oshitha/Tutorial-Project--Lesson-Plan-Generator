import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import MobileMenu from "./MobileMenu";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type Props = {};

const Navbar = async (props: Props) => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <header>
      <MaxWidthWrapper>
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary">Generate Lesson Plans</span>
          </Link>
          <MobileMenu user={user} />
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/pricing" className={buttonVariants({ variant: "ghost" })}>
              Pricing
            </Link>
            {!user ? (
              <>
                <LoginLink className={buttonVariants({ variant: "secondary" })}>Login</LoginLink>
                <RegisterLink className={buttonVariants()}>Sign Up</RegisterLink>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/dashboard" className={buttonVariants({ variant: "secondary" })}>
                  Dashboard
                </Link>
                <Link className={buttonVariants()} href="/create">
                  Create
                </Link>
                <LogoutLink className={buttonVariants({ variant: "ghost" })}>Signout</LogoutLink>
              </div>
            )}
          </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
