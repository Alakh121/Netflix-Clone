import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Navbar from "./Components/Navbar/Navbar";
import Test from "./firebase";
import AuthProvider from "./ContextApi/AuthContext";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import PublicRoute from "./Helpers/PublicRoute";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import PhoneAuth from "./Components/Auth/PhoneAuth";
import AddMovie from "./Components/Movies/AddMovie";
import ProfilePhoto from "./Components/UserProfile/ProfilePhoto";
import UserProfile from "./Components/UserProfile/UserProfile";
import HomePage from "./Pages/HomePage";
const App = () => {
  console.log(Test);
  return (
    <section id="netFlixMainBlock">
      <article>
        <AuthProvider>
          <Router>
            <Navbar />
            <ToastContainer />
            <Switch>
              <Route path="/" exact>
                <HomePage/>
                  </Route>
              <PublicRoute path="/signin" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Register />
              </PublicRoute>
              <PublicRoute path="/forgot-password" exact>
                <ForgotPassword />
              </PublicRoute>
              <PublicRoute path="/otp" exact>
                <PhoneAuth />
              </PublicRoute>
              <ProtectedRoute path="/upload-profile-pic" exact>
                <ProfilePhoto/>
              </ProtectedRoute>
              <ProtectedRoute path="/upload-movie" exact>
                <AddMovie/>
              </ProtectedRoute>
              <ProtectedRoute path="/profile" exact>
                <UserProfile/>
              </ProtectedRoute>
            </Switch>
          </Router>
        </AuthProvider>
      </article>
    </section>
  );
};

export default App;
