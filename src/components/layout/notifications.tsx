import { BellIcon, BellRing,UserCheck2,PackageCheck } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {Button} from "@/components/ui/button.tsx";

type ItemType = {
  icon: JSX.Element,
  title: string,
  description: string,
}

const NotificationItem = ({icon, title, description}:ItemType) => {
  return (
      <div
          className="flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
        {icon}
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
  )
}



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
        <PopoverContent className="w-[340px] mr-2">
          <div className="flex justify-center items-center mb-2 text-muted-foreground">Notifications(10)</div>
          <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
            <NotificationItem title="Everything" description="Email digest, mentions & all activity." icon={<BellIcon className="mt-px h-5 w-5" />}/>
            <NotificationItem title="Everything" description="Email digest, mentions & all activity." icon={<BellIcon className="mt-px h-5 w-5" />}/>
            <NotificationItem title="Everything" description="Email digest, mentions & all activity." icon={<UserCheck2 className="mt-px h-5 w-5" />}/>
            <NotificationItem title="Everything" description="Email digest, mentions & all activity." icon={<BellIcon className="mt-px h-5 w-5" />}/>
            <NotificationItem title="Everything" description="Email digest, mentions & all activity." icon={<PackageCheck className="mt-px h-5 w-5" />}/>
            <NotificationItem title="Everything" description="Email digest, mentions & all activity." icon={<PackageCheck className="mt-px h-5 w-5" />}/>
            <NotificationItem title="Everything" description="Email digest, mentions & all activity." icon={<BellIcon className="mt-px h-5 w-5" />}/>
          </div>
        </PopoverContent>
      </Popover>
  )
}
