import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './../shared/Loading';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }

    if (user || user1) {
        // navigate('/home');
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>
                    or
                </p>
                <div style={{ height: '1px' }} className='bg-success w-50'> </div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-30 d-block mx-auto my-2'>

                    <span className='px-2'>
                         {/* <i><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></i> */}
                          Google Sign In</span>
                </button>

                <button onClick={() => signInWithFacebook()} className='btn btn-success w-30 d-block mx-auto'>

                    <span className='px-2'> 
                    {/* <i><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></i>  */}
                    Facebook Sign In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;