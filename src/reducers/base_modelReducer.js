export const initialState = {
    car: {
        price: 26395,
        name: '2019 ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg'
    }
}

export const base_modelReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BASE_MODEL':
            return {
                ...state,
                car: action.payload
            }
            default:
                return state;
    }
 
}