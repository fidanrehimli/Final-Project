import React from "react";
import "./section5.css";
const Section5 = () => {
  return (
    <section className="bannerr">
      <div className="card-container">
        <div className="card-img">
  
        </div>
        <div className="card-content">
          <h3>Reservation</h3>
        <form>
        <div className="form-row">
          <select name="days">
            <option value="day-select">Select Day</option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>

          <select name="hours">
            <option value="hour-select">Select Hour</option>
            <option value="10">10:00</option>
            <option value="10">12:00</option>
            <option value="10">14:00</option>
            <option value="10">16:00</option>
            <option value="10">18:00</option>
            <option value="10">20:00</option>
            <option value="10">22:00</option>
          </select>
        </div>
        <div className="form-row">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="form-row">
          <input type="number" placeholder="How Many Persons?" min="1" />
          <input type="submit" value="BOOK TABLE" />
        </div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Section5;
