import React from 'react'
import './Experience.scss';


const experienceInfo = 
[{
  "name": "Salah Software Solution",
  "title": "Front End Developer",
  "year": "2020 - 2020",
  "description": "I worked as intern in Salah Software as a Front End Web Developer."
},
{
  "name": "Salah Software Solution",
  "title": "Front End Developer -Intern",
  "year": "2019 - 2020",
  "description":
    "I worked as a Intern Front End Web Developer in Salah Software. Developed UX/UI products into Code, Learned SCSS, Learned Team Work"
}];

const Experience = () => {
  return (
      <div className="col-lg-6">
        <div className="experience-area">  
            <h2>Experience</h2>
           { 
            experienceInfo.map(singleExperience => { 
              return <div className="experience-card">
                    <h4 className="institution">{singleExperience.name}</h4>
                    <h5 className="title">{singleExperience.title} | {singleExperience.year}</h5>
                    <p className="description">{singleExperience.description}</p>
                </div>
            })
            }
        </div>
      </div>
  )
}

export default Experience;