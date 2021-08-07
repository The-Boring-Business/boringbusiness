import Profile from "./components/Profile/Profile";
import Analytics from "./components/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import SchedulePost from "./components/Schedule Post/SchedulePost";
import Moderation from "./components/Moderation/Moderation";
import Twitter from './components/Analytics/subcomponents/Twitter'

function App() {
  return (
    <div className="app">
      <Dashboard />
      <Profile />
      {/* <Moderation /> */}
      {/* <Analytics /> */}
      {/* <SchedulePost /> */}
      <Twitter/>
    </div>
  );
}

export default App;
