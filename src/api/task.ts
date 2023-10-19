export type Task = {
  id?:number
  repositoryId:number | null
  title:string
  commitHash?:string
  status?:number
  branch:string
  runCount?:number
  terminalOut?:string
  remark:string
  buildDir:string
  npmCmd:string
}
