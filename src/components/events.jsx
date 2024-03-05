import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EventModal = ({ show, handleClose, event }) => {
  const { poster, date, venue, registrationLink } = event;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={poster} alt="Event Poster" style={{ maxWidth: '100%' }} />
        <p>Date: {date}</p>
        <p>Venue: {venue}</p>
        <p>Registration Link: <a href={registrationLink}>{registrationLink}</a></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => window.open(registrationLink, '_blank')}>
          Register Now
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
    <div>
      <img src={event.poster} alt="Event Poster" style={{ cursor: 'pointer', maxWidth: '100%' }} onClick={handleShowModal} />
      <EventModal show={showModal} handleClose={handleCloseModal} event={event} />
    </div>
  );
};

export default EventCard;
