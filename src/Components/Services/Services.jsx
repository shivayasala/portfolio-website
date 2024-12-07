import React, { useState } from 'react';
import './Services.css';
import logo from '../../assets/services.png';
import OIP from '../../assets/OIP.jpeg';

const service_m = [
    { s_no: 1, s_name: 'Web Development', s_desc: 'Building responsive and functional websites.', s_extra: 'Our web development service includes creating user-friendly websites with the latest technologies to ensure fast loading times and high security.' },
    { s_no: 2, s_name: 'Mobile App Development', s_desc: 'Creating mobile applications for iOS and Android.', s_extra: 'Our mobile app development service covers native and hybrid apps, providing seamless user experience and robust functionality across all platforms.' },
    { s_no: 3, s_name: 'UI/UX Design', s_desc: 'Designing intuitive and engaging user interfaces.', s_extra: 'Our UI/UX design service ensures that your product not only looks great but also provides a smooth and enjoyable user experience, tailored to your target audience.' },
    { s_no: 4, s_name: 'Digital Marketing', s_desc: 'Improving your online presence with strategic marketing.', s_extra: 'Our digital marketing service includes SEO, SEM, social media management, and content marketing to boost your online visibility and attract more customers.' },
    { s_no: 5, s_name: 'E-commerce Solutions', s_desc: 'Developing customized e-commerce platforms.', s_extra: 'Our e-commerce solutions service includes building secure, scalable, and user-friendly online stores with integrated payment gateways and inventory management systems.' }
];

const Services = () => {
    const [expandedService, setExpandedService] = useState(null);

    const handleReadMore = (index) => {
        setExpandedService(index);
    };

    const handleClose = () => {
        setExpandedService(null);
    };

    return (
        <div id='services' className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={logo} alt="sorry we cannot load the image" />
            </div>
            <div className="services-container">
                {service_m.map((service, index) => (
                    <div key={index} className='service-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="service-readmore" onClick={() => handleReadMore(index)}>
                            <p>Read more</p>
                            <img src={OIP} alt="sorry can't fetch the image" height="20px" width="20px" />
                        </div>
                        {expandedService === index && (
                            <div className="service-extra">
                                <p>{service.s_extra}</p>
                                <button onClick={handleClose}>Close</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
