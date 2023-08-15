import Header from '../header/Header'
import './Layout.css'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
        <Header />
    
        <Outlet />
    </main>
  )
}

export default Layout