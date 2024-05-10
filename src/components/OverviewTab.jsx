import React from "react";
import ServiceMetrics from "./ServiceMetrics";
import EventHistory from "./EventHistory";
import expand from "../assets/expand.svg";
import status from "../assets/status.svg";

const OverviewTab = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg bg-white border p-4">
        <div className="flex justify-between">
          <span className="text-base font-bold text-cards-head">Service info</span>
          <img className="cursor-pointer" src={expand} alt="" />
        </div>
        <div className="flex gap-12 mt-3">
          <div className="w-40">
            <span className="text-xs font-medium text-cards-head">Current version</span>
            <div className="flex gap-2 mt-1">
              <img src={status} alt="" />
              <span className="text-sm font-medium">In sync</span>
            </div>
          </div>
          <div className="w-40">
            <span className="text-xs font-medium text-cards-head">Desired version</span>
            <div className="mt-1">
              <span className="text-sm font-medium">1.2.1</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 items-center">
          <button className="w-24 h-9 bg-[#6E27D5] text-white font-medium rounded">Deploy</button>
          <span className="text-xs font-medium text-cards-head">Last updated 5 hours ago</span>
        </div>
      </div>
      <div className="flex gap-4 h-[396px]">
        <ServiceMetrics/>
        <EventHistory/>
      </div>
    </div>
  );
};

export default OverviewTab;
