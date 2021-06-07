
import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

const ListHandle = ({ id, image, title, name, hashtag}) => {
  
  return (
    <div className="col-md-3 mfp-iframe-holder ">
      
      <div className="portfolio-item">
          <img src="https://image.fmkorea.com/files/attach/new/20201123/2978469841/3198112949/3217831361/31b0611056044e5608778a0e080ce96a.jpeg" alt="" />
          <div className="portfolio-info gradient-bg">
            <div className="centrize">
              <div className="v-center white-smoke">
                <h3>{title}</h3>
                <h4>{name}</h4>
                <p>{hashtag}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}


export default ListHandle;