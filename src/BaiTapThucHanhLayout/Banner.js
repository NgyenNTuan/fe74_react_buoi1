import React, { Component } from "react";
import "./banner.css";

export default class Banner extends Component {
   render() {
      return (
         <div className="banner">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="banner-content">
                        <h1>A Warm Welcome!</h1>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Tenetur quae voluptates sint quos quam dolorem
                           consequuntur nemo, maxime facere voluptate sapiente
                           enim, impedit ratione expedita odio. Adipisci,
                           dolorum aspernatur! Quis?
                        </p>
                        <button className="btn btn-primary">
                           Call to action!
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
