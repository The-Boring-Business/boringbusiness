import Input from "./Input";
import DOB from "./DOB";

const UpdateInfo = () => {
  return (
    <div>
      <h2>Update Profile</h2>
      <div>
        <Input title="Display Name" placeholder="Your Name" />
        <Input title="Pick a unique username" placeholder="@username" />
        <Input title="Pick a Niche" placeholder="What do you do?" />
        <DOB title="Date of Birth" />
      </div>
      <button>Save new details</button>
    </div>
  );
};

export default UpdateInfo;
