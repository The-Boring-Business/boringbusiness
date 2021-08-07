const DOB = ({ title }) => {
    return (
      <div className="profile-input">
        <p style={{fontWeight: "700"}}>{title}</p>
        <div className="input-text">
          <input type="date" />
        </div>
      </div>
    );
  };
  
  export default DOB;
  