import React from "react";
import style from "./style/Info.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getDetail } from "../actions/index.js";
import { useEffect } from "react";

export default function Details(props) {
  // console.log('props?', props)

  const dispatch = useDispatch();

  ////// Detalles de redux (detail) //////
  const detail = useSelector((state) => state.detail);
  ////////////////////////////////////////
  console.log("detail: ", detail);

  ////// use Effect //////
  useEffect(() => {
    dispatch(clearDetail());
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  ////////////////////////

  ////// Botones para ver parametros //////
  /* function mostrar() {
        console.log('params?', props)
    }

    function mostrarInfo() {
        console.log('infoasd?', detail)
    } */
  ////////////////////////////////////////

  ////// Volver  //////
  function volver() {
    // dispatch(clearDetail())

    window.history.back();
  }
  //////////////////////

  function render() {
    return detail.length ? (
      <div className={style.box}>
        <button className={style.boton} onClick={() => volver()}>
          Volver
        </button>
       
        
        <div className={style.boxText}>
          <h1 className={style.namePais}>{detail[0].name}</h1>
        
          <img className={style.flags} src={detail[0].flag} alt="" />


          <h3 className={style.titulos}>Capital:</h3>
          <p className={style.infor}> {detail[0].capital}</p>

          <h3 className={style.titulos}>Continente:</h3>
          <p className={style.infor}>{detail[0].continent}</p>

          <h3 className={style.titulos}>Informacion:</h3>
          <p className={style.infor2}>
            Su territorio tiene un area de {detail[0].area} Kilometros
            cuadrados.
          </p>
          <p className={style.infor2}>
            Su poblacion es de {detail[0].population} habitantes.
          </p>

          <h2 className={style.infor}> Actividades:</h2>
          <div className={style.activitiesBox}>
            {detail[0].activities.length > 0 ? (
              detail[0].activities.map((a) => (
                <div className={style.boxX1}>
                  <h2 className={style.titulos}>{a.name}</h2>
                  <p>Duración: {a.timeLapse}</p>
                  <p className={style.Pactivity}>Dificultad: {a.difficulty}</p>
                  <p>Temporada: {a.seasson}</p>
                </div>
              ))
            ) : (
              <h2>No hay actividades</h2>
            )}
          </div>

          {/* <Link to='/home'>Voler</Link> */}
        </div>

      
      </div>
    ) : (
      <div>
        <h2>{detail.message}</h2>
      </div>
    );
  }

  return (
    <div>
      {detail ? render() : <Cargando />}
      {/* <button onClick={() => mostrar()}>params</button> */}
      {/* <button onClick={() => mostrarInfo()}>info</button> */}
    </div>
  );
}

function Cargando() {
  return (
    <div className={style.loadingBox}>
      <h2 className={style.h22}>Espere...</h2>
    </div>
  );
}
