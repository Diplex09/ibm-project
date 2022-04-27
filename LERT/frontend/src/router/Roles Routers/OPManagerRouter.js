import { Navigate, Route, Routes } from 'react-router';
import { ExpensesTypes } from '../../components/OPManager/ExpensesTypes';

export const OPManagerRouter = () => {
    return (
        <Routes>
            <Route index element={<div>OP Manager Home</div>} />
            <Route path="/types" element={<div>Types</div>} />
            <Route path="/icas" element={<div>ICAS</div>} />
            <Route path="/expenses" element={<ExpensesTypes />} />
            <Route path="/hours" element={<div>Edit Hours</div>} />
            <Route
                path="/manage"
                element={<div>Manage Manager Functions</div>}
            />
            <Route path="/edit" element={<div>Edit Manager Information</div>} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};