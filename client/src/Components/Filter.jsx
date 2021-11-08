import React, { useEffect, useState } from "react"
import SearcherBar from "./SearcherBar"
import { Link } from "react-router-dom"
import style from './style/Filter.module.css'
import { cambiarPag, changeColor, filtrarPorContinente, getCountries, ordenarPorNombre, buscarPais } from "../actions/index.js"
import { useDispatch, useSelector } from "react-redux"
import { BiSearchAlt } from 'react-icons/bi'
import { GrUpdate, GrAdd } from 'react-icons/gr'
import { MdKeyboardBackspace } from 'react-icons/md'



export default function Filter(props) {

    const dispatch = useDispatch()




    const [buscar, setBuscar] = useState('')


    ////// Logica del buscador //////

    function handleChange(e) {
        e.preventDefault()
        setBuscar(e.target.value)
        // console.log(buscar)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(buscarPais(buscar))
        console.log('a buscar:', buscar)
        props.setPagina(1)
        setBuscar('')
    }


    /////////////////////////////////




    ////// Logica del Filtrado por continente //////
    function handlerFilterContinent(e) {
        dispatch(filtrarPorContinente(e.target.value))
        props.setPagina(1)
        console.log(e.target.value)

    }
    ////////////////////////////////////////////////





    return (
        <div className={style.filter}>


            <div className={style.botonesBox}>
                <div className={style.resetBox1}>
                    <Link className={style.back} to='/'><MdKeyboardBackspace /></Link>

                    <div className={style.resetBox}>
                        <p className={style.avisoReset}>Reset</p>

                        <button className={style.reset} onClick={e => props.reset(e)}><GrUpdate /></button>


                    </div>



                </div>

                <div className={style.createBox}>
                    <p className={style.avisoReset}>Nueva actividad</p>

                    <Link className={style.create} to='/activities'><GrAdd /></Link>


                </div>

            </div>
            <div className={style.boxFiltro}>
                {/* <h2 className={style.tituloBuscador}>Filtrar por Continente</h2> */}
                <p className={style.aviso}>Filtrar por continente o por actividades, (si algun pais tiene actividad)*</p>

                <select className={style.filterContinent} name="select" onChange={e => handlerFilterContinent(e)}>
                    <option value="todos">Filtrar</option>
                    <option value="Europe">Europa</option>
                    <option value="Asia" >Asia</option>
                    <option value="North America">America del Norte</option>
                    <option value="South America">America del Sur</option>
                    <option value="Antarctica">Antartica</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <hr />
                    <hr />
                    <option value="Activities">Actividades</option>
                </select>
            </div>



            <div className={style.boxOrdenador}>
                {/* <h2 className={style.tituloBuscador}>Ordenar</h2> */}
                <p className={style.aviso}>Ordena alfabeticamente y por cantidad de población</p>

                <select className={style.ordenador} name="ordenamiento" onChange={(e) => props.handleOrden(e)}>
                    <option value="az">Ordenar</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <hr />
                    <hr />
                    <option value="menor">Menor-Mayor</option>
                    <option value="mayor">Mayor-Menor</option>
                </select>


                {/*  <select className={style.ordenador} name="ordenamiento" onChange={(e) => props.handleOrdenPopu(e)}>

                </select> */}




            </div>





            <div className={style.boxBuscador}>
                {/* <h2 className={style.tituloBuscador}>Buscar Pais</h2> */}
                <p className={style.aviso}>Busca paises por nombre <br /> Sobre los filtrados*</p>
                <div className={style.inputConBoton}>
                    <form action="" onSubmit={e => handleSubmit(e)}>
                        <input className={style.inputSearch} type="text" placeholder='Buscar' onChange={e => handleChange(e)} value={buscar} />
                        <button className={style.boton} type="submit" ><BiSearchAlt /></button>
                    </form>
                </div>
            </div>




            {/* <input type="text" name='username' value={username} placeholder='Usuario' onChange={(e) => setUsername(e.target.value) validateUser(e.target.value)} /> */}






        </div >
    )
}