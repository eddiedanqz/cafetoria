import React from 'react';
import { FaIdCard,FaUtensils,FaRegCheckCircle } from "react-icons/fa";

const InfoCards = () => {
  return (
  <div className="row mb-5">
    <div className='col-md-4 mb-2'>
    <div className="card d-flex flex-row">
        <div  className="bg-primary align-self-center p-4 m-0">
          <FaIdCard className='text-white fs-1'/>
        </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-primary">26</h6>
  </div>
</div>
    </div>

    <div className='col-md-4 mb-2'>
    <div className="card d-flex flex-row">
    <div  className="bg-success align-self-center p-4 m-0">
          <FaUtensils className='text-white fs-1'/>
        </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-success">56</h6>
  </div>
</div>
    </div>

    <div className='col-md-4 mb-2'>
    <div className="card d-flex flex-row">
    <div  className="bg-dark align-self-center p-4 m-0">
          <FaRegCheckCircle className='text-white fs-1'/>
        </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-dark">200</h6>
  </div>
</div>
    </div>

  </div>
  );
};

export default InfoCards;
