import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from './style/NavBar.module.css'
import { useDispatch } from "react-redux";
import SearcherBar from "./SearcherBar";






export default function NavBar(props) {














    return (
        <div className={style.navi}>





            <NavLink style={isActive => ({
                borderBottom: isActive ? '2px solid deepskyblue' : 'none',

                // boxShadow: isActive ? "0px 0px 2px black" : "none",
                color: isActive ? "deepskyblue" : "none",
                boxShadow: isActive ? "0px 0px 2px white" : "none"

            })}
                className={style.text} to='/home' >Home</NavLink>



        </div >
    )
}