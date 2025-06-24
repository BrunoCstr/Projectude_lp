import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export function HelpCenterPreviewCard() {
  return (
    <Card className="w-full max-w-xl mx-auto p-3 md:p-4 bg-card/50 dark:bg-secondary/20 shadow-lg border border-border/30 text-card-foreground">
      <CardHeader className="p-0 mb-3 md:mb-4 text-center">
        <CardTitle className="text-lg md:text-xl font-bold">Help Center</CardTitle>
        <CardDescription className="text-muted-foreground text-xs md:text-sm">
          How can we help you today?
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 space-y-3 sm:space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-2 sm:left-2.5 top-1/2 -translate-y-1/2 h-3 sm:h-3.5 w-3 sm:w-3.5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for articles..."
            className="w-full pl-7 sm:pl-8 h-8 bg-background dark:bg-card text-xs sm:text-sm"
          />
        </div>

        {/* Popular Topics */}
        <div className="space-y-1.5 sm:space-y-2">
          <h4 className="text-[10px] sm:text-xs font-medium text-muted-foreground">Popular Topics</h4>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
             <Badge className="bg-orange-500/80 hover:bg-orange-500/70 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5">Getting Started</Badge>
             <Badge className="bg-cyan-500/80 hover:bg-cyan-500/70 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5">Account</Badge>
             <Badge className="bg-red-500/80 hover:bg-red-500/70 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5">Billing</Badge>
             <Badge className="bg-purple-500/80 hover:bg-purple-500/70 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5">Integrations</Badge>
          </div>
        </div>

        {/* Static Cards (No Accordion) */}
        <div className="w-full space-y-1.5">
          <div className="bg-background dark:bg-card rounded-md border border-border/40 shadow-sm p-2.5 sm:p-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-3 sm:h-3.5 w-3/4" />
            </div>
            <div className="mt-2">
              <Skeleton className="h-2.5 w-full mt-1" />
              <Skeleton className="h-2.5 w-5/6 mt-1" />
            </div>
          </div>
          
          <div className="bg-background dark:bg-card rounded-md border border-border/40 shadow-sm p-2.5 sm:p-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-3 sm:h-3.5 w-2/3" />
            </div>
            <div className="mt-2">
              <Skeleton className="h-2.5 w-full mt-1" />
              <Skeleton className="h-2.5 w-4/5 mt-1" />
            </div>
          </div>
          
          <div className="bg-background dark:bg-card rounded-md border border-border/40 shadow-sm p-2.5 sm:p-3">
            <div className="flex justify-between items-center">
              <Skeleton className="h-3 sm:h-3.5 w-4/5" />
            </div>
            <div className="mt-2">
              <Skeleton className="h-2.5 w-full mt-1" />
              <Skeleton className="h-2.5 w-3/4 mt-1" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

    