import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      {/* Logo and Title */}
      <Link href="/learn">
        <div className="flex items-center gap-x-3 py-4">
          <Image src="/logo.webp" height={30} width={30} alt="AI Tutor Logo" />
          <h1 className="text-xl font-extrabold text-blue-600 tracking-wide">
            FluentFusion
          </h1>
        </div>
      </Link>

      {/* Sidebar Navigation */}
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>

      {/* User Profile Section */}
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton signOutOptions={{ redirectUrl: "/" }} />
        </ClerkLoaded>
      </div>
    </div>
  );
};
