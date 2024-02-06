// import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/hotels";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Vendor Hotels | Devsthan Expert - Travel & Tours",
  description: "Devsthan Expert - Travel & Tours",
};

export default function BVVendorHotel() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
