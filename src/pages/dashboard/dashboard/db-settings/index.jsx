// import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-settings";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Settings | Devsthan Expert - Travel & Tours",
  description: "Devsthan Expert - Travel & Tours",
};

export default function DBSettings() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
