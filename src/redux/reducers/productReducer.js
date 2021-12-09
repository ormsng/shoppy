import ActionTypes from '../contants/action-types';

const initialState = {
	products: [],
	cart: []
};

const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };
		case ActionTypes.LS_PRODUCTS:
			return { ...state, cart: payload };
		case ActionTypes.ADD_TO_CART:
			return { ...state, cart: [ ...state.cart, payload ] };
		case ActionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: [ ...state.cart.filter((itemid) => itemid !== JSON.stringify(payload)) ]
			};
		case ActionTypes.RESTART_CART:
			return {
				...state,
				cart: []
			};
		default:
			return state;
	}
};

export default productReducer;
