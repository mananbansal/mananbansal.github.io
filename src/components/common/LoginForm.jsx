import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const clearSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");

  window.location.href = "/login";
};

const startSessionTimer = () => {
  return setTimeout(() => {
    clearSession();
  }, 10 * 60 * 1000);
};

const LoginForm = () => {
  const navigate = useNavigate();

  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
    }
    return result;
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmailExists = async (email) => {
    try {
      // Checks if email exists
      const response = await axios.get(`http://65.0.122.250:8080/users`);

      const userExists = response.data.some(
        (user) => user.emailAddress === email
      );

      if (userExists) {
        return "";
      } else {
        throw new Error("Email not registered");
      }
    } catch (error) {
      return "Email not registered";
    }
  };

  const validatePassword = async (email, password) => {
    try {
      // Getting user data from DB
      const response = await axios.get(`http://65.0.122.250:8080/users`);
      // Find the user with the matching email
      const user = response.data.find((user) => user.emailAddress === email);

      // Check if the user exists and if the password is correct
      if (user && user.password === password) {
        const token = makeid(5);

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user));

        navigate("/");

        const sessionTimer = startSessionTimer();
        sessionStorage.setItem("sessionTimer", sessionTimer);
      } else {
        setErrors({ password: "Incorrect password" });
      }
    } catch (error) {
      console.error("Error getting user details:", error.response.data);
      setErrors({ password: "Error getting user details" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = await validateEmailExists(formData.email);

    if (emailError) {
      setErrors({ email: emailError });
    } else {
      await validatePassword(formData.email, formData.password);
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link to="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
        {errors.email && (
          <p className="error" style={{ color: "red" }}>
            {errors.email}
          </p>
        )}
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
        {errors.password && (
          <p className="error" style={{ color: "red" }}>
            {errors.password}
          </p>
        )}
      </div>
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          onClick={handleSubmit}
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
