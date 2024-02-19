import { useSelector } from "react-redux";
import AddBanner from "@/components/add-banner/AddBanner";
import PopularDestinations from "@/components/destinations/PopularDestinations";
import DefaultFooter from "@/components/footer/default";
import Header1 from "@/components/header/header-1";
import HeaderDashBoard from "@/components/header/dashboard-header";
import Sidebar from "@/components/dashboard/dashboard/common/Sidebar";
import Hero1 from "@/components/hero/hero-1";
import BlockGuide from "@/components/block/BlockGuide";
import Blog from "@/components/blog/Blog3";
import CallToActions from "@/components/common/CallToActions";
// import Destinations from "@/components/home/home-1/Destinations";
import Testimonial from "@/components/home/home-1/Testimonial";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";

import Hotels from "@/components/hotels/Hotels";
import Tours2 from "@/components/tours/Tours2";
import Activity2 from "@/components/activity/Activity2";
import Rentals from "@/components/rentals/Rentals";
import Cars from "@/components/cars/Cars";
import Cruise3 from "@/components/cruise/Cruise3";
import Flights from "@/components/flight/Flights";

// import SelectFilter from "@/components/hotels/filter-tabs/SelectFilter";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Home | Devsthan Expert - Travel & Tours",
  description: "Devsthan Expert - Travel & Tours",
};

const Home_1 = () => {
  const isHomePage = window.location.pathname === '/';
  const currentTab = useSelector((state) => state.hero.currentTab);
  // const userEmail = () => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   if(user['emailAddress']){
  //       return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  const isNotLoggedIn = sessionStorage['length'] === 0;

  
  console.log(sessionStorage);

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}
      
      {isNotLoggedIn? 
      
      <Header1 /> 
      
      : 
      
      <HeaderDashBoard />
      
      }
      
      {/* End Header 1 */}
      {!isNotLoggedIn? 
      <div className="dashboard">
        <div className={`dashboard__sidebar  ${isHomePage? 'dashboard__dropdown':''} bg-white scroll-bar-1`}>
            <Sidebar />
          {/* End sidebar  */}
        </div>
      </div> 
      : 
      <div></div>
      }

      <Hero1 />
      {/* End Hero 1 */}

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                View All Destinations
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End AddBanner */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">{currentTab}</p>
              </div>
            </div>
            {/* <div className="col-sm-auto">
              <SelectFilter />
            </div> */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
            {(() => {
              switch (currentTab) {
                case "Hotel":
                  return <Hotels />;
                case "Tour":
                  return <Tours2 />;
                case "Activity":
                  return <Activity2 />;
                case "Homestays and Camps":
                  return <Rentals />;
                case "Car":
                  return <Cars />;
                case "Cruise":
                  return <Cruise3 />;
                case "Flights":
                  return <Flights />;
                default:
                  return <Hotels />;
              }
            })()}
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* Recommended Properties */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      {/* Block Guide Section */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      {/* <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div> */}
          {/* End .row  */}
          {/* <div className="row y-gap-30 pt-40">
            <Blog /> */}
          {/* </div> */}
          {/* End .row */}
         {/* </div> */}
        {/* End .container */}
       {/* </section> */}
      {/* End blog Section */}

      {/* <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Destinations we love</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div> */}
      {/* End .row */}

      {/* <div className="tabs -pills pt-40 js-tabs">
            <Destinations />
          </div> */}
      {/* End tabs */}
      {/* </div>
      </section> */}
      {/* End Destination we love Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default Home_1;
