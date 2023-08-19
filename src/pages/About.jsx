import React from 'react';

export default function About() {
    return (
        <main className="main">
            <div className="bio-container">
                <h1>About</h1>
                <p className="bio">
                    I started my journey as a massage therapist and later transitioned into the world of web development.
                    My path took an exciting turn during the pandemic when I discovered a passion for coding.
                    Online coding classes ignited this passion, eventually leading me to enroll in Humber College's web development program.
                </p>
                <p className="bio">
                    My focus lies in the realm of front-end magic, where I specialize in crafting using CSS, HTML, and JavaScript.
                    I'm particularly drawn to creating animations, user-friendly interfaces, and ensuring web accessibility.
                    The immediate visual impact of code on the screen, akin to solving a puzzle, continues to fuel my fascination.
                </p>
                <p className="bio">
                    I invite you to explore my world of code, creativity, and perpetual learning.
                    Let's collaborate in building digital wonders together!
                </p>
            </div>

            <div className="tech-container">
                <img className="tech-img" src="/images2/css.png" alt="CSS" />
                <img className="tech-img" src="/images2/js.png" alt="JavaScript" />
                <img className="tech-img" src="/images/react.png" alt="React" />
                <img className="tech-img" src="/images2/bootstrap.png" alt="Bootstrap" />
                <img className="tech-img" src="/images2/node.png" alt="Node.js" />
                <img className="tech-img" src="/images2/sql.png" alt="SQL" />
            </div>
        </main>
    );
}
