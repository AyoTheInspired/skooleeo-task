import { actionTypes } from "../actions/actionTypes";

const userReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.payload,
			};

		case actionTypes.LOGOUT_USER:
			return {
				...state,
				user: null,
			};

		case actionTypes.RETRIEVE_USER:
			return {
				...state,
				user: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
