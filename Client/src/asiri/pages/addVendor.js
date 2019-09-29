import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";

const AddVendor = () => {
    return (
        <>
            <MDBContainer className="mt-5">
            <MDBAnimation type="zoomIn" duration="500ms">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="8" className="mx-auto">
                            <SectionContainer header="Add New Vendor">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Email</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Password</label>
                                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress2">Address 2</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputAddress2"
                                            placeholder="Apartment, studio, or floor"
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" placeholder="New York City" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip" placeholder="11206-1117" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-md">
                                        Sign in
                                    </button>
                                </form>
                            </SectionContainer>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
            </MDBContainer>
        </>
    );
};

export default AddVendor;
