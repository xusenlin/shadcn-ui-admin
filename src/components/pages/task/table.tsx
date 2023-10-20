import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Loader2, TerminalSquare} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {TerminalOut, TerminalOutType} from "./terminal-out.tsx"
import {AlertDialogType, DeleteDialog} from "./delete-dialog.tsx"
import {Task} from "@/api/task.ts";
import {useRef} from "react";
import {SwitchBranchType, SwitchBranch} from "@/components/pages/task/switch-branch.tsx";
import {RowActions} from "@/components/pages/task/row-actions.tsx";

const columns:{id:keyof Task,title:string}[]= [
  {
    id:"id",
    title: "ID"
  },
  {
    id: "title",
    title: "Title"
  },
  {
    id: "repositoryId",
    title: "Repository"
  },
  {
    id: "commitHash",
    title: "CommitHash"
  },
  {
    id: "status",
    title: "Status"
  },
  {
    id: "branch",
    title: "Branch"
  },
  {
    id: "runCount",
    title: "RunCount"
  },
  {
    id: "terminalOut",
    title: "TerminalOut"
  },
  {
    id: "remark",
    title: "Remark"
  },
  {
    id: "buildDir",
    title: "BuildDir"
  },
  {
    id: "npmCmd",
    title: "NpmCmd"
  },
]
const cellProps = {
  className: "py-2 px-4 text-center"
}

type TaskTableProps = {
  editTask:(task:Task)=>void
}

export const TaskTable = ({ editTask}:TaskTableProps) => {
  const switchBranchRef = useRef<SwitchBranchType>();
  const terminalOutRef = useRef<TerminalOutType>();
  const deleteDialogRef = useRef<AlertDialogType>();

  const tableData: Task[] = [
    {
      id: 32,
      repositoryId:1,
      title: "【测试环境】运营后台",
      commitHash: "a87d71",
      status: 1,
      branch:"master",
      runCount:33,
      terminalOut:"",
      remark:"1",
      buildDir:"dist",
      npmCmd:"npm run build:test"
    },
    {
      id: 33,
      repositoryId:1,
      title: "【预发布环境】运营后台",
      commitHash: "bc7s76",
      status: 1,
      branch:"main",
      runCount:33,
      terminalOut:"",
      remark:"1",
      buildDir:"dist",
      npmCmd:"npm run build"
    }
  ]

  return (
      <>
        <Table>
          <TableHeader>
            <TableRow key={1}>
              {columns.map(c => (<TableHead key={c.id} className="h-10 text-center">{c.title}</TableHead>))}
              <TableHead className="h-10 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              tableData.map(t => {
                return (
                    <TableRow key={t.id}>
                      {
                        columns.map(c => {
                          switch (c.id) {
                            case "status":
                              return (
                                  <TableCell key={t.id + c.id} {...cellProps}>
                                    <div className="flex item-center justify-center">
                                      <Loader2 size={20} className="animate-spin"/>
                                    </div>
                                  </TableCell>
                              )
                            case "terminalOut":
                              return (
                                  <TableCell key={t.id + c.id} {...cellProps}>
                                    <Button
                                        onClick={() => {
                                          terminalOutRef.current?.Show(t)
                                        }}
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-primary/0"
                                    >
                                      <TerminalSquare size={20}/>
                                    </Button>
                                  </TableCell>
                              )
                            default:
                              return (
                                  <TableCell key={t.id + c.id} {...cellProps}>
                                    {t[c.id]}
                                  </TableCell>
                              );
                          }
                        })
                      }
                      <TableCell {...cellProps}>
                        <RowActions
                            deleteTask={()=>{deleteDialogRef.current?.Confirm(t.id)}}
                            editTask={()=>{editTask(t)}}
                            switchBranch={()=>{switchBranchRef.current?.Show(22)}}
                        />
                      </TableCell>
                    </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
        <SwitchBranch ref={switchBranchRef}/>
        <TerminalOut  ref={terminalOutRef}/>
        <DeleteDialog ref={deleteDialogRef}/>
      </>

  )
}
