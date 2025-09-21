
import React from "react";
import { Row, Col, Typography } from "antd";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbWhirl } from "react-icons/tb";
import { LiaWhmcs } from "react-icons/lia";




const { Title, Paragraph } = Typography;

const About = () => {
    return (
        <>
            {/* Banner Image */}
            <div className="">
                <Row>
                    <Col span={24}>
                        <img
                            className="img1 img-fluid"
                            src="https://img.freepik.com/free-photo/plant-hands-person-created-with-help-generative-ai-technology_185193-162706.jpg"
                            alt="Banner"
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                    </Col>
                </Row>
            </div>

            {/* About Us Heading */}
            <div className="text-center my-4">
            </div>

            {/* About Content */}
            <div className="container">
                <Row gutter={[24, 24]} align="middle">
                    <Col xs={24} md={12}>
                        <img
                            className="img2"
                            src="https://demo.ovathemewp.com/charihope/wp-content/uploads/2019/05/about_us_img.png"
                            alt="About Us"
                            style={{ width: "100%", borderRadius: "8px" }}
                        />
                    </Col>

                    <Col xs={24} md={12}>
                        <Title level={1}>About Us</Title>


                        <Paragraph style={{ fontSize: "25px" }}>
                            <span >Turpis cursus in hac habitasse platea dictumst iaculis urna id
                                volutpat lacus.

                            </span>
                            <span>
                                Sit amet risus nullam eget felis eget nunc. Et ligula ullamcor
                                malesuada proin libero nunc consequat interdum. Tortor aliquam
                                nulla facilisi cras fermentum diam sollicitudin tempor. Feugiat in
                                fermentum posuere urna nec tincidunt praesent semper. Molestie
                                nunc non blandit massa enim nec dui. Lectus arcu bibendum at
                                varius vel pharetra vel turpis nunc. Commodo sed egestas egestas
                                fringilla phasellus.
                            </span>
                        </Paragraph>
                    </Col>
                </Row>

            </div>


<div className="mt-5" style={{ color: "#636161ff" }}>
  <Row gutter={16} style={{ color: "#646060ff" }}>
    
    <Col span={6}>
      <div className="flex flex-col items-center text-center">
        <FaHandHoldingHeart size={100} className="text-dark" />
        <Paragraph  className=" fw-bold fs-3">Our Mission</Paragraph>
      </div>
    </Col>

    <Col span={6}>
      <div className="flex flex-col items-center text-center">
        <MdOutlineSupportAgent size={100} className="text-dark" />
        <Paragraph  className=" fw-bold fs-3">Our Program</Paragraph>
      </div>
    </Col>

    <Col span={6}>
      <div className="flex flex-col items-center text-center">
        <TbWhirl size={100} className="text-dark" />
        <Paragraph  className=" fw-bold fs-3">Support 24/7</Paragraph>
      </div>
    </Col>

    <Col span={6}>
      <div className="flex flex-col items-center text-center">
        <LiaWhmcs size={100} className="text-dark" />
        <Paragraph className=" fw-bold fs-3">Become Volunteer</Paragraph>
      </div>
    </Col>

  </Row>
</div>

<div className="container" style={{ textAlign: "center" }}>
  <Paragraph strong style={{ fontSize: "1.75rem" }}>
    MEET OUR VOLUNTEERS
  </Paragraph>
  <h5>
    Tellus integer feugiat scelerisque varius morbi enim nunc.
    <br />
    Tempus egestas sed sed risus pretium.
  </h5>
</div>











        </>
    );
};

export default About;
