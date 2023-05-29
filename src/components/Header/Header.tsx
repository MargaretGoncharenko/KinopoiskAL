import React from "react";
import h from "./Header.module.css";
import facebook from "./HeaderImages/facebook.png";
import twitter from "./HeaderImages/twitter.png";
import linkedIn from "./HeaderImages/linkedin.png";
import logo from "./HeaderImages/logo.png";
import film from "./HeaderImages/film.png";

export const Header = () => {
    return (
        <div className={h.wrapper}>
            <div className={h.logoPart}>
                <div className={h.logo}>
                    <img height={"200px"} src={logo}/>
                </div>
                {/*<div className={h.number}>contacts</div>*/}
            </div>
            <div className={h.navigationPart}>
                <div className={h.navigate}>
                    <div className={h.home}>главная</div>
                    <div className={h.about}>о сайте</div>
                    <div className={h.pages}>категории</div>
                    <div className={h.contactUs}>контакты</div>
                </div>
                <div className={h.socialMedia}>
                    <div className={h.facebook}>
                        <img height={"19px"} src={facebook}/>
                    </div>
                    <div className={h.twitter}>
                        <img height={"19px"} src={twitter}/>
                    </div>
                    <div className={h.linkedIn}>
                        <img height={"19px"} src={linkedIn}/>
                    </div>
                </div>
                <div className={h.myCaseWrapper}>
                    <button className={h.myCase}>
                        <img height={"35px"} src={film} className={h.film}/>
                        <span className={h.myCaseText}>моя коллекция</span>
                    </button>
                </div>

            </div>
        </div>
    )
}