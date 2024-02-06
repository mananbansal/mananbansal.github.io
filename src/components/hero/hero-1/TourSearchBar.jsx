import DateSearch from "../DateSearch";
import FromLocation from "./FromLocation";
import GuestSearch from "./GuestSearch";
// import LocationSearch from "./LocationSearch";
import { useNavigate } from "react-router-dom";
import ToLocation from "./ToLocation";

const TourSearchBar = () => {
    const navigate = useNavigate();
  return (
    <div className="position-relative mt-30 md:mt-20 js-tabs-content">
      <div className="mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100">
        <div className="button-grid items-center">
          <FromLocation />
          {/* End Location From */}

          <ToLocation />
          {/* End Location To */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                Departure
              </h4>
              <DateSearch />
            </div>
          </div>
          <GuestSearch />
          <div className="button-item">
            <button
              className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white"
              onClick={() => navigate('/tour-list-v2')}
            >
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourSearchBar