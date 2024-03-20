import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    "https://maps.google.com/maps?q=Media%20store%2C%20Abu%20Dhabi&t=m&z=18&output=embed&iwloc=near";
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={map}
              title="Media store, Abu Dhabi"
              aria-label="Media store, Abu Dhabi"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  City Center, Shh Rashid Bin Saeed Street (Airport Street -
                  near Centro Hotel - Abu Dhabi)
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@mediastore.ae</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +97126350660</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Create a message here..."
              ></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
