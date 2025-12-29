import { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom'

// Navbar Items offering
type NavbarItemType = "Home" | "Cart" | "Profile" 
const NavbarItems:NavbarItemType[] = ["Home","Cart","Profile"];

const Header = () => {
  const navigate = useNavigate();
  const [activeNavbar, setActiveNavbar] = useState<NavbarItemType>(NavbarItems[0]); 


  // for changing the color of active navbar
  const activeNavbarHandler = (activeNavbarItem: NavbarItemType) =>{
    console.log(activeNavbarItem)
    setActiveNavbar(activeNavbarItem);
  }

  return (
    <div>
      <div className="h-20 bg-gray-50 shadow-blue-300 flex justify-between border-b-1">
        {/* ======================== Logo =========================== */}
        <div className="text-black font-semibold my-auto ml-10 text-4xl cursor-pointer"
        onClick={()=> navigate("/")}
        >
          Quick-Mart
        </div>
        {/* =======================Navbar Items ===================== */}
        <div className="text-black my-auto mr-10">
          <ul className="flex justify-center items-center gap-10 text-3xl">

              {
                NavbarItems.map((navbarItem:NavbarItemType) =>{
                  return (
                    <li key={navbarItem}
                    className={`${activeNavbar === navbarItem ? "underline text-blue-400": "text-black"} `}
                    onClick={()=> activeNavbarHandler(navbarItem)}>
                      <NavLink to={navbarItem === "Home" ? "/" : `/${navbarItem.toLowerCase()}`}>
                      {navbarItem}
                      </NavLink>
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
