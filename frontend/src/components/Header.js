import React from 'react';

function Header() {
    return (
        <div className="flex items-center">
            <img src="/logo.png" className="w-10 h-10 font-bold" alt="Recipe Finder Logo" />Recipe Finder
            {/*<span className="text-2xl font-bold whitespace-nowrap dark:text-white ml-4">Recipe Finder</span>*/}
        </div>
    );
}

export default Header;
