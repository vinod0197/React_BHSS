import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaValue, setCaptchaValue] = useState(Math.floor(Math.random() * 9000) + 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha === captchaValue.toString()) {
      onLogin(username);
    } else {
      alert('Incorrect Captcha. Please try again.');
      setCaptcha('');
      setCaptchaValue(Math.floor(Math.random() * 9000) + 1000); // Regenerate captcha
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={styles.card}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Captcha Field */}
          <div className="mb-3">
            <label htmlFor="captcha" className="form-label">
              Captcha: <strong>{captchaValue}</strong>
            </label>
            <input
              type="text"
              id="captcha"
              className="form-control"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder="Enter the captcha"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '400px',
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
};

export default LoginPage;
