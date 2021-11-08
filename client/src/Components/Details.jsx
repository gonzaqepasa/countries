import React from "react";
import style from './style/Info.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index.js";
import { useEffect } from "react";
// import { Link } from "react-router-dom";

export default function Details(props) {

    // console.log('props?', props)


    const dispatch = useDispatch()

    ////// Detalles de redux (detail) //////
    const detail = useSelector(state => state.detail)
    ////////////////////////////////////////



    ////// use Effect //////
    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])
    ////////////////////////




    ////// Botones para ver parametros //////
    function mostrar() {
        console.log('params?', props)
    }

    function mostrarInfo() {
        console.log('infoasd?', detail)
    }
    ////////////////////////////////////////




    ////// Volver  //////

    function volver() {
        dispatch(getDetail(false))
        window.history.back()
    }
    //////////////////////





    return (
        <div>




            {detail.length ? < div className={style.box} >



                <div className={style.boxText}>
                    <h1 className={style.namePais}>{detail[0].name}</h1>
                    <div className={style.barrita}></div>

                    <p className={style.titulos}>Capital:</p>
                    <h2 className={style.infor}> {detail[0].capital}</h2>

                    <p className={style.titulos}>Continente:</p>
                    <h3 className={style.infor}>{detail[0].continent}</h3>

                    <p className={style.titulos}>Informacion:</p>
                    <p className={style.infor2}>Su territorio tiene un area de {detail[0].area / 1000} Kilometros cuadrados.</p>
                    <p className={style.infor2}>Su poblacion es de {detail[0].population} habitantes.</p>


                    {/* <Link to='/home'>Voler</Link> */}
                    <button onClick={() => volver()}>Volver</button>
                </div>




                <div className={style.boxImg}>

                    <img className={style.flags} src={detail[0].flag} alt="" />
                </div>







            </div >









                :


                <Cargando />






            }

            {/* <button onClick={() => mostrar()}>params</button> */}
            {/* <button onClick={() => mostrarInfo()}>info</button> */}



        </div>






    )

}


function Cargando() {


    return (
        <div className={style.loadingBox}>
            Loading........ dfgkldfgkjldfsgjk
        </div>

    )
}