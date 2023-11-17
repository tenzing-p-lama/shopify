import React from "react";
import Card from "../../components/Card/Card";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import "./Partners.scss";
import firstIcon from "../../assets/Icon.png";
import secondIcon from "../../assets/Icon-1.png";
import thirdIcon from "../../assets/Icon-2.png";
import fourthIcon from "../../assets/Icon-3.png";
import fifthIcon from "../../assets/Icon-4.png";
import sixthIcon from "../../assets/Icon-5.png";

function Partners() {
  return (
    <div className="partners">
      <ShadowBox>
        <div className="partners__content">
          <h1 className="partners__content-header">Next steps</h1>
          <div className="partners__content-description">
            We’ll help you make the most of your site. From add ons and plugins,
            to affiliate marketing and consults with our partners.
          </div>
        </div>

        <div className="partners__content--borderless">
          <h1 className="partners__content-header--big">Shopify Partners</h1>
          <div className="partners__content-header-description">
            Connect with a network of skilled professionals, offering a wide
            range of services tailored to your business needs.
          </div>

          <div className="partners__content-header">
            Popular with stores like yours
          </div>
          <div className="partners__content-card-list">
            <div className="partners__card">
              <div className="partners__card-image">
                <img src={firstIcon} alt="icon" />
              </div>
              <div className="partners__card-label">
                Visual content and branding
              </div>
              <div className="partners__card-description">
                Boost your store’s appeal with visuals that reflect your brand.
              </div>
            </div>

            <div className="partners__card">
              <div className="partners__card-image">
                <img src={secondIcon} alt="icon" />
              </div>
              <div className="partners__card-label">Content Writing</div>
              <div className="partners__card-description">
                Attract customers with Exciting, professionally written content
              </div>
            </div>

            <div className="partners__card">
              <div className="partners__card-image">
                <img src={thirdIcon} alt="icon" />
              </div>
              <div className="partners__card-label">Expert guidance</div>
              <div className="partners__card-description">
                Get feedback and advice on your business, your store, or your
                marketing activities
              </div>
            </div>

            <div className="partners__card">
              <div className="partners__card-image">
                <img src={fourthIcon} alt="icon" />
              </div>
              <div className="partners__card-label">Marketing and sales</div>
              <div className="partners__card-description">
                Attract customers to your site and drive sales through effective
                marketing techniques
              </div>
            </div>

            <div className="partners__card">
              <div className="partners__card-image">
                <img src={fifthIcon} alt="icon" />
              </div>
              <div className="partners__card-label">Store setup</div>
              <div className="partners__card-description">
                Craft an enjoyable shopping experience with a well-designed,
                user-friendly store.
              </div>
            </div>

            <div className="partners__card">
              <div className="partners__card-image">
                <img src={sixthIcon} alt="icon" />
              </div>
              <div className="partners__card-label">
                Development and troubleshooting
              </div>
              <div className="partners__card-description">
                Enhance your store with custom code or apps, resolving technical
                issues seamlessly.
              </div>
            </div>
          </div>
        </div>

        <button className="partners__more-button">
          <i class="fa-solid fa-chevron-down"></i>
        </button>

        <button className="partners__finish-button">Go Live</button>
      </ShadowBox>
    </div>
  );
}

export default Partners;
