const Input = ({title, placeholder}) => {
    return (
      <div className="input-text">
       <p>{title}</p>
       <input type="text" placeholder={placeholder} />
      </div>
    );
  };
  
  export default Input;
  