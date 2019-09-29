import React, { Component } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import {addorder} from '../functions/OrderFunctions'

class addOrder extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            order_id: '1',
            order_name: '',
            order_qty: '',
            type: '',
            discription: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onclick(type){
        this.setState(prevState => {
            return {order_id: type === 'add' ? prevState.order_id + 1: prevState.order_id - 1}
        });
    }

    handleClick = () => {
        this.setState(prevState => {
            return {order_id: prevState.order_id + 1}
        })
    }

    onChange(e)
    {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e)
    {
        e.preventDefault()

        const order = {
            order_id: this.state.order_id,
            order_name: this.state.order_name,
            order_qty: this.state.order_qty,
            type: this.state.type,
            discription: this.state.discription,
        }

        addorder(order).then(res => {
            this.props.history.push('/v1')
        })
    }




    render()
    {
        return (

                <MDBContainer className="mt-5">
                    <MDBAnimation type="zoomIn" duration="500ms">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="8" className="mx-auto">
                                    <SectionContainer header="Add New Order">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="order_id">order id</label>
                                                    <select  type="text" disabled={true}
                                                             className="form-control"
                                                             name="order_id"
                                                             placeholder="Enter courseid"
                                                             value={this.state.order_id}
                                                             onChange={this.onChange}  onClick={this.onclick.bind(this, 'add')}  >
                                                        <option value="add">add</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="order_name">order name</label>
                                                    <input type="text" className="form-control" name="order_name"
                                                           placeholder="order name"  value={this.state.order_name}
                                                           onChange={this.onChange}/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="order_qty">Quantity</label>
                                                    <input type="text" className="form-control" name="order_qty"
                                                           placeholder="Quantity"  value={this.state.order_qty}
                                                           onChange={this.onChange}/>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="type">Type</label>
                                                <input type="text" className="form-control" name="type"
                                                       placeholder="Type"  value={this.state.type}
                                                       onChange={this.onChange}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="discription">Discription </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="discription"
                                                    placeholder="Discription"  value={this.state.discription}
                                                    onChange={this.onChange}
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-md">
                                                Add Order Now
                                            </button>
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
export default addOrder
