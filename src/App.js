import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useState} from "react";
import Profile from "./components/Profile/Profile";
import Analytics from "./components/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import SchedulePost from "./components/Schedule Post/SchedulePost";
import Moderation from "./components/Moderation/Moderation";
import Twitter from "./components/Analytics/subcomponents/Twitter";
import LandingPage from "./components/Landing Page/LandingPage";
import MenuItem from "./components/Dashboard/subcomponents/MenuItem"
import LogOut from "./components/Dashboard/subcomponents/LogOut";
import calendar from "./style/Icons/Dashboard/Calendar.svg";
import chart from "./style/Icons/Dashboard/Chart.svg";
import sheild from "./style/Icons/Dashboard/Sheild.svg";
import profile from "./style/Icons/Dashboard/Profile.svg";

function App() {
  const [mode,setMode] = useState("profile")
  const displayContent = () => {
    switch(mode) {
      case "schedule":
        return <SchedulePost />;
      case "moderation":
        return <Moderation />;
      case "analytics":
        return <Analytics />;
      case "profile":
        return <Profile />;
    }
  }
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <div className="app">
            <div className="dashboard">
              <h2>Dashboard</h2>
              <div className="dashboard-menu-item-container">
                <MenuItem icon={calendar} title="Schedule" isActive="True"  />
                <MenuItem icon={chart} title="Analytics" isActive="False"  />
                <MenuItem icon={sheild} title="Moderation" isActive="False" />
                <MenuItem icon={profile} title="Profile" isActive="False" />
              </div>
              <LogOut />
            </div>
            {displayContent()}
            {/* <Profile /> */}
            {/* <Moderation /> */}
            {/* <Analytics /> */}
            {/* <SchedulePost /> */}
          </div>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      {/* <Twitter /> */}
    </Router>
  );
}

export default App;
