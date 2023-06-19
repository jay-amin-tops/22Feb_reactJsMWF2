import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomHook from './../CustomHooks/customHook';


const AdminEditUser = () => {
    let { id } = useParams();
    // let [userDataById, setUserDataById] = useState([]);
    const [state, setState] = useState({username:"",password:"",email:""});
    const { handleChange, inp, errors,updatedData } = CustomHook(state, { usernameError: "" });

    let [loader, setLoader] = useState(false);
    useEffect(() => {
        getUserDataById()
    }, [])
    
    let getUserDataById = async()=>{
        await axios.get("http://localhost:5000/users?id=6").then((res) => {
            console.log(res.data[0]);
            updatedData(res.data[0])
            // setState(res.data[0])
            setLoader(true)
        })
    } 

    console.log(id);
    return (
        <>
        {/* {JSON.stringify(inp[0].username)} */}

        {loader ?<>
            <input type="text" onChange={handleChange}  value={inp.username} name="username" id="username" />
        </> :
        <>
        <div class="card" aria-hidden="true">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div></>}

        </>
    );
};

export default AdminEditUser;