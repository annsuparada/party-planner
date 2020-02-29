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
    DELETE_PARTY_START,
    DELETE_PARTY_SUCCESS,
    DELETE_PARTY_FAILURE,
} from '../actions/index';


export const initialState = {
    parties: [],
    isLoading: false,
    error: [],
    partyById: [],
    deleteSuccess: '',
    party: {
        party_name: '',
        guests: '',
        theme: '',
        date: '',
        budget: null,
    }
    
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
                error: null,
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
                error: null,
            }
        case FETCH_PARTYBYID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case DELETE_PARTY_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_PARTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                deleteSuccess: action.payload,
                error: null
            }
        case DELETE_PARTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case 'UPDATE_FORM':
            return {
                ...state,
                party: {...state.party, ...action.payload},
            }
        default:
            return state
    }
}