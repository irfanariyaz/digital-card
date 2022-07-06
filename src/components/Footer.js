import React from "react"
import insticon from "../images/Instagram Icon.png"
import facebookicon from "../images/Facebook Icon.png"
import twittericon from "../images/Twitter Icon.png"
import githubicon from "../images/GitHub Icon.png"

export default function Footer(){
    return(
        <footer>
             <img src ={insticon} alt=""></img>
             <img src ={facebookicon} alt=""></img>
             <img src ={githubicon} alt=""></img>
             <img src ={twittericon} alt=""></img>
        </footer>

    )
}