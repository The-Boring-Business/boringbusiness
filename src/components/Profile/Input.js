const Input = ({ title, placeholder }) => {
  return (
    <div className=" profile-input">
      <p>{title}</p>
      <div className="input-text profile-input-text">
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
