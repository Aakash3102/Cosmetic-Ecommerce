import React from 'react'
import css from "./Hero.module.css";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroIMg from '../../assets/hero.png';
import { motion } from "framer-motion"


const Hero = () => {

    const transition = { duration: 3, type: "spring" }
    return (
        <div className={css.container}>

            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>
                        {" "}
                        Seedily say has suitable disposal and boy.<br/>Exercise joy man children rejoiced.</span>
                </div>
            </div>

            {/* middle side hero image */}
            <div className={css.wrapper}>


                <motion.div
                    initial={{ bottom: "2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    className={css.blueCricle}
                    transition={transition}>
                </motion.div>


                <motion.img
                    transition={transition}
                    initial={{ bottom: "-2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    src={HeroIMg} alt="" width={600} />


                <motion.div
                transition={transition}
                initial={{right : "4%"}}
                whileInView={{right: "-1%"}}
                    className={css.cart2}>
                    <BiSolidShoppingBag />

                    <div className={css.signup}>
                        <span>Best Signup Offers</span>

                        <div>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* right side  */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5M</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    <span>happy Customers</span>
                </div>
            </div>


        </div>
    )
}

export default Hero