import React from 'react';
import homeimage from './home.jpg';
import './Homepage.css';

const Homepage = () => {
   return (
      <div className="Home-page">
         <div className="intro-content">
            <h1 className="title">Hi</h1>
            <h2>Welcome to </h2>
            <h3 >MySchool</h3>
            <p>The HTML tag is used to embed an image in a web page.Images are not technically inserted into a web page; images are linked to web
               pages. The tag creates a holding pace for the referenced image.
               The tag is empty, it contains attributes only, and does not have a closing tag.
               The HTML tag is used to embed an image in a web page.Images are not technically inserted into a web page; images are linked to web
               pages. The tag creates a holding space for the referenced image. The tag is empty, it contains attributes only, and does not have a closing tag.
            </p>
            <div className="signup-buttons">
               <a href=""> Signup</a>
            </div>
         </div>
         <div className="home-content">
            <div className="content-image">
               <img src={homeimage} alt="homeimage" />
            </div>
         </div>
      </div >

   );
};

export default Homepage;
