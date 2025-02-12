import { useState } from "react";
import axios from "axios";

const RequestReset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://b13-task12-pwdreset-backend.onrender.com/api/auth/request-password-reset", { email });
    alert("Reset link sent!");
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default RequestReset;
