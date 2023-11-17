import React, { useEffect, useState } from "react";
import "./EditStore.scss";
import mobileIcon from "../../assets/Mobile.png";
import desktopIcon from "../../assets/Desktop.png";
import searchIcon from "../../assets/Search.png";
import userIcon from "../../assets/Customer2.png";
import purchaseIcon from "../../assets/Purchase.png";
import PhotoUploader from "../../components/PhotoUploader/PhotoUploader";
import ViewStore from "../ViewStore/ViewStore";

function EditStore(props) {
  const [showStyleMenu, setShowStyleMenu] = useState({
    show: false,
    expanded: "textStyle",
  });

  const [styleValues, setStyleValues] = useState({
    textStyle: "Arial",
    fontSize: 32,
    color: "#000000",
  });

  const [mainText, setMainText] = useState("");
  const [subText, setSubText] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [fImage, setFImage] = useState("");
  const [sImage, setSImage] = useState("");
  const [tImage, setTImage] = useState("");
  const [fProduct, setFProduct] = useState("");
  const [sProduct, setSProduct] = useState("");
  const [tProduct, setTProduct] = useState("");
  const [fProductPrice, setFProductPrice] = useState();
  const [sProductPrice, setSProductPrice] = useState();
  const [tProductPrice, setTProductPrice] = useState();

  const [openViewStore, setOpenViewStore] = useState(false);

  useEffect(() => {
    setShowStyleMenu({
      show: false,
      expanded: "textStyle",
    });
  }, [styleValues]);

  return (
    <>
      <ViewStore
        open={openViewStore}
        styleValues={styleValues}
        mainText={mainText}
        subText={subText}
        fProduct={fProduct}
        sProduct={sProduct}
        tProduct={tProduct}
        fProductPrice={fProductPrice}
        sProductPrice={sProductPrice}
        tProductPrice={tProductPrice}
        onClose={() => {
          setOpenViewStore(false);
        }}
      />
      <div
        className={props.open ? "edit--open" : "edit"}
        onClick={() =>
          setShowStyleMenu({
            show: false,
            expanded: "textStyle",
          })
        }
      >
        <div className="edit__header">
          <button
            className="edit__header-back-button"
            onClick={() => props.onClose()}
          >
            <i class="fa-solid fa-chevron-left"></i>
            Back
          </button>

          <div className="edit__options">
            <div className="edit__options-theme">
              <label for="theme-style">Theme styles</label>
              <select id="theme-style" name="theme-style">
                <option value="ShopBotGenerated">Shop-Bot Generated</option>
              </select>
            </div>
            <div className="edit__options-env">
              <button className="edit__options-env-button--selected">
                <img src={desktopIcon} alt="desktop" />
              </button>
              <button className="edit__options-env-button">
                <img src={mobileIcon} alt="mobile" />
              </button>
            </div>
          </div>
          <button
            className="edit__save-button"
            onClick={() => setOpenViewStore(true)}
          >
            Save
          </button>
        </div>

        <div className="edit__content">
          <div className="edit__content-top">
            <div className="edit__content-top-name">Merry Cosmetics</div>
            <div className="edit__content-top-icons">
              <img src={searchIcon} alt="search" />
              <img src={userIcon} alt="user" />
              <img src={purchaseIcon} alt="purchase" />
            </div>
          </div>

          <div className="edit__content-inputs">
            <div className="edit__content-input--primary">
              <div className="edit__content-input-texts">
                <div className="edit__content-input-text--main">
                  <input
                    type="text"
                    placeholder="YOUR TEXT GOES HERE"
                    value={mainText}
                    onChange={(e) => setMainText(e.target.value)}
                    style={{
                      color: styleValues.color,
                      fontFamily: styleValues.textStyle,
                      fontSize: styleValues.fontSize,
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowStyleMenu({
                        show: true,
                        expanded: "textStyle",
                      });
                    }}
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  {showStyleMenu.show && (
                    <div
                      className="edit__style"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ul className="edit__style-list">
                        <li className="edit__style-item">
                          <span
                            onClick={() =>
                              setShowStyleMenu({
                                show: true,
                                expanded: "textStyle",
                              })
                            }
                          >
                            Text Style
                          </span>
                          <ul
                            className={
                              showStyleMenu.expanded === "textStyle"
                                ? "edit__style-list-sub--expanded"
                                : "edit__style-list-sub"
                            }
                          >
                            <li
                              className="edit__style-item"
                              onClick={() => {
                                setStyleValues({
                                  ...styleValues,
                                  textStyle: "fantasy",
                                });
                              }}
                            >
                              Fantasy
                            </li>
                            <li
                              className="edit__style-item"
                              onClick={() => {
                                setStyleValues({
                                  ...styleValues,
                                  textStyle: "cursive",
                                });
                              }}
                            >
                              Cursive
                            </li>
                            <li
                              className="edit__style-item"
                              onClick={() => {
                                setStyleValues({
                                  ...styleValues,
                                  textStyle: "sans-serif",
                                });
                              }}
                            >
                              Serif
                            </li>
                          </ul>
                        </li>
                        <li className="edit__style-item">
                          <span
                            onClick={() =>
                              setShowStyleMenu({
                                show: true,
                                expanded: "fontSize",
                              })
                            }
                          >
                            Size
                          </span>
                          <ul
                            className={
                              showStyleMenu.expanded === "fontSize"
                                ? "edit__style-list-sub--expanded"
                                : "edit__style-list-sub"
                            }
                          >
                            <li
                              className="edit__style-item"
                              onClick={() => {
                                setStyleValues({
                                  ...styleValues,
                                  fontSize: 28,
                                });
                              }}
                            >
                              28
                            </li>
                            <li
                              className="edit__style-item"
                              onClick={() => {
                                setStyleValues({
                                  ...styleValues,
                                  fontSize: 32,
                                });
                              }}
                            >
                              32
                            </li>
                            <li
                              className="edit__style-item"
                              onClick={() => {
                                setStyleValues({
                                  ...styleValues,
                                  fontSize: 36,
                                });
                              }}
                            >
                              36
                            </li>
                          </ul>
                        </li>
                        <li className="edit__style-item">
                          <span
                            onClick={() =>
                              setShowStyleMenu({
                                show: true,
                                expanded: "color",
                              })
                            }
                          >
                            Color
                          </span>
                          <div
                            className={
                              showStyleMenu.expanded === "color"
                                ? "edit__style-item-input--expanded"
                                : "edit__style-item-input"
                            }
                          >
                            <input
                              type="color"
                              onChange={(e) => {
                                setStyleValues({
                                  ...styleValues,
                                  color: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="edit__content-input-text--sub">
                  <input
                    type="text"
                    placeholder="Text holder"
                    value={subText}
                    onChange={(e) => setSubText(e.target.value)}
                  />
                </div>
              </div>
              <PhotoUploader onDrop={(file) => {}} />
            </div>
            <div className="edit__content-input--scondary">
              <div className="edit__content-input-image">
                <PhotoUploader onDrop={(file) => {}} />
                <div className="edit__content-product">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={fProduct}
                    onChange={(e) => setFProduct(e.target.value)}
                  />
                  <div className="edit__content-product-price">
                    $
                    <input
                      type="number"
                      placeholder="00.00"
                      value={fProductPrice}
                      onChange={(e) => setFProductPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="edit__content-input-image">
                <PhotoUploader onDrop={(file) => {}} />
                <div className="edit__content-product">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={sProduct}
                    onChange={(e) => setSProduct(e.target.value)}
                  />
                  <div className="edit__content-product-price">
                    $
                    <input
                      type="number"
                      placeholder="00.00"
                      value={sProductPrice}
                      onChange={(e) => setSProductPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="edit__content-input-image">
                <PhotoUploader onDrop={(file) => {}} />
                <div className="edit__content-product">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={tProduct}
                    onChange={(e) => setTProduct(e.target.value)}
                  />
                  <div className="edit__content-product-price">
                    $
                    <input
                      type="number"
                      placeholder="00.00"
                      value={tProductPrice}
                      onChange={(e) => setTProductPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditStore;
