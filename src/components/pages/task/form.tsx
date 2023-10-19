import {Button} from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {useState, forwardRef, useImperativeHandle} from "react";
import {Task} from "@/api/task.ts";


export type TaskFormType = {
  EditForm: (task: Task | null) => void;
}

const initialForm = {
  title: "",
  repositoryId:null,
  branch: "",
  remark: "",
  buildDir: "dist",
  npmCmd: ""
}

const TaskForm = forwardRef<TaskFormType | undefined>((props, ref) => {
  const [open, setOpen] = useState(false)

  const [form, setForm] = useState<Task>({...initialForm})

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const EditForm = (task: Task | null) => {
    if (task) {
      setForm(task)
    } else {
      setForm({...initialForm})
    }
    setOpen(true)
  }

  useImperativeHandle(ref, () => ({EditForm}))
  return (
      <Dialog open={open} onOpenChange={v => {
        setOpen(v)
      }}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              {form.id ? `Edit Task ID:${form.id}` : "Creat New Task"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                  id="title"
                  name="title"
                  onChange={handleFormChange}
                  value={form.title}
                  className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="remark" className="text-right">
                Remark
              </Label>
              <Textarea
                  id="remark"
                  name="remark"
                  onChange={handleFormChange}
                  value={form.remark}
                  className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={()=>{console.log(form)}}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
})


export {TaskForm}
