import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import { initialState } from "./initialState";

export const SET_USER_TYPE = "SET_USER_TYPE";
export const SET_USER_LOGOUT = "SET_USER_LOGOUT";

// Default user data
const user = { username: 'Hayko', password: '123456' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_TYPE: {
            return {
                ...state,
                isLogin: (user.username === action.payload.username && user.password === action.payload.password),
                user: action.payload.username
            }
        };
        case SET_USER_LOGOUT: {
            return {
                ...state,
                isLogin: action.payload.logout
            }
        };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;