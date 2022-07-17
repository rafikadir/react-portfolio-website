import React from 'react';
import './Count.scss';


const counterList = [
    {
        "num": "20+",
        "name": "Frontend Project",
    },
    {
        "num": "5+",
        "name": "Fullstack End Project",
    },
    {
        "num": "7+",
        "name": "React Project",
    },
    {
        "num": "8+",
        "name": "JavaScript Project",
    }
]

const Count = () => {
  return (
    <>
        {
            counterList.map( singleCounter =>{
                return <div className="col-lg-3">
                        <div className="counter">
                            <h2>{singleCounter.num}</h2>
                            <p>{singleCounter.name}</p>
                        </div>
                    </div>
            })
        }
    </>
  )
}

export default Count;