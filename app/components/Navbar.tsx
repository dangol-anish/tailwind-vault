import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export function Navbar() {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid md:grid-cols-12 item-center px-4 md:px-8 mx-auto py-7">
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold ">
            Tailwind<span className="text-violet-500">Vault</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
        <Button asChild>
          <LoginLink>Login</LoginLink>
        </Button>
        <Button asChild variant="secondary">
          <RegisterLink>Register</RegisterLink>
        </Button>

        <div className="md:hidden ">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
