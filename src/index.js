import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

import './index.css';

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <img src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" className="back" ></img>
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))