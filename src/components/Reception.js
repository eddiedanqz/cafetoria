import React,{useState} from 'react';

const Reception = () => {
  const [data, setData] = useState(
    {id:'#'+new Date().getSeconds,employee_id:226+new Date().getMilliseconds(),fullname:'John Doe',
    department:'Human Respource',tel:425555}
  );

  const {employee_id,fullname,department,tel} = data;

  return (
  <div className='container'>
       {/* Search */}
       <div className='row mb-5'>
       <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Employee"
              aria-describedby="button-addon2"
              value=''
              onChange={e => e}
            />
            <button
              className="btn btn-outline-info"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>

        {/**Rsults */}
        <div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-start border-0">
            <div className="ms-2 me-auto">
              <div className="fw-bold text-start">ID</div>
              {employee_id}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0">
            <div className="ms-2 me-auto">
              <div className="fw-bold text-start">NAME</div>
              {fullname}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0">
            <div className="ms-2 me-auto">
              <div className="fw-bold text-start">DEPARTMENT</div>
              {department}
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start border-0">
            <div className="ms-2 me-auto">
              <div className="fw-bold text-start">PHONE NO.</div>
             {tel}
            </div>
          </li>
        </ul>
        </div>
        </div>

        <div className="col-md-1"></div>
       {/* Menu */}
        <div className="col-md-5">
        <h2 className="text-info mb-3">Menu
        </h2>
        <div className="col-md-4 mb-3">
          <div className="card card-width border-0 border-start border-info">
            <div className="card-body text-start">
              <h5 className="card-title">Menu title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-width border-0 border-start border-info">
            <div className="card-body text-start">
              <h5 className="card-title">Menu title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        </div>
       </div>

       <div className="row mb-2 p-4">
    

      </div>
  </div>
  );
};

export default Reception;
