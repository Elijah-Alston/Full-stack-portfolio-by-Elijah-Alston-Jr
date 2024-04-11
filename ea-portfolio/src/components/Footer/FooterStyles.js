// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
	background: grey;
	/=/ position: fixed;
	bottom: 0;
	min-width: 65%;
	max-width: 95%;
	text-align: center;
	font-size: 4vw;
	max-height: 400px;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
		font-size: 7vw;
		max-height: 100%;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
	
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(100px, fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: black;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: red;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
