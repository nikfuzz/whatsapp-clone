import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import reducer, { initialState } from "./components/reducer";
import { StateProvider, useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue(null);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <ChatBox />
              </Route>

              <Route path="/">
                <ChatBox />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
