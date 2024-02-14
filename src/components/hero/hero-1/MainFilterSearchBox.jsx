import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import HotelSearchBar from "./HotelSearchBar";
import TourSearchBar from "./TourSearchBar";
import ActivitySearchBar from "./ActivitySearchBar";
import HomestaysSearchBar from "./HomestaysSearchBar";
import CarSearchBar from "./CarSearchBar";
import CruiseSearchBar from "./CruiseSearchBar";
import FlightSearchBar from "./FlightSearchBar";

const MainFilterSearchBox = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  
  let searchBarComponent;

  switch (currentTab) {
    case "Hotel":
      searchBarComponent = <HotelSearchBar />;
      break;
    case "Tour":
      searchBarComponent = <TourSearchBar />;
      break;
    case "Activity":
      searchBarComponent = <ActivitySearchBar />;
      break;
    case "Homestays and Camps":
      searchBarComponent = <HomestaysSearchBar />;
      break;
    case "Car":
      searchBarComponent = <CarSearchBar />;
      break;
    case "Cruise":
      searchBarComponent = <CruiseSearchBar />;
      break;
    case "Flights":
      searchBarComponent = <FlightSearchBar />;
      break;
    default:
      searchBarComponent = <TourSearchBar />;
  }

  return (
    <>
      <div className="tabs__controls d-flex x-gap-20 y-gap-20 justify-center sm:justify-start js-tabs-controls">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            className={`tabs__button text-15 fw-500 text-white pb-4 js-tabs-button ${
              tab?.name === currentTab ? "is-tab-el-active" : ""
            }`}
            onClick={() => dispatch(addCurrentTab(tab?.name))}
            disabled={tab?.name !== "Tour"}
          >
            {tab?.name}
          </button>
        ))}
      </div>
      
      {searchBarComponent}
      {/* End serarchbox tab-content */}
    </>
  );
};

export default MainFilterSearchBox;
