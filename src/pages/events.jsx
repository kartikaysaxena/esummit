import React, { useState, useEffect, useRef } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import EventCard from '../components/events';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './esummit.css';

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzXU8rKk32OXOLJRCJQuuN9l9JNyFxUoWio7M1AGp5rD6sjWkl3RpFIV0Yy4Dt8u24f0w/exec');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);
    const ref = useRef(null);
    const [containerWidth, setWidth] = useState(160 + "%");
    const [animationState, setPlay] = useState("paused");
    useEffect(() => {
      if (ref.current) {
        setWidth(ref.current.scrollWidth + "px");
        setPlay("running");
      }
    }, []);

    return (
           <div className="d-flex" id='events' ref={ref} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: `${containerWidth}`, animationPlayState: animationState, marginBottom: '4rem' }}>
                    {events.map((event, index) => (
                        <EventCard key={index} event={event}  />
                    ))}
            </div>
    );
}
