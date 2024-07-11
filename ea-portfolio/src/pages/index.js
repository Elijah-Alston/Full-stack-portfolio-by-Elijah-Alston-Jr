import React from "react";
 import Footer from "../components/Footer/Footer";
import IndexBody from "./styles/indexstyles";
import './styles/index.css'
import Hero from "../components/hero.js"








const Home = () => {
    return (


        
        

       
            
            <IndexBody>
<div className="index-body">

        <div className="main-wrapper">

   <div classname="top-wrapper">
            <h1 className="index-h1"> Hi,</h1>
            <h2 className="index-h2"> My Name Is Elijah </h2>
            </div> 

                <div className="typeWriter">
                <p className="index-p"> A Full-Stack Web/ Mobile Developer & </p>
                <p className="index-p , index-pA" id="PAT"> Graphic Designer</p>
                 </div>


                 </div>
            
                 <Hero/>
           
                 <div className="hero-wrapper">
            

            <p className="hero-p">Greetings and humble salutations. I am Elijah, a Senior Computer Information Technology scholar at FAMU. My current concentrations are in web development and cyber security, and my passions for graphic design and gaming mean that I also have a strong interest in video game development. That said, I am currently on my way to becoming a full-stack SWE and Mobile/App developer. What I am most passionate about is helping others and giving. Once I become an SWE, I plan to give back in any way I can to help others reach their goals. So, join me on this journey as I move closer to my goal every day.</p>

            <div className="hero-socials">
            <a></a>
            </div>
        </div>
           
               
           

            
            


            
           




                 </div>
            </IndexBody>

            
       


    );
};
 
export default Home;

