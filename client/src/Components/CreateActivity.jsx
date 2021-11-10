import React, { useState } from "react";
import style from './style/CreateActivity.module.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../actions/index.js";



export default function CreateActivity() {


    const dispatch = useDispatch()

    const allCountries = useSelector(state => state.countriesFilter)




    ////// Inputs formulario //////
    const [inputs, setInputs] = useState({
        name: '',
        timeLapse: '',
        difficulty: '', // ENUM de  ("1", "2", "3", "4", "5")
        seasson: '', //ENUM de ('Verano', 'Otoño', 'Invierno', 'Primavera')
        idCountries: []
    })
    /////////////////////////////////


    ////// Despacho formulario //////

    function handleForm(e) {
        e.preventDefault()



        if (inputs.name === '' || inputs.timeLapse === '' || inputs.difficulty === '' || inputs.seasson === '' || inputs.idCountries.length === 0) {
            return alert('Debes llenar todos los campos');
        } else {
            dispatch(postActivity(inputs))
            alert('Se agrego la actividad ' + inputs.name)
            window.history.back()
        }
    }

    /////////////////////////////////








    ////// Logica input Name ////// 
    function handleChangeName(e) {
        setInputs({
            ...inputs,
            name: e.target.value
        })
    }
    ////// Logica input timeLapse ////// 
    function handleChangeTimeLapse(e) {
        setInputs({
            ...inputs,
            timeLapse: e.target.value
        })
    }

    ////// Logica input Seasson ////// 
    function handleChangeSeasson(e) {
        setInputs({
            ...inputs,
            seasson: e.target.value
        })
    }

    ////// Logica input Difficulty ////// 
    function handleChangeDifficulty(e) {
        setInputs({
            ...inputs,
            difficulty: e.target.value
        })
    }



    ////// Logica input idPaises ////// 
    function handleIdPaises(e) {

        if (e.target.value !== 'none')
            setInputs({
                ...inputs, idCountries: [...inputs.idCountries, e.target.value]
            })
    }
    ////////////////////////////////////






    return (

        <div className={style.todo}>






            <form className={style.formulario} onSubmit={(e) => handleForm(e)} >
                <div className={style.box1}>

                    <div className={style.boxBoton}>
                        <Link className={style.botonVolver} to='/home'>VOLVER</Link>
                    </div>


                    <div className={style.tituloBox}>
                        <h2 className={style.tituloCrear}>Crea una nueva actividad.</h2>

                        <p className={style.parrafoCrear}>Completa los campos obligatorios, luego selecciona los paises a cuales quieres agregar la nueva activiadad y por ultimo dale al boton "Crear".</p>
                    </div>




                    <div className={style.inputsBox}>
                        <div className={style.Box}>
                            {/* <label htmlFor="nam">Nombre</label> */}
                            <input className={style.inputText} placeholder='Nombre' type="text" value={inputs.name} name='name' id='nam' onChange={e => handleChangeName(e)} />
                        </div>

                        <div className={style.Box}>
                            {/* <label htmlFor="time">Duración</label> */}
                            <input className={style.inputText} placeholder='Duración' type="text" value={inputs.timeLapse} name='timeLapse' id='time' onChange={e => handleChangeTimeLapse(e)} />
                        </div>


                        <div className={style.Box}>
                            {/* <label htmlFor="">Dificultad</label> */}

                            <select className={style.selectBox} name="" id="" onChange={e => handleChangeDifficulty(e)}>
                                <option value="none">Dificultad</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>



                        </div>



                        <div className={style.Box}>
                            {/* <label htmlFor="3">Temporada</label> */}
                            <select className={style.selectBox} name="seasson" id="3" onChange={e => handleChangeSeasson(e)}>
                                <option value="none">Temporada</option>
                                <option value="Verano">Verano</option>
                                <option value="Otoño">Otoño</option>
                                <option value="Invierno">Invierno</option>
                                <option value="Primavera">Primavera</option>
                            </select>

                            {/* <input type="text" value={inputs.seasson} name='seasson' /> */}
                        </div>
                    </div>
                </div>


                <div className={style.box2}>



                    <div className={style.paisBox}>
                        <select className={style.selectBox} name="" id="" onChange={(e) => handleIdPaises(e)}>

                            <option value="none" >Paises</option>
                            {allCountries.map(p =>
                                <option value={p.id}>{p.name}</option>
                            )}
                        </select>
                    </div>


                    <div className={style.cajaConPaises}>
                        {inputs.idCountries.map(id =>
                            <div className={style.idView}>  {id}</div>
                        )}
                    </div>



                    <button className={style.botonCrear} type='submit'>CREAR</button>
                </div>




            </form >






        </div >





    )
}