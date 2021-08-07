import Profile from "./components/Profile/Profile";
import Analytics from "./components/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import SchedulePost from "./components/Schedule Post/SchedulePost";

function App() {
  return (
    <div className="app">
      <Dashboard />
      {/* <Profile /> */}
      <Analytics />
      {/* <SchedulePost /> */}
    </div>
  );
}

export default App;
