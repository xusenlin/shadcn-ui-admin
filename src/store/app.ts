import {create} from "zustand";
import {persist} from "zustand/middleware"

export enum TabEnum {
  "Dashboard",
  "Repositories",
  "Task",
  "Users",
}
export type MareWood = {
  version:string
  nodeVersion:string
  npmVersion:string
  yarnVersion:string
  gitVersion:string
}

export interface AppType {
  activeTabIndex: TabEnum
  info:MareWood
  showAbout:boolean

  setTabByIndex: (index: TabEnum) => void
  setShowAbout:(show: boolean)=>void
  setAppInfo:(v:MareWood)=>void
}


export const useAppStore = create<AppType>()(
    persist((set) => ({
      activeTabIndex: TabEnum.Dashboard,
      showAbout:false,
      info:{
        version:"",
        nodeVersion:"",
        npmVersion:"",
        yarnVersion:"",
        gitVersion:"",
      },
      setTabByIndex: (index: TabEnum) => set(() => ({activeTabIndex: index})),
      setShowAbout: (show: boolean) => set(() => ({showAbout: show})),
      setAppInfo: (v: MareWood) => set(() => ({info: v})),
    }), {name: 'AppStore'})
)
