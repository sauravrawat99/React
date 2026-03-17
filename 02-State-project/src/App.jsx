import React from "react";
import Counter from "./Components/Counter";
  import CounteCharacter from "./Components/CounteCharacter";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <Counter />
      <CounteCharacter/>
    </div>
  );
};

export default App;
