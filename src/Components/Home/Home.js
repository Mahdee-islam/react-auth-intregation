import React from 'react';
import useAuth from '../../Hook/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>This is home.</h2>
           {user.email && <h5>User: { user.displayName}</h5>}
        </div>
    );
};

export default Home;