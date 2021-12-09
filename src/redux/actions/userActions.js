import ActionsTypes from '../contants/action-types';

export const logInAction = (user) => {
	return {
		type: ActionsTypes.LOG_IN,
		payload: user
	};
};

export const logOutAction = () => {
	return {
		type: ActionsTypes.LOG_OUT
	};
};
