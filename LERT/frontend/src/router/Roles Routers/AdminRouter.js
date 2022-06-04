import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Delegate } from '../../components/Admin/Delegate';
import { Home } from '../../components/Admin/Home';

export const AdminRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/delegate" element={<Delegate />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
