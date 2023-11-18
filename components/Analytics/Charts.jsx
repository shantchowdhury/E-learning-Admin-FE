import React from "react";
import DeviceSessions from "./DeviceSessions";
import SiteTraffic from "./SiteTraffic";

const Charts = () => {
  return (
    <div className="flex gap-6 my-8 font-poppins">
      <SiteTraffic />
      <DeviceSessions />
    </div>
  );
};

export default Charts;
