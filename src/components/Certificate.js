import React from 'react';
import Slider from 'react-slick';
import { ArrowRightCircle } from 'react-bootstrap-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sql from '../assests/image/sqlCertificate.png';
import webDevelopement from '../assests/image/webCertificate.png';
import dataAnalytic from '../assests/image/dataAnalyticCertificate.png';
import Python from '../assests/image/PythonCertificate.jpg';
import NLPS from '../assests/image/nlpCertificate.png'; 
import jamBoard from '../assests/image/jamBoardCertificate.jpeg';

export default function Certificate() {
  const certificates = [
    { title: 'SQL by Hacker Rank', imageUrl: sql, linkUrl: 'https://drive.google.com/file/d/17-_D1YKASI9YB-3m3iB5HQLFRFF9-qmh/view?usp=sharing' },
    { title: 'Data Analytics', imageUrl: dataAnalytic, linkUrl: 'https://drive.google.com/file/d/12Sl8E6GuhATbRhx7iQD7QHk2ao89Act6/view?usp=sharing' },
    { title: 'Python By Great Learning', imageUrl: Python, linkUrl: 'https://drive.google.com/file/d/1h7tNgMCXkdkDMAyXHI4Pzilbtwy3fJDD/view?usp=sharing' },
    { title: 'Tensorflow by coursera', imageUrl: NLPS, linkUrl: 'https://drive.google.com/file/d/1WyHV14Wm2iXflGkp0-I-eXUVbHmxDwgi/view?usp=sharing' },
    { title: 'FrontEnd By upgrade ', imageUrl: webDevelopement, linkUrl: 'https://drive.google.com/file/d/11h5aDs-MX6TVTTdIEhQ90UMNRLU4tuoc/view?usp=sharing' },
    { title: 'Google Cloud study ', imageUrl: jamBoard, linkUrl: 'https://drive.google.com/file/d/1Z8stGoEkHp0dOpc8vaeyjAevIVZ0wzTf/view?usp=sharing' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 4500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    cssEase: 'linear',
    pauseOnHover: true, 
    rtl: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 4000,
          infinite: true,
           rtl: true, 
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
         speed: 5000,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
      <div className="certificate-header" id='certificateSection'>
        <hr className=" w-100"  style={{backgroundColor:'white !important',height:'3px',color:'white !important'}}/>
        <h1 style={{textAlign:"center", marginTop:"3rem",fontFamily:'comicPillow'}}>Certificate</h1>
      <div id="certificate" className="certificate-container">
        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate">
              <img src={certificate.imageUrl} alt={certificate.title} />
              <h4 className='mt-2 mb-5'>{certificate.title}</h4>
              <a href={certificate.linkUrl} target="_blank" rel="noopener noreferrer" className='viewCertificate'>
                Click to View  <span className='arrowsview'><ArrowRightCircle/></span>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <hr className=" w-100"  style={{backgroundColor:'white !important',height:'3px',color:'white !important'}}/>

                </div>
    </>
  );
}