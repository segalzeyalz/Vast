import { ADD_VAST, CHANGE_VAST } from './../actions';

const initialState = {
    vastURL:'',
    hide_ui:'',
    position:''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VAST:
            return {
                vastURL:'',
                hide_ui:'',
                position:''
            }
        case CHANGE_VAST:
        console.log(action.value, action.name)
            return {
                ...state,
                [action.name]:action.value
            }            
        default:
            return {
                ...state
            }
        }
    }

export default reducer;