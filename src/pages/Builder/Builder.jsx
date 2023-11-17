import "./Builder.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import inperson from "../../assets/icons/image 3.png";
import online from "../../assets/icons/image 4.png";
import ShadowBox from "../../components/ShadowBox/ShadowBox";

function Builder() {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="shopdetails">
      <ShadowBox>
        <form className="shopdetails-form" onSubmit={handleFormSubmit}>
          <div className="shopdetails__content">
            <h1 className="shopdetails__header">Shop Details</h1>
            <div className="shopdetails__description">
              <p>To get started, input some information about your shop</p>
            </div>
          </div>

          <div className="shopdetails__content">
            <input
              className="form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Shop name"
            />
            <input
              className="form__input"
              type="text"
              name="url"
              id="url"
              placeholder="Custom URL"
            />
            <textarea
              className="form__textarea"
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="Shop Description"
            ></textarea>
          </div>

          <div className="shopdetails__content">
            <h1 className="shopdetails__header">
              Where would you like to sell?
            </h1>

            <section className="shopdetails-form__sell">
              <div className="shopdetails-form__platform">
                <img
                  className="shopdetails-form__content-img"
                  src={inperson}
                  alt="store icon"
                />
                <h3 className="shopdetails-form__content">In-Person</h3>
                <p> Selling at a physical Location</p>
              </div>

              <div className="shopdetails-form__platform">
                <img
                  className="shopdetails-form__content-img"
                  src={online}
                  alt="online icon"
                />
                <h3 className="shopdetails-form__content">Online</h3>
                <p>Create a fully customizable Website</p>
              </div>
            </section>
          </div>

          <div className="shopdetails__content">
            <h1 className="shopdetails__header">
              What website would you like to reference
            </h1>
            <input
              className="form__input"
              type="text"
              name="reference"
              id="reference"
              placeholder="https://"
            />
          </div>

          <div className="shopdetails__button-container">
            <Link to="/online-store/design">
              <button className="shopdetails__button">
                Generate a Website
              </button>
            </Link>
          </div>
        </form>
      </ShadowBox>
    </div>
  );
}

export default Builder;
