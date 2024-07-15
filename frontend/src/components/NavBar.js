import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="top-0 right-0 space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
        </div>
    );
}

export default NavBar;
