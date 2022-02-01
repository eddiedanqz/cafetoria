import { map } from "jquery";
import React, { useState, useEffect } from "react";
import InfoCards from './InfoCards';
;

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [meal, setMeal] = useState('');
  const [meals, setMeals] = useState('');
  const [menu, setMenu] = useState([]);
 
  const addMeals = (e) => {
    e.preventDefault();
    if (meals == "") return;
   setSelectedMenu([...selectedMenu, {id:new Date().getSeconds(),name:meals}])
  }
  
  const createMenu = () => {
  setMeals([])
  }

  return (
    <div className="container">
       <InfoCards/>
      <div className="row mb-2">
        <div className="col-md-6 mb-2">
          {/* Button trigger modal */}
          <div className="card">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-outline-light text-dark"
                data-bs-toggle="modal"
                data-bs-target="#menuModal"
              >
                Create a menu
              </button>
            </div>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="menuModal"
            tabIndex="-1"
            aria-labelledby="menuModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border border-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroupSelect03" value={meals} onChange ={e => setMeal(e.target.value)}>
                    <option value='' disabled>Select Meal</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                  <button className="btn btn-outline-secondary" onClick={addMeals} type="button">Add</button>
                </div>
                {/**list */}
                <ul className="list-group list-group-flush text-start">
                  {
                    selectedMenu.map((meal) => (
                      <li className="list-group-item" key={meal.id}>{meal.name}</li>
                    ))
                  }
                 
                </ul>

                </div>
                <div className="modal-footer justify-content-center border border-0">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Button trigger modal */}
          <div className="card">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-outline-light text-dark"
                data-bs-toggle="modal"
                data-bs-target="#mealModal"
              >
                Add meal
              </button>
            </div>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="mealModal"
            tabIndex="-1"
            aria-labelledby="mealModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border border-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add Meal"
                    />
                  </div>
                </div>
                <div className="modal-footer justify-content-center border border-0">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-info">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="row mb-2 p-4">
        <h2 className="text-start text-info mb-3">Menu
        </h2>
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
  );
};

export default Menu;
