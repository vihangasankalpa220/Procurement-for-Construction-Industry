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

export default class addStock extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            stock_no: '',
            currency: 'rupeese',
            subtotal: '',
            qty: '',
            payment: 'cash'
        }

    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            stock_no :this.state.stock_no,
            currency: this.state.currency,
            subtotal: this.state.subtotal,
            qty:this.state.qty,
            payment:this.state.payment
        };
        axios.post('http://localhost:4000/stock/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            stock_no :'',
            currency: '',
            subtotal: '',
            qty:'',
            payment:''
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
                                            <label htmlFor="stock_no">stock_no</label>
                                            <input type="text" className="form-control" name="stock_no"
                                                   placeholder="stock_no"   value={this.state.stock_no}
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



                                        <input type="submit"
                                               value="Add Stock"
                                               className="btn btn-success"  onClick={this.toggle(6)}/>


                                        <MDBModal
                                            isOpen={this.state.modal6}
                                            toggle={this.toggle(6)}
                                            side
                                            position="top-right"
                                        >
                                            <MDBModalHeader toggle={this.toggle(6)}>Modal title</MDBModalHeader>
                                            <MDBModalBody>
                                                New Stock Added Succesfully!
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

