import React from "react";
import { GiH2O } from "react-icons/gi";
import { useSelector } from "react-redux";
import Card from "./Card";
import Loading from "./Loading";
import style from "./style/Cards.module.scss";
import img from "./style/mundogirando.gif";

export default function Cards(props) {
  const paises = useSelector((state) => state.countries);
  //   console.log(paises);

  function render() {
    return paises.length > 1 ? (
      props.paisesActualesEnPagina.map((c) => (
        <Card
          key={c.id}
          name={c.name}
          flag={c.flag}
          continent={c.continent}
          id={c.id}
        />
      ))
    ) : (
      <div className={style.error}>
        <h2>{paises[0].message}</h2>
        <h2>{paises[0].response.statusText}</h2>

      </div>
    );
  }

  return (
    <div className={paises.length > 1?style.cards: `${style.cards} ${style.card100}`}>
      {props.paisesActualesEnPagina.length ? render() : <Loading />}

      {/*  <Paginado
                allCountries={props.countries.length}
                paisesXPagina={props.paisesXPagina}
                pagina={props.pagina}
            />
 */}
    </div>
  );
}
