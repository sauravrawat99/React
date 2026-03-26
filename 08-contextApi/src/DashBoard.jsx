import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const { user } = useOutletContext();

  return user.isLoggedIn ?
      <h1>Dashboard: {user.name}</h1>
    : <h1>Please Login</h1>;
};

export default Dashboard;
