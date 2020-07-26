export const initialState = {
  additionalPrice: 0,
  features: [],
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500, removed: false },
    { id: 2, name: 'Racing detail package', price: 1500, removed: false },
    { id: 3, name: 'Premium sound system', price: 500, removed: false },
    { id: 4, name: 'Rear spoiler', price: 250, removed: false }
  ]
};

export const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                car: action.payload
            }
            default:
                return state;
    }
 
}