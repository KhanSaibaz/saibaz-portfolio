import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import sideImg from '../assests/image/side_img.png';

export default function Banner() {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", 'Web Developer', "FrontEnd Developer", "BackEnd Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(3000 / fullText.length); // Adjust delta to make erasing take 3000ms
        } else {
            setDelta(300 - Math.random() * 100); // Reset delta for typing
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    }

    return (
        <>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to My portfolio</span>
                            <h1 className="There">Hi There</h1>
                            <h1>I'M&nbsp;
                                <span className="Saibaz">Khan Saibaz</span>
                            </h1>
                            <h2><span className="wrap">{text}</span><span className="cursor">|</span></h2>
                            <p>As a software engineer, I specialize in creating innovative solutions that enhance user experiences. With a strong background in software development and a passion for technology, I aim to build applications that solve real-world problems and make a positive impact. Let's build something amazing together!</p>
                            <button style={{cursor:'pointor'}}>
                               <a href={'https://drive.google.com/file/d/1Uw1g1tI2LL7jmALveSwTx75zX99S4qYi/view?usp=drive_link'} className="resume" target="_blank">
                               View Resume <ArrowDownCircle/> 
                                </a> </button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={sideImg} alt="header image" className="side-image" />
                        </Col>
                        
                    </Row>
                </Container>
                    <hr className=" w-100"  style={{backgroundColor:'white !important',height:'3px',color:'white !important'}}/>
            </section>
        </>
    );
}