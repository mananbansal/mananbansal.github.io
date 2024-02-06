// import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-wishlist";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Wishlist | Devsthan Expert - Travel & Tours",
  description: "Devsthan Expert - Travel & Tours",
};

export default function DBWishlist() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
