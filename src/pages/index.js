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
const Noticeboardpage = React.lazy(() => import("./noticeboard"));
const Settlementpage = React.lazy(() => import("./settlement"));

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
                                 <Route path="/noticeboard" element={
                                    <React.Suspense fallback={<>...</>}>
                                        <Noticeboardpage />
                                    </React.Suspense>

                                } />
                                 <Route path="/settlement" element={
                                    <React.Suspense fallback={<>...</>}>
                                        <Settlementpage />
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