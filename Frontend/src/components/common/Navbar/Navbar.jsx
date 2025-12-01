import { NavLink } from "react-router-dom"
import { navItems } from "../../../Utils/navbardata"
import logo from "/logo.png"
import Button from "../../Button"
import Mobilenav from "./Mobilenav"
export default function Navbar() {
  return (
    <header className="bg-primary text-light header grid  grid-cols-2 lg:grid-cols-3 py-2 font-['Poppins']   sticky top-0 z-50">
    {/*1 Logo of Dermalife------------------- */}
    <div className=" flex  justify-start items-center gap-2">
        <img src={logo} alt="logo" loading="lazy" className="h-15 w-15 rounded-full"></img>
        <h1 className="text-[1.2em] font-medium">Dermalife</h1>
    </div>
    {/*2 Navbar Elements--------------------- */}
    <nav className="hidden lg:flex items-center justify-center text-[1.1em] ">
    <ul className="flex gap-11" >
        {
            navItems.map((item,ind)=>
                <NavLink key={ind} to={item.path}><li>{item.name}</li></NavLink>
            )
        }
    </ul>
    </nav>
    {/*3 Buttons part---------------------------------- */}
    <div className="hidden lg:flex items-center justify-end">
      <Button
                   type="call"
                   text="Contact Us"
                   bgcolor="secondary"
                   textcol="light"
                   hover="primary"
                   link="9776636330"
                 />
    </div>


    <Mobilenav></Mobilenav>
  

   </header>
  )
}
