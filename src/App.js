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
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div>
      <ToastProvider autoDismiss={true} autoDismissTimeout="2000">

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/contact" element={<Contact />} />
          <Route index path="/membership" element={<Membership />} />
          <Route index path="/services" element={<Service />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/signup" element={<Signup />} />
          <Route index path="/admin" element={<AdminLogin />} />
          <Route index path="/resetPassword" element={<ForgotPassword />} />
          <Route index path="/admin/reports" element={<AdminDashboard />} />
          <Route index path="/admin/updates" element={<Update />} />
          <Route index path="/admin/manage" element={<Manage />} />
          <Route index path="/dashboard" element={<Dashboard />} />
          <Route index path="/Requests" element={<Request />} />
          <Route index path="/Setting" element={<Setting />} />
        </Routes>
      </ToastProvider>
    </div>
  );
}

export default App;
