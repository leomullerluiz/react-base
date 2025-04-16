
import * as React from "react"
import { Outlet } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Sidebar } from "./sidebar"
import { useTheme } from "next-themes"

interface MainLayoutProps {
  children?: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme } = useTheme();
  
  return (
    <div className={cn("min-h-screen flex", theme === "dark" ? "dark" : "")}>
      <div className="hidden md:block w-64 border-r bg-sidebar">
        <Sidebar />
      </div>
      <div className="flex-1 p-6 md:px-8 overflow-auto">
        {children || <Outlet />}
      </div>
    </div>
  )
}
