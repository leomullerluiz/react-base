
import * as React from "react"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Home,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 h-full", className)}>
      <div className="space-y-4 py-4 h-full flex flex-col">
        <div className="px-4 py-2 flex items-center">
          <h2 className="text-lg font-semibold tracking-tight">Dashboard</h2>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
        <Separator />
        <div className="px-3">
          <div className="space-y-1">
            <NavLink to="/" className={({isActive}) => getNavClass(isActive)}>
              <Home className="mr-2 h-4 w-4" />
              Home
            </NavLink>
            <NavLink to="/dashboard" className={({isActive}) => getNavClass(isActive)}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink to="/analytics" className={({isActive}) => getNavClass(isActive)}>
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </NavLink>
            <NavLink to="/users" className={({isActive}) => getNavClass(isActive)}>
              <Users className="mr-2 h-4 w-4" />
              Users
            </NavLink>
            <NavLink to="/settings" className={({isActive}) => getNavClass(isActive)}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </NavLink>
          </div>
        </div>
        <div className="mt-auto px-3">
          <Separator className="my-4" />
          <div className="flex items-center">
            <div className="ml-4 space-y-1 flex-1">
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs leading-none text-muted-foreground">
                admin@example.com
              </p>
            </div>
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function getNavClass(isActive: boolean) {
  return cn(
    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
    isActive 
      ? "bg-primary text-primary-foreground" 
      : "hover:bg-accent hover:text-accent-foreground"
  )
}
