import React from 'react';
import './Navbar.scss';
import navItems from './../../Data/NavItem'

const Navbar = () => {
    return (
        <div className="main-menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="/">
                       <b>Rafi</b> Kadir
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                navItems.map(navItem => {
                                    return <li class="nav-item">
                                                <a class="nav-link" href={navItem.href}>{navItem.name}</a>
                                            </li>
                                })
                            }
                        </ul>
                    </div> 
                </div> 
            </nav>
        </div>
    );
};

export default Navbar;