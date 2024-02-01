import { createAction } from "@reduxjs/toolkit";

// export const INCREMENT = createAction("INCREMENT");
export const INCREMENT = () => {
    return  {
        type: 'INCREMENT'
    };
};
// export const INCREMENTFIVE = createAction("INCREMENTFIVE");
export const INCREMENTFIVE = (nr) => {
    return {
        type: 'INCREMENTFIVE',
        payload: nr
    };
};
// export const DECREMENT = createAction("DECREMENT");
export const DECREMENT = () => {
    return {
        type: 'DECREMENT'
    };
};
// export const DECREMENTFIVE = createAction("DECREMENTFIVE");
export const DECREMENTFIVE = (nr) => {
    return {
        type: 'DECREMENTFIVE',
        payload: nr
    };
};
export const login = createAction("login");