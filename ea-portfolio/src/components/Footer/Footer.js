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
					
					
				}}
			>
				Thats All Folks
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About</Heading>
						<FooterLink href="#">
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
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									LinkedIn
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Git HuB
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
