
const initialState = {
    countries: []
}




function Reducer(state = initialState, action) {


    switch (action.type) {
        case 'GET_COUNTRIES': return {
            ...state,
            countries: action.payload
        }

            break;

        default:

    }




}




export default Reducer;