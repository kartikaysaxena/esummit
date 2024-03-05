import React, { useState, useEffect } from 'react';
import EventCard from '../components/events'

export default function Events() {

    const events = [
        {
          poster: 'event1-poster.jpg',
          date: 'March 10, 2024',
          venue: 'Some Venue',
          registrationLink: 'https://example.com/event1-registration',
        },
        {
          poster: 'event2-poster.jpg',
          date: 'March 15, 2024',
          venue: 'Another Venue',
          registrationLink: 'https://example.com/event2-registration',
        },
        // Add more events as needed
      ];

    return (
        <div style={{display: 'flex',justifyContent: 'space-around', alignItems: 'center'}}>
        {events.map((event, index) => (
        <EventCard key={index} event={event} />
        ))}
    </div>
    )
}
