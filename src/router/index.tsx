import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import Decisions from "../pages/Decisions";
import About from "../pages/About";
import Activeties from "../pages/Activeties";
import NewsPage from "../pages/NewsPage";
import { newsImgInfo,newsInfo } from "../data"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />} errorElement={<PageNotFound />} >
                <Route index element={<HomePage />} />
                <Route path="about" element={<About />} />
                <Route path="activeties" element={<Activeties />} />
                <Route path="news" element={<NewsPage newsInfo={newsImgInfo}/>} />
                <Route path="decisions" element={<Decisions newsInfo={newsInfo} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>
    )
);

export default router