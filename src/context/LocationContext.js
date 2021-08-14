import createDataContext from "./createDataContext";


const locationReducer = (state, action) => {
    switch(action.type) {
        case 'add_current_location':
            return action.payload;
        default:
            return state;
    }
};


const addLocation = dispatch => { 
    return (location) => {
        //console.log('hello');
        dispatch({ type: 'add_current_location', payload: location})
        //console.log('add', location);
    }
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { addLocation },
    { currentLocation: null}
);