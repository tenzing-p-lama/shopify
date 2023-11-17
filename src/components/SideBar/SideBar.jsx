import React, { useState } from "react";
import "./SideBar.scss";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../assets/Home.png";
import orderIcon from "../../assets/Orders.png";
import productsIcon from "../../assets/Products.png";
import customersIcon from "../../assets/Customer.png";
import contentIcon from "../../assets/Content.png";
import financesIcon from "../../assets/Finances.png";
import analyticsIcon from "../../assets/Analytics.png";
import marketingIcon from "../../assets/Marketing.png";
import discountIcon from "../../assets/Discounts.png";
import settingsIcon from "../../assets/Settings.png";
import onlineStoreIcon from "../../assets/OnlineStore.png";
import posIcon from "../../assets/POS.png";
import shopIcon from "../../assets/Shop.png";
import emailIcon from "../../assets/Email.png";
import searchDiscoveryIcon from "../../assets/SearchDiscovery.png";
import flowIcon from "../../assets/Flow.png";

function SideBar() {
  const location = useLocation();

  const path = location.pathname ? location.pathname : "/";
  const pathKey = path.split("/")[1];

  const [selected, setSelected] = useState(pathKey ? pathKey : "home");

  const getListItemClass = (itemName) => {
    return selected === itemName
      ? "sidebar__list-item--selected"
      : "sidebar__list-item";
  };

  return (
    <nav className="sidebar">
      <div className="sidebar__list-container">
        <ul className="sidebar__list">
          <li className={getListItemClass("home")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("home")}
            >
              <img src={homeIcon} alt="home logo" />
              Home
            </Link>
          </li>
          <li className={getListItemClass("order")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("order")}
            >
              <img src={orderIcon} alt="Orders logo" />
              Orders
            </Link>
          </li>
          <li className={getListItemClass("products")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("products")}
            >
              <img src={productsIcon} alt="products logo" />
              Products
            </Link>
          </li>
          <li className={getListItemClass("customers")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("customers")}
            >
              <img src={customersIcon} alt="Customers logo" />
              Customers
            </Link>
          </li>
          <li className={getListItemClass("content")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("content")}
            >
              <img src={contentIcon} alt="Content logo" />
              Content
            </Link>
          </li>
          <li className={getListItemClass("finances")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("finances")}
            >
              <img src={financesIcon} alt="Finances logo" />
              Finances
            </Link>
          </li>
          <li className={getListItemClass("analytics")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("analytics")}
            >
              <img src={analyticsIcon} alt="Analytics logo" />
              Analytics
            </Link>
          </li>
          <li className={getListItemClass("marketing")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("marketing")}
            >
              <img src={marketingIcon} alt="Marketing logo" />
              Marketing
            </Link>
          </li>
          <li className={getListItemClass("discounts")}>
            <Link
              to={"/"}
              className="sidebar__list-link"
              onClick={() => setSelected("discounts")}
            >
              <img src={discountIcon} alt="Discounts logo" />
              Discounts
            </Link>
          </li>
        </ul>

        <div className="sidebar__list-section">
          <div className="sidebar__list-label">
            <Link
              to="/"
              className="sidebar__list-label-link"
              onClick={() => setSelected("salesChannels")}
            >
              Sales channels
              <i class="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          <ul className="sidebar__list">
            <li className={getListItemClass("online-store")}>
              <Link
                to="/online-store"
                className="sidebar__list-link"
                onClick={() => setSelected("online-store")}
              >
                <img src={onlineStoreIcon} alt="Online store logo" />
                Online Store
              </Link>
            </li>
            <li className={getListItemClass("pos")}>
              <Link
                to="/"
                className="sidebar__list-link"
                onClick={() => setSelected("pos")}
              >
                <img src={posIcon} alt="point of sale logo" />
                Point of Sale
              </Link>
            </li>
            <li className={getListItemClass("shop")}>
              <Link
                to="/"
                className="sidebar__list-link"
                onClick={() => setSelected("shop")}
              >
                <img src={shopIcon} alt="shop logo" />
                Shop
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar__list-section">
          <div className="sidebar__list-label">
            <Link
              to="/"
              className="sidebar__list-label-link"
              onClick={() => setSelected("apps")}
            >
              Apps
              <i class="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          <ul className="sidebar__list">
            <li className={getListItemClass("email")}>
              <Link
                to="/"
                className="sidebar__list-link"
                onClick={() => setSelected("email")}
              >
                <img src={emailIcon} alt="email logo" />
                Shopify Email
              </Link>
            </li>
            <li className={getListItemClass("ssd")}>
              <Link
                to="/"
                className="sidebar__list-link"
                onClick={() => setSelected("ssd")}
              >
                <img
                  src={searchDiscoveryIcon}
                  alt="Shopify Search & Discovery logo"
                />
                Shopify Search & Discovery
              </Link>
            </li>
            <li className={getListItemClass("flow")}>
              <Link
                to="/"
                className="sidebar__list-link"
                onClick={() => setSelected("flow")}
              >
                <img src={flowIcon} alt="Flow logo" />
                Shopify Flow
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__list-label--setting">
        <Link
          to="/"
          className="sidebar__list-link"
          onClick={() => setSelected("setting")}
        >
          <img src={settingsIcon} alt="setting" />
          Settings
        </Link>
      </div>
    </nav>
  );
}

export default SideBar;
