import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Admin/AdminLogin.css';

export const AdminLogin = () => {

  const [adminEmail, setAdEmail] = useState('');
  const [adminPassword, setAdPassword] = useState('');

  const navigate = useNavigate();

  const alogSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4500/admindata/login', { adminEmail, adminPassword });
      console.log(res);

      if (res.data.message === "Success") {
        alert("Login Success");
        navigate('/acontrol');
      } else {
        alert('Login Failed')
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Container fluid className='adLog-ctn'>
        <form onSubmit={alogSubmit} className='alog-frm'>
          <h2>Admin Login</h2>
          <input
            type="email"
            required
            placeholder='Email'
            onChange={(e) => setAdEmail(e.target.value)}
            value={adminEmail}
          />
          <input
            type="password"
            required
            placeholder='Password'
            onChange={(e) => setAdPassword(e.target.value)}
            value={adminPassword}
          />
          <button type='submit'>Login</button>
        </form>
      </Container>
    </>
  );
}