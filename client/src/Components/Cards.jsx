import React from "react";
import { useSelector } from "react-redux";
// import { useState } from "react";
import Card from "./Card";
import Paginado from "./Paginado";
import Loading from './Loading';
import style from './style/Cards.module.css'
// import { useState } from "react";
// import Paginado from "./Paginado";
import img from './style/countriesdeep.png'



export default function Cards(props) {











    return (
        <div className={style.cards}>


            <img src={img} alt="asd" className={style.imgC} />
            {/* : <Loading /> */}


            {
                props.paisesActualesEnPagina.length ?
                    props.paisesActualesEnPagina.map(c => (
                        <Card
                            name={c.name}
                            flag={c.flag}
                            continent={c.continent}
                            id={c.id}
                        />
                    )

                    ) : <Loading />

            }


            {/*  <Paginado
                allCountries={props.countries.length}
                paisesXPagina={props.paisesXPagina}
                pagina={props.pagina}
            />
 */}




        </div>
    )
}









