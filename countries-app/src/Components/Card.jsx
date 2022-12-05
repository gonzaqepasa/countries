import React from "react";
import { useDispatch } from "react-redux";
import style from "./style/Card.module.scss";
import { getDetail } from "../actions/index.js";
import { Link } from "react-router-dom";

export default function Card(props) {
  const dispatch = useDispatch();

  ////// Logica del boton getDetail //////
  function handleinfo(id) {
    dispatch(getDetail(id));
  }
  ////////////////////////////////////////

  const asd = `/home/${props.id}`;

  return (
    <div className={style.box}>
      <img className={style.img} src={props.flag} alt="no se encontro imagen" />

      <div className={style.text}>
        <h2 className={style.paisName}>{props.name}</h2>

        <p className={style.capital}>{props.continent}</p>
        <Link
          className={style.verMas}
          to={asd}
          onClick={() => handleinfo(props.id)}
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
