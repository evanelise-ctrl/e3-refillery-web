import React, { useState, useEffect } from 'react';
import './FindUs.css'; 

const API_KEY = 'AIzaSyBvF4_stqxV0X8w7TmfJUNEYkwZi0FdkR0'; 
const CALENDAR_ID = 'e3refillery@gmail.com'; 

const FindUs = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [expandedEventId, setExpandedEventId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const timeMin = (new Date()).toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime&maxResults=50`; 
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.items) {
          setEvents(data.items);
        }
      } catch (error) {
        console.error("Error fetching Google Calendar events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const toggleEvent = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  const handlePrevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

// --- NEW: Function to handle clicking a date on the calendar ---
  const handleDayClick = (dayNum) => {
    // Find the first event that matches the clicked day
    const eventOnDay = events.find(event => {
      const eventDate = new Date(event.start.dateTime || event.start.date);
      return (
        eventDate.getDate() === dayNum && 
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });

    if (eventOnDay) {
      // 1. Tell React to expand the event (if it has a description) FIRST
      if (eventOnDay.description) {
        setExpandedEventId(eventOnDay.id);
      }

      // 2. Wait 100 milliseconds for the DOM to update and heights to shift
      setTimeout(() => {
        const container = document.querySelector('.events-list-scroll');
        const element = document.getElementById(`event-card-${eventOnDay.id}`);
        
        if (container && element) {
          // Now the math will be perfectly accurate!
          const containerRect = container.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          const scrollTopOffset = (elementRect.top - containerRect.top) + container.scrollTop;

          container.scrollTo({ 
            top: scrollTopOffset, 
            behavior: 'smooth' 
          });
        }
      }, 100); 
    }
  };

  const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => (
    <div key={`empty-${i}`} className="calendar-day empty"></div>
  ));

  const monthDays = Array.from({ length: daysInMonth }, (_, i) => {
    const dayNum = i + 1;
    const hasEvent = events.some(event => {
      const eventDate = new Date(event.start.dateTime || event.start.date);
      return (
        eventDate.getDate() === dayNum && 
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });

    return (
      <div 
        key={`day-${dayNum}`} 
        className={`calendar-day ${hasEvent ? 'event' : ''}`}
        // NEW: Trigger the scroll function when a green box is clicked
        onClick={() => hasEvent ? handleDayClick(dayNum) : null}
      >
        {dayNum}
      </div>
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <section className="find-us-hero">
        <img src="/Web Icons-LeafAccentTop-gold.png" className="hero-leaf left" alt="" aria-hidden="true" />
        <img src="/Web Icons-LeafAccentBottom-gold.png" className="hero-leaf right" alt="" aria-hidden="true" />
        
        <h1>e3 refillery</h1>
        <p>While we build our brand, we're focusing on meeting you where you are. Check out our schedule below to see which local pop-up or community event we'll be visiting next!</p>
        <div className="hero-buttons">
          <a href="#schedule" className="btn-primary">View Schedule</a>
        </div>
      </section>

      <div className="schedule-header" id="schedule">
        <h2>Pop-up Schedule</h2>
        <p>Come see us in person to grab new containers or refill your empties.</p>
      </div>
      
      <section className="schedule-container">
        <div className="calendar-wrapper">
          <div className="calendar-nav-header">
             <button onClick={handlePrevMonth} className="calendar-nav-btn">&#10094;</button>
             <h3>{currentMonthName} {currentYear}</h3>
             <button onClick={handleNextMonth} className="calendar-nav-btn">&#10095;</button>
          </div>

          <div className="calendar-grid">
            <div className="day-name">Sun</div>
            <div className="day-name">Mon</div>
            <div className="day-name">Tue</div>
            <div className="day-name">Wed</div>
            <div className="day-name">Thu</div>
            <div className="day-name">Fri</div>
            <div className="day-name">Sat</div>
            {emptyDays}
            {monthDays}
          </div>
        </div>

        <div className="events-wrapper">
          <h3>Upcoming Locations</h3>
          <div className="events-list-scroll">
            {loading ? (
              <p style={{ color: 'var(--text-alabaster)', opacity: 0.8 }}>Loading upcoming pop-ups...</p>
            ) : events.length === 0 ? (
              <p style={{ color: 'var(--text-alabaster)', opacity: 0.8 }}>No upcoming events right now. Check back soon!</p>
            ) : (
              events.map((event) => {
                const startDate = new Date(event.start.dateTime || event.start.date);
                const dayName = startDate.toLocaleDateString('en-US', { weekday: 'short' });
                const monthName = startDate.toLocaleDateString('en-US', { month: 'short' });
                const dateNum = startDate.getDate();
                const timeString = event.start.dateTime 
                  ? startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) 
                  : 'All Day';

                const hasDescription = !!event.description;
                const isExpanded = expandedEventId === event.id;

                return (
                  <div 
                    // NEW: Added the unique ID here so the calendar knows where to scroll
                    id={`event-card-${event.id}`}
                    className={`event-card ${hasDescription ? 'has-description' : ''} ${isExpanded ? 'expanded' : ''}`} 
                    key={event.id}
                    onClick={() => hasDescription ? toggleEvent(event.id) : null}
                    style={{ display: 'block' }}
                  >
                    <div className="event-info-wrapper">
                      <div className="event-date">
                        <span style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '-2px' }}>{monthName}</span>
                        {dateNum}
                        <span style={{ marginTop: '2px' }}>{dayName}</span>
                      </div>
                      <div className="event-details" style={{ flex: 1, paddingRight: '2rem' }}>
                        <h4>{event.summary}</h4>
                        <p><strong>&#8986;</strong> {timeString}</p>
                        {event.location && (
                          <p><strong>&#128205;</strong> {event.location}</p>
                        )}
                      </div>
                      {hasDescription && (
                        <div className="event-expand-icon">+</div>
                      )}
                    </div>
                    
                    {isExpanded && hasDescription && (
                      <div 
                        className="event-description-box" 
                        dangerouslySetInnerHTML={{ __html: event.description }} 
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <section className="host-us-banner">
        <img src="/Web Icons-LeafAccentTop-gold.png" className="host-leaf left" alt="" aria-hidden="true" />
        <img src="/Web Icons-LeafAccentBottom-gold.png" className="host-leaf right" alt="" aria-hidden="true" />
        
        <h2>e3 refillery</h2>
        <p>Want us to pop up at your business or next community event? We'd love to partner and bring sustainable refills directly to your neighborhood!</p>
        <a href="/contact" className="btn-dark">Reach Out</a>
      </section>

    </div>
  );
};

export default FindUs;