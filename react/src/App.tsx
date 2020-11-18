import React, { useState } from "react";

export default () => {
  const [stateConut, setCount] = useState(0);
  return (
    <div onClick={() => setCount(stateConut + 1)}>
      {stateConut}
      <div>t</div>
    </div>
  );
};
