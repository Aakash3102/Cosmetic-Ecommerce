import React from 'react'
import css from './Footer.module.css'
import Logo from "../../assets/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdInbox } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>amazon</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact US</span>
            <span className={css.pngLine}>
              <FaLocationDot className={css.icon} />
              <span>111 north noida xyz,DL 32801</span>
            </span>

            <span className={css.pngLine}>
              <FaPhoneAlt className={css.icon} />
              <a href="tel-353-386-4415">353-386-4415</a>
            </span>
            <span className={css.pngLine}>
              <MdInbox className={css.icon} />
              <a href="mailto:support@amazon.com">support@amazon.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <FaSignInAlt className={css.icon} />
              <a href="/">
                <p>Sign In</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <FaUser className={css.icon} />
              <a href="/">
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <FaLink className={css.icon} />
              <a href="/">
                <p>Safety Privacy & terms</p>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright ©2024 by Amazon Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer