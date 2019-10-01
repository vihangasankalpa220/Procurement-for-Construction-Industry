import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBFormInline,
  MDBBtn
} from "mdbreact";
import { NavLink } from 'react-router-dom';

export default class BreadcrumSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: ''
    }
  }

  componentDidMount(){
    let getPathName = window.location.pathname;
    let pathName = '';
    if(getPathName === "/banuka/dashboard"){
      pathName = "dashboard"
    }else if(getPathName === "/banuka/create"){
      pathName ="create"
    }else if(getPathName === "/banuka/view"){
      pathName = "view";
    }
    
    this.setState({
      url: pathName
    });
  }

  render() {
    return (
      <MDBCard>
        <MDBCardBody
          id="breadcrumb"
          className="d-flex align-items-center justify-content-between"
        >
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
            <NavLink to="/banuka/dashboard">
              Dashboard
            </NavLink>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active>{this.state.url}</MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
