import React from 'react';
import './Tools.scss';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import ToolsCard from '../../Components/ToolsCard/ToolsCard';

const Tools = () => {
  return (
    <section id='tools' className="tools-section pt-100 pb-70">
        <div className="container">
          <SectionTitle title="Tools & Technology"></SectionTitle>
            <div className="row">
                <ToolsCard/>
            </div>
        </div>
    </section>
  )
}

export default Tools;