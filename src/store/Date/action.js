import { OPEN_MODAL_DATE, CLOSE_MODAL_DATE  } from './types';

export const openModalDate = (date) => {
    return {
        type: OPEN_MODAL_DATE,
        payload: date,
    };
};

export const closeModalDate = (date) => {
    return {
        type: CLOSE_MODAL_DATE ,
        payload: date,
    };
};