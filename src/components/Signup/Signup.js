import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        
        // Hardcoded email verification logic for demonstration purposes
        const verifiedEmail = 'verified@example.com';
        
        if (name && email && password && type && phone) {
            alert(`Thank you for signing up! Please check your email at ${email} for verification.`);
            
            // Simulate email verification
            setTimeout(() => {
                alert('Verification successful!');
                navigate('/');// /login
            }, 2000);
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const handleLogin = () => {
        navigate('/'); // /login
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <select
                        id="type"
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">Please select TYPE</option>
                        <option value="internal teams">Customer</option>
                        <option value="admin">Supplier</option>
                        <option value="supplier">Internal Teams</option>
                        <option value="customer">Admin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                <button onClick={handleLogin}>Already have an account? Sign In</button>
            </form>
        </div>
    );
}

export default Signup;
