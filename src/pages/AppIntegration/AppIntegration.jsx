import "./AppIntegration.scss";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import CardApp from "../../components/CardApp/CardApp";

//icons
import tiktok from "../../assets/icons/image 6.png";
import shopsearch from "../../assets/icons/image 7.png";
import jubilee from "../../assets/icons/image 8.png";
import youcam from "../../assets/icons/image 9.png";
import printify from "../../assets/icons/image 10.png";
import matrixify from "../../assets/icons/image 11.png";
import cjdrop from "../../assets/icons/image 12.png";
import autosync from "../../assets/icons/image 13.png";
import { Link } from "react-router-dom";

function AppIntegration() {
  return (
    <div className="appinteg">
      <ShadowBox>
        <div className="appinteg__content appinteg__content-top">
          <h1 className="appinteg__content-header">Next Steps</h1>
          <div className="appinteg__content-description">
            We’ll help you make the most of your site. From add ons and plugins,
            to affiliate marketing and consults with our partners.
          </div>
        </div>

        <div className="appinteg__content">
          <h1 className="appinteg__content-header--big">App Integration</h1>
          <div className="appinteg__content-description">
            Enhance your Shopify store with versatile apps. From inventory to
            marketing, find the right tools in the Shopify App Store
          </div>
        </div>

        <div className="appinteg__content">
          <h1 className="appinteg__content-header">
            Recommended for stores like yours
          </h1>

          <div className="appinteg__content-card-list">
            <CardApp
              image={tiktok}
              label="TikTok"
              description="Showcase your Products to TikToks billions of users"
            />
            <CardApp
              image={shopsearch}
              label="Shopify Seach"
              description="Customize your storefronts search and discoverability"
            />
            <CardApp
              image={jubilee}
              label="Jubilee Beauty DS"
              description="Beauty/Cosmetics drop shipping apps"
            />
            <CardApp
              image={youcam}
              label="YouCam Virtual Try-On"
              description="Boost your sales with ultraprecise virtual try-on"
            />
            <CardApp
              image={printify}
              label="Printify"
              description="Create and sell custom products we handle the rest"
            />
            <CardApp
              image={matrixify}
              label="Matrixify"
              description="Import, export migrate and update store data in bulk"
            />
            <CardApp
              image={cjdrop}
              label="CJDropshipping"
              description="You sell- We source and ship for you!"
            />
            <CardApp
              image={autosync}
              label="AutoSync Canva"
              description="Find and use your product images in Canva"
            />
          </div>
        </div>

        <div className="appinteg__button-container">
          <button className="appinteg__button appinteg__button-blue">
            Browse more apps
          </button>

          <Link
            className="appinteg__button appinteg__button-green"
            to={"/online-store/partners"}
          >
            Next
          </Link>
        </div>
      </ShadowBox>
    </div>
  );
}

export default AppIntegration;
