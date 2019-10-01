import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";
import { NavLink } from "react-router-dom";

import ItemNotSelectedWarning from './warning';


export default class CreateInvoiceForm extends Component {
  constructor(props) {
    super(props);

    this.getItemRef = React.createRef();

    this.state = {
      vendorName: "",
      itemID: "",
      qty: "",
      rows: [{}],
      showItemNotSelectedWarning: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.vendorOnChange = this.vendorOnChange.bind(this);
    this.itemorOnChange = this.itemorOnChange.bind(this);
    this.quantityOnChange = this.quantityOnChange.bind(this);
    this.onHandleAddRow = this.onHandleAddRow.bind(this);
    this.handleRemoveSpecificRow = this.handleRemoveSpecificRow.bind(this);
  }

  onHandleAddRow() {
    const itemDetails = {
      itemID: this.state.itemID,
      itemName: "",
      qty: this.state.qty,
      unitPrice: "unit",
      linePrice: "total"
    };

    this.setState({
      rows: [...this.state.rows, itemDetails]
    });
    
    if(this.getItemRef.current.value === "1"){
      this.setState({
        showItemNotSelectedWarning: true
      });
    }else{
      this.setState({
        showItemNotSelectedWarning: false
      });
    }
  }

  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

 
  vendorOnChange(e) {
    this.setState({
      vendorName: e.target.value
    });
  }

  quantityOnChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ qty: e.target.value });
    }
  }

  itemorOnChange(e) {
    this.setState({
      itemID: e.target.value
    });

    
  }


  onSubmit(e) {
    e.preventDefault();
    this.state.rows.map((item, id) => {
      if(id === 0 || id ===""){

      }else{
        // alert(item.itemID);
      }
    });
  }

 


  render() {
    
    return (
      <div>
        <MDBCard className="my-12 px-12 pb-12">
          <MDBCardBody className="">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Create a Purchase Invoice
            </h2>
            <p className="text-center w-responsive mx-auto mb-5">
              Creating purchase invoices
              <strong> Without having a Purchase Order</strong>
            </p>

            {/* form starts here */}
            <form onSubmit={this.onSubmit}>
              <MDBRow>
                <MDBCol lg="6" md="6" className="mb-lg-0 mb-6">
                  <p className="h6 mb-4">
                    {" "}
                    <i className="fa fa-info-circle"></i> Invoice Details
                  </p>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Invoice No:
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterEmailEx"
                    className="grey-text"
                  >
                    Vendor
                  </label>
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="exampleSelect1"
                      onChange={this.vendorOnChange}
                    >
                      <option disabled selected>
                        - Select vendor -{" "}
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <label
                    htmlFor="defaultFormRegisterConfirmEx"
                    className="grey-text"
                  >
                    Invoice Date:
                  </label>
                  <input
                    type="date"
                    id="defaultFormRegisterConfirmEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                  >
                    Expected Delievery Date:
                  </label>
                  <input
                    type="date"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                  />
                </MDBCol>
                <MDBCol lg="6" md="6" className="mb-lg-0 mb-6">
                  <p className="h6 mb-4">
                    {" "}
                    <i className="fa fa-truck"></i> Delievery Details
                  </p>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Billing Address
                  </label>
                  <textarea className="form-control"> </textarea>

                  <label
                    htmlFor="defaultFormRegisterEmailEx"
                    className="grey-text"
                  >
                    Contact Person:
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterEmailEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterConfirmEx"
                    className="grey-text"
                  ></label>
                  <input
                    hidden
                    type="email"
                    id="defaultFormRegisterConfirmEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                  ></label>
                  <input
                    hidden
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </MDBCol>
              </MDBRow>
              <hr />
              {/* new row======================================================= */}

              <MDBRow>
                <MDBCol lg="5" md="5" className="mb-lg-0 mb-5 text-center">
                  <div class="form-group">
                    <label
                      htmlFor="defaultFormRegisterEmailEx"
                      className="grey-text"
                    >
                      Select an Item:
                    </label>
                    <select class="form-control" onChange={this.itemorOnChange} ref={this.getItemRef}>
                      <option disabled selected value="1">
                        - Select Item -
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </MDBCol>
                <MDBCol lg="5" md="5" className="mb-lg-0 mb-5 text-center">
                  <div class="form-group">
                    <label
                      htmlFor="defaultFormRegisterEmailEx"
                      className="grey-text"
                    >
                      Quantity:
                    </label>
                    <input
                      type="text"
                      id="defaultFormRegisterEmailEx"
                      className="form-control"
                      value={this.state.qty}
                      onChange={this.quantityOnChange}
                    />
                  </div>
                </MDBCol>
                
                <MDBCol lg="2" md="2" className="mb-lg-0 mb-2 text-center">
                  <div className="form-group">
                    <label
                      htmlFor="defaultFormRegisterEmailEx"
                      className="grey-text"
                    ></label>
                    <button
                      style={{ height: "40px" }}
                      name="subject"
                      type="button"
                      className="btn btn-info btn-sm form-control"
                      onClick={this.onHandleAddRow}
                    >
                      <i className="fa fa-plus fa-lg"></i>
                    </button>
                  </div>
                </MDBCol>
              </MDBRow>

             {this.state.showItemNotSelectedWarning ? <ItemNotSelectedWarning /> : <p></p>}
              
              <MDBRow>
                <MDBCol lg="12" md="12" className="mb-lg-0 mb-12 text-center">
                  <MDBTable
                    className="container-fluid"
                    striped
                    bordered
                    hover
                    responsive
                  >
                    <MDBTableHead color="primary-color" textWhite>
                      <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Qty</th>
                        <th>Unit Price (R.s)</th>
                        <th>Line Price (R.s)</th>
                        <th>
                          <i className="fa fa-cog"></i>
                        </th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {this.state.rows.length > 1 ? (
                        this.state.rows.map((item, id) =>
                          id === 0  ? (  
                            <tr></tr>
                          ) : item.itemID === "" ||
                            
                            item.itemID === null ? (
                            <tr></tr>
                          ) : (
                            
                            <tr key={id}>
                              <td>{item.itemID}</td>
                              <td>{item.itemID}</td>
                              {item.qty === ""  ? (
                                <td>0</td>
                              ) : (
                                <td>{item.qty}</td>
                              )}
                              <td>{item.unitPrice}</td>
                              <td>{item.linePrice}</td>
                              
                              <MDBBtn
                                onClick={this.handleRemoveSpecificRow(id)}
                                color="red"
                              >
                                <i className="fa fa-trash"></i>
                              </MDBBtn>
                            </tr>
                            
                          )
                        )
                      ) : (
                        <tr></tr>
                      )}
                    </MDBTableBody>
                  </MDBTable>
                </MDBCol>
              </MDBRow>
              <br />
              <MDBRow>
                <MDBCol className="col-md-8 col-8"></MDBCol>
                <MDBCol className="col-md-4 col-4 text-right">
                  <NavLink to="/banuka/dashboard">
                    <MDBBtn
                      type="reset"
                      className="btn btn-secondary btn-sm"
                      color="grey"
                    >
                      Close
                    </MDBBtn>
                  </NavLink>
                  <MDBBtn
                    color="green"
                    type="submit"
                    className="btn btn-success btn-sm"
                  >
                    Save
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>

            {/* form ends here */}
          </MDBCardBody>
        </MDBCard>
        <br />
      </div>
    );
  }
}
