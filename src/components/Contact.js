import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assests/image/contact_img.jpg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export default function Contact ()  {
  const form = useRef();
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({ success: false, message: '' });

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .sendForm('service_ydt3ebg', 'template_ddpuyid', form.current, 'HRAyfMSFawyIlVtji')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setButtonText('Send');
          setStatus({ success: true, message: 'Message sent successfully!' });
          window.alert('Message Sent Successfully!'); // Show alert
          setFormDetails({ // Clear form inputs
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonText('Send');
          setStatus({ success: false, message: 'Failed to send the message. Please try again later.' });
          window.alert('Failed to send the message. Please try again later.'); // Show alert
        }
      );
  };

  return (
    <>
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
            <h2>LET'S CONNECT</h2>
            <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className="contactImage"  src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="first_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="last_name" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
              </div>}
            </TrackVisibility>
          </Col>
        
        </Row>
      </Container>
    </section>
    <hr className=" w-100"  style={{backgroundColor:'white !important',height:'3px',color:'white !important'}}/>
    </>
  )
}