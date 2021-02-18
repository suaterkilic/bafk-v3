import React, { Fragment } from "react";
import Header from "../components/categories/Header";
import Footer from "../components/footer/Footer";
import Overlay from "../components/ui/Overlay";

function Layout({ children }) {
  return (
    <Fragment>
      <div className="bb-container" id="bb-container">
        <Header />
        <div className="offcanvas_container">
          <div className="offcanvas_main_content">
            { children }
            <Footer />
          </div>
          <Overlay />
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
