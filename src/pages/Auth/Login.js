import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();

    const [role, setRole] = useState('');

    const demo = '[ROLE_SUPER_USER]';

    const loginFormSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

            fetch('http://localhost:8083/v1/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data?.status === 401 || data.status === 403){
                    return navigate('/')
                }
                else{
                    const token = data.content?.token;
                    localStorage.setItem('token', token)
                    const role = data.content?.role;
                    setRole(role);
                    console.log(data.status);
                }
            });
    };



    if(role === '[ROLE_SUPER_ADMIN]'){
        navigate('/dashboard');
    }
    else if(role === '[ROLE_USER]'){
        navigate('/user')
    }



    return (

        <>

            <div className='w-50 mx-auto shadow my-5 py-5 p-5 rounded'>
                <h4 className='text-center text-info'> Login </h4>
                <Form onSubmit={loginFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control name='username' type="text" placeholder="Enter use name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    
                </Form>
            </div>

        

        </>
    );
};

export default Login;