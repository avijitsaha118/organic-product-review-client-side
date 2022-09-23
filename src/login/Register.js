import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import SocialLogin from './SocialLogin';
import Loading from './../shared/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Update Profile');
        navigate('/home');

    }
    return (
        <div className='register-form'>
            <h1 style={{ textAlign: 'center' }}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type='text' name='text' id='' placeholder='Your Name'></input>
                <input type='email' name='email' id='' placeholder='Your Email' required></input>
                <input type='password' name='password' id='' placeholder='Password' required></input>
                <input onClick={() => setAgree(!agree)} type='checkbox' name='terms' id='terms'></input>
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor='terms'>Accept Terms and Conditions</label>
                <input disabled={!agree}
                    className='w-50 mx-auto btn-secondary mt-2' type='submit' value='Register'></input>
            </form>
            <p>Already have an account? <Link to='/login' className='text-success pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;