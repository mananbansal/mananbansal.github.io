import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
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
  const clearSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    navigate("/login");
  };

  const startSessionTimer = () => {
    return setTimeout(() => {
      clearSession();
    }, 10 * 60 * 1000);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);

  const [errors, setErrors] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const validateINPhoneNumber = (phone) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailRegex.test(email);

    setIsEmailValid(isValidFormat);

    if(isValidFormat){
      checkEmailAvailability(email);
    }
  };

  const checkEmailAvailability = async (email) => {
    try {
      const response = await fetch('http://65.0.122.250:8080/users',{
        method: 'GET',
      });
      const users = await response.json();

      const isEmailAvailable = !users.some(user => user.emailAddress === email);

      setIsEmailAvailable(isEmailAvailable);
    } catch (error) {
      console.error('Error checking email availability', error);
    }
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long
    const isLengthValid = password.length >= 8;

    // Password must contain at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    // Password must contain at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);

    // Password must contain at least one digit
    const hasDigit = /\d/.test(password);

    // Combine all conditions
    return isLengthValid && hasUppercase && hasLowercase && hasDigit;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === formData.password;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateInput(name, value);
  };

  const validateInput = async (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "phone":
        newErrors.phone = validateINPhoneNumber(value)
          ? ""
          : "Please enter a valid IN phone number";
        break;
      case "password":
        newErrors.password = validatePassword(value)
          ? ""
          : "Password is Invalid";
        break;
      case "confirmPassword":
        newErrors.confirmPassword = validateConfirmPassword(value)
          ? ""
          : "Passwords do not match";
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSendOTP = () => {
    // Send an HTTP request to the backend to initiate OTP sending
    // SendGrid, Twilio, etc.
    const generatedOTP = Math.floor(100000 + Math.random() * 900000); //a 6 digit OTP
    console.log("simulating OTP sending:", generatedOTP);

    setOtpSent(true);
  };

  const handleVerifyOTP = () => {
    // Perform OTP verification logic
    console.log("Simulating OTP verification:", formData.otp);
    // Handle the result of OTP verification
    console.log("OTP verified successfully!");

    setFormData({
      ...formData,
      otp: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are no errors before submitting the form
    if (Object.values(errors).every((error) => error === "")) {
      //form submission logic
      // console.log('Form submitted:', formData);
      try {
        const response = await axios.post("http://65.0.122.250:8080/addUser", {
          emailAddress: formData.email,
          firstName: formData.firstname,
          lastName: formData.lastname,
          gender: formData.gender,
          contact: formData.phone,
          password: formData.password,
        });

        console.log(response.data);
        const token = makeid(5);
        const user = response.data;

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", user);

        navigate("/");

        const sessionTimer = startSessionTimer();
        sessionStorage.setItem("sessionTimer", sessionTimer);

        // window.location.href = "/dashboard/db-dashboard";
      } catch (error) {
        console.error("Error creating account:", error.response.data);
      }
    } else {
      console.log("Form has errors. Please fix them before submitting.");
    }
  };

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Create an account</h1>
        <p className="mt-10">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            id="firstname"
            name="firstname"
            type="text"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <select
            className="button py-20 w-100"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label className="lh-1 text-14 text-light-1">Gender</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Phone Number</label>
        </div>
        {errors.phone && (
          <p className="error" style={{ color: "red" }}>
            {errors.phone}
          </p>
        )}
      </div>

      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => validateEmail(formData.email)}
            required
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
        {!isEmailValid && <p className="error" style={{ color: "red" }}>Please enter a valid email address.</p>}
        {!isEmailAvailable && <p className="error" style={{ color: "red" }}>Email is already in use.</p>}
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input
            id="password"
            name="password"
            type="password"
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
        <div className="form-input ">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
        </div>
        {errors.confirmPassword && (
          <p className="error" style={{ color: "red" }}>
            {errors.confirmPassword}
          </p>
        )}
      </div>
      {/* End .col */}

      {otpSent ? (
        <div className="col-12">
          <div className="form-input ">
            <input
              id="otp"
              name="otp"
              type="text"
              value={formData.otp}
              onChange={handleInputChange}
            />
            <label className="lh-1 text-14 text-light-1">Enter OTP:</label>
            <button
              className="button py-20 -dark-2 bg-red-1 text-white w-75"
              type="button"
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </button>
          </div>
        </div>
      ) : (
        <div className="col-12">
          <button
            className="button py-20 -dark-2 bg-red-1 text-white w-100"
            type="button"
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
        </div>
      )}

      <div className="col-12">
        <div className="d-flex ">
          <div className="form-checkbox mt-5">
            <input type="checkbox" name="email_promotion" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            Email me exclusive Devsthan Expert promotions. I can opt out later
            as stated in the Privacy Policy.
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          disabled={!isEmailValid || !isEmailAvailable}
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default SignUpForm;
