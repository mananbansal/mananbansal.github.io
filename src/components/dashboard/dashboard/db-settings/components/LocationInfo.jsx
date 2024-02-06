import {useState, useEffect } from "react";
const LocationInfo = () => {
  const [userInfo, setUserInfo] = useState({
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
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
    <form className="col-xl-9" onSubmit={handleSubmit}>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input 
              type="text" 
              required 
              value={userInfo.address}
                  onChange={(e) => handleChange('address', e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">Address</label>
          </div>
        </div>
        {/* End col-12 */}

        {/* <div className="col-12">
          <div className="form-input ">
            <input 
              type="text" 
              required 
          
            />
            <label className="lh-1 text-16 text-light-1">Address Line 2</label>
          </div>
        </div> */}
        {/* End col-12 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input 
              type="text" 
              required 
              value={userInfo.city}
                  onChange={(e) => handleChange('city', e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">City</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input 
              type="text" 
              required 
              value={userInfo.state}
                  onChange={(e) => handleChange('state', e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">State</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input 
              type="text" 
              required 
              value={userInfo.country}
                  onChange={(e) => handleChange('country', e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">Country</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input 
              type="text" 
              required 
              value={userInfo.zipCode}
                  onChange={(e) => handleChange('zipCode', e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">ZIP Code</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-12">
          <div className="d-inline-block">
            <button
              type="submit"
              className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            >
              Save Changes <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationInfo;
