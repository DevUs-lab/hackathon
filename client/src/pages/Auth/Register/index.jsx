// import React, { useState } from 'react';
// import { Input, Button, Typography, Row, Col, Card, Form } from 'antd';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, firestore } from '../../../config/firebase';
// import { Link } from 'react-router-dom';
// import { CloseOutlined } from '@ant-design/icons';
// import { doc, setDoc } from 'firebase/firestore';

// const Register = () => {
//     const { Title, Paragraph } = Typography;
//     const [isLoading, setIsLoading] = useState(false);
//     const [form] = Form.useForm();
//     // const navigate = useNavigate()

//     const handleSubmit = async (values) => {
//         let { firstName, lastName, email, password, confirmPassword } = values;

//         firstName = firstName.trim();
//         if (!firstName) { window.notify('First name cannot be empty', 'error'); return; }
//         if (lastName) { lastName = lastName.trim() }
//         email = email.trim()

//         if (password !== confirmPassword) { window.notify('Passwords do not match', 'error'); return; }

//         setIsLoading(true);
//         const userData = { uid: "", firstName, lastName, email };

//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             await createDocument({ ...userData, uid: user.uid });
//             window.notify("Registration successful!", "success");
//             form.resetFields();
//             // navigate("/"); // Optionally navigate after successful registration
//         } catch (error) {
//             let errorMessage = "Registration failed";
//             if (error.code === 'auth/email-already-in-use') {
//                 errorMessage = "Email already in use";
//             } else if (error.code === 'auth/weak-password') {
//                 errorMessage = "Password should be at least 6 characters";
//             }
//             window.notify(errorMessage, 'error');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const createDocument = async (userData) => {
//         try {
//             await setDoc(doc(firestore, "users", userData.uid), userData);
//             window.notify("User profile created successfully!");
//             return true;
//         } catch (e) {
//             window.notify("Error creating user profile!", "error");
//             console.error("Error adding document: ", e);
//             throw e; // Re-throw the error to be caught in handleSubmit
//         }
//     };

//     const handleClose = () => { navigate("/") }

//     return (
//         <main className="register-page p-3 p-md-4">
//             <Card className="register-card p-3 p-md-4">
//                 <Button type="text" icon={<CloseOutlined />} onClick={handleClose} style={{ position: 'absolute', top: 16, right: 16, zIndex: 1, border: 'none' }} />

//                 <Title level={2} className='text-center'>Create Account</Title>
//                 <Form layout='vertical' form={form} onFinish={handleSubmit}>
//                     <Row gutter={16}>
//                         <Col xs={24} md={12}>
//                             <Form.Item name="firstName" label='First Name' rules={[{ required: true, message: 'Please enter your first name' }]}>
//                                 <Input placeholder="Enter your first name" size="large" />
//                             </Form.Item>
//                         </Col>
//                         <Col xs={24} md={12}>
//                             <Form.Item name="lastName" label='Last Name'>
//                                 <Input placeholder="Enter your last name" size="large" />
//                             </Form.Item>
//                         </Col>
//                         <Col xs={24}>
//                             <Form.Item name="email" label='Email' rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email format' }]}>
//                                 <Input placeholder="Enter your email" size="large" />
//                             </Form.Item>
//                         </Col>
//                         <Col xs={24}>
//                             <Form.Item name="password" label='Password' rules={[{ required: true, message: 'Please enter your password' }, { min: 6, message: 'Password must be at least 6 characters' }]}>
//                                 <Input.Password placeholder="Enter your password" size="large" />
//                             </Form.Item>
//                         </Col>
//                         <Col xs={24}>
//                             <Form.Item name="confirmPassword" label='Confirm Password' rules={[{ required: true, message: 'Please confirm your password' }, { min: 6, message: 'Password must be at least 6 characters' }]}>
//                                 <Input.Password placeholder="Confirm your password" size="large" />
//                             </Form.Item>
//                         </Col>
//                         <Col span={24}>
//                             <Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
//                                 Register
//                             </Button>
//                         </Col>
//                         <Col span={24} style={{ textAlign: 'center', marginTop: '16px' }}>
//                             <Paragraph className='mb-0 mt-1'>
//                                 Already have an account?{' '}
//                                 <Link to="/auth/login" style={{ color: '#1890ff', fontWeight: '500', textDecoration: 'underline' }}>
//                                     Login
//                                 </Link>
//                             </Paragraph>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Card>
//         </main>
//     );
// };

// export default Register;
import React from 'react'

const Register = () => {
    return (
        <div>Register</div>
    )
}

export default Register