import React, { Component } from 'react'
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import TableRow from './TableRow';
import RejectRow from "./RejectRow";
export default class viewRejectOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {reject: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/reject')
            .then(response => {
                this.setState({ reject: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.reject.map(function(object, i){
            return <RejectRow obj={object} key={i} />;
        });
    }


    render()
    {
        return (


            <MDBAnimation type="zoomIn" duration="500ms" >



                <SectionContainer header="Rejected Orders">
                    <div>

                        <table className="table table-striped" style={{  marginTop: 20}}>
                            <thead>
                            <tr>
                                <th>order_no</th>
                                <th>po_number</th>
                                <th>currency</th>
                                <th>subtotal</th>
                                <th>person_name</th>
                                <th>business_name</th>
                                <th>quantity</th>
                                <th>requested quantity</th>
                                <th>payment</th>
                                <th>bill_address</th>
                                <th>ship_address</th>
                                <th>slot</th>
                                <th>status</th>
                                <th>reason</th>
                                <th colSpan="2">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            { this.tabRow() }
                            </tbody>
                        </table>
                    </div>
                </SectionContainer>


            </MDBAnimation>

        )
    }

}

