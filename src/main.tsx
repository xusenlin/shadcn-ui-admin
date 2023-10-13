import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/layout/App.tsx'
import {Login} from '@/components/pages/login.tsx'
import '../app/globals.css'
import '../app/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<Login/>*/}
    <App />
  </React.StrictMode>,
)


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
