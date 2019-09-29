import React from "react";
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBAnimation
} from "mdbreact";
import MenuLink from "./../../components/menuLink";

const V1HomePage = () => {
  return (
    <>
    <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
      <MDBAnimation type="zoomIn" duration="500ms">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8" className="mx-auto">
                <MDBJumbotron className="mt-3">
                  <h1 className="text-center">
                    Procurement System V1
                  </h1>
                  <p>Add all page links here (only for development purpose)</p>
                  <ul className="list-unstyled example-components-list">
                    {/*Vendor Management*/}
                    <h6 className="mt-3 grey-text"><strong>Asiri</strong></h6>
                    <MenuLink to="/vendor/add" title="Add Vendor" />
                    <MenuLink to="/vendor/all" title="View All Vendors" />
                    <MenuLink to="/vendor/update" title="Update Vendor" />
                    <MenuLink to="/vendor/details/1" title="View One Vendor" />
                    <MenuLink to="/vendor/dashboard" title="Dashboard" />
                    <MenuLink to="/vendor/reporting" title="Reporting" />
                    
                    {/*Purchase Invoices*/}
                    <h6 className="mt-3 grey-text"><strong>Purchase Invoices - Jananath</strong></h6>
                    <MenuLink to="/css/animations" title="xxx Management" />

                    {/*Purchase Requisition*/}
                    <h6 className="mt-3 grey-text"><strong>Purchase Requisition - Chinthaka</strong></h6>
                    <MenuLink to="/css/animations" title="xxx Management" />

                    {/*Purchase Orders*/}
                    <h6 className="mt-3 grey-text"><strong>Purchase Orders - Vihanga</strong></h6>
                    <MenuLink to="/css/animations" title="xxx Management" />

                  </ul>
                </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default V1HomePage;
