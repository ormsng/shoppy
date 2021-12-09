import ActionTypes from '../contants/action-types';

const initialState = {
	user: {},
	loggedIn: false
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.LOG_IN:
			return { ...state, user: payload, loggedIn: true };
		case ActionTypes.LOG_OUT:
			return { ...state, user: {}, loggedIn: false };
		default:
			return state;
	}
};

export default userReducer;
