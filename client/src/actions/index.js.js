import axios from 'axios';



export function getCountries() {
    return async function (dispatch) {
        try {
            var bdData = await axios.get('/countries');
            return dispatch({
                type: 'GET_COUNTRIES',
                payload: bdData.data
            })
        } catch (err) { return dispatch({ type: 'GET_ACTIVITIES_ERROR', payload: err }) }
    }
}
/////////////////////////////

export function cambiarPag(payload) {
    // Cambia la pagina cuando selecciono un numero en el Paginado 
    return {
        type: 'CHANGE_PAG',
        payload: payload
    }
}
/////////////////////////////

export function aumentarPag(numeroCondicion) {
    // Aumenta el numero del paginado en 1 
    return {
        type: 'AUMENTAR_PAG',
        numeroCondicion: numeroCondicion
    }
}
/////////////////////////////

export function reducirPag(numeroCondicion) {
    // Disminuye el numero del Paginado en 1
    return {
        type: 'REDUCIR_PAG',
        numeroCondicion: numeroCondicion

    }
}
/////////////////////////////

export function onOffInfoChange(id) {
    // Setea el on/off para ver la info de pais // esto debo cambiar
    return {
        type: 'ON_OFF_INFO',
        id: id

    }
}
/////////////////////////////

export function filtrarPorContinente(continente) {
    return {
        type: 'FILTRAR_CONTINENTE',
        payload: continente
    }
}
/////////////////////////////

export function changeColor() {
    return {
        type: 'CHANGE_COLOR',
    }
}
/////////////////////////////

export function ordenarPorNombre(payload) {
    return {
        type: 'ORDENAR_POR_NOMBRE',
        payload: payload
    }
}
/////////////////////////////

export function ordenarPorPoblacion(payload) {
    return {
        type: 'ORDENAR_POR_POBLACION',
        payload: payload
    }
}
/////////////////////////////

export function reset() {
    return {
        type: 'RESET',
    }
}
/////////////////////////////

export function buscarPais(pais) {
    return async function (dispatch) {
        try {
            var bdData = await axios.get(`/countries?name=${pais}`);
            return dispatch({
                type: 'BUSCADOR',
                payload: bdData.data
            })
        } catch (err) { console.log(err) }
    }
}
/////////////////////////////

export function postActivity(payload) {
    // return async function () {
    axios.post('/activity', payload)
    return {
        type: 'POST_ACTIVITY'
    }
}
// }
/////////////////////////////

export function getDetail(id) {

    return async function (dispatch) {


        try {
            const info = await axios.get('/countries/' + id)
            // console.log(info.data[0])
            return dispatch({
                type: 'GET_DETAIL',
                payload: info.data
            })
        } catch (err) {
            return dispatch({
                type: 'GET_DETAIL',
                payload: err
            })
        }


    }
}
/////////////////////////////

export function clearDetail() {

    return (dispatch) => dispatch({ type: 'CLEAR_DETAIL' })

}
/////////////////////////////

export function getActivities() {

    return async function (dispatch) {

        try {
            const get = await axios.get('/activities')
            return dispatch({
                type: 'GET_ACTIVITIES',
                payload: get.data
            })
        } catch (err) { console.log(err) }
    }
}
/////////////////////////////

export function filtrarPorActividad(payload) {
    return {
        type: 'FILTRAR_POR_ACTIVIDAD',
        payload
    }
}
/////////////////////////////

