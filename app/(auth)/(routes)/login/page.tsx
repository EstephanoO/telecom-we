'use client';

import { pb } from '@/lib/db';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function LoginPage() {
  const route = useRouter();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const form = { email, password };
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        setError('Failed to authenticate user');
        return;
      };
      const data = await response.json();
      if (data?.token) {
        route.push('/');
      } else {
        setError('Failed to authenticate user');
      }
    } catch (err) {
      setEmail('Failed to authenticate user');
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <div className='text-black'>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value || '')}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value || '')}
          />
        </div>

        <button type="submit">Login</button>

        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default LoginPage

