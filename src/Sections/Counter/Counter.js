import React from 'react';
import './Counter.scss';
import Count from '../../Components/Count/Count';

const Counter = () => {
  return (
    <section className='counter-section'>
        <div className='container'>
            <div className='row'>
                <Count />
            </div>
        </div>
    </section>
  )
}
export default Counter;