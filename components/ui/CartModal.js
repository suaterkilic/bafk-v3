import React, { Fragment } from "react";

class CartModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div id="myCart" className="offcanvas_aside offcanvas_aside_right">
          <div className="offcanvas_aside_content">
            <div className="offcanvas_minicart">
              <div className="offcanvas_header">
                <div className="close-icon">
                  <span className="close-icon_top" />
                  <span className="close-icon_bottom" />
                </div>
              </div>
              <div className="widget woocommerce widget_shopping_cart">
                <h2 className="widgettitle">Sepet</h2>
                <div className="widget_shopping_cart_content">
                  <div className="shopping-cart-widget-body nano has-scrollbar">
                    <div
                      className="nano-content"
                      tabIndex={0}
                      style={{ right: "-19px" }}
                    >
                      {/* begin mini-cart-no-products */}
                      <div className="mini-cart-no-products">
                        <h4 className="woocommerce-mini-cart__empty-message empty">
                          Sepetinizde ürün bulunmuyor.
                        </h4>
                        <p className="return-to-shop">
                          <a
                            className="button wc-backward"
                            href="https://bafk.com.tr/magaza/"
                          >
                            Mağazaya geri dön{" "}
                          </a>
                        </p>
                      </div>
                      {/* end mini-cart-no-products */}
                    </div>
                    <div className="nano-pane" style={{ display: "none" }}>
                      <div
                        className="nano-slider"
                        style={{
                          height: "907px",
                          transform: "translate(0px, 0px)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="shopping-cart-widget-footer"></div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CartModal;
