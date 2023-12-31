
import React, { useState } from 'react';

const ResetPassword = ({ match }) => {
  const { token } = match.params;
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:3000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error resetting password. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input type="password" placeholder="Enter your new password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
