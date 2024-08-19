import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import MainPage from '../components/MainPage/MainPage';
import SolarPanelPage from '../components/SolarPanelPage/SolarPanelPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/solar-panel" element={<SolarPanelPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
