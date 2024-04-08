
// Filename - App.js
 
import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Main from "./pages/main";
import Blog from "./pages/blog";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
            
                <Route exact path="/" element={<Home />} />
                <Route exact path="/main" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                    />
                
                <Route path="/blog" element={<Blog />} />
                <Route
                    path="/Portfolio"
                    element={<Portfolio />}
                />
               

            </Routes>
        </Router>
    );
}
 
export default App;