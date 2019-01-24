import { GET_VASTS, GET_VAST_BY_ID, GET_VAST_XML_BY_ID } from './../actions';

const initialState = {
    vasts:[],
    vast_show:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VAST_BY_ID:
            return {
                ...state,
                vast_show:action.payload
            }
        case GET_VAST_XML_BY_ID:
            return {
                ...state,
                xmlData: action.payload
            }
        case GET_VASTS:
            return {
                ...state,
                vasts:[...action.payload.data]
            }
        }
        return state;
    }

export default reducer;