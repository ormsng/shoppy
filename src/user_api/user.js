import axios from 'axios';
import { logInAction, logOutAction } from '../redux/actions/userActions';

export async function getUser() {
	return axios({
		method: 'get',
		withCredentials: true,
		url: 'https://orms-shoppy.herokuapp.com/user'
	}).then((res) => res);
}

export const login = (loginEmail, loginPassword, dispatch, setNoUserExists) => {
	axios({
		method: 'post',
		data: {
			email: loginEmail,
			password: loginPassword
		},
		withCredentials: true,
		url: 'https://orms-shoppy.herokuapp.com/login'
	}).then(async (res) => {
		const user = await getUser();
		if (user.data.email) {
			dispatch(logInAction(user));
		}
		if (res.data === 'NOUSER') {
			setNoUserExists(true);
		}
	});
};

export const register = (registerEmail, registerPassword, dispatch, setUserExists) => {
	axios({
		method: 'post',
		data: {
			email: registerEmail,
			password: registerPassword
		},
		withCredentials: true,
		url: 'https://orms-shoppy.herokuapp.com/register'
	}).then(async (res) => {
		if (res.data === 'SUCCESS') {
			login(registerEmail, registerPassword, dispatch);
		}
		if (res.data === 'EXISTS') {
			setUserExists(true);
		}
	});
};

export const logOut = (dispatch) => {
	axios({
		method: 'get',
		withCredentials: true,
		url: 'https://orms-shoppy.herokuapp.com/logout'
	}).then(async (res) => {
		dispatch(logOutAction());
	});
};
