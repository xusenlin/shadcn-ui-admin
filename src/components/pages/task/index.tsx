import {TaskTable} from "./table.tsx"
import {TaskForm,TaskFormType} from "./form.tsx"
import { FloatButton  } from "@/components/ui/float-button.tsx"
import {Pagination} from "@/components/ui/pagination.tsx";
import {useRef} from "react";
import {Plus} from "lucide-react";
import {Task} from "@/api/task.ts";

export const Index = () => {

  const formRef = useRef<TaskFormType>();

  return (
      <>
        <div className="flex flex-col space-y-1.5 px-6">
          <div className="text-2xl font-semibold">Task</div>
          <div className="text-sm text-muted-foreground">Deploy your new project in one-click.</div>
        </div>
        <div className="p-6">
          <div className="rounded-md border">
            <TaskTable editTask={(t:Task)=>{ formRef.current?.EditForm(t)}}/>
          </div>
          <div className="mt-4">
            <Pagination/>
          </div>
        </div>
        <TaskForm ref={formRef}/>
        <FloatButton onClick={()=>{ formRef.current?.EditForm(null)}}>
            <Plus size={32} />
        </FloatButton>
      </>
  )
}
