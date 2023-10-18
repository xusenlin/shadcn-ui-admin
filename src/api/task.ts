export type Task = {
  id?:string
  title:string
  commitHash:string
  status:number
  branch:string
  runCount:number
  terminalOut:string
  remark:string
  buildDir:string
  npmCmd:string
}
