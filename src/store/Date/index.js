import { OPEN_MODAL_DATE, CLOSE_MODAL_DATE } from './types';

export const initialState = {
    date: '',
    isModalOpen: false,
    error: '',
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL_DATE:
            return { ...state, date: action.payload, isModalOpen: true };
        case CLOSE_MODAL_DATE :
            return { ...state, date: action.payload, isModalOpen: false };
        default:
            return state;
    }
}