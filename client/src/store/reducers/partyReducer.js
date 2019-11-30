import {
    FETCH_PARTY_START,
    FETCH_PARTY_SUCCESS,
    FETCH_PARTY_FAILURE,
    ADD_PARTY_START,
    ADD_PARTY_SUCCESS,
    ADD_PARTY_FAILURE,
    FETCH_PARTYBYID_START,
    FETCH_PARTYBYID_SUCCESS,
    FETCH_PARTYBYID_FAILURE,
} from '../actions/index';


export const initialState = {
    parties: [],
    isLoading: false,
    error: [],
    partyById: [],
}

export const partyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PARTY_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_PARTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                parties: action.payload,
                error: null
            }
        case FETCH_PARTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                parties: []
            }
            case ADD_PARTY_START:
                return {
                    ...state,
                    isLoading: true,
                    error: null
                }
            case ADD_PARTY_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    parties: [action.payload, ...state.parties],
                    error: null
                }
            case ADD_PARTY_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload,
                    parties: []
                }
                case FETCH_PARTYBYID_START:
                    return {
                        ...state,
                        isLoading: true,
                        error: null
                    }
                case FETCH_PARTYBYID_SUCCESS:
                    return {
                        ...state,
                        isLoading: false,
                        partyById: action.payload,
                        error: null
                    }
                case FETCH_PARTYBYID_FAILURE:
                    return {
                        ...state,
                        isLoading: false,
                        error: action.payload,
                    }                
        default: 
        return state
    }
}