import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const DoctorDetails = () => {
    const { doctorId } = useParams();
    const [doctors, setDoctors] = useState({});
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    let doctor;
    if (doctors.length) {
        doctor = doctors?.find(dt => dt.id === doctorId);
    };
    const history = useHistory();
    const onHandleBack = () => {
        history.push('/home');
    }

    return (
      <div>
        {doctors.length && (
          <div>
            <h3 className="mt-3">
              Your appoinment with <span className="color-orrange">Dr. {doctor.name}</span> is processing!
              Keep Patience, Thank You.
            </h3>
            <Card
              className="mx-auto mb-5 mt-2 border border-1 border-primary"
              style={{
                width: "18rem",
                backgroundColor: "#394650",
                color: "white",
              }}
            >
              <Card.Img variant="top" src={doctor.picture} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                  Email : {doctor.email}
                  <br />
                  Phone : {doctor.phone}
                </Card.Text>
                <Button variant="primary" onClick={onHandleBack}>
                  Go Home
                </Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
};

export default DoctorDetails;