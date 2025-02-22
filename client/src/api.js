import { createContext, useState, useEffect } from "react";
import { login, register, logout, getUser } from "./api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      getUser(token).then((res) => setUser(res.data)).catch(() => logoutUser());
    }
  }, [token]);

  const registerUser = async (userData) => {
    const res = await register(userData);
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
  };

  const loginUser = async (credentials) => {
    const res = await login(credentials);
    localStorage.setItem("token", res.data.token);
    setToken(res.data.token);
    setUser(res.data.user);
  };

  const logoutUser = async () => {
    await logout(token);
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
