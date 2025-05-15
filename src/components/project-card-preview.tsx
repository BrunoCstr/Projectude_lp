import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, Clock, Eye } from "lucide-react"; // Import Eye icon
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardPreview() {
  return (
    // Outer Card container - adjusted padding and centering
    <Card className="w-full max-w-2xl mx-auto p-3 sm:p-4 bg-card/50 dark:bg-secondary/20 shadow-lg border border-border/30">
      {/* Removed outer header and title */}
      <CardContent className="p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Card 1: In Progress */}
          <Card className="bg-background text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/40 flex flex-col h-full">
            <CardHeader className="p-2 sm:p-3">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border">
                  <AvatarImage src="https://picsum.photos/seed/proj1/40/40" alt="Project Avatar" />
                  <AvatarFallback className="bg-muted text-[10px] sm:text-xs">P1</AvatarFallback>
                </Avatar>
                <Skeleton className="h-3.5 sm:h-4 w-3/5" />
              </div>
              <Skeleton className="h-2 sm:h-2.5 w-full mb-0.5 sm:mb-1" />
              <Skeleton className="h-2 sm:h-2.5 w-4/5" />
            </CardHeader>
            <CardContent className="p-2 sm:p-3 pt-0 flex-1">
              <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-[9px] sm:text-[10px] px-1.5 py-0.5">
                <Clock className="mr-1 h-2.5 sm:h-3 w-2.5 sm:w-3" /> Em Andamento
              </Badge>
              <Skeleton className="h-2 sm:h-2.5 w-3/4 mt-1.5 sm:mt-2 mb-0.5 sm:mb-1" />
              <Skeleton className="h-2 sm:h-2.5 w-1/2" />
            </CardContent>
            <CardFooter className="p-2 sm:p-3 border-t border-border/30 mt-auto flex justify-end">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/5 text-[9px] sm:text-[10px] px-1.5 py-0.5 h-auto">
                Ver Detalhes <Eye className="ml-1 h-2.5 sm:h-3 w-2.5 sm:w-3" />
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2: Completed */}
          <Card className="bg-background text-card-foreground shadow-md hover:shadow-lg transition-shadow duration-300 border border-border/40 flex flex-col h-full">
             <CardHeader className="p-2 sm:p-3">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border">
                  <AvatarImage src="https://picsum.photos/seed/proj2/40/40" alt="Project Avatar" />
                  <AvatarFallback className="bg-muted text-[10px] sm:text-xs">P2</AvatarFallback>
                </Avatar>
                <Skeleton className="h-3.5 sm:h-4 w-3/5" />
              </div>
              <Skeleton className="h-2 sm:h-2.5 w-full mb-0.5 sm:mb-1" />
              <Skeleton className="h-2 sm:h-2.5 w-4/5" />
            </CardHeader>
            <CardContent className="p-2 sm:p-3 pt-0 flex-1">
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 dark:text-green-400 text-[9px] sm:text-[10px] px-1.5 py-0.5">
                <CheckCircle2 className="mr-1 h-2.5 sm:h-3 w-2.5 sm:w-3" /> Concluído
              </Badge>
              <Skeleton className="h-2 sm:h-2.5 w-3/4 mt-1.5 sm:mt-2 mb-0.5 sm:mb-1" />
              <Skeleton className="h-2 sm:h-2.5 w-1/2" />
            </CardContent>
            <CardFooter className="p-2 sm:p-3 border-t border-border/30 mt-auto flex justify-end">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/5 text-[9px] sm:text-[10px] px-1.5 py-0.5 h-auto">
                 Ver Detalhes <Eye className="ml-1 h-2.5 sm:h-3 w-2.5 sm:w-3" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

    