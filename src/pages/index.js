import React, { Component } from "react";
import { Container} from "@mui/material";
import Header from '../components/Header';

class Main extends Component {

    render() {

        return (
            <Container>
                <Header/>
                <br/>
                "Use the links above"
            </Container>
        );
    };
};


export default Main;