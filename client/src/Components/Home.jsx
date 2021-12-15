import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style/Home.module.css";
import {
  getActivities,
  getCountries,
  ordenarPorNombre,
  reset,
} from "../actions/index.js";
import Cards from "./Cards";
import Filter from "./Filter";
import Paginado from "./Paginado";

function Home() {
  const dispatch = useDispatch();

  ////// Estados de redux //////
  const allCountries = useSelector((state) => state.countries);
  //////

  ////// Estados Filtros//////
  const [filterActive, setFilterActive] = useState(false);

  ////// Estados Paginado 0//////
  const [pagina, setPagina] = useState(1);
  const [paisesXPagina] = useState(10);

  function cambiarPag(e) {
    setPagina(e);
    console.log(pagina);
  }

  function aumentarPag(e) {
    if (pagina < e) {
      setPagina(pagina + 1);
    }
  }

  function reducirPag() {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  }

  console.log(pagina);

  ////// Logica de Paginado //////
  const indiceUltimoPais = pagina * paisesXPagina;
  const indicePrimerPais = indiceUltimoPais - paisesXPagina;
  const paisesActualesEnPagina = allCountries.slice(
    indicePrimerPais,
    indiceUltimoPais
  );
  //////
  //////////////////////////////////

  ////// Logica de ordenamiento //////
  const [orden, setOrden] = useState("az");

  function handleOrden(e) {
    // e.preventDefault()
    dispatch(ordenarPorNombre(e.target.value));
    // setPagina(1)
    setOrden(`ordenado : ${e.target.value}`);
    console.log(orden);
  }
  //////////////////////////////////

  ////// Logica de buscador //////
  function cambiarPag(n) {
    setPagina(n);
  }
  /////////////////////////////////

  ////// UseEffect //////
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);
  ////////////////////////

  ////// Boton de reset //////

  function handleReset(e) {
    dispatch(reset());
    dispatch(getCountries());
    setPagina(1);
  }
  ////////////////////////////

  ////// Logica de Crear actividad //////

  ////////////////////////////

  return (
    <div className={style.home}>
<button className={style.botonFilter} onClick={e=> setFilterActive(!filterActive)}>menu</button>



      {filterActive ? (
        <Filter
          reset={handleReset}
          setPagina={setPagina}
          handleOrden={handleOrden}
        />
      ) : (
        false
      )}

     {/*  <div className={style.cardsPag}>
        <Cards
          countries={allCountries}
          paisesActualesEnPagina={paisesActualesEnPagina}
          // allCountries={allCountries.length}
          paisesXPagina={paisesXPagina}
          pagina={pagina}
        />

        <Paginado
          allCountries={allCountries.length}
          paisesXPagina={paisesXPagina}
          pagina={pagina}
          cambiarPag={cambiarPag}
          aumentarPag={aumentarPag}
          reducirPag={reducirPag}
        />
      </div> */}
    </div>
  );
}

export default Home;
