import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { FaPencilAlt } from "@react-icons/all-files/fa/FaPencilAlt";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

const AdminAllusers = () => {
  let [allUsersData, setAllUsersData] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [loader, setLoader] = useState(false);
  const [deletestatus, setDeleteStatus] = useState(false);
  useEffect(() => {
    getAllUsers()
  }, [deletestatus])
  let deleteuser = async (e) => {
    console.log("called event data",e.target.getAttribute("data-userid"));
    let userid = e.target.getAttribute("data-userid");
    // console.log("called",e.getAttribute("data-id"));
    await axios.delete(`http://localhost:5000/users/${userid}`).then((res)=>{
      console.log(res);
      setDeleteStatus(!deletestatus)
    })
    
  }
  let getAllUsers = async () => {
    await axios.get(`http://localhost:5000/users`)
      .then(function (response) {
        if (response.data.length > 0) {
          // console.log("response", response.data);
          // setAllUsersData(response.data)

          let UsersData = response.data.map((data, index) => {
            // console.log(data.username);
            // console.log("index", index);
            return <tr key={data.id}><td>{data.id}</td><td>{data.username}</td><td>{data.email}</td><td>
              <Link className='btn btn-sm btn-info' to={`/admin/edituser/${data.id}`}> <FaPencilAlt/></Link>
              {/* &nbsp;<Link className='btn btn-sm btn-danger' to={`/admin/deleteuser/${data.id}`}> <FaTrash/></Link> */}
              &nbsp;<button className='btn btn-sm btn-danger' data-userid={data.id} onClick={deleteuser}><FaTrash/></button>
              </td> </tr>
          })
          // console.log(UsersData);
          setAllUsersData(UsersData)
          setLoader(true)
        } else {
          console.log("invalid user");
        }
      })
      .catch(function (error) {
        console.log("inside catch", error);
        setErrorMsg(true)
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  }
  return (
    <>
      <div className="container my-2 mb-2">

        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-10">
                <h2>All Users</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/admin/">Dashboard</a></li>
                    <li className="breadcrumb-item active" aria-current="page"><small> All Users</small></li>
                  </ol>
                </nav>
              </div>
              <div className="col text-end">
                <Link to="/admin/addnewuser" className='btn btn-primary '>Add New</Link>                
              </div>
            </div>
            {/* <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active text-sm" aria-current="page"><small> Home</small></li>
              </ol>
            </nav> */}
            <div className="card my-2">
              {errorMsg ? <>No data found</> : <table className='table table-bordered table-stripped'>
                <thead className='bg-dark text-light'>
                  <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loader ? <>{allUsersData}</> : <tr><td colSpan="4">Loading....</td></tr>}
                </tbody>
              </table>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAllusers;