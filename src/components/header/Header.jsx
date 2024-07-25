import React, { useState } from 'react'
import css from './Header.module.css'
import logo from "../../assets/logo.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Header = () => {

    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = ()  => {
        setShowMenu((showMenu)=>!showMenu)
    }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="" />
            <span>amazon</span>
        </div>

        <div className={css.right}>

            <div className={css.bars} onClick={toggleMenu}>
                <FaBars/>
            </div>
            
                <ul className={css.menu} style={{display:showMenu? 'inherit': 'none'}}  >  
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
           
            <input type='text' placeholder='search' className={css.search}/>

            <IoBagHandleOutline className={css.cart}/>
            
        </div>
    </div>
  )
}

export default Header