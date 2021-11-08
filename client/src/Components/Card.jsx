import React from "react";
import { useDispatch } from "react-redux";
import style from './style/Card.module.css'
import { clearDetail, getDetail } from "../actions/index.js";
import { Link } from 'react-router-dom'


export default function Card(props) {

    const dispatch = useDispatch()





    function handleinfo(id) {
        dispatch(getDetail(id))
    }







    const asd = `/home/${props.id}`
    return (
        <div className={style.box}>
            <Link to={asd} onClick={() => handleinfo(props.id)}>
                <div className={style.boxImg}>
                    <img className={style.img} src={props.flag} alt='no se encontro imagen' />
                </div>
            </Link>


            <div className={style.text}>
                <h2 className={style.paisName} >{props.name}</h2>


                <div className={style.barrita}></div>
                <p className={style.capital}>{props.continent}</p>
            </div>





        </div >
    )
}
