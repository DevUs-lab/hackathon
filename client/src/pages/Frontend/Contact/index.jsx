import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div className="text-center">
            <div className='container-fluid text-center d-flex align-items-center justify-content-center flex-column' style={{
                background: "linear-gradient(to right, #4286f4, #373B44)",
                minHeight: "40vh",
                color: "white",
                padding: "20px"
            }}>
                <div className="row">
                    <div className="col-12">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="col">
                        <Link to="/" className='text-decoration-none text-white'>Home &gt; Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "40vh" }}>
                <div className="row">
                    <div className="col">
                        <h2 className='fw-bold'>Get In Touch</h2>
                        <p className='fw-bold opacity-50'>Get started with your amazing project</p>
                    </div>
                </div>
            </div>
            <div className="container text-start">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <h3>Contact</h3>
                        <p>405 Broadway, New York, NY 10013</p>
                        <p>info@Charihope.com</p>
                        <p>+1 555-666-1111</p>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="card p-5">
                            <div className="row g-2 g-md-5">
                                <div className="col-12 col-md-6">
                                    <input type="text" placeholder='Your Name*' className='form-control rounded-0' />
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="text" placeholder='Your-mail@gimail.com' className='form-control rounded-0' />
                                </div>
                                <div className="col-12">
                                    <input type="text" placeholder='Phone Number*' className='form-control rounded-0' />
                                </div><div className="col-12">
                                    <input type="text" placeholder='Your Subject*' className='form-control rounded-0' />
                                </div><div className="col-12">
                                    <textarea name="" placeholder='Comment*' className='form-control rounded-0'></textarea>
                                </div>
                                <div>
                                    <button className='btn btn-danger rounded-0 px-4 py-3'>Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 h-50
            ">
                <div className="row">
                    <div className="col">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0891285458665!2d73.08623897532642!3d31.411670352504967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922681d444b32e1%3A0xc3887a0e53e91f7!2sSaylani%20Mass%20IT%20Training%20FSD!5e0!3m2!1sen!2s!4v1758445417251!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact



// ContactPage.jsx
// import React from 'react';
// import Header from './components/Header';
// import './ContactPage.css';

// const ContactPage = () => {
//     return (
//         <div className="ova-wrapp">
//             <Header />

//             <section className="elementor-section elementor-top-section elementor-element elementor-element-11ef617 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
//                 <div className="elementor-container elementor-column-gap-default">
//                     <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d3215dd">
//                         <div className="elementor-widget-wrap elementor-element-populated">

//                             <div className="elementor-element elementor-element-8410568 elementor-widget elementor-widget-ova_heading">
//                                 <div className="elementor-widget-container">
//                                     <div className="ova-heading version_1">
//                                         <h3 className="heading-title second_font">Get In Touch</h3>
//                                         <div className="content">
//                                             <p>Get started with your amazing project</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="elementor-section elementor-inner-section elementor-element elementor-element-225ba56 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
//                                 <div className="elementor-container elementor-column-gap-default">

//                                     {/* Contact Info Section */}
//                                     <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3cb8c7d">
//                                         <div className="elementor-widget-wrap elementor-element-populated">

//                                             <div className="elementor-element elementor-element-4672f26 elementor-widget elementor-widget-heading">
//                                                 <div className="elementor-widget-container">
//                                                     <h2 className="elementor-heading-title elementor-size-default">Contact</h2>
//                                                 </div>
//                                             </div>

//                                             <ContactInfo
//                                                 icon="flaticon-facebook-placeholder-for-locate-places-on-maps"
//                                                 title="Address Location"
//                                                 content="405 Broadway, New York, NY 10013"
//                                             />

//                                             <ContactInfo
//                                                 icon="fa fa-envelope"
//                                                 title="Address Location"
//                                                 content="[email protected]"
//                                                 isEmail={true}
//                                             />

//                                             <ContactInfo
//                                                 icon="fa fa-phone"
//                                                 title="Address Location"
//                                                 content="+1 555-666-1111"
//                                                 isPhone={true}
//                                             />

//                                             <SocialLinks />

//                                         </div>
//                                     </div>

//                                     {/* Contact Form Section */}
//                                     <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c44edc5">
//                                         <div className="elementor-widget-wrap elementor-element-populated">
//                                             <ContactForm />
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Google Map Section */}
//             <section className="elementor-section elementor-top-section elementor-element elementor-element-fb59046 elementor-section-full_width elementor-section-height-default elementor-section-height-default">
//                 <div className="elementor-container elementor-column-gap-default">
//                     <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6addc2e">
//                         <div className="elementor-widget-wrap elementor-element-populated">
//                             <div className="elementor-element elementor-element-5f18379 elementor-widget elementor-widget-google_maps">
//                                 <div className="elementor-widget-container">
//                                     <div className="elementor-custom-embed">
//                                         <iframe
//                                             loading="lazy"
//                                             src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=16&output=embed&iwloc=near"
//                                             title="London Eye, London, United Kingdom"
//                                             aria-label="London Eye, London, United Kingdom"
//                                             style={{ height: '500px', width: '100%', border: 'none' }}
//                                         ></iframe>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default ContactPage;