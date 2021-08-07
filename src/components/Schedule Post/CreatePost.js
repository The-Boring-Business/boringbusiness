import PostInput from "./subcomponents/PostInput";
import PostToggle from "./subcomponents/PostToggle";
import DOB from "./subcomponents/DOB"

const CreatePost = () => {
  return (
    <div className="component create-post">
      <h2>Create New Post</h2>
      <PostInput
        title="Caption"
        placeholder="Type something..."
        imageUpload="True"
        magicWand="False"
      />
      <PostInput
        title="Hashtags"
        placeholder="Add your own..."
        imageUpload="False"
        magicWand="True"
      />
      <DOB
        title="When to Post"
      />
      <PostToggle />
      <div class="create-post-btn-container">
        {/* <button className="btn-primary">Post Now</button> */}
        <button className="btn-primary">Save & Schedule</button>
      </div>
    </div>
  );
};

export default CreatePost;
