import React, { Component } from 'react'
import axios from 'axios';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation,
    MDBModal, MDBBtn, MDBModalHeader, MDBModalBody, MDBModalFooter
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";

export default class addOrder extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            order_no: '',
            po_number: '',
            currency: 'rupeese',
            subtotal: '',
            person_name: '',
            business_name: '',
            qty: '',
            payment: 'cash',
            bill_address: '',
            ship_address: '',
            slot: '',
            status: 'Approved'
        }

    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            order_no :this.state.order_no,
            po_number:this.state.po_number,
            currency: this.state.currency,
            subtotal: this.state.subtotal,
            person_name: this.state.person_name,
            business_name:this.state.business_name,
            qty:this.state.qty,
            payment:this.state.payment,
            bill_address:this.state.bill_address,
            ship_address:this.state.ship_address,
            slot:this.state.slot,
            status:this.state.status
        };
        axios.post('http://localhost:4000/business/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            order_no :'',
            po_number:'',
            currency: '',
            subtotal: '',
            person_name:'',
            business_name:'',
            qty:'',
            payment:'',
            bill_address:'',
            ship_address:'',
            slot:'',
            status:''
        })
    }
/////////////////////////////image

/////////////////////////////////////
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



    render()
    {

        return (

                <MDBContainer className="mt-5">
                    <MDBAnimation type="zoomIn" duration="500ms">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="8" className="mx-auto">
                                    <SectionContainer header="Add New Order">
                                        <form onSubmit={this.onSubmit}>

                                                <div className="form-group">
                                                    <label htmlFor="order_no">order_no</label>
                                                    <input type="text" className="form-control" name="order_no"
                                                           placeholder="order_no"   value={this.state.order_no}
                                                           onChange={this.onChange} required/>
                                                </div>

                                                <div className="form-group">
                                                <label htmlFor="po_number">po_number</label>
                                                <input type="text" className="form-control" name="po_number"
                                                       placeholder="po_number"   value={this.state.po_number}
                                                       onChange={this.onChange} required/>
                                                </div>

                                                <div className="form-group">
                                                <label htmlFor="currency">currency</label>
                                                <select disabled={false} type="text"
                                                        className="form-control"
                                                        name="currency"
                                                        placeholder="Enter currency"
                                                        value={this.state.currency}
                                                        onChange={this.onChange}  >
                                                    <option value="rupeese">rupeese</option>
                                                    <option value="usd">usd</option>
                                                    <option value="yen">yen</option>
                                                    <option value="dollar">dollar</option>
                                                </select>
                                                </div>


                                            <div className="form-group">
                                                <label htmlFor="subtotal">subtotal</label>
                                                <input type="text" className="form-control" name="subtotal"
                                                       placeholder="subtotal"   value={this.state.subtotal}
                                                       onChange={this.onChange} required/>
                                            </div>


                                            <div className="form-group">
                                                <label htmlFor="person_name">person_name</label>
                                                <input type="text" className="form-control" name="person_name"
                                                       placeholder="person_name"   value={this.state.person_name}
                                                       onChange={this.onChange} required/>
                                            </div>


                                                <div className="form-group ">
                                                    <label htmlFor="business_name">business_name</label>
                                                    <input type="text" className="form-control"  name="business_name"
                                                           placeholder="business_name"   value={this.state.business_name}
                                                           onChange={this.onChange} required/>
                                                </div>

                                            <div className="form-group ">
                                                <label htmlFor="qty">quantity</label>
                                                <input type="text" className="form-control" name="qty"
                                                       placeholder="qty"   value={this.state.qty}
                                                       onChange={this.onChange} required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="payment">payment</label>
                                                <select disabled={false} type="text"
                                                        className="form-control"
                                                        name="payment"
                                                        placeholder="Enter payment"
                                                        value={this.state.payment}
                                                        onChange={this.onChange}  >
                                                    <option value="cash">cash</option>
                                                    <option value="credit">credit</option>
                                                    <option value="debit">debit</option>
                                                </select>
                                            </div>


                                            <div className="form-group ">
                                                <label htmlFor="bill_address">bill_address</label>
                                                <textarea type="text" className="form-control"   name="bill_address"
                                                       placeholder="bill_address"   value={this.state.bill_address}
                                                       onChange={this.onChange} required/>
                                            </div>

                                            <div className="form-group ">
                                                <label htmlFor="ship_address">ship_address</label>
                                                <textarea type="text" className="form-control"  name="ship_address"
                                                       placeholder="ship_address"   value={this.state.ship_address}
                                                       onChange={this.onChange} required />
                                            </div>


                                            <div className="form-group ">
                                                <label htmlFor="slot">slot</label>
                                                <input type="text" className="form-control"  name="slot"
                                                       placeholder="slot"   value={this.state.slot}
                                                       onChange={this.onChange} required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="status">status</label>
                                                <select disabled={false} type="text"
                                                        className="form-control"
                                                        name="status"
                                                        placeholder="Enter status"
                                                        value={this.state.status}
                                                        onChange={this.onChange}  >
                                                    <option value="Approved">Approved</option>
                                                    <option value="Partially Approved">Partially Approved</option>
                                                    <option value="Full Approved">Full Approved</option>
                                                </select>
                                            </div>

                                            <input type="submit"
                                                   value="Add Order"
                                                   className="btn btn-success"  onClick={this.toggle(6)}/>


                                                <MDBModal
                                                    isOpen={this.state.modal6}
                                                    toggle={this.toggle(6)}
                                                    side
                                                    position="top-right"
                                                >
                                                    <MDBModalHeader toggle={this.toggle(6)}>Modal title</MDBModalHeader>
                                                    <MDBModalBody>
                                                    New Order Added Succesfully!
                                                    </MDBModalBody>
                                                    <MDBModalFooter>
                                                        <MDBBtn color="secondary" onClick={this.toggle(6)}>
                                                            Okay
                                                        </MDBBtn>

                                                    </MDBModalFooter>
                                                </MDBModal>

                                        </form>
                                    </SectionContainer>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBAnimation>
                </MDBContainer>
            )
    }

}

