import React from 'react';
import './SectionTitle.scss';

const SectionTitle = (props) => {
  return (
    <div className='section-title'>
        <h2 className='main-title'>{props.title1}{props.title2}</h2>
    </div>
  )
}

export default SectionTitle;