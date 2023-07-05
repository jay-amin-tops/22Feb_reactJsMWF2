import httpanything from "./../http-common.jsx";

const getAllUsers = ()=>{
    return httpanything.get("users") 
}


const UserService = {
    getAllUsers
}

export default UserService;