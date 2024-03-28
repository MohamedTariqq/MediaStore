import React, { useState } from "react";
import Back from "../common/back/Back";
import "./DigitalSolution.css";
import img1 from "../../images/delivery.png";
const ServiceOne = () => {
  // Define state variables for each form field
  const [name, setName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [datalist, setdatalist] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data (e.g., send it to the server)

    // Clear the form by resetting state
    setName("");
    setlName("");
    setEmail("");
    setNumber("");
    setMessage("");
    setdatalist("");
  };

  const ImageComponent = () => {
    return (
      <div className="image-container">
        <img src={img1} alt="YourImage" />
      </div>
    );
  };

  const TextComponent = () => {
    return (
      <div className="text-container">
        <h2>Your Text Heading</h2>
        <p>Your text content goes here...</p>
      </div>
    );
  };
  return (
    <>
      <Back title="Digital Solution" />

      <div className="containera shadow flexSB">
        <ImageComponent />
        <TextComponent />
      </div>
      <section className="contacts servForm">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1>Send information to contact</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2"></div>

            <form action="https://formspree.io/f/maygzpzz" method="POST">
              <div className="flexSB">
                <input
                  id="First Name"
                  name="First Name"
                  required
                  type="text"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onSubmit={handleSubmit}
                />

                <input
                  id="Last Name"
                  name="Last Name"
                  required
                  type="text"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                />
              </div>
              <label>
                Choose a service from this list:
                <input required list="datalist" name="The service is" />
              </label>
              <datalist
                id="datalist"
                type="datalist"
                value={datalist}
                onChange={(e) => setEmail(e.target.value)}
              >
                <option value="Markting" />
                <option value="Design" />
                <option value="Gifts" />
                <option value="Stickers" />
                <option value="Edit" />
                <option value="Events" />
              </datalist>
              <input
                id="Email Address"
                name="Email Address"
                required
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="Phone No"
                name="Phone No"
                required
                type="tel"
                placeholder="Phone No."
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <textarea
                id="Message"
                name="Message"
                required
                rows="6"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button className="primary-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOne;
