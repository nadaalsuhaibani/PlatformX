import React from "react";


const Navbar= () =>{
    return (
            <div className="header">
                <a className="logo">PlatformX</a>
                <div className="header-right">
                    <a href='/'>Home</a>
                    <a href='/'>About us</a>
                    <a href='/'>Contact us</a>
                </div>
            </div>
    )
}

export default Navbar;
