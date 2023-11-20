import React from 'react';

import Illustration from '../illustration';
import SignupForm from '../SignupForm';

const Signup = () => {
    return (
        <>
            <h1>Creat an account</h1>
            <div className="column">
                <Illustration />
                <SignupForm />
            </div>
        </>
    );
};

export default Signup;
