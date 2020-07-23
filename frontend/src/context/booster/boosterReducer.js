import {
    ADD_BOOSTER, ADD_BOOSTER_FAILED,
    ADD_BOOSTER_SUCCESS, DELETE_BOOSTER_SUCCESS,
    FETCH_BOOSTER_ITEMS,
    FETCH_BOOSTER_ITEMS_FAILED,
    FETCH_BOOSTER_ITEMS_SUCCESS
} from "./booster-actions";


export default function boosterReducer(state, action) {
    switch (action.type) {
        case FETCH_BOOSTER_ITEMS:
            return { ...state, fetchStatus: 'PENDING' };
        case FETCH_BOOSTER_ITEMS_SUCCESS:
            return { ...state, fetchStatus: 'SUCCESS', boosterItems: action.payload };
        case FETCH_BOOSTER_ITEMS_FAILED:
            return { ...state, fetchStatus: 'FAILED' };
        case ADD_BOOSTER:
            return { ...state, addStatus: 'PENDING' };
        case ADD_BOOSTER_SUCCESS:
            return {
                ...state,
                addStatus: 'SUCCESS',
                booster: [...state.booster, action.payload],
            };
        case ADD_BOOSTER_FAILED:
            return { ...state, addStatus: 'FAILED' };
        case DELETE_BOOSTER_SUCCESS:
            return {
                ...state,
                booster: state.booster.filter((booster) => {
                    return booster.id !== action.payload;
                }),
            };
        default:
            return state;
    }
}
