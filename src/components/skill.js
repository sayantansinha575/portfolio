import React, { useRef } from 'react';
const data = {
    php: '../images/php.jpg',
    jquery: '../images/jquery.jpg',
    mysql: '../images/mysql.jpg',
    ci4: '../images/c.jpg',
    html: '../images/html.jpg',
    css: '../images/css.jpg',
    js: '../images/js.jpg',

};
const Skills = () => {
    const skillsRef = useRef(null);

    const handleScrollRight = () => {
        skillsRef.current.scrollLeft += skillsRef.current.offsetWidth;
    };

    const handleScrollLeft = () => {
        skillsRef.current.scrollLeft -= skillsRef.current.offsetWidth;
    };

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skill-container" ref={skillsRef}>
                {/* Replace this with your skill items */}
                <div className="skill-item"><img className='images' src={data.php} alt='no'></img></div>
                <div className="skill-item"><img className='images' src={data.jquery} alt='no'></img></div>
                <div className="skill-item"><img className='images' src={data.mysql} alt='no'></img></div>
                <div className="skill-item"><img className='images' src={data.ci4} alt='no'></img></div>
                <div className="skill-item"><img className='images' src={data.php} alt='no'></img></div>
                {/* Add more skill items as needed */}
            </div>
            <div className="button-container">
                <button className="arrow-button" onClick={handleScrollLeft}>←</button>
                <button className="arrow-button" onClick={handleScrollRight}>→</button>
            </div>
        </section>
    );
};

export default Skills;
