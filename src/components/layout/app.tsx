import React from 'react'
import {Nav} from "@/components/layout/nav.tsx"
import {Account} from "@/components/layout/account.tsx"
import {Dashboard} from "@/components/pages/dashboard.tsx";

function App() {

  return (
      <div className="main">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Nav className="mx-6"/>
            <div className="ml-auto flex items-center space-x-2 mx-6">
              <Account/>
            </div>
          </div>
        </div>
        <div className="content text-foregroun">
          <Dashboard/>
        </div>
      </div>
  )
}

export default App
