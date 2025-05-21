import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Login_User } from "./apis/apiURL";
import { login_endpoint } from "./apis/apiEndPoint";
import axios from "axios";

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [msg,setMsg] = useState("");
  const Nav = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Enter your email";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Enter your password";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // console.log("Signed In:", formData);
      // You can call your backend API here

      const URL = Login_User + login_endpoint;
      console.log("URL",URL);

      const userData = {
        email: formData.email,
        password: formData.password
      }
      console.log("User Data",userData);
      
      axios.post(URL,userData)
      .then((res)=>{
        console.log(res.data);
        setMsg(res.data);

      if (res.data) {
        localStorage.setItem('token', res.data.User_Token);
        localStorage.setItem('username', res.data.LoginUser.username);
        localStorage.setItem('id', res.data.LoginUser._id);
      }

        Nav("/signUp");
      }).catch((err) => {
          console.log(err);
      });
    }
  };

  return (
    <section className="bg-[#E1EEBC] py-5">
      <div className="max-w-sm mx-auto my-10 border border-gray-300 rounded-md p-6 shadow-md bg-white">
        <h1 className="text-2xl font-semibold mb-4">Sign-In</h1>
        <p className="text-sm text-red-500 mb-4 font-semibold">{msg.wrn}</p>
        <p className="text-sm text-green-500 mb-4 font-semibold">{msg.Message}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email or mobile phone number
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-400 p-2 rounded focus:outline-none focus:ring-1 focus:ring-[#328E6E]"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-400 p-2 pr-10 rounded focus:outline-none focus:ring-1 focus:ring-[#328E6E]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-4 text-gray-500 focus:ring-[#328E6E]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#328E6E] hover:bg-[#26775C] text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#328E6E] cursor-pointer"
          >
            Sign In
          </button>

          {/* Extra Options */}
          <p className="text-xs mt-4">
            By continuing, you agree to DevHub's Conditions of Use and Privacy
            Notice.
          </p>

          <div className="mt-6 border-t pt-4">
            <p className="text-sm">New to DevHub?</p>
            <Link to="/CreateAccountForm">
              <button className="w-full mt-2 border border-gray-300 py-2 rounded hover:bg-gray-100 text-sm  cursor-pointer text-[#328E6E]">
                Create your DevHub account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInForm;
