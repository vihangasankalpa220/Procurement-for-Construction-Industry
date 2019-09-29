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
const axios = require('axios');
const env = require('dotenv').config();

 const data = [
     {'id':'1','name':'Asia Tools PVT LTD', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'China','items':['A','B']},
     {'id':'2','name':'Alibaba Constructions', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg','country': 'Sri Lanka','items':['D','B']},
     {'id':'3','name':'Asia Metals Industries', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'India','items':['E','B']},
     {'id':'4','name':'Lanwa SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']}]
class ViewAllVendors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : '',
            dataSet: data,
            filteredSet: data,
            searchValue1: "",
            searchValue2: "",
            searchValue3: ""
        };
    }

    handleSearch1 = event => this.setState({ searchValue1: event.target.value }, () => this.searchForName());
    handleSearch2 = event => this.setState({ searchValue2: event.target.value }, () => this.searchForItems());
    handleSearch3 = event => this.setState({ searchValue3: event.target.value }, () => this.searchForCountry());

    searchForName = () => {
        this.setState(prevState => {
            const filteredSet = prevState.dataSet.filter(item =>
                item.name.toLowerCase().match(this.state.searchValue1.toLowerCase())
            );
            return { filteredSet };
        });
    };

    searchForItems = () => {
        this.setState(prevState => {
            const filteredSet = prevState.dataSet.filter(item =>
                item.items[0].toLowerCase().match(this.state.searchValue2.toLowerCase())
            );
            return { filteredSet };
        });
    };

    searchForCountry = () => {
        this.setState(prevState => {
            const filteredSet = prevState.dataSet.filter(item =>
                item.country.toLowerCase().match(this.state.searchValue3.toLowerCase())
            );
            return { filteredSet };
        });
    };

    componentDidMount() {
        const self = this;
        // Make a request to fetch data
        axios.get(process.env.REACT_APP_GET_ALL_VENDORS)
            .then(function (response) {
                console.log(response);
                self.data = [response.data.data];
                //self.setState({message : response.data.message, dataSet: JSON.stringify(response.data.data), filteredSet: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        return (
            <MDBContainer>
                <SectionContainer header="All Vendors">
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
                            <label>Items</label>
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
                            <label>Country</label>
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
                                    {this.state.filteredSet.map(item => (
                                        <MDBCol md="3" className="mx-auto" key={item.id}>
                                            <MDBCardGroup deck className="mt-3">
                                                <MDBListGroup>
                                                    <MDBAnimation type="zoomIn" duration="500ms">
                                                        <MDBCard>
                                                        <MDBCardImage
                                                        src={item.image}
                                                        alt="MDBCard image cap"
                                                        top
                                                        hover
                                                        overlay="white-slight"
                                                        />
                                                        <MDBCardBody>
                                                        <MDBCardTitle tag="h5">{item.name}</MDBCardTitle>
                                                        <MDBCardText>
                                                            Country: {item.country}
                                                            <br/>
                                                            Items: {item.items}
                                                        </MDBCardText>
                                                        <MDBBtn href={'details/'+item.id} color="light-blue" size="md">
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

export default ViewAllVendors;
