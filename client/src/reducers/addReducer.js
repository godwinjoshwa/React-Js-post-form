const addReducer = (state = {}, action) => {
    switch (action.type) {
        case "POST":
            // const users = state.users(action.payload);
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
}

export default addReducer;