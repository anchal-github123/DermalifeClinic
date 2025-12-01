import Navbar from "../components/common/Navbar/Navbar"
import Footer from "../components/common/Footer/Footer"
import { Outlet } from "react-router-dom"
export default function MainLayout() {
  return (
    <div>

    <Navbar/>
    <div className="max-w-7xl m-auto p-4">
    <Outlet/>
    </div>
    <Footer></Footer>
      
    </div>
  )
}
