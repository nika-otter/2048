import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input type="text" placeholder="Email" />
    </div>
  );
};
export default LoginForm;
