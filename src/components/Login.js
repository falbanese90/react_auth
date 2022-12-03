import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
import '../css/Login.css'
import useAuth from '../hooks/useAuth';
import { decodeToken } from 'react-jwt';

const LOGIN_URL = '/users/athenticate'

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [usr, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [usr, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://0.0.0.0:3000/members/auth', JSON.stringify({ email: usr, password: pwd }), {
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data;
            if (accessToken == 'Unauthorized') {
                setAuth({ accessToken, roles: [] })
            } else {
                const current = decodeToken(accessToken, 'TOKEN');
                setAuth({ accessToken, roles: current });
            }
            setUser('');
            setPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server Response')
            } else if (err?.response === 400) {
                setErrMsg('Missing username or password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Email:</label>
                <input type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={usr}
                required
                /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                /><br />
                <button>Sign In</button>
            </form>
            <p>
                Need and Account?<br />
                <span className="line">
                    {/*put router link here*/}
                    <Link to={'/register'}>Sign up</Link>
                </span>
            </p>
        </section>
    )
}

export default Login