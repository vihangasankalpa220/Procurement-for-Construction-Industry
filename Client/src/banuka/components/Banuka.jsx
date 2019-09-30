import React, { Component } from "react";
import TopNavigation from "./topNavigation";
import SideNavigation from "./sideNavigation";
import Footer from "./Footer";
import './index.css';
import Routes from './Routes'

export default class Banuka extends Component {
  render() {
    return (
      <div className="flexible-content">
        {/* <TopNavigation /> */}
        <SideNavigation />

        {/* <main id="content" className="p-5">
          <Routes/>
        </main> */}

        

        {/* <Footer /> */}
      </div>
    );
  }
}
