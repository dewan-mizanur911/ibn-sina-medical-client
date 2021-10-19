import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import AboutItem from '../AboutItem/AboutItem';
import './About.css';

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    fetch("./about.JSON")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);


  return (
    <Container id="about"
      style={{ backgroundColor: "#394650" }}
      className="px-4 py-3 my-2 rounded"
    >
      <h2 className="mt-3 mb-2 fw-bold">
        <span className="text-white">About</span>{" "}
        <span className="color-orrange">Hospital</span>
      </h2>
      <div className="line mx-auto mb-3"></div>
      <div className="break-line mx-auto mb-3"></div>
      {about.length ? (
        <Row xs={1} md={2} lg={3} className="g-3 mb-5">
          {about.map((item) => (
            <AboutItem key={item.id} item={item}></AboutItem>
          ))}
        </Row>
      ) : (
        <Spinner className="my-5" animation="border" variant="secondary" />
      )}
    </Container>
  );
};

export default About;
