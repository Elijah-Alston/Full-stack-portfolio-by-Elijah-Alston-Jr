import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                
                    
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                  
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/home" activeStyle>
                        home
                    </NavLink>
                    <NavLink to="/portfolio" activeStyle>
                        portfolio
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;