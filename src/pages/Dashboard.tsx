
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  // Fetch users for our dashboard
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.users.getAll(),
  });

  // Transform user data for chart
  const chartData = React.useMemo(() => {
    if (!users) return [];
    
    // For this example, let's create a chart showing "website domains" by first letter
    // In a real app, you'd use meaningful metrics from your data
    const domainsByFirstLetter: Record<string, number> = {};
    
    users.forEach((user) => {
      const firstLetter = user.website.charAt(0).toUpperCase();
      domainsByFirstLetter[firstLetter] = (domainsByFirstLetter[firstLetter] || 0) + 1;
    });
    
    return Object.entries(domainsByFirstLetter).map(([letter, count]) => ({
      name: letter,
      value: count,
    }));
  }, [users]);

  // Chart config
  const chartConfig = {
    domains: {
      label: "Website Domains",
      theme: {
        light: "#2563eb",
        dark: "#3b82f6",
      },
    },
  };
  
  if (isLoading) {
    return (
      <div className="flex h-40 w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-40 w-full items-center justify-center">
        <p className="text-destructive">Error loading dashboard data</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Your dashboard overview and analytics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users?.length || 0}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unique Websites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(users?.map(user => user.website)).size}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Companies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(users?.map(user => user.company.name)).size}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Website Domains by First Letter</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <ChartContainer config={chartConfig} className="aspect-[4/3]">
            {/* Wrap BarChart inside a fragment to satisfy ReactElement type */}
            <>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                  dataKey="value"
                  style={{ fill: "var(--color-domains)" }}
                  name="domains"
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent 
                      nameKey="name"
                      labelKey="name"
                      labelFormatter={(value) => `Letter: ${value}`}
                    />
                  }
                />
              </BarChart>
              <ChartLegend content={<ChartLegendContent nameKey="domains" />} />
            </>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
