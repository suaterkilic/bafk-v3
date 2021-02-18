import React, { Fragment } from "react";
import Link from 'next/link';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }

  closeMenu = () => {
    const test = document.getElementById("testEl");
    test.classList.add("hide_toggle_menu");

    const myBody = document.getElementById("myBody");
    const myMenu = document.getElementById("myMenu");

    myMenu.removeAttribute("style");

    myBody.classList.remove("offcanvas_open", "lock-scroll");

    const myOverlay = document.getElementById("myOverlay");
    myOverlay.classList.remove("toggle_menu_overlay");

    myBody.classList.remove("offcanvas_left");
  };

  render() {
    return (
      <Fragment>
        <div id="myMenu" className="offcanvas_aside offcanvas_aside_left">
          <div className="nano has-scrollbar">
            <div
              className="nano-content"
              tabIndex={0}
              style={{ right: "-19px" }}
            >
              <div id="testEl" className="offcanvas_aside_content">
                <div className="offcanvas_mainmenu">
                  <div onClick={() => this.closeMenu()} className="close-icon">
                    <span className="close-icon_top" />
                    <span className="close-icon_bottom" />
                  </div>
                  {/* begin offcanvas-navs */}
                  <div className="offcanvas-navs">
                    <div className="header-mobiles-primary-menu">
                      <div
                        className="is-drilldown animate-height"
                        style={{ height: "174.167px", maxWidth: "500px" }}
                      >
                        <ul
                          id="menu-primary-menu-1"
                          className="vertical menu drilldown mobile-menu"
                          data-drilldown
                          data-close-on-click="true"
                          data-auto-height="true"
                          data-animate-height="true"
                          data-parent-link="true"
                          data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                          role="tree"
                          aria-multiselectable="false"
                          data-mutate="oouipj-drilldown"
                          data-n="1826uk-n"
                        >
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3609"
                            role="treeitem"
                          >
                            <Link href="/">
                              <a>
                                <span>Ana Sayfa</span>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3680"
                            role="treeitem"
                          >
                            <Link href="/about">
                              <a>
                                <span>Biz Kimiz</span>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3497 is-drilldown-submenu-parent"
                            role="treeitem"
                            aria-haspopup="true"
                            aria-label="Erkek"
                            aria-expanded="false"
                          >
                            <a tabIndex={0}>
                              <span>Erkek</span>
                            </a>
                            <ul
                              className="menu vertical nested submenu is-drilldown-submenu invisible"
                              data-submenu
                              role="group"
                              aria-hidden="true"
                            >
                              <li className="js-drilldown-back">
                                <a tabIndex={0}>Back</a>
                              </li>
                              <li
                                data-is-parent-link
                                className="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item"
                                role="menuitem"
                              >
                                <a href="https://bafk.com.tr/magaza/">
                                  <span>Erkek</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4028 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="/erkek-esofmanlari/">
                                  <span>Eşofman</span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4052 is-submenu-item is-drilldown-submenu-item"
                                role="treeitem"
                              >
                                <a href="/erkek-sortlari">
                                  <span>Şort</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3616"
                            role="treeitem"
                          >
                            <Link href="/blog">
                            <a>
                              <span>Blog</span>
                            </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header-mobiles-account-menu">
                      <div
                        className="is-drilldown animate-height"
                        style={{ height: "65.1042px", maxWidth: "500px" }}
                      >
                        <ul
                          className="vertical menu drilldown mobile-menu"
                          data-drilldown
                          data-close-on-click="true"
                          data-auto-height="true"
                          data-animate-height="true"
                          data-back-button='<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
                          role="tree"
                          aria-multiselectable="false"
                          data-mutate="6z91hi-drilldown"
                          data-n="n9mv5y-n"
                        >
                          <li
                            className="offcanvas-my-account-link"
                            role="treeitem"
                          >
                            <Link href="/login">
                              <a>
                                <span>Hesabım</span>
                              </a>
                            </Link>
                          </li>
                          <li
                            className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--wishlist "
                            role="treeitem"
                          >
                            <Link href="/fav">
                              <a>
                                <span>Favorilerim</span>
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* end offcanvas-navs */}
                  <div className="offcanvas-bottom">
                    <hr className="menu-horizontal-rule" />
                    <ul className="social-icons">
                      <li className="facebook">
                        <a target="_blank" title="Facebook" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-facebook" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="twitter">
                        <a target="_blank" title="Twitter" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-twitter" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="pinterest">
                        <a target="_blank" title="Pinterest" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-pinterest" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="instagram">
                        <a target="_blank" title="Instagram" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-instagram" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                      <li className="youtube">
                        <a target="_blank" title="YouTube" href="#">
                          <svg
                            className="svg-icon"
                            viewBox="0 0 24 24"
                            enableBackground="new 0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <use x={0} y={0} xlinkHref="#i-youtube" />
                          </svg>
                          <span className="s-circle_bg" />
                        </a>
                      </li>
                    </ul>
                    {/* begin offcanvas-contact-section */}
                    <div className="offcanvas-contact-section">
                      <div className="offcanvas-contact">
                        <a href="mailto:info@bafk.com.tr">info@bafk.com.tr</a>
                        <br />
                        <a href="tel:+902122941112">+90 (212) 294 11 12</a>
                        <br />
                      </div>
                    </div>
                    {/* end offcanvas-contact-section */}
                  </div>
                </div>
              </div>
            </div>
            <div className="nano-pane" style={{ display: "none" }}>
              <div
                className="nano-slider"
                style={{ height: "993px", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
        </div>
        <div id="myOverlay" className="offcanvas_overlay"></div>
      </Fragment>
    );
  }
}

export default Overlay;
