import React, { Component } from "react";
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from "./components/Navigation/MainNavigation";
import authContext from "./context/auth-context";

import './App.css';

class App extends Component {
  state = {
    token: null,
    userId: null
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <authContext.Provider 
            value={{
              token: this.state.token, 
              userId: this.state.userId, 
              login: this.login, 
              logout: this.logout
            }}
          >
          <MainNavigation />
          <main className="main-content">
            <Routes>
              {!this.state.token && (
                <Route path="/" element={<Navigate replace to="/auth" />} />
              )}
              {!this.state.token && (
                <Route path="/bookings" element={<Navigate replace to="/auth" />} />
              )}
              {this.state.token && (
                <Route path="/" element={<Navigate replace to="/events" />} />
              )}
              {this.state.token && (
                <Route path="/auth" element={<Navigate replace to="/events" />} />
              )}
              {!this.state.token && (
                <Route path="/auth" element={<AuthPage />} />
              )}
              <Route path="/events" element={<EventsPage />} />
              {!this.state.token && (
                <Route path="/bookings" element={<BookingsPage />} />
              )}
            </Routes>
          </main>
          </authContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}


export default App;