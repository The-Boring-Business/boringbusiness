const DOB = ({ title }) => {
  return (
    <div className="profile-input">
      <p>{title}</p>
      <div className="input-text">
        <input type="date" />
      </div>
    </div>
  );
};

export default DOB;
