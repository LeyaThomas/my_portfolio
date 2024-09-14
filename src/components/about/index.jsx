import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../PageHeader";
import { Animate } from "react-simple-animate";
import './styles.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const jobSummary = `Hello! I’m Leya Thomas, a passionate and dedicated Computer Science and Engineering student at the College of Engineering Chengannur. 
As a full-stack developer, I have honed my skills in HTML, React, Django, CSS, and JavaScript, and I'm constantly striving to learn more in this ever-evolving field.<br /><br />
My journey into the world of technology was driven by a fascination with how software can solve real-world problems and improve people's lives. Over the years, I’ve developed a strong foundation in full-stack development, working on various projects that showcase my ability to bring ideas to life.<br /><br />
I pride myself on being a team player with excellent communication skills, which have allowed me to collaborate effectively with peers on complex projects. My goal is to become a software engineer, where I can continue to grow, innovate, and contribute to impactful projects.`;

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <h3>FrontEnd Developer</h3>
                    <p dangerouslySetInnerHTML={{ __html: jobSummary }}></p>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaDev color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <DiAndroid color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <FaDatabase color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                        <div>
                            <DiApple color="var(--yellow-theme-main-color)" size={60} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
