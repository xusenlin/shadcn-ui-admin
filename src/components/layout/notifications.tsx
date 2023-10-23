import { BellIcon, BellRing,UserCheck2,PackageCheck } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {Button} from "@/components/ui/button.tsx";

export const Notifications = ()=>{
  return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-primary/0 hover:text-primary text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <BellRing className="h-4 w-4" />
            <div className="right-1 top-1 w-1 h-1 rounded absolute animate-ping bg-red-600"></div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80  h-[300px] overflow-y-auto overflow-x-hidden">
          <div className="grid gap-1">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <BellIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Everything</p>
                <p className="text-sm text-muted-foreground">
                  Email digest, mentions & all activity.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 text-accent-foreground hover:bg-accent transition-all">
              <UserCheck2 className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Available</p>
                <p className="text-sm text-muted-foreground">
                  Only mentions and comments.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <PackageCheck className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <PackageCheck className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <PackageCheck className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <PackageCheck className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <PackageCheck className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <PackageCheck className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <PackageCheck className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
  )
}
