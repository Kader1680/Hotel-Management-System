import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/dashboard";
import AddRoom from "./pages/admin/addRoom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/admin/add-room" element={<AddRoom/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
