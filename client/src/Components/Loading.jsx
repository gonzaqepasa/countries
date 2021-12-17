import React from "react";
import style from './style/Loading.module.scss';
import loading from './style/loading.gif'


export default function Loading() {




    return (
        <div className={style.loadingBox}>


            <img src={loading} alt="No img" />

        </div>
    )
}