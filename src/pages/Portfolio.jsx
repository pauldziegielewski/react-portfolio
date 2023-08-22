import React from 'react';
import PortfolioPiece from '../components/PortfolioPiece'; // Adjust the import path based on your project structure

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>

      {/* Health For All Landing Page */}
      <PortfolioPiece
        title="Health For All Landing Page"
        imgSrc1="/public/images/figma.png"
        imgAlt1="Health clinic landing page"
        imgSrc2="/public/images/ixd.png"
        imgAlt2="Image of a health clinic website"
        siteURL="http://codybypaul.rf.gd/5205/"
        pieceText="Utilized CSS, HTML, and JavaScript to craft a landing page inspired by a Figma design conceptualized by fellow UX designer group members. The landing page facilitates language selection, enabling users to seamlessly adjust the interface to their preferred language. This solution aims to bridge language barriers between patients and nurses, enhancing communication and care."
        tech="CSS, HTML, JavaScript"
      />

      {/* Useless website */}
      <PortfolioPiece
        title="Joke Maker"
        imgSrc1="/public/images/useless.png"
        imgAlt1="Website with cat and dog images"
        siteURL="http://codybypaul.rf.gd/random-jokes/"
        pieceText="Presenting a dynamic and interactive website crafted with CSS, JavaScript, and HTML. This engaging platform integrates three distinct APIs: a cat image API, a dog image API, and a joke API. The essence of playfulness unfolds as the cat sets the stage with a joke, and the dog delivers the punchline. This project merges creativity with technical prowess to create an amusing online experience."
        tech="CSS, HTML, JavaScript"
      />

      {/* Quiz */}
      <PortfolioPiece
        title="Multiple Choice Quiz"
        imgSrc1="/public/images/quiz.png"
        imgAlt1="Image of a website of a quiz with 4 distractors"
        siteURL="http://codybypaul.rf.gd/PetProject/"
        pieceText="Presenting a captivating quiz featuring a medley of random topics. Crafted using CSS, HTML, and JavaScript, this interactive platform challenges users with questions accompanied by four answer choices. Upon selection, the wrong choice turns red while the correct one illuminates in green, revealing a corresponding photo. The result is a playful and engaging website that combines interactivity and visual elements to entertain and inform."
        tech="CSS, HTML, JavaScript"
      />

      {/* Mock Portfolio Website */}
      <PortfolioPiece
        title="Mock Portfolio Website"
        imgSrc1="/public/images/website.png"
        imgAlt1="Image of a website of a mock portfolio"
        pieceText="I crafted a fundamental portfolio website that leverages CSS, HTML, and JavaScript, enriched with CSS animations. These animations enhance the logo display, create dynamic hover effects, and introduce captivating animated spheres in the background."
        tech="CSS, HTML, JavaScript, Animations"
      />

      {/* Content Management System */}
      <PortfolioPiece
        title="Content Management System"
        imgSrc1="/public/images/php-cars.png"
        imgAlt1="Image of a website with car images"
        siteURL="http://codybypaul.infinityfreeapp.com/php-cms/"
        pieceText="I combined backend and frontend elements using PHP for the backend and CSS/HTML for the frontend. The project centers around cars, featuring a database of car images and user login functionality. Admin users can perform CRUD operations on images and user records. The result is a streamlined website for car enthusiasts with efficient content and user management."
        tech="PHP, CSS, HTML"
      />

      {/* Trail Botanica */}
      <PortfolioPiece
        title="Trail Botanica"
        imgSrc1="/public/images/trail-botanica.png"
        imgAlt1="Screen shot of a hiking website"
        pieceText="Embark on a journey through Ontario's captivating trails, diverse flora, and distinctive features. Created collaboratively using C# and ASP.NET on GitHub, our platform seamlessly enhances your outdoor adventures. Explore nature's beauty effortlessly with Trail Botanica."
        tech="C#, ASP.NET, CSS, HTML"
      />
    </div>
  );
}
