import React from 'react'
import './SkillCard.scss';
import skills from './../../Data/skills.json';

const SkillCard = () => {
  return (
      <>
        {
          skills.map(skill => {
            const skillsList = skill.skill;

            return  <div key={skill.id} className="col-lg-4">
                      <div className="skill-card">
                        <h3>{skill.title}</h3> 

                        <ul>
                           <li>{skillsList.list1}</li>
                           <li>{skillsList.list2}</li>
                           <li>{skillsList.list3}</li>
                           <li>{skillsList.list4}</li>
                           <li>{skillsList.list5}</li>
                        </ul>
                    </div>
                  </div>
          })
        }

      </>
  )
}

export default SkillCard