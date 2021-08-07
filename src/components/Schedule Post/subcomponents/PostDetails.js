const PostDetails = ({time, content}) => {
    return (
        <div className="post-details">
           <h3>{time}</h3>
           <p>{content}</p>
        </div>
    )
}

export default PostDetails;