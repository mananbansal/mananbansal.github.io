import { useState } from "react";
import axios from "axios";

const PasswordInfo = () => {

  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: '',
    password: '',
    passwordAgain: '',
  });

  const handleChange = (field, value) => {
    setPasswordInfo((prevPasswordInfo) => ({
      ...prevPasswordInfo,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentPasswordMatch = checkCurrentPassword(passwordInfo.currentPassword);

    if (!currentPasswordMatch) {
      alert('Current password is incorrect. Please try again.');
      return;
    }

    if (passwordInfo.password !== passwordInfo.passwordAgain) {
      alert('New passwords do not match. Please try again.');
      return;
    }

    const isValidNewPassword = validatePassword(passwordInfo.password);

    if (!isValidNewPassword) {
      alert('Invalid new password. Please choose a stronger password.');
      return;
    }

    // const updateResponse = await fetch('http://65.0.122.250:8080/addUser', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(passwordInfo.password),
    // });

    const response = await axios.put("http://65.0.122.250:8080/updateUser",{
      password: passwordInfo.password,
    })

    if (response.ok) {
      sessionStorage.setItem('user', JSON.stringify(passwordInfo.password));
      
      alert('Password changed successfully!');
  
      setPasswordInfo({
        currentPassword: '',
        password: '',
        passwordAgain: '',
      });
    } else {
      alert('Failed to change password. Please try again.');
    }
  };

  const checkCurrentPassword = async (currentPassword) => {
    const storedUserInfo = JSON.parse(sessionStorage.getItem('user'));
    const storedPassword = storedUserInfo.password;//condition change

    if(currentPassword === storedPassword){
      return true;
    }
    else{
      return false
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

  return (
    <form className="col-xl-9" onSubmit={handleSubmit}>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input 
              type="password" 
              required
              value={passwordInfo.currentPassword}
              onChange={(e) => handleChange('currentPassword', e.target.value)} 
            />
            <label className="lh-1 text-16 text-light-1">
              Current Password
            </label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="form-input ">
            <input 
              type="password" 
              required 
              value={passwordInfo.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">New Password</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="form-input ">
            <input 
              type="password" 
              required 
              value={passwordInfo.passwordAgain}
            onChange={(e) => handleChange('passwordAgain', e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">
              New Password Again
            </label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button
                type="submit"
                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              >
                Save Changes <div className="icon-arrow-top-right ml-15" />
              </button>
            </div>
            <div className="col-auto">
              <button className="button h-50 px-24 -blue-1 bg-blue-1-05 text-blue-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* End col-12 */}
      </div>
    </form>
  );
};

export default PasswordInfo;
