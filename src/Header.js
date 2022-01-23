import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" className="nav-logo" ></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}