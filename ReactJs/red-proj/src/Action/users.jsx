import UserService from "./../Services/UserService.jsx";
// export const retierveUsers =()=>

export const retierveUsers= ()=>async(dispatch)=>{
    console.log("called from redux action");
    UserService.getAllUsers();
}