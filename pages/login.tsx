import Head from 'next/head'
import {useState, useEffect} from 'react'

import styles from '../styles/Home.module.css'
import mainstyle from '../styles/Main.module.css'

const EternalLogin : React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
        <div>
            <main>
                This is the login page! -- make the sign up page as well!
            </main>
        </div>
    );
}


export default EternalLogin;


