import { useState } from "react";
import "./navbar.scss"

function Navbar() {
    const [open,setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                   <img src="/logoOLD.png" alt="img" />
                   <span>HeavenSeek</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contects</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Sign In</a>
                <a href="/" className="signup">Sign Up</a>
                <div className="menuicon">
                    <img src="/menu.png" alt="img" onClick={()=>setOpen((prev)=>!prev)} />
                </div>
                <div className={open ? "menubar active" : "menubar"}>
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Contects</a>
                  <a href="/">Agents</a>
                  <a href="/">Sign In</a>
                  <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;