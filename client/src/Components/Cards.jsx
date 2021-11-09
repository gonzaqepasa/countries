import React from "react";
import Card from "./Card";
import Loading from './Loading';
import style from './style/Cards.module.css'
import img from './style/mundogirando.gif'



export default function Cards(props) {








    return (
        <div className={style.cards}>


            <img src={img} alt="asd" className={style.imgC} />
           


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









