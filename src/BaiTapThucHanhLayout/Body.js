import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";
import "./body.css";

export default class Body extends Component {
   render() {
      return (
         <div className="body-content">
            <Banner />
            <div className="list-items">
               <div className="container">
                  <div className="row">
                     <div className="col-3">
                        <Item />
                     </div>
                     <div className="col-3">
                        <Item />
                     </div>
                     <div className="col-3">
                        <Item />
                     </div>
                     <div className="col-3">
                        <Item />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
