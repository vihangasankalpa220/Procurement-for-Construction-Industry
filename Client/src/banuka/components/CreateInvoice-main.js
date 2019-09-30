import React, { Component } from "react";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import CreateInvoiceCreate from  './CreateInvoice-create';

  class CreateInvoiceMain extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <MDBContainer>
        <MDBNav className="nav-tabs mt-4">
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              <i className="fa fa-files-o"> Invoice Details</i>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
            <i className="fa fa-users"> Vendors</i>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
              Others
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              <CreateInvoiceCreate />
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
            <p>
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              Quisquam aperiam, pariatur. Tempora, placeat ratione porro
              voluptate odit minima. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil odit magnam minima,
              soluta doloribus reiciendis molestiae placeat unde eos
              molestias.
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default CreateInvoiceMain;