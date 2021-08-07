const TopGreeting = ({ user, greeting }) => {
  return (
    <div className="top-greeting">
      <h3>Hi {user},</h3>
      <h1>{greeting}</h1>
    </div>
  );
};

export default TopGreeting;
