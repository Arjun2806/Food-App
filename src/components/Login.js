import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    // For the sake of this example, we're using a mock authentication
    if (username === "user" && password === "password") {
      // Replace with actual authentication logic
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="main-container">
      <form className="form" onSubmit={handleLogin}>
        <div className="login-heading">
          <p>Login</p>
        </div>
        <div className="group">
          <svg
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-2.5 0-7 1.25-7 3.75V20h14v-2.25c0-2.5-4.5-3.75-7-3.75z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>

          <input
            className="input"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="group">
          <svg
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <input
            className="input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
};
