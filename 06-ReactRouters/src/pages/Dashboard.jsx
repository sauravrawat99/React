import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const data = useLoaderData();
  if (!data) return <h1>loading..</h1>;
  return (
    <div>
      <h1>User List</h1>

      {data?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Dashboard;
