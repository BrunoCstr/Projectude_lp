import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Trash2, Pencil } from "lucide-react";

export function TagsPreviewCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto p-3 md:p-4 bg-card/50 dark:bg-secondary/20 shadow-lg border border-border/30">
      {/* Removed CardHeader */}
      <CardContent className="p-0 space-y-1.5 sm:space-y-2">
        {/* Simulate Tag Item 1 */}
        <div className="flex items-center justify-between p-2 sm:p-2.5 bg-background rounded-lg border border-border/40 shadow-sm">
          <div className="space-y-1 sm:space-y-1.5 flex-1 mr-2 sm:mr-3">
            <Skeleton className="h-3 sm:h-3.5 w-3/4" />
            <Skeleton className="h-2 sm:h-2.5 w-1/2" />
            <div className="flex flex-wrap gap-1 pt-0.5 sm:pt-1">
              <Badge className="bg-red-500/80 hover:bg-red-500/70 text-white text-[8px] sm:text-[9px] px-1.5 py-0.5">Red Tag</Badge>
            </div>
          </div>
          <div className="flex gap-1 sm:gap-1.5">
            <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary">
              <Pencil className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
              <span className="sr-only">Edit Tag</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-destructive">
              <Trash2 className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
               <span className="sr-only">Delete Tag</span>
            </Button>
          </div>
        </div>

        {/* Simulate Tag Item 2 */}
         <div className="flex items-center justify-between p-2 sm:p-2.5 bg-background rounded-lg border border-border/40 shadow-sm">
          <div className="space-y-1 sm:space-y-1.5 flex-1 mr-2 sm:mr-3">
            <Skeleton className="h-3 sm:h-3.5 w-5/6" />
            <Skeleton className="h-2 sm:h-2.5 w-2/3" />
            <div className="flex flex-wrap gap-1 pt-0.5 sm:pt-1">
               <Badge className="bg-blue-500/80 hover:bg-blue-500/70 text-white text-[8px] sm:text-[9px] px-1.5 py-0.5">Blue Tag</Badge>
            </div>
          </div>
          <div className="flex gap-1 sm:gap-1.5">
             <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary">
               <Pencil className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
               <span className="sr-only">Edit Tag</span>
             </Button>
             <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-destructive">
               <Trash2 className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
                <span className="sr-only">Delete Tag</span>
             </Button>
          </div>
        </div>

        {/* Simulate Tag Item 3 */}
        <div className="flex items-center justify-between p-2 sm:p-2.5 bg-background rounded-lg border border-border/40 shadow-sm">
          <div className="space-y-1 sm:space-y-1.5 flex-1 mr-2 sm:mr-3">
            <Skeleton className="h-3 sm:h-3.5 w-1/2" />
            <Skeleton className="h-2 sm:h-2.5 w-3/4" />
            <div className="flex flex-wrap gap-1 pt-0.5 sm:pt-1">
               <Badge variant="secondary" className="text-[8px] sm:text-[9px] px-1.5 py-0.5">Gray Tag</Badge>
            </div>
          </div>
           <div className="flex gap-1 sm:gap-1.5">
             <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary">
               <Pencil className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
               <span className="sr-only">Edit Tag</span>
             </Button>
             <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-destructive">
               <Trash2 className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
                <span className="sr-only">Delete Tag</span>
             </Button>
           </div>
        </div>

         {/* Simulate Tag Item 4 */}
         <div className="flex items-center justify-between p-2 sm:p-2.5 bg-background rounded-lg border border-border/40 shadow-sm">
           <div className="space-y-1 sm:space-y-1.5 flex-1 mr-2 sm:mr-3">
             <Skeleton className="h-3 sm:h-3.5 w-2/5" />
             <Skeleton className="h-2 sm:h-2.5 w-4/6" />
             <div className="flex flex-wrap gap-1 pt-0.5 sm:pt-1">
               <Badge className="bg-orange-500/80 hover:bg-orange-500/70 text-white text-[8px] sm:text-[9px] px-1.5 py-0.5">Orange Tag</Badge>
             </div>
           </div>
            <div className="flex gap-1 sm:gap-1.5">
              <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary">
                <Pencil className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
                <span className="sr-only">Edit Tag</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-destructive">
                <Trash2 className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
                 <span className="sr-only">Delete Tag</span>
              </Button>
            </div>
         </div>

      </CardContent>
    </Card>
  );
}

    