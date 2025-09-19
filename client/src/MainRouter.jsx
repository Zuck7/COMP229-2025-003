import { Routes, Route } from "react-router-dom";
import Projects from "./components/projects";
import About from "./components/about";
import Services from "./components/Services";
import Home from "./components/home";
import NotFound from "./components/NotFound";
import Contact from "./components/contact";
import Layout from "./components/Layout";
 

function MainRouter(){
    return(
        <div>
            <Layout/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/NotFound" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default MainRouter;