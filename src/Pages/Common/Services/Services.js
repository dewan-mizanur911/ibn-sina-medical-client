import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServicesList from '../../../utilities/servicesList';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServicesList();

    return (
      <Container style={{ backgroundColor: "#394650" }} className="px-4 py-2 my-2 rounded">
        <h2 className="mt-3 mb-2">
          <span className="text-white">Doctors</span>
          <span className="color-orrange"> List</span>
        </h2>
        <div className="line mx-auto mb-3"></div>
        <Row xs={1} md={2} className="g-4 mb-5">
          {services.length &&
            services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
        </Row>
      </Container>
    );
};

export default Services;