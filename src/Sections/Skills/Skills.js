import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SkillCard from '../../Components/SkillCard/SkillCard';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="skills-section pt-100 pb-70">
        <div className="container">
          <SectionTitle title1="My " title2="Skills"></SectionTitle>

          <div className="row">
            <SkillCard />
          </div>
        </div>
    </section>
  )
}

export default Skills;