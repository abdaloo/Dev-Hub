import React, { useState } from "react";
import { Eye, EyeOff, Section } from "lucide-react";
import { Link } from "react-router-dom";

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Enter a password";
    } else if (formData.password.length < 6) {
      newErrors.password = "Passwords must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Re-enter your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Account created:", formData);
      // Send to backend API here
    }
  };

  // window.body.style.backgroundColor = "E1EEBC";

  return (
    <section className="bg-[#E1EEBC] py-5">
      <div className="max-w-sm mx-auto my-10 border border-gray-300 rounded-md p-6 shadow-md bg-[#FFFFFF]">
        <h1 className="text-2xl font-semibold mb-4">Create account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-400 p-2 rounded focus:outline-none focus:ring-[#328E6E] focus:ring-1"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-400 p-2 rounded focus:outline-none focus:ring-[#328E6E] focus:ring-1"
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
                className="w-full mt-1 border border-gray-400 p-2 pr-10 rounded focus:outline-none focus:ring-[#328E6E] focus:ring-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-4 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
            <p className="text-xs text-gray-600 mt-1">
              Passwords must be at least 6 characters.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Re-enter password
            </label>
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-400 p-2 rounded focus:outline-none focus:ring-[#328E6E] focus:ring-1"
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#328E6E] hover:bg-[#26775C] text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#328E6E] cursor-pointer"
          >
            Create your DevHub account
          </button>
        </form>

        <p className="text-xs mt-6 text-gray-600">
          By creating an account, you agree to DevHub’s Conditions of Use and
          Privacy Notice.
        </p>

        <hr className="my-4" />

        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/SignUpForm">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Sign in
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CreateAccountForm;
