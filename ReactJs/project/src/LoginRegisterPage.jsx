import React, { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CustomHook from './CustomHooks/customHook.jsx'
import "./custom.css"
import styled from 'styled-components'
import axios from 'axios';
import { useCookies } from 'react-cookie'

const LoginRegisterPage = () => {
  // CustomHook.handleChange
  const { handleChange, inp, errors } = CustomHook({ "role": 2 }, {});
  const [rightPanel, setRightPanel] = useState(false)
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([]);

  const [state, setState] = useState({ formData: "" })
  const SetRightPanel = () => {
    setRightPanel(true)
  }
  const SetLeftPanel = () => {
    setRightPanel(false)
  }
  let saveformdata = () => {
    // body: JSON.stringify(inp)
    // body: JSON.stringify({username:"test",password:"124443",email:"email@mail.com",role:2})
    // body: JSON.stringify({username:"test",password:"124443",email:"email@mail.com",role:2})

    fetch("http://localhost:5000/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inp)
    }).then((res) => res.json()).then((result) => {
      // console.log(result);
      navigate("/login")
    })
    // axios.post('http://localhost:5000/users', inp)
    //   .then(function (response) {
    //     console.log("response",response);
    //   })
    //   .catch(function (error) {
    //     console.log("data",error);
    //   });
    //   console.log("data");
  }
  let login = () => {
    // console.log("Input E Data",state.formData.email);
    // console.log("Input Data",state.formData.password);
    axios.get(`http://localhost:5000/users?email=${state.formData.email}&password=${state.formData.password}`)
      .then(function (response) {
        // console.log("response",response.data.length);
        if (response.data.length > 0) {
          // console.log("valid user",response.data[0]);
          // console.log("valid user",response.data[0].role);
          setCookie("userid", response.data[0].id)
          setCookie("username", response.data[0].username)
          if (response.data[0].role == 1) {
            navigate("/admin")
          } else {
            navigate("/")
          }
        } else {
          console.log("invalid user");
        }
      })
      .catch(function (error) {
        console.log("data", error);
      });
    // console.log("called login", state);
  }
  let setloginformdata = (event) => {
    // console.log("called form data for login", state);
    // (event)=>{ }
    setState((koibhi) => ({ formData: { ...koibhi.formData, [event.target.name]: event.target.value } }))
  }
  // let saveformdata=(evetn)=>{
  //   evetn.preventDefault()
  //   console.log("called");
  // }
  // console.log(inp);
  const addclass = () => {
    document.body.classList.add("active")
  }
  return (
    <>
      <Wrapper>

        <button onClick={addclass}>Click</button>

        <div className={`container ${rightPanel ? "right-panel-active" : ""}`} id="container">
          <Link className='position-ab z-index-1' to="/">
            <i className='fa fa-home'></i>
            home
          </Link>
          {/* <div className="container" id="container" ref={panelRef}> */}
          {/* sign Up form section start*/}
          <div className="form sign_up">
            <form method='post'>
              {/* heading */}
              <h1>Create An Account</h1>
              {/* social media icons */}
              <div className="social-container">
                <NavLink to=""><i className="fa-brands fa-google" /></NavLink>
              </div>
              <span>use email for registration</span>
              {/* input fields start */}
              <input type="text" onChange={handleChange} name='username' placeholder="User Name" />
              {errors.usernameError ? <span>This field is Required</span> : <></>}
              {/* {JSON.stringify(state)} */}
              <input type="email" onChange={handleChange} name='email' placeholder="Email" />
              <input type="password" onChange={handleChange} name='password' placeholder="Password" />
              <button type='button' onClick={saveformdata}>Create Account</button>
              {/* input fields end */}
            </form>
          </div>
          {/* sign Up form section end*/}
          {/* sign in form section start*/}
          {/* <div className="form sign_in" onSubmit={saveformdata}> */}
          <div className="form sign_in">
            <form action="#">
              {/* heading */}
              <h1>Login In</h1>
              {/* social media icons */}
              <div className="social-container">
                <NavLink to=""><i className="fa-brands fa-google" /></NavLink>
              </div>
              <span>Login In with your Account</span>
              {/* input fields start */}
              <input type="email" onChange={setloginformdata} name='email' placeholder="Email" />
              <input type="password" onChange={setloginformdata} name='password' placeholder="Password" />
              <span>Forgot your <span className="forgot">password?</span></span>
              <button type='button' onClick={login}>Login</button>
              {/* input fields end */}
            </form>
          </div>
          {/* sign in form section end*/}
          {/* overlay section start*/}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-pannel overlay-left">
                <h1>Already have an account</h1>
                <p>Please Login</p>
                <button id="signIn" className="overBtn" onClick={SetLeftPanel} >SignIn</button>
              </div>
              <div className="overlay-pannel overlay-right">
                <h1>Create Account</h1>
                <p>Start Your Journey with Us</p>
                <button id="signUp" className="overBtn" onClick={SetRightPanel}>Sign Up</button>
              </div>
            </div>
          </div>
          {/* overlay section start*/}
        </div>

      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;1,600;1,700&display=swap");

  display: grid;
  place-items: center;
  font-family: "Nunito", sans-serif;
  height: 90vh;

/* headings */
  h1 {
  font-weight: bold;
  margin: 0;
  font-size: 20px;
  }
/* headings */
/* paragraphs */
  p {
  font-size: 0.9em;
  font-weight: 200;
  line-height: 1.3em;
  letter-spacing: 0.1em;
  margin: 20px 0;
  }
/* paragraphs */
/* span tags */
span {
  font-size: 14px;
  color: #a9a9a9;
}
span .forgot {
  color: #c850c0;
  cursor: pointer;
}
/* span tags */
a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

/* form */
form {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}
/* form */
/* input fields */
input {
  background-color: #ecececdd;
  border: none;
  font-size: 14px;
  padding: 10px 12px;
  margin: 8px 0;
  width: 100%;
  color: #333;
  outline: none;
  border-radius: 5px;
}
/* input fields */

/* button */
button {
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #4158d0, #f441a5, #ffcc70, #4158d0);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  margin-top: 30px;
  cursor: pointer;
}

button:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 200%;
  }
}

button:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #4158d0, #f441a5, #ffcc70, #4158d0);
  background-size: 400%;
  border-radius: 35px;
  transition: 1s;
}

button:hover::before {
  filter: blur(10px);
}

button:active {
  background: linear-gradient(90deg, #4158d0, #f441a5, #ffcc70, #4158d0);
}

/* button */

/* container */
.container {
  background-color: #ffffff;
  border-radius: 2em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
  overflow: hidden;
  width: 650px;
  max-width: 100%;
  min-height: 550px;
}
.form {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all ease-in-out 0.6s;
}
.sign_up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}
.sign_in {
  left: 0;
  width: 50%;
  z-index: 2;
  opacity: 1;
}
/* container */

/* active container */
.container.right-panel-active .sign_in {
  transform: translateX(100%);
  opacity: 0;
}
.container.right-panel-active .sign_up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: switch 0.5s;
}
@keyframes switch {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

/* active container */

/* overlay container*/
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}
.overlay {
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}
.overlay-pannel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform -0.6s ease-in-out;
}
.overlay-left {
  transform: translateX(-20%);
}
.overlay-right {
  right: 0;
  transform: translateX(0);
}
/* container switch */
.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}
.container.right-panel-active .overlay {
  transform: translateX(50%);
}
.container.right-panel-active .overlay-left {
  transform: translateX(0);
}
.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}
/* container switch */

/* overlay container */

/* social container */
.social-container {
  margin: 20px 0;
}
.social-container a {
  border: 1px solid #dddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
/* social container */

`

export default LoginRegisterPage