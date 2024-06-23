import React from "react";
import "./section2.css";
const Section2 = () => {
  return (
    <div className="section2">
      <div className="banner">
        <h1>WELCOME TO ROYATE</h1>
        <h2>~ Luxury & Quality ~</h2>
      </div>

      <div className="images">
        <div className="img1">
          <img
            className="image"
            src="https://freebw.com/templates/royate/images/post-thumb-1.jpg"
            alt=""
          />
          <h2 className="level">PROFESSIONAL LEVEL</h2>
          <p className="text">
            Nor again is there anyone who loves or pursues or
            <br />
            desires to obtain pain of itself, because it is pain, but
            <br />
            because occasionally circumstances occur.
          </p>
          <a href="#" className="read-more">
            READ MORE
          </a>
        </div>
        <div className="img2">
          <img
            className="image"
            src="https://freebw.com/templates/royate/images/post-thumb-2.jpg"
            alt=""
          />
          <h2 className="level">FRESH FOOD GUARANTEED</h2>
          <p className="text">
            At vero eos et accusamus et iusto odio dignissimos
            <br />
            ducimus qui blanditiis praesentium voluptatum
            <br />
            deleniti atque corrupti quos dolores.
          </p>
          <a href="#" className="read-more">
            READ MORE
          </a>
        </div>
        <div className="img3">
          <img
            className="image"
            src="https://freebw.com/templates/royate/images/post-thumb-3.jpg"
            alt=""
          />
          <h2 className="level">THE MENU IS PLENTIFUL</h2>
          <p className="text">
            Nam libero tempore, cum soluta nobis est eligendi
            <br />
            optio cumque nihil impedit quo minus id quod
            <br />
            maxime placeat facere possimus.
          </p>
          <a href="#" className="read-more">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section2;
