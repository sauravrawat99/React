import React, { useState } from "react";

const CounteCharacter = () => {
  const [Counchar, setCountChar] = useState(0);

  const CCH = () => {
    setCountChar((val) => val.target.value);
  };

  console.log(CCH);

  return (
    <div>
      <h1>Num:{Counchar.length}</h1>
      <input type="text" onChange={CCH} />
    </div>
  );
};

export default CounteCharacter;
