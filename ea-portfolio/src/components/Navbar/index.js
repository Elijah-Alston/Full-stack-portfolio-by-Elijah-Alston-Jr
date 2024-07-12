import React from "react";
import {Link} from "react-router-dom"
import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
            <nav>
                <Link to="Main" className="nav-home"><img src="logo.png" className="NAV-logo"></img></Link>
<ul className="Nav-ul">  

<li> <NavLink to="about">About</NavLink></li>

<li ><NavLink to="portfolio">Portfolio</NavLink></li>

<li ><NavLink to="contact">Contact</NavLink></li>

<li > <NavLink to="blog">Blog</NavLink></li>



</ul>




            </nav>
    );
};
 
export default Navbar;






/*NavMenu>
                
               
<Link to="/Main" activeStyle>
<img src={Logo}  className="NavLogo" />
    </Link>

    <NavLink to="/about" activeStyle>
        About
    </NavLink>
  
    <NavLink to="/contact" activeStyle>
        Contact
    </NavLink>
   
    <NavLink to="/portfolio" activeStyle>
        Portfolio
    </NavLink>
    <NavLink to="/blog" activeStyle>
        Blog
    </NavLink>
    
</NavMenu>
*/