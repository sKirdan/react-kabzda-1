
import { getAuthUserData } from "./auth-reducer";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";


let initialState = {
    initialized: false,
    email: null,
    login: null,
    isAuth: false

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true

            }
        default:
            return state;
    }
};

export const initialized_success = () => ({
    type: INITIALIZED_SUCCESS
});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initialized_success())
    })
}

export default appReducer;
