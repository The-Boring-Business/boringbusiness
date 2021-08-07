import TopGreeting from "./../UI Elements/TopGreeting";
import PostQueue from "./PostQueue";
import CreatePost from "./CreatePost";

const SchedulePost = () => {
  return (
    <div className="schedule-post">
     
        <TopGreeting user="Rishabh" greeting="Let’s Schedule some Posts!" />
        <div className="schedule-post-main-container">
          <PostQueue />
          <CreatePost />
        </div>
    </div>
  );
};

export default SchedulePost;
