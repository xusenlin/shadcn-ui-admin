import {create} from "zustand";
import {persist} from "zustand/middleware"

export enum TabEnum {
  "Dashboard",
  "Repositories",
  "Task",
  "Users",
}

export interface AppType {
  activeTabIndex: TabEnum;
  setTabByIndex: (index: TabEnum) => void;
}


export const useAppStore = create<AppType>()(
    persist((set) => ({
      activeTabIndex: TabEnum.Dashboard,
      setTabByIndex: (index: TabEnum) => set(() => ({activeTabIndex: index})),
    }), {name: 'AppStore'})
)
