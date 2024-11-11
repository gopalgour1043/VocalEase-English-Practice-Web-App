import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Profile from "./Pages/Profile";
import Practice from "./Pages/Practice";
import Topics from "./Pages/Topics";
import Login from './Pages/Login';
import './App.css';
import backgroundImage from "./IMAGES_&_LOGOS/bg-1.jpg";
import { CentralDataProvider, useCentralData } from './Context/CentralData'; // Use context
import PrivateRoute from "./Components/PrivateRoute";


function App() {
  return (
    <CentralDataProvider>
      <div
        className="flex flex-col "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />

        {/* Main content that grows to push footer down */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Protected routes */}
            <Route
              path="/practice"
              element={
                <PrivateRoute>
                  <Practice />
                </PrivateRoute>
              }
            />
            <Route
              path="/topics"
              element={
                <PrivateRoute>
                  <Topics />
                </PrivateRoute>
              }
            />
            <Route
              path="/ContactUs"
              element={
                <PrivateRoute>
                  <ContactUs />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
      
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        {/* Footer always at bottom */}
        <Footer/>
      </div>
    </CentralDataProvider>
  );
}

export default App;