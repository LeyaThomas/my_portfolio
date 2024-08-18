import React from "react";
import PageHeaderContent from "../PageHeader";
import {BsInfoCircleFill} from 'react-icons/bs'

const Skill = () => {
    return(
        <section id="skill" className="skill">
            <PageHeaderContent
            headerText="My Skills"
            icon={<BsInfoCircleFill size={40} />}
            />
        </section>
    )
}

export default Skill;