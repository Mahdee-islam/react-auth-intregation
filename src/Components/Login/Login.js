import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';




const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className='mt-5'>
            <h2>Please Log in</h2>
             <button onClick={signInUsingGoogle} className='btn btn-primary'>Google</button>
             <br />
             <Link to="/register" >New user?</Link>
        </div>
    );
};

export default Login;