import React, { useState } from "react";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import onlineStoreIcon from "../../assets/OnlineStore.png";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpeg";
import product3 from "../../assets/product3.jpeg";
import searchIcon from "../../assets/Search.png";
import userIcon from "../../assets/Customer2.png";
import purchaseIcon from "../../assets/Purchase.png";
import "./OnlineStore.scss";
import EditStore from "../EditStore/EditStore";

function OnlineStore() {
  const [openEdit, setOpenEdit] = useState(true);

  return (
    <>
      <EditStore open={openEdit} onClose={() => setOpenEdit(false)} />
      <div className="online-store">
        <div className="online-store__header">
          <img src={onlineStoreIcon} alt="Online store logo" />
          <span>Online Store</span>
        </div>
        <div className="online-store__content">
          <ShadowBox>
            <div className="online-store__content-inner">
              <div className="online-store__content-left">
                <div>
                  <div className="online-store__content-label">
                    We’ve generated your design!
                  </div>
                  <div className="online-store__content-description">
                    A minimalist theme that lets product images take centre
                    stage.
                  </div>
                </div>
                <div className="online-store__content-buttons">
                  <button className="online-store__content-button">
                    Regenerate
                  </button>
                  <button
                    className="online-store__content-button--primary"
                    onClick={() => setOpenEdit(true)}
                  >
                    Edit My Store
                  </button>
                </div>
              </div>

              <div className="online-store__content-right">
                <div className="online-store__shop">
                  <div className="online-store__shop-name">Merry Cosmetics</div>
                  <div className="online-store__shop-icons">
                    <img src={searchIcon} alt="search" />
                    <img src={userIcon} alt="user" />
                    <img src={purchaseIcon} alt="purchase" />
                  </div>
                </div>
                <div className="online-store__shop-images">
                  <div className="online-store__shop-image--main">
                    <div className="online-store__shop-label">
                      <span className="online-store__shop-label-text">
                        YOUR TEXT GOES HERE
                      </span>
                      <div className="online-store__image-container">
                        <img src={product1} alt="product image" />
                      </div>
                    </div>
                    <div className="online-store__shop-image-example">
                      <div className="online-store__shop-product">
                        <div className="online-store__image-container--small">
                          <img src={product1} alt="product image" />
                        </div>

                        <div className="online-store__shop-product-info">
                          <span className="online-store__shop-product-name">
                            Product Name
                          </span>
                          <span className="online-store__shop-product-price">
                            $0.00
                          </span>
                        </div>
                      </div>
                      <div className="online-store__shop-product">
                        <div className="online-store__image-container--small">
                          <img src={product2} alt="product image" />
                        </div>

                        <div className="online-store__shop-product-info">
                          <span className="online-store__shop-product-name">
                            Product Name
                          </span>
                          <span className="online-store__shop-product-price">
                            $0.00
                          </span>
                        </div>
                      </div>
                      <div className="online-store__shop-product">
                        <div className="online-store__image-container--small">
                          <img src={product3} alt="product image" />
                        </div>

                        <div className="online-store__shop-product-info">
                          <span className="online-store__shop-product-name">
                            Product Name
                          </span>
                          <span className="online-store__shop-product-price">
                            $0.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShadowBox>
        </div>
      </div>
    </>
  );
}

export default OnlineStore;
