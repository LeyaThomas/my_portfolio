import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../PageHeader";
import {Animate} from "react-simple-animate";

const jobSummary = "I am a Software Engineer with a passion for web development. I have experience in building web applications using React, Node.js, and Express.js. I am a quick learner and always eager to learn new technologies. I am a team player and have experience working in a team environment. I am a self-motivated individual who is always looking for ways to improve my skills and knowledge. I am looking for a challenging role where I can utilize my skills and knowledge to contribute to the success of the organization."
const About = () => {
    return(
        <section id="about" className="about">
            <PageHeaderContent
            headerText="About Me"
            icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
              <div className="about__content__personalWrapper">
              
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform : 'translateX(-900px)'
            }}
            end={{
                transform : 'translatex(0px)'
            }}
            >
                <h3>FrontEnd Developer</h3>
                <p>{jobSummary}</p>
                </Animate>
                </div>
                <div className="about__content__servicesWrapper">Services Wrapper</div>
            </div>
        </section>
    )
}

export default About;