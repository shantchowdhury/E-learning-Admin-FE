import React from "react";
import SocialTraffic from "./SocialTraffic";
import TrafficSources from "./TrafficSources";

const TrafficCount = () => {
  return (
    <div className="flex gap-6">
        <TrafficSources />
        <SocialTraffic />
    </div>
  );
};

export default TrafficCount;
