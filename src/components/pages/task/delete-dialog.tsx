
import {useState,forwardRef,useImperativeHandle} from "react";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog
} from "@/components/ui/alert-dialog.tsx";



export type AlertDialogType = {
  Confirm: (id:number) => void;
}

const DeleteDialog =  forwardRef<AlertDialogType|undefined>((_, ref)=>{
  const [open,setOpen] = useState(false)
  const [taskId,setTaskId] = useState(0)

  const Confirm = (id:number) => {
    setOpen(true)
    setTaskId(id)
    console.log(taskId)
  }
  useImperativeHandle(ref, ()=>({Confirm}))
  return (
      <AlertDialog open={open} onOpenChange={v=>{setOpen(v)}}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Task Deletion</AlertDialogTitle>
            <AlertDialogDescription>Are you sure you want to delete this task? This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
})


export { DeleteDialog }
