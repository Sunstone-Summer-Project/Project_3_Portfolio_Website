"use client";
import React, { useState } from 'react';
import { signUp, logIn, logOut } from '../data/authFunctions'; // Adjust the path as necessary
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebaseConfig"; // Import your Firebase auth instance
import { IconBrandGoogle } from '@tabler/icons-react';

const SignupFormDemo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formType, setFormType] = useState<'signUp' | 'logIn'>('signUp');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setIsLoggedIn(true);
      alert('Sign Up Successful!');
    } catch (error) {
      console.error('Sign Up Error:', error);
      setError('Sign Up Failed!');
    }
  };

  const handleLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      setIsLoggedIn(true);
      alert('Log In Successful!');
    } catch (error) {
      console.error('Log In Error:', error);
      setError('Log In Failed!');
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      setIsLoggedIn(false);
      alert('Logged Out Successfully!');
    } catch (error) {
      console.error('Log Out Error:', error);
      setError('Log Out Failed!');
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      alert('Google Sign-In Successful!');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      setError('Google Sign-In Failed!');
    }
  };

  return (
    <div className="max-w-md w-full border-black border-[1px] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {isLoggedIn ? 'Welcome Back' : formType === 'signUp' ? 'Sign Up' : 'Log In'}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {isLoggedIn
          ? "You are logged in. You can log out using the button below."
          : formType === 'signUp'
            ? "Create a new account."
            : "Log in to your account."
        }
      </p>

      {error && <p className="text-red-500">{error}</p>}

      {!isLoggedIn ? (
        <form
          onSubmit={formType === 'signUp' ? handleSignUp : handleLogIn}
          className="my-8"
        >
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium"
          >
            {formType === 'signUp' ? 'Sign Up' : 'Log In'}
          </button>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setFormType(formType === 'signUp' ? 'logIn' : 'signUp')}
              className="text-blue-500"
            >
              {formType === 'signUp' ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
            </button>
          </div>
          <div className="flex flex-col space-y-4 relative top-[16px]">
            <button
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Sign in with Google
              </span>
            </button>

          </div>
        </form>
      ) : (
        <button
          onClick={handleLogOut}
          className="bg-red-600 text-white rounded-md h-10 w-full"
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default SignupFormDemo;
