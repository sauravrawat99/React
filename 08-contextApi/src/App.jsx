import { useState } from "react";
import { UserContext } from "./UserContext.js";

const App = () => {
  const [user, setUser] = useState({
    name: "Saurav",
    isLoggedIn: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <App />
    </UserContext.Provider>
  );
};
