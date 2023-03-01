import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
   render() {
      return (
         <footer className="bg-dark">
            <div className="container">
               <p className="footer-content">Copyright © Your Website 2023</p>
            </div>
         </footer>
      );
   }
}
