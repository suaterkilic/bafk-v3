import React, { Fragment } from "react";
import Link from 'next/link';
import Search from './Search';

class RightHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Fragment>
        <div className="tools cell auto text-right">
          <div className="header-expanded-view">
            <div className="header-expanded-view-inner">
              <Search />

              <a href="favorilerim/index.html" className="header-wishlist">
                <svg
                  className="svg-icon"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                  xmlSpace="preserve"
                >
                  <use x={0} y={0} xlinkHref="#i-wishlist" />
                </svg>
                <sup className="wishlist_items_number">0</sup>
              </a>
              <div className="header-account navigation-foundation">
                <ul
                  className="dropdown menu my-account-form  my-account-has-drop "
                  data-close-on-click="false"
                  data-close-on-click-inside="false"
                  data-click-open="false"
                  data-dropdown-menu
                  data-hover-delay={150}
                  data-closing-time={0}
                  data-alignment="right"
                >
                  <li>
                    <Link href="/login">
                    <a data-open="head_loginModal">
                      <span>Hesabım</span>
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link href="/cart">
            <a className="link header-cart ">
              <span className="header-cart-title">Sepet</span>
              <span className="header-cart-count">
                <span className="header-cart-count-background" />
                <span className="header-cart-count-number">0</span>
              </span>
            </a>
          </Link>
        </div>
      </Fragment>
    );
  }
};

export default RightHeader;