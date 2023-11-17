import "./Builder.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import inperson from "../../assets/icons/image 3.png";
import online from "../../assets/icons/image 4.png";

function Builder() {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="shopdetails">
      <form className="shopdetails-form" onSubmit={handleFormSubmit}>
        <h2 className="shopdetails__header">Shop Details</h2>
        <p>To get started, input some information about your shop</p>

        <input type="text" name="name" id="name" placeholder="Shop name" />
        <input type="text" name="url" id="url" placeholder="Custom URL" />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Shop Description"
        ></textarea>

        <h2>Where would you like to sell?</h2>

        <div className="shopdetails-form__sell">
          <section>
            <div className="shopdetails-form__platform">
              <img src={inperson} alt="store icon" />
              <h3>In-Person</h3>
              <p>Selling at a physical Location</p>
            </div>
            <div className="shopdetails-form__platform">
              <img src={online} alt="online icon" />
              <h3>Online</h3>
              <p>Create a fully customizable Website</p>
            </div>
          </section>
        </div>

        <h2>What website would you like to reference</h2>

        <input
          type="text"
          name="reference"
          id="reference"
          placeholder="https://"
        />
      </form>
    </div>
  );
}

export default Builder;
