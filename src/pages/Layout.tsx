import { Outlet } from "react-router-dom"
import Footer from "../components/Layout/Footer"
import Navbar from "../components/Layout/Navbar"

const Layout = () => {
  return <>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </>
}

export default Layout
