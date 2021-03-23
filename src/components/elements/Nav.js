import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav
            className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'
        >
            <div className='container'>
                <Link
                    to='/'
                    className='navbar-brand'
                >
                    Contact Book
                </Link>
                <div>
                    <Link
                        to='/AddContact'
                        className='btn btn-light ml-auto'   
                    >
                        Create Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Nav;