import React from "react";
import AnalyticsCard from "../../components/Analytics/AnalyticsCard";
import Charts from "../../components/Analytics/Charts";
import TrafficCount from "../../components/Analytics/TrafficCount";

const Analytics = () => {
  return (
    <div className="bg-background">
      <AnalyticsCard />
      <Charts />
      <TrafficCount />
    </div>
  );
};

export default Analytics;
