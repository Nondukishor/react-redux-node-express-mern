import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
     <header className="container-fluid">
         <nav className="nav-wrapper">
             <div className="row">
                <div className="col s12">
                <Link to="#" className="brand-logo">Logo</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down mr-2">
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">About</Link></li>
                </ul>
                </div>
           <div className="container">
               <Link to="#" data-target="nav-mobile" className="top-nav sidenav-trigger full hide-on-large-only">
               <i className="material-icons">menu</i>
               </Link>
            </div>
          </div>
         </nav>
    </header>
    )
}

export default Header;