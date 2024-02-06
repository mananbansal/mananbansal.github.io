// import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-booking";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Booking History | Devsthan Expert - Travel & Tours",
  description: "Devsthan Expert - Travel & Tours",
};

export default function DBBooking() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
