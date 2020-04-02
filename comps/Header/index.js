//use the same component to change the fontSize
//change the text colour of the header
//change the onMouseOver 

import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
    style={{backgroundColor:color, fontSize:fontSize}}
    className="header"
    onMouseOver={MouseOver}
    >
    <h1 className="header_inner">Header</h1>
</div> 

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps={
    fontSize:12,
    color:"#000",
    onMouseOver:MouseOver
}

export default Header;