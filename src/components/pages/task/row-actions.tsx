import {Button} from "@/components/ui/button.tsx";
import {ArrowDownToLine, MoreHorizontal,PencilRuler, PlayCircle, SendHorizontal, Share2, Trash2} from "lucide-react";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type RowActionsProps = {
  switchBranch:()=>void
  editTask:()=>void
  deleteTask:()=>void
}

export const RowActions = ({switchBranch,editTask,deleteTask}:RowActionsProps) => {
  return (
      <>
        <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/0"
        >
          <SendHorizontal size={20}/>
        </Button>
        <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary/0"
        >
          <PlayCircle size={20}/>
        </Button>
        <Button
            onClick={switchBranch}
            variant="ghost"
            size="icon"
            className="hover:bg-primary/0"
        >
          <Share2 size={20}/>
        </Button>


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
                onClick={switchBranch}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/0"
            >
              <MoreHorizontal size={20}/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>More Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={editTask}>
                <PencilRuler className="mr-2 h-4 w-4" />
                <span>Edit Task</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={editTask}>
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                <span>Download Zip</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={deleteTask} >
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete Task</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
  )
}
