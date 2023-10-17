import {Table,TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Loader2,PlayCircle,SendHorizontal,Share2,Trash2,PencilRuler} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {TerminalOut} from "./terminalOut.tsx"
import {Task} from "@/api/task.ts";


export const TaskTable = (props:{editTask:(task:Task|null)=>void})=>{

  const cellProps = {
    className:"py-2 px-4 text-center"
  }

  const columns = [
    {
      id:"id",
      title:"ID"
    },
    {
      id:"对内客户系统后台Admin",
      title:"Title"
    },
    {
      id:"commitHash",
      title:"CommitHash"
    },
    {
      id:"status",
      title:"Status"
    },
    {
      id:"branch",
      title:"Branch"
    },
    {
      id:"runCount",
      title:"RunCount"
    },
    {
      id:"terminalOut",
      title:"TerminalOut"
    },
    {
      id:"remark",
      title:"Remark"
    },
    {
      id:"buildDir",
      title:"BuildDir"
    },
    {
      id:"npmCmd",
      title:"NpmCmd"
    },
  ]

  return (
      <Table>
        <TableHeader>
          <TableRow  key={1}>
            { columns.map(c=>(<TableHead key={c.id} className="h-10 text-center">{ c.title }</TableHead>)) }
            <TableHead className="h-10 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            { columns.map(c=>{
              switch (c.id){
                case "status":
                  return (
                      <TableCell key={c.id} {...cellProps}>
                        <div className="flex item-center justify-center">
                          <Loader2 size={20} className="animate-spin"/>
                        </div>
                      </TableCell>
                  )
                case "terminalOut":
                  return (
                      <TableCell key={c.id} {...cellProps}>
                        <TerminalOut/>
                      </TableCell>
                  )
                default:
                  return (
                      <TableCell key={c.id} {...cellProps}>
                        { c.id }
                      </TableCell>
                  );
              }
            })}
            <TableCell {...cellProps}>
              <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/0"
              >
                <PlayCircle size={20} />
              </Button>
              <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/0"
              >
                <SendHorizontal size={20} />
              </Button>
              <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/0"
              >
                <Share2 size={20} />
              </Button>
              <Button
                  variant="ghost"
                  onClick={()=>{props.editTask(null)}}
                  size="icon"
                  className="hover:bg-primary/0"
              >
                <PencilRuler size={20} />
              </Button>

              <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/0"
              >
                <Trash2 size={20} />
              </Button>

            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
  )
}
