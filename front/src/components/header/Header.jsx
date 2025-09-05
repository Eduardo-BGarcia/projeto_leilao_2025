import React from 'react';
import './Header.css';

const Header = (params) => {
    const {nome, idade} = params;
    return(
        <>
            <div className="header">
                <h1>Home{nome}</h1>
            </div>
        </>
    );
}
export default Header;