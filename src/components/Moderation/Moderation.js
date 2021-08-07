import Queries from  "./subcomponents/Queries"
import Reply from  "./subcomponents/Reply"
import Blog from  "./../UI Elements/Blog"

const Moderation = () => {
    return (
      <div>
          <Queries />
          <div>
              <Reply />
              {/* <Blog /> */}
          </div>
      </div>
    );
  };
  
  export default Moderation;
  