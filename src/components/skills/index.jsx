import React from "react";
import PageHeaderContent from "../PageHeader";
import {BsInfoCircleFill} from 'react-icons/bs'
import {SiPython,SiC,SiBootstrap,SiJavascript,SiCss3,SiHtml5,SiReact,SiDjango} from 'react-icons/si';
import { FaFigma,FaMarkdown,FaGitAlt } from "react-icons/fa";
import './styles.scss';

const Skill = () => {
    return(
        <section id="skill" className="skill">
            <PageHeaderContent
            headerText="My Skills"
            icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills">
                <div className="skills__language">
                    <h3>Programming Languages</h3>
                    <div className="skills__language__icons">
                        <div className="icon-box1"><SiPython size={30} /><h4 className="icon-text1"> Python </h4></div>
                        <div className="icon-box2"><SiC size={30} /><h4 className="icon-text2">C </h4></div>
                    </div>
                </div>
                <div className="skills__web">
                    <h3>Web Development</h3>
                    <div className="skills__web__icons">
                        <div className="icon-box3"><SiHtml5 size={30} /><h4 className="icon-text3">HTML</h4></div>
                        <div className="icon-box4"><SiCss3 size={30} /><h4 className="icon-text4">CSS</h4></div>
                        <div className="icon-box5"><SiJavascript size={30} /><h4 className="icon-text5">JavaScript</h4></div>
                        <div className="icon-box6"><SiBootstrap size={30} /><h4 className="icon-text6">BootStrap</h4></div>
                        <div className="icon-box7"><SiReact size={30} /><h4 className="icon-text7">React</h4></div>
                        <div className="icon-box8"><SiDjango size={30} /><h4 className="icon-text8">Django</h4></div>
                    </div>
                    </div>

                    <div className="skills__design">
                        <h3>Design & Prototyping</h3>
                        <div className="skills__design__icons">
                            <div className="icon-box9"><FaFigma size={30} /><h4 className="icon-text9">Figma</h4></div>
                            <div className="icon-box10"><FaMarkdown size={30} /><h4 className="icon-text10">Markdown</h4></div>
                        </div>
                    </div>

                    <div className="skills__version">
                        <h3>Version Control</h3>
                        <div className="skills__version__icons">
                            <div className="icon-box11"><FaGitAlt size={30} /><h4 className="icon-text11">Git</h4></div>
                    </div>

                    </div>
                
            </div>

        </section>
    )
}

export default Skill;