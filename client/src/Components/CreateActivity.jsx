import React, { useState } from "react";
import style from './style/CreateActivity.module.css'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../actions/index.js";



export default function CreateActivity() {


    const dispatch = useDispatch()

    ////// Inputs formulario //////
    const [inputs, setInputs] = useState({
        name: '',
        timeLapse: '',
        difficulty: '', // ENUM de  ("1", "2", "3", "4", "5")
        seasson: '' //ENUM de ('Verano', 'Otoño', 'Invierno', 'Primavera')
    })
    /////////////////////////////////


    ////// Despacho formulario //////

    function handleForm() {
        dispatch(postActivity(inputs))
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




    return (

        <div className={style.todo}>



            <NavLink style={isActive => ({
                borderBottom: isActive ? '2px solid deepskyblue' : 'none',

                // boxShadow: isActive ? "0px 0px 2px black" : "none",
                color: isActive ? "deepskyblue" : "none",
                boxShadow: isActive ? "0px 0px 2px white" : "none"

            })}
                className={style.text} to='/home' >Home</NavLink>






            <form onSubmit={() => handleForm()} >

                <div>
                    <label htmlFor="nam">Nombre</label>
                    <input type="text" value={inputs.name} name='name' id='nam' onChange={e => handleChangeName(e)} />
                </div>

                <div>
                    <label htmlFor="time">Duración</label>
                    <input type="text" value={inputs.timeLapse} name='timeLapse' id='time' onChange={e => handleChangeTimeLapse(e)} />
                </div>


                <div>
                    <label htmlFor="">Dificultad</label>

                    <select name="" id="" onChange={e => handleChangeDifficulty(e)}>
                        <option value="none">Seleccionar</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button type='submit'>Enviar</button>


                </div>



                <div>
                    <label htmlFor="3">Temporada</label>
                    <select name="seasson" id="3" onChange={e => handleChangeSeasson(e)}>
                        <option value="none">Seleccionar</option>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>

                    {/* <input type="text" value={inputs.seasson} name='seasson' /> */}
                </div>

            </form>






        </div>





    )
}