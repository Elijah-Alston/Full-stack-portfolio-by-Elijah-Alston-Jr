import React from "react";
import { Nav, NavLink, NavMenu,  } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                
               
                <NavLink to="/Main" activeStyle>
                        Home
                    </NavLink>

                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                  
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                   
                    <NavLink to="/portfolio" activeStyle>
                        portfolio
                    </NavLink>
                    <NavLink to="/blog" activeStyle>
                        blog
                    </NavLink>
                    
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;