import React, { useEffect, useState } from "react";
import "./ViewStore.scss";
import mobileIcon from "../../assets/Mobile.png";
import desktopIcon from "../../assets/Desktop.png";
import searchIcon from "../../assets/Search.png";
import userIcon from "../../assets/Customer2.png";
import purchaseIcon from "../../assets/Purchase.png";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewStore(props) {
  const [data, setData] = useState();

  useEffect(() => {
    void fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000");
      setData(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const sendData = async () => {
    try {
      await axios.post("http://localhost:8000", {
        mainText: props.mainText,
        subText: props.subText,
        fProduct: props.fProduct,
        sProduct: props.sProduct,
        tProduct: props.tProduct,
        fProductPrice: props.fProductPrice,
        sProductPrice: props.sProductPrice,
        tProductPrice: props.tProductPrice,
      });
      await fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={props.open ? "view--open" : "view"}>
      <div className="view__header">
        <button
          className="view__header-back-button"
          onClick={() => props.onClose()}
        >
          <i class="fa-solid fa-chevron-left"></i>
          Back
        </button>

        <div className="view__options">
          <div className="view__options-theme">
            <label for="theme-style">Theme styles</label>
            <select id="theme-style" name="theme-style">
              <option value="ShopBotGenerated">Shop-Bot Generated</option>
            </select>
          </div>
          <div className="view__options-env">
            <button className="view__options-env-button--selected">
              <img src={desktopIcon} alt="desktop" />
            </button>
            <button className="view__options-env-button">
              <img src={mobileIcon} alt="mobile" />
            </button>
          </div>
        </div>
        <Link
          className="view__save-button"
          onClick={() => {
            void sendData();
          }}
          to={"/online-store/partners"}
        >
          Save
        </Link>
      </div>

      <div className="view__content">
        <div className="view__content-top">
          <div className="view__content-top-name">Merry Cosmetics</div>
          <div className="view__content-top-icons">
            <img src={searchIcon} alt="search" />
            <img src={userIcon} alt="user" />
            <img src={purchaseIcon} alt="purchase" />
          </div>
        </div>

        <div className="view__content-inputs">
          <div className="view__content-input--primary">
            <div className="view__content-input-texts">
              <div className="view__content-input-text--main">
                <div
                  style={{
                    color: props.styleValues.color,
                    fontFamily: props.styleValues.textStyle,
                    fontSize: props.styleValues.fontSize,
                  }}
                >
                  {props.mainText}
                </div>
              </div>

              <div className="view__content-input-text--sub">
                {props.subText}
              </div>
            </div>

            <div className="view__content-img">
              <img src={props.mainPhoto} />
            </div>
          </div>
          <div className="view__content-input--scondary">
            <div className="view__content-input-image">
              <div className="view__content-product-img">
                <img src={props.firstPhoto} />
              </div>
              <div className="view__content-product">
                <div className="view__content-product-name">
                  {props.fProduct}
                </div>

                <div className="view__content-product-price">
                  ${props.fProductPrice}
                </div>
              </div>
            </div>

            <div className="view__content-input-image">
              <div className="view__content-product-img">
                <img src={props.secondPhoto} />
              </div>
              <div className="view__content-product">
                <div className="view__content-product-name">
                  {props.sProduct}
                </div>
                <div className="view__content-product-price">
                  ${props.sProductPrice}
                </div>
              </div>
            </div>

            <div className="view__content-input-image">
              <div className="view__content-product-img">
                <img src={props.thirdPhoto} />
              </div>
              <div className="view__content-product">
                <div className="view__content-product-name">
                  {props.tProduct}
                </div>
                <div className="view__content-product-price">
                  ${props.tProductPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStore;
