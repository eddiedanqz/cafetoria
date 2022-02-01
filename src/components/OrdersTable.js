import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const OrdersTable = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [orders, setOrders] = useState([
    {
      order_id: "#" + 6556456416,
      order_meal: "waakye",
      employee_name: "John Doe",
      employee_id: 1,
      employee_department: "waakye",
      employee_tel: 12346598,
      status: "not served",
    },
    {
      order_id: "#" + 6556456418,
      order_meal: "yam",
      employee_name: "Joan Doe",
      employee_id: 2,
      employee_department: "waakye",
      employee_tel: 12346598,
      status: "not served",
    },
    {
      order_id: "#" + 6556456417,
      order_meal: "rice",
      employee_name: "Jane Doe",
      employee_id: 66,
      employee_department: "waakye",
      employee_tel: 12346598,
      status: "served",
    },
    {
      order_id: "#" + 6556456411,
      order_meal: "waakye",
      employee_name: "John Doe",
      employee_id: 4,
      employee_department: "waakye",
      employee_tel: 12346598,
      status: "not served",
    },
  ]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  //Change page
  const paginater = (pageNumber) => setcurrentPage(pageNumber);

  //
  const watchInput = (e) => {
    if (e.target.value === "") {
      setSearch("");
      setData(orders);
    } else {
      setSearch(e.target.value);
    }
  };

  //
  const FilterData = (e) => {
    e.preventDefault();
    let arrData = orders;

    let arr = orders.filter((item) => {
      if (
        search == item.full_name ||
        search == item.order_id ||
        search == item.tel_no ||
        search == item.location ||
        search == item.last_payment_date
      ) {
        return item;
      }
    });
    console.log(arr);
    setData(arr);
    if (search == "") setData(arrData);
  };

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentOrders = data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setData(orders);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-2">
        <div className="col-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Orders"
              aria-describedby="button-addon2"
              value={search}
              onChange={(e) => watchInput(e)}
            />
            <button
              className="btn btn-outline-info"
              type="button"
              id="button-addon2"
              onClick={FilterData}
            >
              Button
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ORDER ID</th>
                  <th>MEAL</th>
                  <th>EMPLOYEE NAME</th>
                  <th>EMPLOYEE ID</th>
                  <th>EMPLOYEE DEPARTMENT</th>
                  <th>EMPLOYEE PHONE</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.order_id} className="">
                    <td>{order.order_id}</td>
                    <td>{order.order_meal}</td>
                    <td>{order.employee_name}</td>
                    <td>{order.employee_id}</td>
                    <td>{order.employee_department}</td>
                    <td>{order.employee_tel}</td>
                    <td
                      className={`${
                        order.status == "served"
                          ? "text-success"
                          : "text-secondary"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td>new Date()</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination
          postPerPage={postPerPage}
          totalPosts={orders.length}
          paginate={paginater}
        />
      </div>
    </div>
  );
};

export default OrdersTable;
