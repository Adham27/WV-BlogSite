import React from 'react'
import img from '../../images/HD wallpaper_ Artistic, Minimalism, Black and White, Minimalist, Mountain.jpg'
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
        <div className="header">
            <div className="headerTitles">
                <span className="TitleLg ">Blog Site</span>
                <span className="TilteSm ">Write & View</span>          
            </div>
        </div>
        <div className="ArrowBorder">
        <div className="Arrow">
        <Link to="/" className="ArrowLink" ><i className="fa-solid fa-arrow-down fa-2xl"></i></Link>

        </div>
        </div>
        <img src={img} className="w-100 IMG "  alt="img1"/>
    
    </>
  )
}
export default LandingPage;