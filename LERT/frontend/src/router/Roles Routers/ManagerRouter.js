import { Routes, Route, Navigate } from 'react-router-dom';
import { Employees } from '../../components/Manager/Employees';
import { ExpensesMg } from '../../components/Manager/ExpensesMg';
import { HomeMg } from '../../components/Manager/HomeMg';
import { QuarterMg } from '../../components/Manager/QuarterMg';

export const ManagerRouter = () => {
    return (
        <Routes>
            <Route index element={<HomeMg />} />
            <Route path="/delegate" element={<div>Delegate</div>} />
            <Route path="/employee" element={<Employees />} />
            <Route path="/expenses" element={<ExpensesMg />} />
            <Route path="/recovery" element={<QuarterMg />} />
            <Route path="/reports" element={<div>Reports</div>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
