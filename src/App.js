import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Profile from "./components/Profile/Profile";
import Analytics from "./components/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import SchedulePost from "./components/Schedule Post/SchedulePost";
import Moderation from "./components/Moderation/Moderation";
import LandingPage from "./components/Landing Page/LandingPage";
import MenuItem from "./components/Dashboard/subcomponents/MenuItem"
import LogIn from './components/Auth/LogIn'
import Register from './components/Auth/Register'
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
        <Route  path="/dashboard">
          <div className="app">
            <div className="dashboard">
              <h2>Dashboard</h2>
              <div className="dashboard-menu-item-container">
                <div onClick={() => setMode("schedule")}>
                  <MenuItem icon={calendar} title="Schedule" isActive="True"  />
                </div>
                <div onClick={() => setMode("analytics")}>
                  <MenuItem icon={chart} title="Analytics" isActive="False"  />
                </div>
                <div onClick={() => setMode("moderation")}>
                  <MenuItem icon={sheild} title="Moderation" isActive="False"  />
                </div>
                <div onClick={() => setMode("profile")}>
                  <MenuItem icon={profile} title="Profile" isActive="False"  />
                </div>
              </div>
              <LogOut />
            </div>
            {displayContent()}

          </div>
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route  path="/login">
          <LogIn/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
