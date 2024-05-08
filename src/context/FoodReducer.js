const FoodReducer = (state,action) => {
    switch (action.type) {
        // case "SET_INPUT":
        //     return {...state, input: action.payload};
        // case "SET_CATEGORY":
        //     return {...state, category: action.payload};
        // case "SET_DISPLAY_FOOD":
        //     return {...state, displayFood: action.payload};
        default:
            return state;
    }
}

export default FoodReducer