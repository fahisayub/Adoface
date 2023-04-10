import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AnalyticsPage from '../pages/AnalyticsPage';
import PostPage from '../pages/PostPage';
import UserPage from '../pages/UserPage';


const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<PostPage/>} />
            <Route path='/users' element={<UserPage/>} />
            <Route path='/analytics' element={<AnalyticsPage/>} />

        </Routes>
    );
};

export default MainRoute;