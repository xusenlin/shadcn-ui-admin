import {create} from "zustand";
import {persist} from "zustand/middleware"

export type User = {}

export interface UserType {
  user: User | null
  setUserInfo: (user: User) => void
}


export const useUserStore = create<UserType>()(
    persist((set) => ({
      user: null,
      setUserInfo: (user: User) => set(() => ({user})),
    }), {name: 'UserStore'})
)
