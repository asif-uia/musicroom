import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes, Redirect } from "react-router-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact>
                        <p>This is the homepage</p>
                    </Route>
                    <Route path="/join" component={RoomJoinPage} />
                    <Route path="/create" component={CreateRoomPage} />
                </Routes>
            </Router>
        );
    }
}
