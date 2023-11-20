import React from 'react';
import LoginForm from '../LoginForm';
import Illustration from '../illustration';

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <LoginForm />
            </div>
        </>
    );
};

export default Login;
