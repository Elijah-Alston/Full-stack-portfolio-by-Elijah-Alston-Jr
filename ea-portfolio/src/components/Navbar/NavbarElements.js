
// Filename - ./components/Navbar.js


import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background-color: red  ;
background: rgba(191, 191, 191, 0.4);
	height: 85px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem calc((100vw - 1000px) / 2);
	z-index: 12;
	color: black;
	min-width: 50%;
	max-width: 75%;
	@media screen and (max-width: 1300px) {
		min-width: 50%;
	max-width: 100%;
	}

	
	
	
`;

export const NavLink = styled(Link)`
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	font-size: 1.5em;
	padding: 0 3rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: red;
	}
	@media screen and (max-width: 768px) {
		padding: 0 1rem;
	}
	

	&.hover {
	color: red;
	
	}
`;


export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
		
	align-items: left;
	margin-right: -5px;
}

@media screen and (max-width: 786px){
body{
    overflow-x: hidden;
}
    nav{

        display: flex;
    }


    .nav-wrapper{
height: 75px;


    }
    .nav-h1{
      font-size: 30px;
      
      background-color: #171e3e;
      color: white;
      border-bottom: none;
        
    }

.nav-ul{
 position: absolute;
flex-direction: column;
left: -100%;
width: 75%;
top: 70px;
transition: .7s ease-in ;
background-color: #3951bb;
	
	
`;



