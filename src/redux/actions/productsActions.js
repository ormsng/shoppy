import ActionsTypes from '../contants/action-types';

export const setProducts = (products) => {
	return {
		type: ActionsTypes.SET_PRODUCTS,
		payload: products
	};
};

export const setCart = (products) => {
	return {
		type: ActionsTypes.LS_PRODUCTS,
		payload: products
	};
};

export const addToCart = (product) => {
	return {
		type: ActionsTypes.ADD_TO_CART,
		payload: product
	};
};

export const removeFromCart = (product) => {
	return {
		type: ActionsTypes.REMOVE_FROM_CART,
		payload: product
	};
};

export const restartCart = () => {
	return {
		type: ActionsTypes.RESTART_CART
	};
};



