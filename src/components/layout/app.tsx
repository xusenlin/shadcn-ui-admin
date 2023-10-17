import {Nav} from "@/components/layout/nav.tsx"
import {Account} from "@/components/layout/account.tsx"
import {Dashboard} from "@/components/pages/dashboard.tsx";
import {Index} from "@/components/pages/task";
import {Users} from "@/components/pages/users.tsx";

import { Repositories } from "@/components/pages/repositories.tsx";
import {useAppStore,TabEnum} from "@/store/app.ts";
import {BellRing} from "lucide-react";

function App() {
    const {activeTabIndex }  = useAppStore()
    return (
        <div className="main">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <Nav/>
                    <div className="ml-auto flex items-center space-x-2 mx-6">
                        <div className="relative">
                            <BellRing className="mr-2 h-4 w-4" />
                            <div className="right-1 -top-1 w-1 h-1 rounded absolute animate-ping bg-red-600"></div>
                        </div>

                        <Account/>
                    </div>
                </div>
            </div>
            <div className="content text-foregroun">
                { activeTabIndex === TabEnum.Dashboard && <Dashboard/> }
                { activeTabIndex === TabEnum.Repositories && <Repositories/> }
                { activeTabIndex === TabEnum.Task && <Index/> }
                { activeTabIndex === TabEnum.Users && <Users/> }
            </div>
        </div>
    )
}

export default App
