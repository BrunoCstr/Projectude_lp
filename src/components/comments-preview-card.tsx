
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageSquare, Inbox, Clock, CheckCircle, MoreHorizontal, Reply, User, Send, PauseCircle, CircleCheckBig } from "lucide-react";

export function CommentsPreviewCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto p-3 md:p-4 bg-card/50 dark:bg-secondary/20 shadow-lg border border-border/30 text-card-foreground">
      <CardHeader className="p-0 mb-3 md:mb-4">
        {/* Removed Title and Button Skeleton */}
      </CardHeader>

      <CardContent className="p-0">
        <Tabs defaultValue="my-comments" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-3 md:mb-4 h-auto bg-background/70 dark:bg-card/80 p-1 rounded-lg">
            <TabsTrigger value="my-comments" className="text-xs sm:text-[11px] py-1.5 flex items-center justify-center gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <MessageSquare className="h-3.5 w-3.5" /> My Comments
            </TabsTrigger>
            <TabsTrigger value="received-comments" className="text-xs sm:text-[11px] py-1.5 flex items-center justify-center gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              <Inbox className="h-3.5 w-3.5" /> Received Comments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-comments">
            {/* Simulate Comment Card 1 (Completed) */}
            <Card className="bg-background shadow-inner border border-border/40 mb-3">
              <CardHeader className="p-2.5 md:p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-1.5 mb-1 flex-1 min-w-0">
                     <Avatar className="h-7 w-7 border flex-shrink-0">
                       <AvatarImage src="https://picsum.photos/seed/commenter1/40/40" alt="User Avatar" />
                       <AvatarFallback className="text-[10px]">U1</AvatarFallback>
                     </Avatar>
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <Skeleton className="h-3.5 w-3/4 mb-0.5" />
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground truncate">
                         <User className="h-2.5 w-2.5 flex-shrink-0"/> <Skeleton className="h-2.5 w-12" />
                         <span className="mx-0.5">in</span>
                         <Skeleton className="h-2.5 w-16" />
                      </div>
                      <Skeleton className="h-2.5 w-20" />
                    </div>
                  </div>
                  {/* Removed date/time skeleton div */}
                  <Skeleton className="h-4 w-4 mt-0.5" /> {/* Keep MoreHorizontal icon */}
                </div>
              </CardHeader>
              <CardFooter className="p-2.5 border-t border-border/30 flex items-center justify-start gap-2">
                <Skeleton className="h-5 w-24 rounded-md" />
                <div className="flex items-center gap-1 text-[10px]">
                   <CircleCheckBig className="h-2.5 w-2.5 text-green-500" />
                   <Skeleton className="h-2.5 w-12" />
                </div>
              </CardFooter>
            </Card>

            {/* Simulate Comment Card 2 (Paused) */}
            <Card className="bg-background shadow-inner border border-border/40">
               <CardHeader className="p-2.5 md:p-3">
                 <div className="flex items-start justify-between gap-2">
                   <div className="flex items-start gap-1.5 mb-1 flex-1 min-w-0">
                     <Avatar className="h-7 w-7 border flex-shrink-0">
                       <AvatarImage src="https://picsum.photos/seed/commenter2/40/40" alt="User Avatar" />
                       <AvatarFallback className="text-[10px]">U2</AvatarFallback>
                     </Avatar>
                     <div className="space-y-0.5 flex-1 min-w-0">
                       <Skeleton className="h-3.5 w-2/3 mb-0.5" />
                       <div className="flex items-center gap-1 text-[10px] text-muted-foreground truncate">
                          <User className="h-2.5 w-2.5 flex-shrink-0"/> <Skeleton className="h-2.5 w-10" />
                          <span className="mx-0.5">in</span>
                          <Skeleton className="h-2.5 w-14" />
                       </div>
                       <Skeleton className="h-2.5 w-24" />
                     </div>
                   </div>
                    {/* Removed date/time skeleton div */}
                   <Skeleton className="h-4 w-4 mt-0.5 ml-auto" /> {/* Keep MoreHorizontal icon */}
                 </div>
              </CardHeader>
              <CardFooter className="p-2.5 border-t border-border/30 flex items-center justify-start gap-2">
                  <Skeleton className="h-5 w-20 rounded-md" />
                  <div className="flex items-center gap-1 text-[10px]">
                     <PauseCircle className="h-2.5 w-2.5 text-orange-500" />
                     <Skeleton className="h-2.5 w-10" />
                  </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Placeholder for Received Comments Tab - MIRRORING My Comments */}
          <TabsContent value="received-comments">
             {/* Simulate Received Comment Card 1 (e.g., In Progress) */}
             <Card className="bg-background shadow-inner border border-border/40 mb-3">
               <CardHeader className="p-2.5 md:p-3">
                 <div className="flex items-start justify-between gap-2">
                   <div className="flex items-start gap-1.5 mb-1 flex-1 min-w-0">
                     <Avatar className="h-7 w-7 border flex-shrink-0">
                       <AvatarImage src="https://picsum.photos/seed/sender1/40/40" alt="Sender Avatar" />
                       <AvatarFallback className="text-[10px]">S1</AvatarFallback>
                     </Avatar>
                     <div className="space-y-0.5 flex-1 min-w-0">
                       <Skeleton className="h-3.5 w-3/4 mb-0.5" />
                       <div className="flex items-center gap-1 text-[10px] text-muted-foreground truncate">
                         <Send className="h-2.5 w-2.5 flex-shrink-0" /> <Skeleton className="h-2.5 w-10" />
                         <span className="mx-0.5">in</span>
                         <Skeleton className="h-2.5 w-20" />
                       </div>
                       <Skeleton className="h-2.5 w-16" />
                     </div>
                   </div>
                    {/* Removed date/time skeleton div */}
                   <Skeleton className="h-4 w-4 mt-0.5" /> {/* Keep MoreHorizontal icon */}
                 </div>
               </CardHeader>
               <CardFooter className="p-2.5 border-t border-border/30 flex items-center justify-start gap-2">
                 <Skeleton className="h-5 w-24 rounded-md" />
                 <div className="flex items-center gap-1 text-[10px]">
                    <Clock className="h-2.5 w-2.5 text-blue-500" />
                    <Skeleton className="h-2.5 w-14" />
                 </div>
               </CardFooter>
             </Card>

             {/* Simulate Received Comment Card 2 (e.g., Pending) */}
             <Card className="bg-background shadow-inner border border-border/40">
               <CardHeader className="p-2.5 md:p-3">
                 <div className="flex items-start justify-between gap-2">
                   <div className="flex items-start gap-1.5 mb-1 flex-1 min-w-0">
                     <Avatar className="h-7 w-7 border flex-shrink-0">
                       <AvatarImage src="https://picsum.photos/seed/sender2/40/40" alt="Sender Avatar" />
                       <AvatarFallback className="text-[10px]">S2</AvatarFallback>
                     </Avatar>
                     <div className="space-y-0.5 flex-1 min-w-0">
                       <Skeleton className="h-3.5 w-2/3 mb-0.5" />
                       <div className="flex items-center gap-1 text-[10px] text-muted-foreground truncate">
                         <Send className="h-2.5 w-2.5 flex-shrink-0" /> <Skeleton className="h-2.5 w-14" />
                         <span className="mx-0.5">in</span>
                         <Skeleton className="h-2.5 w-14" />
                       </div>
                        <Skeleton className="h-2.5 w-20" />
                     </div>
                   </div>
                    {/* Removed date/time skeleton div */}
                   <Skeleton className="h-4 w-4 mt-0.5 ml-auto" /> {/* Keep MoreHorizontal icon */}
                 </div>
               </CardHeader>
               <CardFooter className="p-2.5 border-t border-border/30 flex items-center justify-start gap-2">
                  <Skeleton className="h-5 w-20 rounded-md" />
                  <div className="flex items-center gap-1 text-[10px]">
                     <Inbox className="h-2.5 w-2.5 text-gray-500" />
                     <Skeleton className="h-2.5 w-12" />
                  </div>
               </CardFooter>
             </Card>
           </TabsContent>

        </Tabs>
      </CardContent>
    </Card>
  );
}
