import {Nav} from "@/components/layout/nav.tsx"
import {Account} from "@/components/layout/account.tsx"
import {Dashboard} from "@/components/pages/dashboard.tsx";
import {Index} from "@/components/pages/task";
import {Users} from "@/components/pages/users.tsx";
import {Notifications} from "./notifications.tsx"
import {Repositories} from "@/components/pages/repositories.tsx";

import {useAppStore, TabEnum} from "@/store/app.ts";


function Main() {
  const {activeTabIndex} = useAppStore()

  return (
      <div className="main">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Nav/>
            <div className="ml-auto flex items-center space-x-1 mx-6">
              <Notifications/>
              <Account/>
            </div>
          </div>
        </div>
        <div className="content text-foregroun">
          {activeTabIndex === TabEnum.Dashboard && <Dashboard/>}
          {activeTabIndex === TabEnum.Repositories && <Repositories/>}
          {activeTabIndex === TabEnum.Task && <Index/>}
          {activeTabIndex === TabEnum.Users && <Users/>}
        </div>
      </div>
  )
}

export default Main
