import React from 'react'
import img from '../../images/HD wallpaper_ Artistic, Minimalism, Black and White, Minimalist, Mountain.jpg'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle w-100">ABOUT US</span>
            <img className="w-100" src={img} alt="ABOUTUS" />
            <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle w-100">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    Life Style
                </li>
                <li className="sidebarListItem">
                    Style
                </li>
                <li className="sidebarListItem">
                    Sport
                </li>
                <li className="sidebarListItem">
                   Music 
                </li>
                <li className="sidebarListItem">
                    Technolgy
                </li>
                <li className="sidebarListItem">
                    Cinema 
                </li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle w-100">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="fa-brands fa-square-facebook facebook fs-2 m-2"></i>
            <i className="fa-brands fa-instagram instagram fs-2 m-2"></i>
            <i className="fa-brands fa-square-twitter twitter fs-2 m-2"></i>
            <i className="fa-brands fa-telegram telegram fs-2 m-2"></i> 
            </div>
        </div>
    </div>
  )
}

export default Sidebar;