import React, { useState } from "react";

const SignUp = () => {
  const [count, setCount] = useState(0);
  // username can't be more than 15 chars
  // password can't be more than 72 chars

  return (
    <div>
      hello!
      {count}
    </div>
  )

};

export default SignUp;