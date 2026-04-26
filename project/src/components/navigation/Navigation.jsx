import { BiHomeAlt2 } from "react-icons/bi"
import { FaRegBookmark, FaRegStar } from "react-icons/fa"
import { FiSettings } from "react-icons/fi"

import { Link } from "react-router-dom"

import "./Navigation.css"

const Navigation = ({ currentView }) => {
    console.log(currentView);
    
    return (
        <nav className="__nav">
            <ul className="__nav-list --flex --justify-between">
                <li className="--no-list"><Link className={`__nav-item --no-underline --flex --align-center ${currentView === "home" ? "--current" : "--black"}`} to="/"><BiHomeAlt2 size={"1.5rem"} />Home</Link></li>
                <li className="--no-list"><Link className={`__nav-item --no-underline --flex --align-center ${currentView === "archive" ? "--current" : "--black"}`} to="/archive"><FaRegBookmark size={"1.5rem"} />Archive</Link></li>
                <li className="--no-list"><Link className={`__nav-item --no-underline --flex --align-center ${currentView === "popular" ? "--current" : "--black"}`} to="/popular"><FaRegStar size={"1.5rem"} />Popular</Link></li>
                <li className="--no-list"><Link className={`__nav-item --no-underline --flex --align-center ${currentView === "settings" ? "--current" : "--black"}`} to="/settings"><FiSettings size={"1.5rem"} />Settings</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation