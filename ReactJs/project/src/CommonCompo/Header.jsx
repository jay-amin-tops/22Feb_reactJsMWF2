import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const [cookies, setCookie] = useCookies([]);

  console.log(cookies);
  // if(cookies.userid == undefined) {
  //   console.log("called inside if");
  // }else{
  //   console.log("called inside else");

  // }
  console.log(cookies.userid);
  const menuData = { "/home": "Home", "/about": "About us", "/api": "Access API" }
  // const menuData = ["Home","About us" ] 
  // menuData.map((key, value) => {
  //   console.log("Key :", key, "Value :", value);
  // })
  // let MenuRes = menuData.map((value,key ) => { 
  // // let MenuRes = Object.entries(menuData).map((key, value) => { 
  //   console.log("key : ",key,"value : ",value);
  //   return <MDBNavbarItem key={key}>
  //   <Link className='nav-link' to={value}>{value}</Link>
  //   {/* <MDBNavbarLink active aria-current='page' href='#'>
  //     Home
  //   </MDBNavbarLink> */}
  // </MDBNavbarItem>}
  // )
  let MenuRes = Object.entries(menuData).map(([key, value], i) => {
    // let MenuRes = Object.entries(menuData).map((key, value) => { 
    console.log("key : ", key, "value : ", value, i);
    return <MDBNavbarItem key={i}>
      <Link className='nav-link' to={key}>{value}</Link>
      {/* <MDBNavbarLink active aria-current='page' href='#'>
      Home
    </MDBNavbarLink> */}
    </MDBNavbarItem>
  }
  )
  console.log(MenuRes);
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            {MenuRes}
            <MDBNavbarItem>
              {(cookies.userid == undefined)  ? <Link className='nav-link' to="login">Login</Link>: <Link className='nav-link' to="/logout">Logout</Link>}
              
              
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <Link className='nav-link' to='/'>Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/about'>About us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link className='nav-link' to='/examples'>Examples</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}