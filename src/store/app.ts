import { create } from "zustand";

export enum TabEnum {
    "Dashboard",
    "Repositories",
    "Task",
    "Users",
}

export interface AppType {
  activeTabIndex: TabEnum;
  setTabByIndex: (index:TabEnum) => void;
}


export const useAppStore = create<AppType>((set) => ({
    activeTabIndex: TabEnum.Task,
    setTabByIndex: (index:TabEnum) => set(() => ({ activeTabIndex:index  })),
}))
