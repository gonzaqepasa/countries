import React from "react";
import { useSelector } from "react-redux";
import style from './style/Loading.module.css';



export default function Loading() {

    const activities = useSelector(state => state.activities)


    return (
        <div className={style.loadingBox}>


            <h2> Espere...</h2>

        </div>
    )
}