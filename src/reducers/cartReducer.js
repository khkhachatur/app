import { products } from '../db/dataBase';

import * as actionType from '../constants/cartConstants'

const INITIAL_STATE ={
    products: products,
    cart: [],
    secondCart:[],
    currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case actionType.CART_ADD_ITEM: 
            const item = state.products.find((prod) => prod.id === action.payload.id)

            const inCart = state.cart.find((item) => 
                item.id === action.payload.id ? true : false
            )
            return{
                ...state,
                cart: inCart 
                    ? state.cart.map((item) => 
                        item.id === action.payload.id 
                            ?  {...item, qty: item.qty + 1} 
                            : item
                        ) 
                        : [...state.cart, {...item, qty: 1}]
            }
            
        case actionType.CART_ADD_SECONDITEM: 
        const secondItem = state.products.find((prod) => prod.secondId === action.payload.secondId)
        
            const secondInCart = state.secondCart.find((secondItem) => 
                secondItem.secondId === action.payload.secondId ? true : false
            )
            return{
                ...state,
                secondCart: secondInCart 
                    ? state.secondCart.map((secondItem) => 
                        secondItem.secondId === action.payload.secondId 
                            ?  {...secondItem, qty: secondItem.qty + 1} 
                            : secondItem
                        ) 
                        : [...state.secondCart, {...secondItem, qty: 1}]
            }

        case actionType.CART_REMOVE_ITEM: 
            const inCart1 = state.cart.find((item1) => 
                item1.id === action.payload.id ? true : false
            )
            return{
                ...state,
                cart: inCart1 
                    ? state.cart.map((item) => 
                        secondItem.id === action.payload.id 
                            ?  {...item, qty: item.qty - 1} 
                            : item
                        )  :
                    [...state.cart.filter((item) => item.id !== action.payload.id)]
                }
        case actionType.CART_ADJUST_QTY: 
            return{
                ...state,
                cart: state.cart.map((item) => item.id === action.id ? {...item, qty: +action.payload.qty} : item)
            }
        case actionType.CART_ADJUST_SECOND_QTY: 
            return{
                ...state,
                secondCart: state.secondCart.map((secondItem) => secondItem.secondId === action.secondId ? {...secondItem, qty: +action.payload.qty} : secondItem)
            }
        
        default:
            return state;
    }
}


export default cartReducer;