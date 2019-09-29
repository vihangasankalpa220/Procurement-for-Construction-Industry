import React, {Component} from 'react';
import SideNavigation from "./sideNavigation";
import BreadCrumb from './BreadcrumSection';


export default class Dashboard extends Component{
    
    render(){
        
        return(
            <div>
                <SideNavigation/>
                <div className="container-fluid">
                    <div className="row text-center">
                    
                        <div className="col-md-3 col-3" ></div>
                        <div className="col-md-6 col-6">
                            <BreadCrumb />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}