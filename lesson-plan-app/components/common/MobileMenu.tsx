"use client";
import React from "react";
import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface Props {
  user: KindeUser<object>;
}

const MobileMenu: React.FC<Props> = ({ user }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <nav className="absolute left-0 right-0 top-16 border-b border-gray-200 shadow-lg bg-white">
          <div className="flex flex-col p-4 space-y-2">
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
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
