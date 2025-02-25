// import { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//         setLoading(false);
//     }, []);

//     const login = async (email, password) => {
//         try {
//             const response = await fetch("http://127.0.0.1:8000/api/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 setUser(data.user);
//                 localStorage.setItem("user", JSON.stringify(data.user));
//                 localStorage.setItem("token", data.token);
//             }
//         } catch (error) {
//             console.error("Login error:", error);
//         }
//     };

//     // Logout function
//     const logout = () => {
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout, loading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const registerUser = async (userData) => {
    console.log("User registered:", userData);
  };

  return (
    <AuthContext.Provider value={{ registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
