import React from 'react';
import { Routes, Route } from "react-router-dom"
import Ecommerce from '../pages/Ecommerce';
import Home from '../pages/Home';
//https://blog.logrocket.com/react-router-v6/
//https://reactrouter.com/docs/en/v6/upgrading/reach
function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route component={() => <div>Page 404!</div>} />
        </Routes>
    );
}

export default Router;
