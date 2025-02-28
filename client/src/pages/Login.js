import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response =  await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify(formData)
      })
      if (response.status == 200) {
         navigate("/")
      }
    } catch (error) {
      navigate("/login")

      console.log(error)
    }
     
  };

  // blue #0F172B
  // Orange #FEA116 

  return (
    <div>
    <div
      style={{ backgroundColor: "#0F172B" }}
      className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md"
    >
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
        <img className="w-25" src="/logo.png" alt="Hotel Logo" />
        </div>
  
        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Login To Mario
        </h3>
  
        <form onSubmit={handleLogin}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="w-full bg-[#FEA116] px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>
      </div>
  
      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?
        </span>
        <a
          href="/register"
          className="mx-2 text-sm font-bold text-[#FEA116] hover:underline"
        >
          Register
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Login;
