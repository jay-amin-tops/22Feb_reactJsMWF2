import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomHook from './../CustomHooks/customHook';


const AdminEditUser = () => {
  let { id } = useParams();
  const navigate = useNavigate(); 
  // let [userDataById, setUserDataById] = useState([]);
  const [state, setState] = useState({ username: "", password: "", email: "" });
  const { handleChange, inp, errors, updatedData } = CustomHook(state, { usernameError: "" });

  let [loader, setLoader] = useState(false);
  useEffect(() => {
    getUserDataById()
  }, [])

  let getUserDataById = async () => {
    await axios.get("http://localhost:5000/users?id=" + id).then((res) => {
      console.log(res.data[0]);
      updatedData(res.data[0])
      // setState(res.data[0])
      setLoader(true)
    })
  }
  let handleClick = async () => {
    console.log("called btn click",inp);
    await axios.put("http://localhost:5000/users/"+id,inp).then((res) => {
    console.log("Update Res : ",res);  
    navigate("/admin/adminallusers")
    // console.log(res.data[0]);
      // updatedData(res.data[0])
      // setState(res.data[0])
      setLoader(true)
    })
  }

  console.log(id);
  return (
    <>
      {/* {JSON.stringify(inp[0].username)} */}

      {loader ? <>
        <div className="container my-2 mb-2">


          <div className="row">
            <div className="col">
              <h2>Edit Users Data</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/admin/">Dashboard</Link></li>
                  <li className="breadcrumb-item"><Link to="/admin/adminallusers">Users</Link></li>
                  <li className="breadcrumb-item active" aria-current="page"><small> Edit Users</small></li>
                </ol>
              </nav>
              <div className="pb-4">
                
              <div className="card">
               <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <input type="text" className='form-control' onChange={handleChange} value={inp.username} name="username" id="username" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-4">
                      <input type="text" className='form-control' onChange={handleChange} value={inp.email} name="email" id="email" />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-4">
                      <input type="button" className='btn btn-primary' onClick={handleClick} value="update" name="btn-update" id="btn-update" />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </> :
        <>
          <div className="card" aria-hidden="true">
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
            </div>
          </div></>}

    </>
  );
};

export default AdminEditUser;