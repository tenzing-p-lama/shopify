import React from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";
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
  return (
    <nav className="sidebar">
      <div>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={homeIcon} alt="home logo" />
              Home
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={orderIcon} alt="Orders logo" />
              Orders
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={productsIcon} alt="products logo" />
              Products
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={customersIcon} alt="Customers logo" />
              Customers
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={contentIcon} alt="Content logo" />
              Content
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={financesIcon} alt="Finances logo" />
              Finances
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={analyticsIcon} alt="Analytics logo" />
              Analytics
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={marketingIcon} alt="Marketing logo" />
              Marketing
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={"/"} className="sidebar__list-link">
              <img src={discountIcon} alt="Discounts logo" />
              Discounts
            </Link>
          </li>
        </ul>

        <div className="sidebar__list">
          <div className="sidebar__list-label">
            <Link to="/" className="sidebar__list-link">
              Sales channels
            </Link>
          </div>

          <ul>
            <li className="sidebar__list-item">
              <Link to="/" className="sidebar__list-link">
                <img src={onlineStoreIcon} alt="Online store logo" />
                Online Store
              </Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/" className="sidebar__list-link">
                <img src={posIcon} alt="point of sale logo" />
                Point of Sale
              </Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/" className="sidebar__list-link">
                <img src={shopIcon} alt="shop logo" />
                Shop
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar__list">
          <div className="sidebar__list-label">
            <Link to="/" className="sidebar__list-link">
              Apps
            </Link>
          </div>

          <ul>
            <li className="sidebar__list-item">
              <Link to="/" className="sidebar__list-link">
                <img src={emailIcon} alt="email logo" />
                Shopify Email
              </Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/" className="sidebar__list-link">
                <img
                  src={searchDiscoveryIcon}
                  alt="Shopify Search & Discovery logo"
                />
                Shopify Search & Discovery
              </Link>
            </li>
            <li className="sidebar__list-item">
              <Link to="/" className="sidebar__list-link">
                <img src={flowIcon} alt="Flow logo" />
                Shopify Flow
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__list-label">
        <Link to="/" className="sidebar__list-link">
          <img src={settingsIcon} alt="setting" />
          Settings
        </Link>
      </div>
    </nav>
  );
}

export default SideBar;
