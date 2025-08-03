import React from 'react';
import { AuthContext } from '../authcontext/AuthContext';

const AuthProvider = ({children}) => {



    const userInfo = {
        
    }

    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;