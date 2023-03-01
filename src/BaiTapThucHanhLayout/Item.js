import React, { Component } from "react";
import "./item.css";

export default class Item extends Component {
   render() {
      return (
         <div className="card">
            <div className="card-header">
               <div className="img-card">
                  <p className="img-src">500 x 325</p>
               </div>
            </div>
            <div className="card-body">
               <h4 className="card-title">Card title</h4>
               <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  dolorum cum provident saepe culpa tempore facere suscipit
                  impedit, eveniet neque.
               </p>
            </div>
            <div className="card-footer">
               <button className="btn btn-primary">Find Out More</button>
            </div>
         </div>
      );
   }
}
