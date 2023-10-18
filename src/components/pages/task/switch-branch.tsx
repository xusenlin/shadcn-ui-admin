import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {useState,forwardRef,useImperativeHandle} from "react";
import {Share2,} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"


export type SwitchBranchType = {
  Show: (id:number) => void;
}

const SwitchBranch =  forwardRef<SwitchBranchType|undefined>((props, ref)=>{
  const [open,setOpen] = useState(false)

  const Show = (id:number) => {
    setOpen(true)
  }
  useImperativeHandle(ref, ()=>({Show}))
  return (
      <Dialog open={open} onOpenChange={v=>{setOpen(v)}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>SwitchBranch</DialogTitle>
          </DialogHeader>
          <Command className="rounded">
            <CommandInput placeholder="Search branch ..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandItem>
                <Share2 className="mr-2 h-4 w-4" />
                <span>main</span>
              </CommandItem>
              <CommandItem>
                <Share2 className="mr-2 h-4 w-4" />
                <span>master</span>
              </CommandItem>
              <CommandItem>
                <Share2 className="mr-2 h-4 w-4" />
                <span>branch1</span>
              </CommandItem>
            </CommandList>
          </Command>

        </DialogContent>
      </Dialog>
  )
})


export { SwitchBranch }
