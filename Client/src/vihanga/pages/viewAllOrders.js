import React, {Component} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation,
    MDBCardGroup,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBIcon,
    MDBListGroup,
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import axios from "axios";

const dataSet = [
    {'name':'Asia Tools PVT LTD', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'China','items':['A','B']},
    {'name':'Alibaba Constructions', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg','country': 'Sri Lanka','items':['D','B']},
    {'name':'Asia Metals Industries', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'India','items':['E','B']},
    {'name':'Lanwa SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']},
];

export default class ViewAllOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
        this.state.dataSet = {business: []};
            this.state.filteredSet = dataSet;
            this.state.searchValue1 = this.state.person_name;
            this.state.searchValue2 = this.state.business_name;
            this.state.searchValue3 = this.state.business_gst_number;


    }


    componentDidMount(){
        axios.get('http://localhost:4000/business')
            .then(response => {
                this.setState({ business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    handleSearch1 = event => this.setState({ searchValue1: event.target.value }, () => this.searchForName());
    handleSearch2 = event => this.setState({ searchValue2: event.target.value }, () => this.searchForQTY());
    handleSearch3 = event => this.setState({ searchValue3: event.target.value }, () => this.searchFordiscription());

    searchForName = () => {
        this.setState(prevState => {
            const filteredSet = prevState.dataSet.filter(items =>
                items.person_name.toLowerCase().match(this.state.searchValue1.toLowerCase())
            );
            return { filteredSet };
        });
    };

    searchForQTY = () => {
        this.setState(prevState => {
            const filteredSet = prevState.dataSet.filter(items =>
                items.business[0].toLowerCase().match(this.state.searchValue2.toLowerCase())
            );
            return { filteredSet };
        });
    };

    searchFordiscription = () => {
        this.setState(prevState => {
            const filteredSet = prevState.dataSet.filter(items =>
                items.business_gst_number.toLowerCase().match(this.state.searchValue3.toLowerCase())
            );
            return { filteredSet };
        });
    };

    render() {
        return (
            <MDBContainer>
                <SectionContainer header="All Orders">
                    <MDBRow>
                        <MDBCol md="4">
                            <label>Name</label>
                            <form className="form-inline active-cyan-4 mb-4">
                                <input
                                    className="form-control form-control-sm mr-3 w-75"
                                    type="text"
                                    autoFocus
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={this.state.searchValue1}
                                    onChange={this.handleSearch1}
                                />
                                <MDBIcon icon="search" aria-hidden="true" />
                            </form>
                        </MDBCol>
                        <MDBCol md="4">
                            <label>QTY</label>
                            <form className="form-inline active-cyan-4 mb-4">

                                <input
                                    className="form-control form-control-sm mr-3 w-75"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={this.state.searchValue2}
                                    onChange={this.handleSearch2}
                                />
                                <MDBIcon icon="search" aria-hidden="true" />
                            </form>
                        </MDBCol>
                        <MDBCol md="4">
                            <label>Discription</label>
                            <form className="form-inline active-cyan-4 mb-4">

                                <input
                                    className="form-control form-control-sm mr-3 w-75"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={this.state.searchValue3}
                                    onChange={this.handleSearch3}
                                />
                                <MDBIcon icon="search" aria-hidden="true" />
                            </form>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                                    {this.state.filteredSet.map(items => (
                                        <MDBCol md="3" className="mx-auto" key={items}>
                                            <MDBCardGroup deck className="mt-3">
                                                <MDBListGroup>
                                                    <MDBAnimation type="zoomIn" duration="500ms">
                                                        <MDBCard>
                                                        <MDBCardImage
                                                        src={items.image}
                                                        alt="MDBCard image cap"
                                                        top
                                                        hover
                                                        overlay="white-slight"
                                                        />
                                                        <MDBCardBody>
                                                        <MDBCardTitle tag="h5">{items.person_name}</MDBCardTitle>
                                                        <MDBCardText>
                                                            Country: {items.business_name}
                                                            <br/>
                                                            Items: {items.business_gst_number}
                                                        </MDBCardText>
                                                        <MDBBtn color="light-blue" size="md">
                                                        View Data
                                                        </MDBBtn>
                                                        </MDBCardBody>
                                                        </MDBCard>
                                                    </MDBAnimation>
                                                </MDBListGroup>
                                            </MDBCardGroup>
                                        </MDBCol>
                                    ))}
                    </MDBRow>
                </SectionContainer>
            </MDBContainer>
        );
    }
}


