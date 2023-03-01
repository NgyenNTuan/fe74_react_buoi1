import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
   render() {
      return (
         <header className="bg-dark">
            <nav className="navbar navbar-expand-sm navbar-dark">
               <div className="container">
                  <a className="navbar-brand" href>
                     Start bootstrap
                  </a>

                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <a className="nav-link active" href>
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href>
                           About
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href>
                           Services
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href>
                           Contact
                        </a>
                     </li>
                  </ul>
               </div>
            </nav>
         </header>
      );
   }
}
