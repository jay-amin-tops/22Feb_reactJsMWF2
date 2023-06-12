import React, { useEffect } from 'react';
import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
import AdminMenu from "./AdminMenu";
import AdminDashboard from './AdminDashboard';
import AdminAllusers from './AdminAllusers.jsx';
// import EditUserData from './EditUserData.jsx';
// import AddUserData from './AddUserData.jsx';
import { useCookies } from 'react-cookie';

const AdminRoute = () => {
    const [cookies] = useCookies(['name'])
    const navigate = useNavigate();


    useEffect(() => {
        if (!cookies.id && !cookies.username) {
            navigate("/login")
        }
    }, [cookies,navigate])
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminMenu />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="adminallusers" element={<AdminAllusers />} />
                </Route>
            </Routes>
        </>
    );
};


export default AdminRoute;