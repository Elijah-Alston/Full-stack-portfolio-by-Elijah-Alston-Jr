// Filename - pages/about.js

import React from "react";
import Footer from "../components/Footer/Footer";
import Card from "../components/card/card.js";




const About = () => {
	return (
		<div className="about-body">

			<div className="aboutContainer">

			<div className="aboutWrap1">
		<img src="images/photo.png" className="about-img"></img>

			<p className="about-p">I am a Information technology student Aspiring to be a Full stack Developer.
My current concentrations are in web development t and cyber security. I am also interested in developing video games because of my interest in graphic design and my love for gaming.</p>
			
			</div>
			<div className="aboutWrap2">
			
			<ul className="about-List">
				<p>Some Hobbies of mine are:</p>
			<li>Cooking</li>
			<li>playing video games</li>
			<li>Watching Anime</li>
			<li>Thrifting</li> 
			<li>Crocheting</li>
			<li> making money</li>
			</ul>

			
		
			<p className="about-p">
			In my free time i like to:
			give back to the community either by community service or teaching step at the local community center
			Help friends and family with any issues they have.
			And learn more ways of making money </p>


			<button className="Resume-button"> RESUME</button>

			</div>



			<div className="aboutWrap3">


			<div className="ABR-wrapper">
			<div className="ABR1"></div>
			<div className="ABR2"></div>
			<div className="ABR3"></div>
			<div className="ABR4"></div>
			<div className="ABR5"></div>
			<div className="ABR6"></div>
			</div>	
			

			
			<p className="about-p">My future goals have alwasy been to become a SWE. The reason for why I want to become a SWE is because I love helping others escpecially with solving problems which I would be able to do as a SWE.</p>
			
			</div>

				</div>

			

		</div>



	);
};

export default About;
