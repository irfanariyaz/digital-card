import React from "react"
import profile from "../images/profile.png"
import emailicon from "../images/Icon.png"
import lnkdnicon from "../images/linkedin.png"


export default function Header(){
    return(
        <header>
           <img src={profile} alt=""></img>
           <h1>Irfana Sulaiman</h1>
           <h4>Frontend Developer</h4>
           <p>irfana.27@gmail.com</p>
           <div className="btn">
            <button><img src={emailicon} alt=""></img>Email</button>
            <button className="btn-lkdn" ><img className="linkdn-icon" src={lnkdnicon} alt=""></img>Linkedin</button>
           </div>
        </header>
    )
}