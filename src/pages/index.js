import React, { Component } from "react";

import ReactDOM from "react-dom";

import Header from '../components/Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    HashRouter,
    Routes,
    BrowserRouter
} from "react-router-dom";



import Homepage from "./home";
import { Container } from "@mui/material";


const Travelpage = React.lazy(() => import("./travel"));
const Rollpage = React.lazy(() => import("./roll"));

class Main extends Component {

    render() {

        return (
            <Container>
              


                <BrowserRouter>
                <Header />
                    <div>
         
                        <div className="content">
                            <Routes>
                                <Route path="/" element={<homepage />} />
                                <Route path="/travel" element={
                                    <React.Suspense fallback={<>...</>}>
                                        <Travelpage />
                                    </React.Suspense>
                                } />
                                <Route path="/roll" element={
                                    <React.Suspense fallback={<>...</>}>
                                        <Rollpage />
                                    </React.Suspense>

                                } />
                            </Routes>
                        </div>


                    </div>
                </BrowserRouter>
            </Container>
        );
    };
};


export default Main;