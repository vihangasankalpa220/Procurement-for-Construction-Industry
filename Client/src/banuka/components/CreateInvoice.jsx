import React, { Component } from "react";
import SideNavigation from "./sideNavigation";
import BreadCrumb from "./BreadcrumSection";
import CreateInvoiceMain from './CreateInvoice-main';

export default class CreateInvoice extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-3">
              <SideNavigation />
            </div>
            <div className="col-md-9 col-9">
              <BreadCrumb />
            </div>
          </div>
 
          <div className="row">
            <div className="col-md-3 col-3"></div>
            <div className="col-md-9 col-9">
              <CreateInvoiceMain />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
