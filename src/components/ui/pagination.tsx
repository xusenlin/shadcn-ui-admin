import { ChevronRight,ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
export const Pagination = ()=>{
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1 text-sm text-muted-foreground">Total 100 item</div>
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="text-sm text-muted-foreground">Page 1 of 10</div>
                <div className="space-x-2">
                    <Button variant="outline" size="icon" className="h-7 w-7">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-7 w-7">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}