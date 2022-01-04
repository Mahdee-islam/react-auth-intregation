import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form action="" className='w-50 mx-auto mt-5'>
                <div className="mb-3">
                     <input type="email" className="form-control"  placeholder="Enter your Email"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control"  placeholder="Enter your Password"/>
                     <button type="submit" className='btn btn-primary mt-2'>Submit</button>
                </div>
            </form>
          
<Link to="/login">Already Registerd?</Link>
        </div>
    );
};

export default Register;