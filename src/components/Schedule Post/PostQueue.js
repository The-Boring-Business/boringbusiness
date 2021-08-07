import Post from "./subcomponents/Post";

const PostQueue = () => {
  return (
    <div className="post-queue">
      <h2>Post Queue</h2>
      <div>
        <Post
          type="Twitter"
          time="3 PM, Today"
          content="Today is a beautiful day..."
        />
        <Post
          type="Instagram"
          time="3 PM, Today"
          content="Today is a beautiful day..."
        />
      </div>
    </div>
  );
};

export default PostQueue;
