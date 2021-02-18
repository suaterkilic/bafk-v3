import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Overlay from "../components/ui/Overlay";
import SearchModal from "../components/ui/SearchModal";
import CartModal from "../components/ui/CartModal";

function Layout({ children}) {
  return (
    <Fragment>
      <div className="bb-container" id="bb-container">
        <Header />
        <div className="offcanvas_container">
          <div className="offcanvas_main_content">
            {children}
            <Footer />
          </div>
          <Overlay />
          <SearchModal />
          <CartModal />
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
