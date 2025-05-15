import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted dark:bg-secondary/70", className)} // Adjusted dark mode color opacity
      {...props}
    />
  )
}

export { Skeleton }
