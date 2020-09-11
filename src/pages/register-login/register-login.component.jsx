import React from 'react'
import './register-login.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';

const RegisterAndLoginPage = () => {
    return (
        <div>
            <div className="login-register">
<SignIn />
<SignUp/>
            </div>
        </div>
    )
}

export default RegisterAndLoginPage
