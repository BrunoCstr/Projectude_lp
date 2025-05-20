"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  DollarSign,
  Link as LinkIcon,
  Paperclip,
  Pencil,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const randomImageUrls = Array.from(
  { length: 5 },
  (_, i) => `https://picsum.photos/seed/carousel${i + 1}/600/300`
); // Adjusted height

export function ProjectPreviewCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  
  const t = useTranslations("Card");

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-[320px] sm:max-w-sm lg:max-w-md xl:max-w-lg overflow-hidden border border-primary/30 bg-card text-card-foreground mx-auto relative shadow-[0_-5px_15px_-3px_hsl(var(--primary)/0.3)] hover:shadow-[0_-10px_25px_-5px_hsl(var(--primary)/0.4)] transition-shadow duration-300">
        <Badge
          variant="secondary"
          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-[9px] sm:text-xs font-medium bg-primary text-primary-foreground px-1.5 py-0.5 rounded-bl-lg rounded-tr-sm z-10"
        >
          {t('example')}
        </Badge>

        <CardHeader className="p-0 relative">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {randomImageUrls.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[16/7] sm:aspect-[16/8] overflow-hidden">
                    {" "}
                    {/* Further reduced height */}
                    <Image
                      src={url}
                      alt={`Project Slide ${index + 1}`}
                      width={600}
                      height={263} // Adjusted height
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Removed CarouselPrevious and CarouselNext */}
          </Carousel>
          {/* Removed pagination dots */}
        </CardHeader>
        <CardContent className="p-3 sm:p-4 space-y-3 sm:space-y-4">
          <CardTitle className="text-base sm:text-lg md:text-xl font-bold">
            {t('title')}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm text-muted-foreground">
            {t('description')}
          </CardDescription>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Badge
              variant="secondary"
              className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5"
            >
              {t('tagLabel')}
            </Badge>
            <Badge
              variant="outline"
              className="border-primary/50 text-primary text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5"
            >
              {t('tag')}
            </Badge>
            <div className="ml-auto flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>{t('date')} 00/00/0000</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-medium flex items-center gap-1">
                <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                {t('investment')}
              </h4>
              <Skeleton className="h-3 sm:h-4 w-3/4" />
              <Skeleton className="h-3 sm:h-4 w-1/2" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-medium flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                {t('localization')}
              </h4>
              <Skeleton className="h-3 sm:h-4 w-full" />
              <Skeleton className="h-3 sm:h-4 w-3/4" />
            </div>
          </div>

          <Separator className="my-3 sm:my-4" />

          <div className="space-y-2 sm:space-y-3">
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-medium flex items-center gap-1">
                <LinkIcon className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                {t('credentials')}
              </h4>
              <Skeleton className="h-4 sm:h-5 w-full" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-medium flex items-center gap-1">
                <Paperclip className="h-3.5 w-3.5 text-muted-foreground" />{" "}
                {t('attachments')}
              </h4>
              <Skeleton className="h-4 sm:h-5 w-full" />
              <Skeleton className="h-4 sm:h-5 w-3/4 mt-0.5 sm:mt-1" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 dark:bg-secondary/30 p-2.5 sm:p-3 flex justify-between items-center border-t">
          {/* Avatar Group */}
          <div className="flex -space-x-1.5 sm:-space-x-2">
            <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-background">
              <AvatarImage
                data-ai-hint="person cartoon"
                src="https://picsum.photos/seed/avatar1/40/40"
                alt="Colaborador 1"
              />
              <AvatarFallback className="text-[10px] sm:text-xs">
                C1
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-background">
              <AvatarImage
                data-ai-hint="person cartoon"
                src="https://picsum.photos/seed/avatar2/40/40"
                alt="Colaborador 2"
              />
              <AvatarFallback className="text-[10px] sm:text-xs">
                C2
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-background">
              <AvatarImage
                data-ai-hint="person cartoon"
                src="https://picsum.photos/seed/avatar3/40/40"
                alt="Colaborador 3"
              />
              <AvatarFallback className="text-[10px] sm:text-xs">
                C3
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-background bg-primary/20">
              {/* Example showing more users */}
              <AvatarFallback className="text-[10px] sm:text-xs text-primary">
                +2
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1.5 sm:gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs"
            >
              {t('close')}
            </Button>
            <Button
              size="sm"
              className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs"
            >
              <Pencil className="mr-1 h-3 w-3 sm:mr-1.5 sm:h-4 sm:w-4" /> {t('edit')}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
