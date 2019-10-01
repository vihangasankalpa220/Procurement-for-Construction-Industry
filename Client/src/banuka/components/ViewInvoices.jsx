import React, { Component } from "react";
import SideNavigation from "./sideNavigation";
import BreadCrumb from "./BreadcrumSection";
import ViewInvoiceTable from './ViewInvoice-table';
import tt from './table'

export default class ViewInvoices extends Component {
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
        <hr />
          <div className="row">
            <div className='col-md-3 col-3'></div>
            <div className='col-md-9 col-9'>
              <h1>View Invoice</h1>
              <br/>
              <ViewInvoiceTable />
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
