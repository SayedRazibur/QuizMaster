import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const navigate = useNavigate();
    const { login } = useAuth();
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to Login!');
        }
    }

    return (
        <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                icon="lock"
                required
                on
            />
            <Button disabled={loading} type="submit">
                {' '}
                <span>Submit Now</span>
            </Button>
            {error && <p className="error">{error}</p>}
            <div className="info">
                Do you have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}
