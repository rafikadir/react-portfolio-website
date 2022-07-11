import React from 'react'
import './SkillCard.scss';
import skills from './../../Data/skills.json';

const SkillCard = () => {

  return (
      <>
        {
          skills.map(skill => {
            return  <div className="col-lg-4">
                      <div className="skill-card">
                        <h3>{skill.title}</h3>     
                        <ul>
                          {
                            skill.map (list => {
                              return <li key={list}></li>
                            })
                          }
                        </ul>     
                    </div>
                  </div>
          })
        }

      </>
  )
}

export default SkillCard