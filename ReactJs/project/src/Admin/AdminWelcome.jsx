import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminWelcome = () => {
    return (
        <div>
            AdminWelcome
            <Outlet></Outlet>
        </div>
    );
};

export default AdminWelcome;