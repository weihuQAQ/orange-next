import type { FC } from "react";
import "./index.scss";

import { useForm } from "react-hook-form";

const Login: FC = () => {
  const methods = useForm();

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2 className="title">Login</h2>

        <form noValidate>
          <div className="username">
            <label>
              <span>username: </span>
              <input type="text" />
            </label>
          </div>

          <div className="password">
            <label>
              <span>username: </span>
              <input type="password" />
            </label>
          </div>

          <div className="submit-btn">
            <button></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
