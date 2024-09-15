import { Button } from "@material-tailwind/react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navLink } from "../../data"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-[#112D4F] py-3 text-gray-400">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <h3 className="text-2xl text-white">بلدية ضاحية الأسد</h3>
                </Link>
                <div style={isOpen ? { backgroundColor: "white", position: "fixed", zIndex: 4, top: 0, left: 0, width: "100%", height: "100vh", flexDirection: "column", display: "flex" } : {}} className="hidden md:flex items-center justify-center gap-4 text-lg">
                    {navLink.map((item, i) => <NavLink key={i} onClick={() => setIsOpen(false)} to={item.link}>{item.text}</NavLink>)}
                </div>
                <Button className="md:hidden bg-transparent p-0 text-xl" onClick={() => setIsOpen(true)}><i className="fa fa-solid fa-bars"></i></Button>
            </div>
        </nav>
    )
}

export default Navbar
