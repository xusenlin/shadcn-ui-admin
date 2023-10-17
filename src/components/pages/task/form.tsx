import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useState,forwardRef,useImperativeHandle} from "react";
import {Task} from "@/api/task.ts";
import * as React from "react";

export type TaskFormType = {
  EditForm: (task: Task | null) => void;
}

const TaskForm =  forwardRef<TaskFormType|undefined>((props, ref)=>{
  const [open,setOpen] = useState(false)

  const EditForm = (task:Task|null) => {
    setOpen(true)
  }
  useImperativeHandle(ref, ()=>({EditForm}))
  return (
      <Dialog open={open} onOpenChange={v=>{setOpen(v)}}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Edit Task ID : 21321
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
})


export { TaskForm }
