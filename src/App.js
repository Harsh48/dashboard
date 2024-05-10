import "./App.css";
import Sidebar from "./components/Sidebar";
import { SidebarItem } from "./components/Sidebar";
import Header from "./components/Header";
import { Tabs, Tab } from "./components/Tabs";
import OverviewTab from "./components/OverviewTab";
import application from "./assets/application.svg";
import connections from "./assets/connections.svg";
import cost from "./assets/cost.svg";
import security from "./assets/security.svg";
import overview from "./assets/overview.svg";
import environment from "./assets/environment.svg";
import alerts from "./assets/alerts.svg";
import event from "./assets/event.svg";
import EnviromentTab from "./components/EnviromentTab";

function App() {
  return (
    <div className="App h-screen flex flex-row justify-start">
      <Sidebar>
        <SidebarItem icon={application} text="Application" active />
        <SidebarItem icon={connections} text="Connections" />
        <SidebarItem icon={cost} text="Cost" />
        <SidebarItem icon={security} text="Security" />
      </Sidebar>
      <div className="flex-1 overflow-hidden bg-[#F8F8F8]">
        <Header />
        <Tabs>
          <Tab component={<OverviewTab/>} active>
            <div className="flex gap-1 items-center">
              <img src={overview} className="inline" alt="" />
              <span>Overview</span>
            </div>
          </Tab>
          <Tab component={<EnviromentTab />}>
            <div className="flex gap-1 items-center">
              <img src={environment} className="inline" alt="" />
              <span>Environment Variables</span>
            </div>
          </Tab>
          <Tab component="content of tab 3">
            <div className="flex gap-1 items-center">
              <img src={alerts} className="inline" alt="" />
              <span>Alerts</span><span className="w-1.5 h-1.5 rounded-full bg-alert-color -mt-[5px]"></span>
            </div>
          </Tab>
          <Tab component="content of tab 4">
            <div className="flex gap-1 items-center">
              <img src={event} className="inline" alt="" />
              <span>Event history</span>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
