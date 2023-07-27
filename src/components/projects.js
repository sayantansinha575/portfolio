import React from 'react';

const data = {
    img: '../images/image1.jpg',
    img1: '../images/admin.jpg',
};


const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-item">
                <h3 className="project-title">E-commerce Site</h3>
                <img src={data.img} alt="Project 1" className="project-image" />
                <p className="project-description">
                    Description of Project 1: Multi vendor site. create with mvc framework codigniter4.
                </p>
                <a href="https://github.com/sayantansinha575" className="project-link">View Project</a>
            </div>
            <div className="project-item">
                <h3 className="project-title">Admin Panel</h3>
                <img src={data.img1} alt="Project 2" className="project-image" />
                <p className="project-description">
                    Description of project : e-commerce admin site with cmc. create with codeigniter4.
                </p>
                <a href="https://github.com/sayantansinha575" className="project-link">View Project</a>
            </div>
        </section>
    );
};

export default Projects;
