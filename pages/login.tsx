import Head from 'next/head'
import {useState, useEffect} from 'react'

import lstyle from '../styles/Login.module.css'

//  google login auth
const handleGoogleLogin = () => {
    console.log('google login')
};


const EternalLogin : React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    
    const handleLogin = () => {
        setIsLogin(true)
    }
    
    useEffect(() => {
        if (isLogin) {
            console.log('login')
        }
    }, [isLogin]);


    return (
    <div className={lstyle.LoginOverlay}>
        <div className={lstyle.LoginContainer}>
            <form className="login-form">
                <h1>Login</h1>
                <button onClick={handleGoogleLogin}>Sign in with Google</button>
            </form>
        </div>
    </div>
    );
}


export default EternalLogin;


