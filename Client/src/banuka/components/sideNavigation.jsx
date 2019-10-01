// eslint-disable-next-line to the line before
import React from 'react';
import logo from './mdb-react.png'
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';


const TopNavigation = () => {
    return (
        // <div className="sidebar-fixed position-fixed">
        <div  className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
            <img style={{marginTop:"50px"}} alt="MDB React Logo" className="img-fluid" src={logo}/>
                {/* <h5>Procument System - Purchase Invoices</h5> */}
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/banuka/dashboard" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/banuka/create" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="edit" className="mr-3"/>
                        Create an invoice
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/banuka/view" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        View Invoices
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;