'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, FolderKanban, Files, TrendingUp } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Pie, PieChart, Cell, Legend } from "recharts";
import type { ChartConfig } from "@/components/ui/chart"; // Import type
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";

const barChartData = [
  { month: "Jan", projects: 18 },
  { month: "Feb", projects: 15 },
  { month: "Mar", projects: 22 },
  { month: "Apr", projects: 30 },
  { month: "May", projects: 25 },
  { month: "Jun", projects: 35 },
];

const barChartConfig = {
  projects: {
    label: "Projects",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const pieChartData = [
  { name: "Completed", projects: 25, fill: "hsl(var(--chart-1))" }, // Color applied
  { name: "In Progress", projects: 15, fill: "hsl(var(--chart-2))" }, // Color applied
  { name: "Paused", projects: 5, fill: "hsl(var(--chart-3))" }, // Color applied
  { name: "Not Started", projects: 10, fill: "hsl(var(--chart-4))" }, // Color applied
];

const pieChartConfig = {
  projects: {
    label: "Projects",
  },
  Completed: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  "In Progress": {
    label: "In Progress",
    color: "hsl(var(--chart-2))",
  },
  Paused: {
    label: "Paused",
    color: "hsl(var(--chart-3))",
  },
   "Not Started": {
    label: "Not Started",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function DashboardPreviewCard() {
  return (
    <Card className="w-full max-w-4xl overflow-hidden border border-border/30 bg-card/50 dark:bg-secondary/20 text-card-foreground mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 p-3 sm:p-4">
      <CardContent className="p-0 space-y-3 sm:space-y-4">
        {/* Top Stat Cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <StatCard
            icon={DollarSign}
            title="Investimento"
            value=""
            description="Simulated data"
            iconBg="bg-green-500/10"
            iconColor="text-green-500"
          />
          <StatCard
            icon={Files} // Icon for total projects
            title="Total Projects"
            value=""
            description="Simulated data"
            badge="+4%"
            iconBg="bg-orange-500/10"
            iconColor="text-orange-500"
          />
          <StatCard
            icon={FolderKanban} // Icon for shared projects
            title="Shared Projects"
            value=""
            description="Simulated data"
             iconBg="bg-blue-500/10"
             iconColor="text-blue-500"
          />
          <StatCard
            icon={Users}
            title="Total Collaborators"
            value=""
            description="Simulated data"
            iconBg="bg-purple-500/10"
            iconColor="text-purple-500"
          />
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
          {/* Projects Created Over Time */}
          <Card className="bg-background/70 dark:bg-card/80 p-2 sm:p-3 shadow-inner">
            <CardHeader className="p-0 pb-2 sm:pb-3">
              <CardTitle className="text-xs sm:text-sm md:text-base">Projects Over Time</CardTitle>
              <CardDescription className="text-[10px] sm:text-xs">Simulated data</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer config={barChartConfig} className="h-[120px] sm:h-[150px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={6}
                      fontSize={8}
                      stroke="hsl(var(--muted-foreground))"
                    />
                     <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={6}
                        fontSize={8}
                        width={18}
                        stroke="hsl(var(--muted-foreground))"
                      />
                    <ChartTooltip
                       cursor={false}
                       content={<ChartTooltipContent indicator="dot" hideLabel className="text-[10px] sm:text-xs p-1.5 sm:p-2" />}
                    />
                    <Bar dataKey="projects" fill="var(--color-projects)" radius={1.5} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Project Status Distribution */}
           <Card className="bg-background/70 dark:bg-card/80 p-2 sm:p-3 shadow-inner">
             <CardHeader className="p-0 pb-1 items-center">
               <CardTitle className="text-xs sm:text-sm md:text-base">Project Status</CardTitle>
               <CardDescription className="text-[10px] sm:text-xs">Simulated data</CardDescription>
             </CardHeader>
             <CardContent className="p-0 flex items-center justify-center">
               <ChartContainer config={pieChartConfig} className="h-[110px] sm:h-[140px] w-full max-w-[180px] sm:max-w-[200px] mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel nameKey="name" indicator="dot" className="text-[10px] sm:text-xs p-1.5 sm:p-2" />}
                    />
                    <Pie
                      data={pieChartData}
                      dataKey="projects"
                      nameKey="name"
                      innerRadius={25}
                      outerRadius={40}
                      strokeWidth={1}
                      paddingAngle={2}
                    >
                     {pieChartData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                      ))}
                    </Pie>
                     <ChartLegend
                        content={<ChartLegendContent nameKey="name" className="flex-wrap justify-center gap-x-1 gap-y-0 text-[8px] sm:text-[9px]" />}
                        verticalAlign="bottom"
                        align="center"
                        wrapperStyle={{ paddingTop: '4px' }}
                     />
                  </PieChart>
                 </ResponsiveContainer>
               </ChartContainer>
             </CardContent>
           </Card>
        </div>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  badge?: string;
  iconBg?: string;
  iconColor?: string;
}

function StatCard({ icon: Icon, title, value, description, badge, iconBg = "bg-primary/10", iconColor = "text-primary" }: StatCardProps) {
  return (
    <Card className="bg-background/70 dark:bg-card/80 p-1.5 sm:p-2 shadow-inner">
      <CardContent className="p-0 flex flex-col gap-0.5 sm:gap-1">
        <div className="flex items-start justify-between">
           <div className={`p-0.5 sm:p-1 rounded-md ${iconBg}`}>
              <Icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${iconColor}`} />
            </div>
           {badge && <Badge variant="secondary" className="text-green-600 dark:text-green-400 bg-green-500/10 text-[7px] sm:text-[8px] px-1 py-0">{badge}</Badge>}
        </div>
        <div className="flex-1 space-y-0.5 min-w-0 mt-0.5">
          <CardDescription className="text-[8px] sm:text-[9px] uppercase tracking-wider text-muted-foreground truncate">{title}</CardDescription>
          <Skeleton className="h-3 sm:h-3.5 w-3/4" />
          <Skeleton className="h-2 sm:h-2.5 w-1/2" />
        </div>
      </CardContent>
    </Card>
  );
}

    