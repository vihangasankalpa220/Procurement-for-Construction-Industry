import React from "react";
import {
    MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation
} from "mdbreact";

const V1HomePage = () => {
    return (
        <>
            <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
            <MDBAnimation type="zoomIn" duration="500ms">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="8" className="mx-auto">

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
        </>
    );
};

export default V1HomePage;
