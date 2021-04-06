const initialState = {
    cartInt: 0,
    cart: [],
    cartTotal:0
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        
        case "setCart":
            return { 
                ...state,
                cartInt : action.payload.cartInt,
                cart: [...state.cart, action.payload.cart],
                cartTotal: action.payload.cartTotal
             }
        case "addToCart":
            return {
                ...state,
                cartInt : state.cartInt+1,
                cart: [...state.cart[0], action.payload.item],
                cartTotal: state.cartTotal+action.payload.price
            }
        case "removeFromCart":
            const orderId = action.payload.id;
            
            return{
                cartInt : state.cartInt-1,
                cart: [...state.cart].filter(item=> item._id !== orderId),
                cartTotal: state.cartTotal-action.payload.price
            }
        default:
            return state;
    }
};

export default rootReducer;