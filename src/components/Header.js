import React from "react";

function Header({ title }) {
    return (
        <header style={{ padding: "20px", textAlign: "center" }}>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;