import axios from 'axios';
import { useSelector } from 'react-redux';





export function getCountries() {
    return async function (dispatch) {
        var bdData = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: bdData.data
        })
    }
}


export function cambiarPag(payload) {
    // Cambia la pagina cuando selecciono un numero en el Paginado 
    return {
        type: 'CHANGE_PAG',
        payload: payload
    }
}

export function aumentarPag(numeroCondicion) {
    // Aumenta el numero del paginado en 1 
    return {
        type: 'AUMENTAR_PAG',
        numeroCondicion: numeroCondicion
    }
}

export function reducirPag(numeroCondicion) {
    // Disminuye el numero del Paginado en 1
    return {
        type: 'REDUCIR_PAG',
        numeroCondicion: numeroCondicion

    }
}



export function onOffInfoChange(id) {
    // Setea el on/off para ver la info de pais // esto debo cambiar
    return {
        type: 'ON_OFF_INFO',
        id: id

    }
}



export function filtrarPorContinente(continente) {
    return {
        type: 'FILTRAR_CONTINENTE',
        payload: continente
    }
}


export function changeColor() {
    return {
        type: 'CHANGE_COLOR',
    }
}




export function ordenarPorNombre(payload) {
    return {
        type: 'ORDENAR_POR_NOMBRE',
        payload: payload
    }
}

export function ordenarPorPoblacion(payload) {
    return {
        type: 'ORDENAR_POR_POBLACION',
        payload: payload
    }
}



export function reset() {
    return {
        type: 'RESET',
    }
}

export function buscarPais(payload) {
    return {
        type: 'BUSCADOR',
        payload
    }
}



export function postActivity(payload) {

    return async function () {
        const post = await axios.post('http://localhost:3001/activity', payload)
        console.log(post)
        return post

    }
}






export function getDetail(id) {

    return async function (dispatch) {


        try {
            const info = await axios.get('http://localhost:3001/countries/' + id)
            console.log(info.data[0])
            return dispatch({
                type: 'GET_DETAIL',
                payload: info.data
            })
        } catch (err) { console.log(err) }


    }
}

export function clearDetail() {
    return { type: 'CLEAR_DETAIL' }
}
