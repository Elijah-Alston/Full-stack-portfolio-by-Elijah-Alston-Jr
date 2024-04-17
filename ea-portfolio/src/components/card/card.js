import React from "react";
import cardstyles from "./card.css"
import {useState} from 'react';

function Card (){

   /*const [Title , setTitle]= useState('Full-Stack Developer' );

   const Timeout =() => {

    setTitle( 'Graphic Designer');


   }
   */
  /* setTimeout((function ()) {
    setTitle("this is the first message");
  }, 5000);
  setTimeout(() => {
    setTitle("this is the second message");
  }, 10000);
*/

 /*  
setInterval(function () { setTitle( 'Graphic Designer');}, 5000);

setInterval(function () { setTitle( 'Software Engineer');}, 10000);

 */
/*
const div1 = document.querySelector("typeWriter");
div1.addEventListener("animationend" , (typing) =>{});

onanimationend = (typing) => { alert("hello");}; 
   
*/
/*
window.onload=function (test){

    function test(){
    const div1 = document.querySelector("typeWriter");
    div1.addEventListener("animationend" , (typing) =>{});
    
    onanimationend = (typing) => { alert("hello");}; 
       
    }}

    */


const aboutPic='about-pic.JPG';













    return( <div className="cardWrapper">

<div className="Card">
<h2 className="Card-h2" ></h2> 
<img src={aboutPic}/>
</div>
    </div>  );






}
export default Card;


function Name(Name){

Name='Elijah 2';
   


return Name;



}


