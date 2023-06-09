import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminWelcome from './AdminWelcome.jsx';
import Dashboard from './Dashboard.jsx';

const AdminRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminWelcome />} >
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
};

export default AdminRoute;