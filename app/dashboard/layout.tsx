import SideNav from "@/app/ui/dashboard/sidenav";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "this is dashboard",
};

export type Teset = {
  children: React.ReactNode;
};

export default function Layout({ children }: Teset) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <Link href="/hero-desktop.png">hero-desktop</Link>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
