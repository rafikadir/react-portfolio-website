import React from 'react';
import './Skills.scss';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Education from '../../Components/Education/Education';
import SkillCard from '../../Components/SkillCard/SkillCard';
import Experience from '../../Components/Experience/Experience';

const Skills = () => {
  return (
    <section id='skills' className="skills-section pt-100 pb-70">
        <div className="container">
          <SectionTitle title="My Skills"></SectionTitle>
            <div className="row">
              <SkillCard/>
              <Education />
              <Experience />
            </div>
        </div>
    </section>
  )
}

export default Skills;