import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import Complaints from "../pages/Complaints";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Achievements from "../pages/Achievements";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} errorElement={<PageNotFound />} >
                <Route index element={<HomePage />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="complaints" element={<Complaints />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>
    )
);

export default router