import React, { Component } from "react";
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/auth" />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}


export default App;
// import React from 'react';
// import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

// import Auth from './pages/Auth';
// import Bookings from './pages/Bookings';
// import Events from './pages/Events';

// import './App.css';

// function App() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Navigate replace to="/auth" />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/bookings" element={<Bookings />} />
//         </Routes>
//       </BrowserRouter>
//     );
// }

// export default App;