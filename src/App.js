import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Analytics from "./components/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import SchedulePost from "./components/Schedule Post/SchedulePost";
import Moderation from "./components/Moderation/Moderation";
import Twitter from "./components/Analytics/subcomponents/Twitter";
import LandingPage from "./components/Landing Page/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          <div className="app">
          <Dashboard />
          {/* <Profile /> */}
          {/* <Moderation /> */}
          {/* <Analytics /> */}
          <SchedulePost />
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
