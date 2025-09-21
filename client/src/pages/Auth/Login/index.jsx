// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Input, Button, Typography, Row, Col, Card, Form } from 'antd';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../../config/firebase';
// import { CloseOutlined } from '@ant-design/icons'; // Added close icon

// const Login = () => {
//     const { Title, Paragraph } = Typography;
//     const [isLoading, setIsLoading] = useState(false);
//     const [form] = Form.useForm();
//     const navigate = useNavigate();

//     const handleSubmit = async (values) => {
//         const { email, password } = values;

//         setIsLoading(true);

//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log('Logged in user:', user);
//                 window.notify('Login successful!', "success");
//                 // navigate('/'); // Redirect after login
//             })
//             .catch((error) => {
//                 let errorMessage = "Login failed";
//                 switch (error.code) {
//                     case 'auth/user-not-found':
//                     case 'auth/invalid-credential':  // New case added
//                         errorMessage = "Login feild! Account not found. Please register first";
//                         break;
//                     case 'auth/wrong-password':
//                         errorMessage = "Incorrect password";
//                         break;
//                     case 'auth/too-many-requests':
//                         errorMessage = "Too many attempts. Try again later";
//                         break;
//                     case 'auth/invalid-email':
//                         errorMessage = "Invalid email format";
//                         break;
//                     default:
//                         console.error("Login error:", error);
//                 }
//                 window.notify(errorMessage, 'error');
//             })
//             .finally(() => {
//                 setIsLoading(false);
//                 form.resetFields(); // Reset in finally to clear after error too
//             });
//     };

//     const handleClose = () => {
//         navigate('/'); // Navigates to home page
//     };

//     return (
//         <main className="register-page p-3 p-md-4">
//             <Card className="register-card p-2 p-md-3">
//                 <Button type="text" icon={<CloseOutlined />} onClick={handleClose} style={{ position: 'absolute', top: 16, right: 16, zIndex: 1, border: 'none' }} />
//                 <Title level={2} className="register-title">Login</Title>

//                 <Form layout='vertical' form={form} onFinish={handleSubmit}>
//                     <Row gutter={16}>
//                         <Col xs={24}>
//                             <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Enter a valid email' }]} >
//                                 <Input placeholder="Enter your email" size="large" />
//                             </Form.Item>
//                         </Col>
//                         <Col xs={24}>
//                             <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password' }, { min: 6, message: 'Password must be at least 6 characters' }]}>
//                                 <Input.Password placeholder="Enter your password" size="large" />
//                             </Form.Item>
//                         </Col>
//                         <Col span={24}>
//                             <Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
//                                 Login
//                             </Button>
//                         </Col>
//                         <Col span={12} className='text-center mt-3' style={{ fontWeight: "200" }} >
//                             <Paragraph className='mb-0 mt-1'>
//                                 Don't have an account?{' '}
//                                 <Link to="/auth/register" style={{ color: '#1890ff', fontWeight: '300', textDecoration: 'underline' }}>
//                                     Register
//                                 </Link>
//                             </Paragraph>
//                         </Col>
//                         <Col span={12} className='text-center mt-3 mb-0' style={{ fontWeight: "200" }} >
//                             <Paragraph className='mb-0 mt-1'>
//                                 Forget {''}
//                                 <Link to="/auth/forget-password" style={{ color: '#1890ff', fontWeight: '300', textDecoration: 'underline' }}>
//                                     Password.
//                                 </Link>
//                             </Paragraph>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Card>
//         </main >
//     );
// };

// export default Login;

import React from 'react'

const Login = () => {
    return (
        <div>Login</div>
    )
}

export default Login