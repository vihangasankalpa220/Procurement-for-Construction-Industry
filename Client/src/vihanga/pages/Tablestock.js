import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";

class Tablestock extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/stock/delete/'+this.props.obj._id)
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
                <td>{this.props.obj.stock_no}</td>
                <td>{this.props.obj.currency}</td>
                <td>{this.props.obj.subtotal}</td>
                <td>{this.props.obj.qty}</td>
                <td>{this.props.obj.payment}</td>


                <td>

                    <Link to={"/edits/"+this.props.obj._id}  style={{width:113}}  className="btn btn-primary">Order</Link>


                    <button onClick={this.delete} style={{ marginLeft:-1}}  className="btn btn-danger">Delete</button>



                    <MDBModal
                        isOpen={this.state.modal6}
                        toggle={this.toggle(6)}
                        side
                        position="top-right"
                    >
                        <MDBModalHeader toggle={this.toggle(6)}>Modal title</MDBModalHeader>
                        <MDBModalBody>
                            Stock edited Succesfully!
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

export default Tablestock;