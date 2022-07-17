import React from 'react';
import './ToolsCard.scss';
import LogosImg from './../../Data/ToolsImg';


const ToolsCard = () => {
  return (
    <>
       
          {
            LogosImg.map(logo => {
                return <div className="col-lg-2">
                          <div className="tools-card">
                            <div className="tools-img">
                              <img src={logo.img} alt={logo} />
                            </div>
                            <p>{logo.name}</p>
                        </div>
                    </div>
            })
          }
    </>
  )
}

export default ToolsCard;