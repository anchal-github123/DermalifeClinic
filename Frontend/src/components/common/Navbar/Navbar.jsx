import { NavLink } from "react-router-dom"
import { navItems } from "../../../Utils/navbardata"
import logo from "/logo.webp"
import Button from "../../Button"
import Mobilenav from "./Mobilenav"
export default function Navbar() {
  return (
    <header className="bg-primary text-light header flex justify-between items-center py-2 font-['Poppins'] sticky top-0 z-50 ">
    {/*1 Logo of Dermalife------------------- */}
    <div className=" flex  justify-start items-center gap-2">
        <img src={logo} alt="logo" loading="lazy" className="h-15 w-15 rounded-b-full"></img>
        <div className="flex flex-col">
        <h1 className="text-[1.2em] font-medium">Dermalife</h1>
        <h2 className="text-[0.7em] md:text-[0.8em]"> laser and aesthetic clinic</h2>
        </div> 
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
                 /></div>
<Mobilenav></Mobilenav>
  </header>
  )
}
