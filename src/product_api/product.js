import axios from 'axios';

import { restartCart } from '../redux/actions/productsActions';
export const checkOutCart = (cart, dispatch, navigate) => {
	var today = new Date();
	var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	axios({
		method: 'post',
		data: {
			length: cart.length,
			price: cart
				.map((prod) => JSON.parse(prod))
				.reduce((a, b) => ({ price: a.price + b.price }))
				.price.toFixed(2),
			date
		},
		withCredentials: true,
		url: 'https://orms-shoppy.herokuapp.com/checkout'
	}).then(async (res) => {
		if (res.data === 'SUCCESS') {
			localStorage.clear();
			navigate('/');
			dispatch(restartCart());
		}
	});
};

export async function getHistory() {
	return axios({
		method: 'get',
		withCredentials: true,
		url: 'https://orms-shoppy.herokuapp.com/history'
	}).then((res) => {
		return res.data;
	});
}
