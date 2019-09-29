import React, {Component} from 'react';
import SideNavigation from "./sideNavigation";

export default class ViewInvoices extends Component{
    
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row text-left">
                        <div className="col-md-3 col-3" > <SideNavigation/> </div>
                        <div className="col-md-6 col-6">
                            <h1>View Invoice</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}