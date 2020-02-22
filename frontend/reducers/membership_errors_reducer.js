import merge from "lodash.merge";


const membershipErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case "RECEIVE_MEMBERSHIP_ERRORS":
            return action.errors;
        case "REMOVE_MEMBERSHIP_ERRORS":
            return [];
        default:
            return state;
    }
};

export default membershipErrorsReducer;