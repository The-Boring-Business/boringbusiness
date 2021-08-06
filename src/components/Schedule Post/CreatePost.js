const CreatePost = () => {
  return (
    <div>
      <PostInput />
      <PostInput />
      <PostToggle />
      <div>
        <Button>Post Now</Button>
        <Button>Save & Schedule</Button>
      </div>
    </div>
  );
};

export default CreatePost;
