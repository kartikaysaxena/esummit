import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import a1 from '../static/pitch-it-up.jpg';
import a2 from '../static/adv-your-way.jpg';
import a4 from '../static/entrepreneurial-dilemma.jpg';
import a5 from '../static/angel.jpg';
import a6 from '../static/bizz-quizz-final.jpg';
import a7 from '../static/case-study.jpg';

const imageMap = {
    a1: a1,
    a2: a2,
    a4: a4,
    a5: a5,
    a6: a6,
    a7: a7
  };
  

const EventModal = ({ show, handleClose, event }) => {
  const { name, date, venue, registrationLink, posterCode } = event;

  return (
    <Modal show={show} onHide={handleClose} center>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageMap[posterCode]} alt="Event Poster" style={{ maxWidth: '100%' }} />
        <p>Date: {date}</p>
        <p>Venue: {venue}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => window.open(registrationLink, '_blank')}>
          Register Now {posterCode}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='card event-card' style={{margin : '0 4rem'}}>
      <img src={imageMap[event.posterCode]} alt="Event Poster" style={{ cursor: 'pointer', maxWidth: '100%' }} onClick={handleShowModal} />
      <EventModal show={showModal} handleClose={handleCloseModal} event={event} />
    </div>
  );
};

export default EventCard;
