import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import style from './style/Home.module.css'
// import img from './style/countries.png'

import Cards from './Cards'
import { getCountries } from "../actions/actions";
import Filter from "./Filter";
import NavBar from "./NavBar";



export default function Home() {

    const dispatch = useDispatch()
    // const allCountries = useSelector(state => state.countries)


    useEffect(() => {
        dispatch(getCountries())
    }, [])















    return (
        <div className={style.home }>

            {/* <img src={img} alt='Hola' className={style.img} /> */}
            <NavBar />

            <Filter />

            <Cards />

        </div>


    )
}