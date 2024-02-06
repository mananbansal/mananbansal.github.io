import AvatarUploader from "./AvatarUploader";
import {useState, useEffect } from "react";

const PersonalInfo = () => {
   const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    contact: '',
   });

useEffect(() => {
  const storedUserInfo = sessionStorage.getItem('user');
  if(storedUserInfo){
    setUserInfo(JSON.parse(storedUserInfo));
  }

}, [])

const handleChange = (field, value) => {
  setUserInfo((prevUserInfo) => ({
    ...prevUserInfo,
    [field]: value,
  }));
};

const handleSubmit = async(e) => {
  e.preventDefault();

    const updateResponse = await fetch('http://65.0.122.250:8080/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (updateResponse.ok) {
      // Update sessionStorage with modified user information
      sessionStorage.setItem('user', JSON.stringify(userInfo));
      // Display a success message (you may need to implement a notification system)
      alert('Information saved successfully!');
    } else {
      // Handle error case
      alert('Failed to save information. Please try again.');
    }
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AvatarUploader />
        {/* End AvatarUploader*/}

        <div className="border-top-light mt-30 mb-30" />

        <div className="col-xl-9">
          <div className="row x-gap-20 y-gap-20">
            {/* <div className="col-12">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Business Name
                </label>
              </div>
            </div> */}
            {/* End col-12 */}
            {/* <div className="col-12">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">User Name</label>
              </div>
            </div> */}
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input 
                  type="text" 
                  required 
                  value={userInfo.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                />
                <label className="lh-1 text-16 text-light-1">First Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input 
                  type="text" 
                  required 
                  value={userInfo.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                />
                <label className="lh-1 text-16 text-light-1">Last Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input 
                  type="text" 
                  required 
                  value={userInfo.emailAddress}
                  onChange={(e) => handleChange('emailAddress', e.target.value)}
                />
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input 
                  type="text"   
                  required 
                  value={userInfo.contact}
                  onChange={(e) => handleChange('contact', e.target.value)}
                />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>
            {/* End col-6 */}

            {/* <div className="col-12">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Birthday</label>
              </div>
            </div> */}
            {/* End col-6 */}

            {/* <div className="col-12">
              <div className="form-input ">
                <textarea required rows={5} defaultValue={""} />
                <label className="lh-1 text-16 text-light-1">
                  About Yourself
                </label>
              </div>
            </div> */}
          </div>
        </div>
        {/* End col-xl-9 */}

        <div className="d-inline-block pt-30">
          <button
            type="submit"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
