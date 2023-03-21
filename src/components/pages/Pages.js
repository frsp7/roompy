import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/home";

const Pages = () => {

    return(
        <>
            <Router>
                {/* <Header/> */}
                <Routes>
                    <Route path='/' Component={Home}/>
                </Routes>
            </Router>
        </>
    )
}

export default Pages();