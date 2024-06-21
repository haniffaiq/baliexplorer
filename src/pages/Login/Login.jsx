import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ darkMode }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRememberMeChange = () => setRememberMe(!rememberMe);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:5000/auth/login', {
                username,
                email,
                password,
            });
            console.log(response.data.data.token);
            if (response.status === 200 && response.data.data.token) {
                console.log('Login successful:', response.data.data.token);
                const token  = response.data.data.token
                sessionStorage.setItem('token', "Bearer " + token);
                window.location.replace('/home');
            } else {
                throw new Error('Login failed'); 
            }
        } catch (error) {
            setError('Failed to login. Please check your credentials.');
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    const checkAuthToken = () => {
        const authToken = sessionStorage.getItem('authToken');
        if (authToken) {
            console.log('Token ditemukan:', authToken);
            // Lakukan sesuatu jika token ditemukan, misalnya lakukan navigasi ke halaman yang diizinkan
        } else {
            console.log('Token tidak ditemukan.');
            // Lakukan sesuatu jika token tidak ditemukan, misalnya arahkan pengguna untuk login
        }
    };

    useEffect(() => {
        checkAuthToken();
    }, []);

    return (
        <div className={`min-h-screen flex items-center justify-center w-full ${darkMode ? 'dark:bg-gray-950' : 'bg-gray-100'}`}>
            <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
                <h1 className={`text-2xl font-bold text-center mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>Welcome Back!</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="username" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className={`shadow-sm rounded-md w-full px-3 py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            placeholder="your_username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className={`shadow-sm rounded-md w-full px-3 py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <label htmlFor="password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                        <button className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-500'} hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} type="button">Forgot Password?</button>
                    </div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={`shadow-sm rounded-md w-full px-3 py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        placeholder="Enter your password"
                        required
                    />
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        />
                        <label htmlFor="remember" className={`ml-2 block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Remember me</label>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' : 'bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'}`}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Don't have an account? <button type="button" className={`text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>Create Account</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
