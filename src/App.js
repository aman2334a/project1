import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import About from "./pages/About"
import Membership from './pages/Membership'
import Service from './pages/Service'
import Login from './pages/Login';
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import Manage from './pages/admin/Manage';
import Update from './pages/admin/Update';
import Signup from './pages/Signup';
import Dashboard from './pages/user/Dashboard';
import { ToastProvider } from "react-toast-notifications";
import Setting from './pages/user/Setting'
import Request from './pages/user/Requests'
import ConfirmEmail from './pages/ConfirmEmail';
import ForgotPassword from './pages/ForgotPassword';
import GoToTop from './templates/user/Component/GoToTop';

function App() {
  return (
    <div>
      <ToastProvider autoDismiss={true} autoDismissTimeout="2000">

        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route index exact path="/about" element={<About />} />
          <Route index exact path="/contact" element={<Contact />} />
          <Route index exact path="/membership" element={<Membership />} />
          <Route index exact path="/services" element={<Service />} />
          <Route index exact path="/login" element={<Login />} />
          <Route index exact path="/signup" element={<Signup />} />
          <Route index exact path="/admin" element={<AdminLogin />} />
          <Route index exact path="/resetPassword" element={<ForgotPassword />} />
          <Route index exact path="/admin/reports" element={<AdminDashboard />} />
          <Route index exact path="/admin/updates" element={<Update />} />
          <Route index exact path="/admin/manage" element={<Manage />} />
          <Route index exact path="/dashboard" element={<Dashboard />} />
          <Route index exact path="/Requests" element={<Request />} />
          <Route index exact path="/Setting" element={<Setting />} />
          <Route index exact path="/confirmEmail" element={<ConfirmEmail />} />
        </Routes>
      </ToastProvider>
      <GoToTop/>
    </div>
  );
}

export default App;
