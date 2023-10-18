import {Loader2, TerminalSquare} from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {forwardRef, useImperativeHandle, useState} from "react";
import {Task} from "@/api/task.ts";
const out =  `来自 http://xxxxxx:3000/FrontEndDev/customer_service
            c573a01..990020d  main       -> origin/main
            更新 c573a01..990020d
            Fast-forward
            .env.pre  | 2 +-
            .env.test | 2 +-
            2 files changed, 2 insertions(+), 2 deletions(-)
            已经位于 'main'
            您的分支与上游分支 'origin/main' 一致。
            Already up-to-date.
            yarn install v1.22.18
            [1/4] Resolving packages...
            success Already up-to-date.
            Done in 0.18s.

            > vite-project@0.0.0 build:pre
            > vite build --mode=pre

            vite v3.1.4 building for pre...
            transforming...
            ✓ 1466 modules transformed.
            rendering chunks...
            dist/assets/bg.6d8e942e.jpg           362.60 KiB
            dist/assets/logo.2e57dd74.png         4.44 KiB
            dist/index.html                       0.42 KiB
            dist/assets/Login.6a165fb4.js         5.23 KiB / gzip: 2.37 KiB
            dist/assets/404.365830bc.js           0.43 KiB / gzip: 0.33 KiB
            dist/assets/MainLayout.4f4d561d.js    5.11 KiB / gzip: 2.19 KiB
            dist/assets/MainLayout.177430b7.css   0.84 KiB / gzip: 0.32 KiB
            dist/assets/Login.bb61726a.css        0.90 KiB / gzip: 0.38 KiB
            dist/assets/Index.44f072df.css        2.85 KiB / gzip: 0.59 KiB
            dist/assets/Index.6e4da4d1.js         33.38 KiB / gzip: 9.29 KiB
            dist/assets/lodash.414eeab4.js        71.04 KiB / gzip: 25.73 KiB
            dist/assets/index.28ef995f.css        315.87 KiB / gzip: 43.44 KiB
            dist/assets/index.66ec3b2a.js         1082.69 KiB / gzip: 348.60 KiB

            (!) Some chunks are larger than 500 KiB after minification. Consider:
            - Using dynamic import() to code-split the application
            - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/guide/en/#outputmanualchunks
            - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
            MareWood:Compiled successfully！！ 👏👏👏👏`


export type TerminalOutType = {
  Show: (task:Task) => void;
}

export const TerminalOut = forwardRef<TerminalOutType|undefined>((props, ref)=>{
  const [open,setOpen] = useState(false)
  const [task,setTask] = useState<Task>(null)

  const Show = (task:Task) => {
    setOpen(true)
    setTask(task)
  }
  useImperativeHandle(ref, ()=>({Show}))

  return task && (
      <Sheet open={open} onOpenChange={v=>{setOpen(v)}}>
        <SheetContent className="terminal-out sm:max-w-[40%]">
          <SheetHeader>
            <SheetTitle>TaskID:{task.id}</SheetTitle>
            <SheetDescription className="flex items-center space-x-6">
              <span>CommitHash:{task.commitHash}</span>
              <span className="flex items-center space-x-2">
                <span>Status:</span>
                <Loader2 size={16} className="animate-spin"/>
              </span>
            </SheetDescription>
          </SheetHeader>
          <div className="out-content">
            {out}
          </div>
        </SheetContent>
      </Sheet>
  )
})
