import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import Decisions from "../pages/Decisions";
import AboutUs from "../pages/About";
import NewsPage from "../pages/NewsPage";
import { newsImgInfo, newsInfo } from "../data"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} errorElement={<PageNotFound />} >
                <Route index element={<HomePage />} />
                <Route path="news" element={<NewsPage newsInfo={newsImgInfo} />} />
                <Route path="decisions" element={<Decisions newsInfo={newsInfo} />} />
                <Route path="events" element={<AboutUs />} />
                {/* <Route path="services" element={<Services />} /> */}
                <Route path="about" element={<AboutUs />} />
                <Route path="complaints" element={<AboutUs />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>
    )
);

export default router