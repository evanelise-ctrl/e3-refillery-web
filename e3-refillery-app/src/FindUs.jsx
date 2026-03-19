import React from 'react';
import './FindUs.css'; // We'll put your custom styles here!

const FindUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* HERO SECTION */}
      <section className="find-us-hero">
        <img src="/Web Icons-LeafAccentTop-gold.png" className="hero-leaf left" alt="" aria-hidden="true" />
        <img src="/Web Icons-LeafAccentBottom-gold.png" className="hero-leaf right" alt="" aria-hidden="true" />
        
        <h1>Catch the Pop-Up</h1>
        <p>Track down the e3 Refillery mobile pop-up! View our monthly calendar or check the detailed schedule below to plan your next refill.</p>
        <div className="hero-buttons">
          <a href="#schedule" className="btn-primary">View Schedule</a>
          <a href="#" className="btn-dark">Get Pop-up Alerts</a>
        </div>
      </section>

      {/* SCHEDULE CONTAINER */}
      <div className="schedule-header" id="schedule">
        <h2>Pop-up Schedule</h2>
        <p>Come see us in person to grab new containers or refill your empties.</p>
      </div>
      
      <section className="schedule-container">
        {/* Visual Calendar Grid */}
        <div className="calendar-wrapper">
          <h3>This Month</h3>
          <div className="calendar-grid">
            <div className="day-name">Sun</div>
            <div className="day-name">Mon</div>
            <div className="day-name">Tue</div>
            <div className="day-name">Wed</div>
            <div className="day-name">Thu</div>
            <div className="day-name">Fri</div>
            <div className="day-name">Sat</div>

            <div className="calendar-day empty"></div>
            <div className="calendar-day empty"></div>
            <div className="calendar-day empty"></div>
            
            <div className="calendar-day">1</div>
            <div className="calendar-day">2</div>
            <div className="calendar-day">3</div>
            <div className="calendar-day event" title="Downtown Farmers Market">4</div>
            <div className="calendar-day">5</div>
            <div className="calendar-day">6</div>
            <div className="calendar-day">7</div>
            <div className="calendar-day">8</div>
            <div className="calendar-day">9</div>
            <div className="calendar-day">10</div>
            <div className="calendar-day">11</div>
            <div className="calendar-day">12</div>
            <div className="calendar-day">13</div>
            <div className="calendar-day">14</div>
            <div className="calendar-day event" title="Community Eco Fair">15</div>
            <div className="calendar-day">16</div>
            <div className="calendar-day">17</div>
            <div className="calendar-day">18</div>
            <div className="calendar-day">19</div>
            <div className="calendar-day">20</div>
            <div className="calendar-day">21</div>
            <div className="calendar-day">22</div>
            <div className="calendar-day">23</div>
            <div className="calendar-day">24</div>
            <div className="calendar-day">25</div>
            <div className="calendar-day">26</div>
            <div className="calendar-day">27</div>
            <div className="calendar-day event" title="Main Street Night Market">28</div>
            <div className="calendar-day">29</div>
            <div className="calendar-day">30</div>
            <div className="calendar-day">31</div>
          </div>
        </div>

        {/* Chronological Event List */}
        <div className="events-wrapper">
          <h3>Upcoming Locations</h3>
          
          <div className="event-card">
            <div className="event-date">
              <span>Sat</span>4
            </div>
            <div className="event-details">
              <h4>Downtown Farmers Market</h4>
              <p><strong>&#8986;</strong> 9:00 AM - 1:00 PM</p>
              <p><strong>&#128205;</strong> 123 Main St. Plaza (Near the fountain)</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span>Sun</span>15
            </div>
            <div className="event-details">
              <h4>Community Eco Fair</h4>
              <p><strong>&#8986;</strong> 10:00 AM - 4:00 PM</p>
              <p><strong>&#128205;</strong> Centennial Park Pavilion</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span>Sat</span>28
            </div>
            <div className="event-details">
              <h4>Main Street Night Market</h4>
              <p><strong>&#8986;</strong> 5:00 PM - 9:00 PM</p>
              <p><strong>&#128205;</strong> Historic Arts District (4th & Main)</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOST US BANNER */}
      <section className="host-us-banner">
        <img src="/Web Icons-LeafAccentTop-gold.png" className="host-leaf left" alt="" aria-hidden="true" />
        <img src="/Web Icons-LeafAccentBottom-gold.png" className="host-leaf right" alt="" aria-hidden="true" />
        
        <h2>Host e3 Refillery</h2>
        <p>Want us to pop up at your business or next community event? We'd love to partner and bring sustainable refills directly to your neighborhood!</p>
        <a href="/contact" className="btn-dark">Reach Out</a>
      </section>

    </div>
  );
};

export default FindUs;