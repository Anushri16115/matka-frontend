import React, { useState } from "react";
import "../styles/globals.css";

interface LoginFormProps {
  onLogin: (credentials: { username: string; password: string }) => void;
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onLogin(formData);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="login-header">
          <h2>Login to Matka Game</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="form-footer">
            <a href="#forgot-password">Forgot Password?</a>
            <a href="#register">Don't have an account? Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
