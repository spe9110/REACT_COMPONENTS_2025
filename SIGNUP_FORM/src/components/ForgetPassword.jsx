import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make an API call to request a password reset
    // Example: await api.requestPasswordReset(email);
    setMessage('If the email is registered, a password reset link will be sent.');
  };

  return (
    <div>
    <h2 className="text-4xl font-bold">Forget Password</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Request Password Reset</button>
    </form>
    {message && <p>{message}</p>}
  </div>
  )
}

export default ForgetPassword;
