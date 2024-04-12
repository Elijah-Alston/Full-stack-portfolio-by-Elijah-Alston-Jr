import React from "react";
import { Nav, NavLink, NavMenu,  } from "./NavbarElements";
 import Logo from './logo.png';
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                
               
                <NavLink to="/Main" activeStyle>
                <img src={Logo}  className="NavLogo" />
                    </NavLink>

                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                  
                    <NavLink to="/contact" activeStyle>
                        Contact
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