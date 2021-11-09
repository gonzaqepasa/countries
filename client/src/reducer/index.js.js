
const initialState = {
    // Todos los paises // 
    countries: [],
    countriesFilter: [],
    countriesToSearch: [],

    // Actividades //
    activities: [],

    // Details //
    detail: [],

    // Paginado //
    pagina: 1,
    paisXPage: 10,

    // Informacion //
    onOffInfo: 0,

    // Searcher // 
    searcher: '',

    // ColorFondo // 
    color: false,

    // ordernUpdate // 
    orden: '',
    asd: false
}




export default function rootReducer(state = initialState, action) {


    switch (action.type) {
        case 'GET_COUNTRIES': return {
            ...state,
            countries: action.payload,
            countriesFilter: action.payload,
            countriesToSearch: action.payload
        }
        //////////////////////////////
        case 'CHANGE_PAG': return {
            ...state,
            pagina: action.payload
        }
        //////////////////////////////

        case 'AUMENTAR_PAG': {
            if (state.pagina < action.numeroCondicion.length) {
                return {
                    ...state,
                    pagina: state.pagina + 1
                }
            } else return {
                ...state,
                pagina: state.pagina
            }
        }
        //////////////////////////////

        case 'REDUCIR_PAG': {
            if (state.pagina > 1) {
                return {
                    ...state,
                    pagina: state.pagina - 1
                }

            } else return {
                ...state,
                pagina: state.pagina
            }
        }
        //////////////////////////////

        case 'ON_OFF_INFO': return {
            ...state,
            onOffInfo: action.id
        }
        //////////////////////////////

        case 'FILTRAR_CONTINENTE':
            const allCountries = state.countriesFilter;
            let continentesFiltrados;

            if (action.payload === 'Activities') {
                continentesFiltrados = allCountries.filter(p => p.activities.length < 0)
            } else if (action.payload === 'todos') {
                continentesFiltrados = allCountries
            } else {
                continentesFiltrados = allCountries.filter(p => p.continent === action.payload)
            }
            // const continentesFiltrados = action.payload === 'todos' ? allCountries : allCountries.filter(p => p.continent === action.payload)


            return {
                ...state,
                countries: continentesFiltrados,
                countriesToSearch: continentesFiltrados
            }







        //////////////////////////////        
        case 'CHANGE_COLOR': return {
            ...state,
            color: !state.color
        }
        //////////////////////////////

        case 'ORDENAR_POR_NOMBRE':

            let ordenamiento;
            if (action.payload === 'az') {
                ordenamiento = state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                })
            } else if (action.payload === 'za') {
                ordenamiento = state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0
                })
            } else if (action.payload === 'menor') {
                ordenamiento = state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1
                    }
                    if (b.population > a.population) {
                        return -1
                    }
                    return 0
                })
            } else if (action.payload === 'mayor') {
                ordenamiento = state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1
                    }
                    if (b.population > a.population) {
                        return 1
                    }
                    return 0
                })
            }

            return {
                ...state,
                countries: ordenamiento,
                countriesToSearch: ordenamiento,
                asd: !state.asd
            }






        //////////////////////////////

        case 'BUSCADOR':
            const allCountriesasd = state.countriesToSearch
            const asd = allCountriesasd.filter(p => p.name.toLowerCase().includes(action.payload.toLowerCase()))

            return {
                ...state,
                countries: asd
            }

        //////////////////////////////
        case 'RESET': return {
            ...state,
            countries: []
        }

        //////////////////////////////
        case 'POST_ACTIVITY':
            return {
                ...state
            }

        //////////////////////////////
        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            }

        case 'CLEAR_DETAIL':
            return {
                ...state,
                detail: []
            }


        //////////////////////////////
        case 'GET_ACTIVITIES': return {
            ...state,
            activities: action.payload
        }






        case 'FILTRAR_POR_ACTIVIDAD':
            const countries = state.countriesFilter
            const filtredCountries = countries.filter((c) => { return c.activities.find((c) => { return c.name === action.payload; }); });


            if (action.payload === 'none') {
                return { ...state, countries: countries }
            } else {
                return {
                    ...state,
                    countries: filtredCountries
                }
            }
        //////////////////////////////

















        //////////////////////////////
        default: return state

    }




}




