import React from 'react';
import './SectionTitle.scss';

const SectionTitle = (props) => {
  return (
    <div className='section-title'>
        <h2 className='main-title'>{props.title}</h2>
    </div>
  )
}

export default SectionTitle;