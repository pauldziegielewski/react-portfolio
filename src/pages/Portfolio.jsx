
export default function Portfolio() {
    return (
       
<div className="portfolio-container">
    <h1>Portfolio</h1>

    {/* IXD figma and landing page */}
    <div className="portfolio-piece">
        <h3>Health For All Landing Page
        </h3>

        <div className="ixd">
            <img className="piece" src="/public/images/figma.png" alt="" />
            <a href="http://codybypaul.rf.gd/5205/" target="_blank">
            <img className="piece" src="/public/images/ixd.png" alt="" />
            </a>
        </div>

        <div className="piece-text">
            <p className="piece-title">Overview</p>
            <p>Utilized CSS, HTML, and JavaScript to craft a landing page inspired by a Figma design conceptualized by fellow UX designer group members. The landing page facilitates language selection, enabling users to seamlessly adjust the interface to their preferred language. This solution aims to bridge language barriers between patients and nurses, enhancing communication and care.</p>
          
            <p className="tech">Technologies</p>
            <p>CSS, HTML, JavaScript</p>
                
          
                <a href="http://codybypaul.rf.gd/5205/" target="_blank"> <ion-icon className="see-more" name="exit-outline"></ion-icon> </a>
            
        </div>

    </div>

    {/* Useless website */}
    <div className="portfolio-piece">
        <h3>Joke Maker</h3>

        <div className="">
            <a href="http://codybypaul.rf.gd/random-jokes/" target="_blank">
                <img className="piece" src="/public/images/useless.png" alt="Website with cat and dog images" />
            </a>
        </div>

        <div className="piece-text">
            <p className="piece-title">Overview</p>
            <p>Presenting a dynamic and interactive website crafted with CSS, JavaScript, and HTML. This engaging platform integrates three distinct APIs: a cat image API, a dog image API, and a joke API. The essence of playfulness unfolds as the cat sets the stage with a joke, and the dog delivers the punchline. This project merges creativity with technical prowess to create an amusing online experience.</p>
            
            <p className="tech">Technologies</p>
            <p>CSS, HTML, JavaScript</p>
            <a href="http://codybypaul.rf.gd/random-jokes/" target="_blank"><ion-icon className="see-more" name="exit-outline"></ion-icon></a>
          
        </div>
    </div>


    {/*  Quiz */}
    <div className="portfolio-piece">
        <h3>Multiple Choice Quiz</h3>

        <div>
            <a href="http://codybypaul.rf.gd/PetProject/" target="_blank">
                <img className="piece" src="/public/images/quiz.png" alt="" />
            </a>
        </div>
        
        <div className="piece-text">
            <p className="piece-title">Overview</p>
            <p>Presenting a captivating quiz featuring a medley of random topics. Crafted using CSS, HTML, and JavaScript, this interactive platform challenges users with questions accompanied by four answer choices. Upon selection, the wrong choice turns red while the correct one illuminates in green, revealing a corresponding photo. The result is a playful and engaging website that combines interactivity and visual elements to entertain and inform.</p>
            
            <p className="tech">Technologies</p>
            <p>CSS, HTML, JavaScript</p>
           
            <a href="http://codybypaul.rf.gd/PetProject/" target="_blank"><ion-icon className="see-more" name="exit-outline"></ion-icon></a>
        </div>
      
    </div>


    {/* Website */}
    <div className="portfolio-piece">
<h3>Mock Portfolio Website</h3>
        <div>
            <img className="piece" src="/public/images/website.png" alt="" />
        </div>

        <div className="piece-text">
            <p className="piece-title">Overview</p>
            <p>I crafted a fundamental portfolio website that leverages CSS, HTML, and JavaScript, enriched with CSS animations. These animations enhance the logo display, create dynamic hover effects, and introduce captivating animated spheres in the background.</p>
           
            <p className="tech">Technologies</p>
            <p>CSS, HTML, JavaScript, Animations</p>
            
          
        </div>
    </div>


    <div className="portfolio-piece">
<h3>Content Management System</h3>
        <div>
            <a href="http://codybypaul.infinityfreeapp.com/php-cms/" target="_blank">
                <img className="piece" src="/public/images/php-cars.png" alt="" />
            </a>
        </div>

        <div className="piece-text">
            <p className="piece-title">Overview</p>
            <p>I combined backend and frontend elements using PHP for the backend and CSS/HTML for the frontend. The project centers around cars, featuring a database of car images and user login functionality. Admin users can perform CRUD operations on images and user records. The result is a streamlined website for car enthusiasts with efficient content and user management.</p>
           
            <p className="tech">Technologies</p>
            <p>PHP, CSS, HTML</p>
            <a href="http://codybypaul.infinityfreeapp.com/php-cms/" target="_blank"><ion-icon className="see-more" name="exit-outline"></ion-icon></a>
           
        </div>
    </div>




    <div className="portfolio-piece">
    <h3>Trail Botanica</h3>

        <div>
                <img className="piece" src="/public/images/trail-botanica.png" alt="screen shot of a hiking website" />

        </div>

        <div className="piece-text">
            <p className="piece-title">Overview</p>
            <p>Embark on a journey through Ontario's captivating trails, diverse flora, and distinctive features. Created collaboratively using C# and ASP.NET on GitHub, our platform seamlessly enhances your outdoor adventures. Explore nature's beauty effortlessly with Trail Botanica.</p>
           
            <p className="tech">Technologies</p>
            <p>C#, ASP.NET, CSS, HTML</p>
           
           
        </div>
    </div>



</div>
    );
}