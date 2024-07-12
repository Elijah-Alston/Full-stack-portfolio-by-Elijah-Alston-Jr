import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
            <nav>
                <Link to="Main" className="nav-home"><img src="logo.png" className="NAV-logo"></img></Link>
<ul className="Nav-ul">  

<li className="Nav-li"> <Link to="about">About</Link></li>

<li className="Nav-li"><Link to="portfolio">Portfolio</Link></li>

<li className="Nav-li"><Link to="contact">Contact</Link></li>

<li className="Nav-li"> <Link to="blog">Blog</Link></li>



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