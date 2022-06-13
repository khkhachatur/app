
import * as actionType from '../constants/cartConstants';

export const addToCart = (itemId) => {
    return{ 
        type: actionType.CART_ADD_ITEM,
        payload: {
            id: itemId
        }

    }
}

export const addToCartSecond = (secondItemId) => {
    return{ 
        type: actionType.CART_ADD_SECONDITEM,
        payload: {
            secondId: secondItemId
        }

    }
}

export const removeFromCart = (itemId) => {
    return{ 
        type: actionType.CART_REMOVE_ITEM,
        payload: {
            id: itemId
        }

    }
}

export const adjustQty = (itemId, value) => {
return{ 
        type: actionType.CART_ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value,
        }

    }
}
    export const adjustSecondQty = (secondItemId, value) => {
    return{ 
        type: actionType.CART_ADJUST_SECOND_QTY,
        payload: {
            secondId: secondItemId,
            qty: value,
        }

    }
}