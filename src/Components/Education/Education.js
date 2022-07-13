import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import './Education.scss';


const educationInfo = 
[{
  "name": "Modon Mohan College",
  "title": "BBA in Accounting",
  "year": "2018 - present",
  "description": "I am studying in Accounting at Madan Mohan College."
},
{
  "name": "BGPSC, Sylhet",
  "title": "Accounting",
  "year": "2016 - 2018",
  "description": "I have studied Business Studies at Border guard Public School and College.I have passed most enjoyable time in college."
}];

const Education = () => {
  return (
      <div className="col-lg-6">
        <div className="education-area">
            <h2>Education</h2>
           { 
              educationInfo.map(singleEducation => { 
                return <div className="education-card">
                      <h4 className="institution">{singleEducation.name}</h4>
                      <h5 className="title">{singleEducation.title} | {singleEducation.year}</h5>
                      <p className="description">{singleEducation.description}</p>
                  </div>
              })
            }
        </div>
      </div>
  )
}

export default Education;