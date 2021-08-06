import MenuItem from "./subcomponents/MenuItem";
import LogOut from "./subcomponents/LogOut";
import calendar from "./../../style/Icons/Dashboard/Calendar.svg";
import chart from "./../../style/Icons/Dashboard/Chart.svg";
import sheild from "./../../style/Icons/Dashboard/Sheild.svg";
import profile from "./../../style/Icons/Dashboard/Profile.svg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-menu-item-container">
        <MenuItem icon={calendar} title="Schedule Posts" isActive="True" />
        <MenuItem icon={chart} title="Analytics" isActive="False" />
        <MenuItem icon={sheild} title="Moderation" isActive="False" />
        <MenuItem icon={profile} title="Profile" isActive="False" />
      </div>
      <LogOut />
    </div>
  );
};

export default Dashboard;
