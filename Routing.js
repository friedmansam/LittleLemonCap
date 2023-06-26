import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function Routing (){
    return (
        <Routes>
            <Route path = "/home" element = {<Home />} />
            <Route path = "/about" element = {<About />} />

        </Routes>
    )
}
export default Routing;