import React from "react";
import { Logo } from "./logo.tsx"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"

export function Nav({
                      className,
                      ...props
                    }: React.HTMLAttributes<HTMLElement>) {
  return (
      <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
      >

        <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/0"
        >
          <Logo/>
        </Button>

        <Button
            variant="ghost"
            className="text-sm  hover:bg-primary/0 font-medium  transition-colors hover:text-primary"
        >
          Dashboard
        </Button>

        <Button
            variant="ghost"
            className="text-sm hover:bg-primary/0 font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Repositories
        </Button>

        <Button
            variant="ghost"
            className="text-sm hover:bg-primary/0 font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Task
        </Button>
        <Button
            variant="ghost"
            className="text-sm hover:bg-primary/0 font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Users
        </Button>
      </nav>
  )
}
