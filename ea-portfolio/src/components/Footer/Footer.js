// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "black",
					textAlign: "center",
					marginTop: "10px",
					marginBottom: "35px",
					display: "fixed",
					bottom: "0px;",
					
					
				}}
			>
				Thats All Folks
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About</Heading>
						<FooterLink href="resume.pdf">
							Resume
						</FooterLink>
						<FooterLink href="#">
							Skills
						</FooterLink>
						<FooterLink href="#">
							More Info
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact</Heading>
						<FooterLink href="#">
							Contact Link
						</FooterLink>
						<FooterLink href="#">
							More Info
						</FooterLink>
						
					</Column>
					<Column>
						<Heading>Portfolio</Heading>
						<FooterLink href="#">
							Full-stack Portfolio
						</FooterLink>
						<FooterLink href="#">
							project 2
						</FooterLink>
						<FooterLink href="#">
						project 3
						</FooterLink>
						<FooterLink href="#">
						project 4
						</FooterLink>
					</Column>
					
					<Column>
						<Heading>Socials</Heading>
						<FooterLink href="https://www.linkedin.com/in/elijah-alston-jr-04a3061b9">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
									
								</span>
							</i>
						</FooterLink>
						<FooterLink href="https://www.instagram.com/_.elijah.a?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="https://twitter.com/elijah_a_jr">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<img width="50" height="50" src="https://img.icons8.com/ios/50/x.png" alt="x"/>
								</span>
							</i>
						</FooterLink>
						<FooterLink href="https://github.com/">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									<img width="48" height="48" src="https://img.icons8.com/material-rounded/96/github.png" alt="github"/>
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
