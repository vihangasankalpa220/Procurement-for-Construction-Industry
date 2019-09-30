import React, { Component } from 'react'
import axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation
} from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import Tablestock from "./Tablestock";
export default class editStock extends Component {

    constructor(props) {
        super(props);
        this.state = {stock: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/stock')
            .then(response => {
                this.setState({ stock: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.stock.map(function(object, i){
            return <Tablestock obj={object} key={i} />;
        });
    }


    render()
    {
        return (


            <MDBAnimation type="zoomIn" duration="500ms" >



                <SectionContainer header="Stock List">
                    <div>

                        <table className="table table-striped" style={{  marginTop: 20}}>
                            <thead>
                            <tr>
                                <th>stock_no</th>
                                <th>currency</th>
                                <th>subtotal</th>
                                <th>quantity</th>
                                <th>payment</th>
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

