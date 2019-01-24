import { GET_VASTS, GET_VAST_BY_ID, GET_VAST_XML_BY_ID, CHANGE_VIEW } from './../actions';

const initialState = {
    vasts:[],
    vast_show:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VAST_BY_ID:
            return {
                ...state
            }
        case GET_VASTS:
        console.log(action.payload.data)
            return {
                ...state,
                vasts:[...action.payload.data]
            }
        case CHANGE_VIEW:
            return {
                ...state,
                vast_show:action.id
            }
        }
        return state;
    }

export default reducer;