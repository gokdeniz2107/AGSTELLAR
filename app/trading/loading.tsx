import { Skeleton } from "@/components/ui/skeleton"

export default function TradingLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-6 w-32 mx-auto mb-6" />
          <Skeleton className="h-16 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-16 w-1/2 mx-auto mb-6" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-36" />
          </div>
        </div>
      </div>
    </div>
  )
}
