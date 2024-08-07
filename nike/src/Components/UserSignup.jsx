import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import '../Components/UserSignup.css';

export const UserSignup = () => {
    const [fullName, setFullName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createUname, setCreateUname] = useState('');

    const nav = useNavigate();

    useEffect(() => {
        if (userEmail.length >= 4) {
            const geneRandom = Math.floor(1000 + Math.random() * 9000);
            const emailPrefix = userEmail.substring(0, 4);
            const newUserName = emailPrefix + geneRandom;
            setCreateUname(newUserName);
        }
    }, [userEmail]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const response = await axios.post('http://localhost:4500/userdata/userinsert', {
                fullName,
                userName: createUname,
                userEmail,
                userNumber,
                password: hashedPassword
            });

            console.log(response);
            alert("Signed up successfully");
            nav('/ulogin');
        } catch (error) {
            console.error(error);
            alert("Sign up error");
        }
    };

    return (
        <Container fluid className='sign-ctn'>
            <form onSubmit={handleSubmit} className='log-frm'>
                <h2>Signup Form</h2>
                <input
                    type="text"
                    required
                    placeholder='Full Name'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    required
                    placeholder='Email'
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <input
                    type="number"
                    required
                    placeholder='Contact Number'
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                />
                <input
                    type="password"
                    required
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    required
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </Container>
    );
};

export default UserSignup;