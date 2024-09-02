import React from "react";
import { useState } from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../PageHeader";
import img1 from "../../images/proj_mgmnt.avif";
import img2 from "../../images/web_boot.jpg";
import img3 from "../../images/mozilla.png";
import img4 from "../../images/ts.png";
import './styles.scss';

const projectsData =[
    {
        id:1,
        name: "Project Management App",
        image: img1,
        link : 'https://github.com/LeyaThomas/pma'
    },
    {
        id:2,
        name: "Web Bootcamp projects",
        image: img2,
        link : 'https://github.com/LeyaThomas/Web_Development_Tasks'
    },
    {
        id:3,
        name: "Mozilla Splash",
        image: img3,
        link : 'https://github.com/LeyaThomas/mozillasplash'
    },
    {
        id:4,
        name: "TypeScript",
        image: img4,
        link : 'https://github.com/LeyaThomas/TS_studyjam_tasks'
    }
]

 const filterData = [
    {
        filterId : 1,
        label : "All"
    },
    {
        filterId : 2,
        label : "Development"
    },
    {
        filterId : 3,
        label : "Design"
    }
]

const Project = () => {

    const [filteredValue, setFilteredValue] = useState(1)
    const  [hoveredValue, setHoveredValue] = useState(null)

    function handleFilter(currentId){
        setFilteredValue(currentId)
    };

    function handleHover(index){
        setHoveredValue(index)
    }

    console.log("=======================================");
    console.log(filteredValue);
    console.log("=======================================");

    const filteredItems = filteredValue === 1 ? projectsData : projectsData.filter(item => item.id === filteredValue)

    console.log(filteredItems);
       
    return(
        <section id="project" className="project">
            <PageHeaderContent
            headerText="My Projects"
            icon={<BsInfoCircleFill size={40} />}
            />
            <div className="project__content">
                <ul className="project__content__filter">
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>

                                {
                                    item.label
                                }
                            </li>
                        ))
                    }

                </ul>
                <div className="project__content__cards">
                    {
                        projectsData.map((item,index) => (
                            <div key={`cardItems${item.name.trim()}`} className="project__content__cards__item" onMouseEnter={() =>handleHover(index)} onMouseLeave={() =>handleHover(null)}>
                               <div className="project__content__cards__item__img-wrapper">
                                <a>
                                    <img src={item.image} alt={item.name} />
                                </a>
                               </div>
                               <div className="overlay">
                                 {
                                   index === hoveredValue && (
                                   <div>
                                   <p>{item.name}</p>
                                   <button>Visit</button>
                                   </div>
                                   )
                                 }
                               
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Project;