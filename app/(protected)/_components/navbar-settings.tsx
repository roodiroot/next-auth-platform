"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import UserButton from "@/components/auth/user-button";

const NavbarSettings = () => {
  const pathname = usePathname();
  return (
    <div className="w-full p-4 rounded-2xl bg-white border border-gray-200 flex justify-between items-center dark:bg-accent-300">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href={"/server"}>Сервер</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href={"/client"}>Клиент</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href={"/admin"}>Админ</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href={"/settings"}>Параментры</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  );
};

export default NavbarSettings;
