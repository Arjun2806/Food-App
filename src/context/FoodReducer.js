const FoodReducer = (state, action) => {

    const intialCategories = action.intialCategories;

    switch (action.type) {
       case "All":
            return {...intialCategories, All: true};
        case "Lunch":
            return {...intialCategories, Lunch: true};
        case "Breakfast":
            return {...intialCategories, Breakfast: true};
        case "Dinner":
            return {...intialCategories, Dinner: true};
        case "Snacks":
            return {...intialCategories, Snacks: true};
        case "Drinks":
            return {...intialCategories, Drinks: true};
        default:
            return state;
    }
}

export default FoodReducer