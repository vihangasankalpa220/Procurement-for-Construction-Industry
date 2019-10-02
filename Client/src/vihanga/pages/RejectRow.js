import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";

class RejectRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {

        axios.get('http://localhost:4000/reject/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
        window.location.reload()
            .catch(err => console.log(err))
    }

    toggle = nr => () => {
        let modalNumber = "modal" + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    };

    state = {

        modal6: false,

        backdrop: false,
        mailAddress: "@mdo"
    };
    showFunction = () => {
        alert("This event is fired just before the modal is open.");
    };

    hideFunction = () => {
        alert("This event is fired just before the modal is hidden.");
    };

    hiddenFunction = () => {
        alert("This event is fired after the modal is closed.");
    };

    render() {
        return (
            <tr>
                <td>{this.props.obj.order_no}</td>
                <td>{this.props.obj.po_number}</td>
                <td>{this.props.obj.currency}</td>
                <td>{this.props.obj.subtotal}</td>
                <td>{this.props.obj.person_name}</td>
                <td>{this.props.obj.business_name}</td>
                <td>{this.props.obj.qty}</td>
                <td>{this.props.obj.cusqty}</td>
                <td>{this.props.obj.payment}</td>
                <td>{this.props.obj.bill_address}</td>
                <td>{this.props.obj.ship_address}</td>
                <td>{this.props.obj.slot}</td>
                <td>{this.props.obj.status}</td>
                <td>{this.props.obj.reason}</td>


                <td>




                    <button onClick={this.delete} style={{ marginLeft:0}} className="btn btn-danger">Reject</button>







                    <MDBModal
                        isOpen={this.state.modal6}
                        toggle={this.toggle(6)}
                        side
                        position="top-right"
                    >
                        <MDBModalHeader toggle={this.toggle(6)}>Modal title</MDBModalHeader>
                        <MDBModalBody>
                            Order edited Succesfully!
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(6)}>
                                Okay
                            </MDBBtn>

                        </MDBModalFooter>
                    </MDBModal>
                </td>
            </tr>


        );
    }
}

export default RejectRow;