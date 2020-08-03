import {addNewBooster, deleteBooster, fetchCreatedBooster} from "../../utils/booster-utils";

export const FETCH_BOOSTER_ITEMS = "FETCH_BOOSTER_ITEMS";
export const FETCH_BOOSTER_ITEMS_SUCCESS = "FETCH_BOOSTER_ITEMS_SUCCESS";
export const FETCH_BOOSTER_ITEMS_FAILED = "FETCH_BOOSTER_ITEMS_FAILED";
export const ADD_BOOSTER = "ADD_BOOSTER";
export const ADD_BOOSTER_SUCCESS = "ADD_BOOSTER_SUCCESS";
export const ADD_BOOSTER_FAILED = "ADD_BOOSTER_FAILED";
export const DELETE_BOOSTER = "DELETE_BOOSTER";
export const DELETE_BOOSTER_SUCCESS = "DELETE_BOOSTER_SUCCESS";
export const DELETE_BOOSTER_FAILED = "DELETE_BOOSTER_FAILED";

export async function fetchBoosterItems(dispatch) {
    dispatch({type: FETCH_BOOSTER_ITEMS});
    try {
        const boosterItems = await fetchCreatedBooster();
        dispatch({type: FETCH_BOOSTER_ITEMS_SUCCESS, payload: boosterItems});
    } catch (error) {
        dispatch({type: FETCH_BOOSTER_ITEMS_FAILED, payload: error});
    }
}

export async function removeBooster(dispatch, id) {
    dispatch({type: DELETE_BOOSTER});
    try {
        await deleteBooster(id);
        dispatch({type: DELETE_BOOSTER_SUCCESS, payload: id});
    } catch (error) {
        dispatch({type: DELETE_BOOSTER_FAILED});
    }
}

export async function addBooster(dispatch, boosterToAdd) {
    dispatch({type: ADD_BOOSTER});
    try {
        const booster = await addNewBooster(boosterToAdd);
        dispatch({type: ADD_BOOSTER_SUCCESS, payload: booster});
    } catch (error) {
        dispatch({type: ADD_BOOSTER_FAILED, payload: error});
    }
}