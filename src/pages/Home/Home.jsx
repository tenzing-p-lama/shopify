import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <ShadowBox>
        <div className="home__content">
          <h1 className="home__content-header">Get Started</h1>
          <div className="home__content-description">
            We’ll guide you through creating your first store and setting up
            your partner account.
          </div>
        </div>

        <div className="home__content">
          <h1 className="home__content-header--big">Shopify Ecosystem</h1>
          <div className="home__content-card-list">
            <Card
              label="Shopify Themes"
              description="Elevate your online store with Shopify Themes, offering customizable, feature-rich themes that enhance user experience and drive sales, all backed by long-term support for continuous success."
            />
            <Card
              label="Shopify Apps"
              description="Enhance your store's functionality with our Shopify Apps, providing tailored solutions that offer advanced features, seamless integration, and personalized user experiences to boost your store's performance and scalability."
            />
            <Card
              label="Partners Program"
              description="Connect with expert services through the Shopify Partners Program, which offers access to a network of certified professionals and custom solutions, ensuring quality assurance and innovative integrations for your business's growth."
            />
            <Card
              label="Affiliates Program"
              description="Expand your store's reach and increase sales with the Shopify Affiliates Program, leveraging a network of affiliates to drive targeted traffic through cost-effective, diverse marketing channels with comprehensive performance tracking."
            />
          </div>
        </div>

        <div className="home__content">
          <h1 className="home__content-header">Build a New Store</h1>
          <div className="home__content-button-container">
            <Link className="home__content-button" to={"/online-store"}>
              AI Generate Theme
            </Link>
            <button className="home__content-button">Customize Theme</button>
          </div>
        </div>
      </ShadowBox>
    </div>
  );
}

export default Home;
