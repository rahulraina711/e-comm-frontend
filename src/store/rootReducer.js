const initialState = {
    cartLength: 0,
    cartItems: []
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "addToCart":
            return {
                cartLength: state.cartLength + 1
            }
            case "removeFromCart":
                return {
                    cartLength: state.cartLength - 1
                }
                case "setCart":
                    return {
                        cartLength: action.payload.count,
                        cartItems: state.cartItems.push(action.payload.order)
                    }
                    default:
                        return state;
    }
};

export default rootReducer;