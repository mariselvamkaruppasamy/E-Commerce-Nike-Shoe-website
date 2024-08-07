import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/UserForm.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import { cartDetailsContext } from '../App';

export const UserForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');
    const navigate = useNavigate();
    const { setUserId, setUserName} = useContext(cartDetailsContext);

    const userSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:4500/userdata/userlogin', { userEmail, password });
            console.log(res);

            if (res.data.userFound) {
                const { userId, userName} = res.data;

                localStorage.setItem('userId', userId);
                localStorage.setItem('userName', userName); 

                setUserId(userId);
                setUserName(userName);

                alert("Login Success");
                navigate('/');
            } else {
                alert('Login Failed');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred. Please try again');
        }
    };

    return (
        <Container fluid className='log-ctn'>
            <div className="right-form">
                <h2>Login Form</h2>
                <form onSubmit={userSubmit}>
                    <div className="inpts">
                        <input
                            type="email"
                            required
                            placeholder='Email'
                            onChange={(e) => setUserEmail(e.target.value)}
                            value={userEmail}
                        />
                        <input
                            type="password"
                            required
                            placeholder='Password'
                            onChange={(e) => setUserPassword(e.target.value)}
                            value={password}
                        />
                        <input type="submit" className='sbt-btn' value='Login' />
                    </div>
                    <div className="dont">
                        <p>Don't have an account? </p>
                        <Link to='/usign' className='sign'>Signup</Link>
                    </div>
                </form>
            </div>
        </Container>
    );
};
