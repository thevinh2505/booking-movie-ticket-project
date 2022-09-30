import produce from "immer";
import { SET_PROFILE } from "./action";
let user = {};
if (localStorage.getItem('user')) {
	user = JSON.parse(localStorage.getItem('user'));
}
const initialState = {
	profile: user,
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return produce(state, (draft) => {
				draft.profile = action.payload;
			});
		// case SET_ACCOUNT_INFO:
		// 	return produce(state, (draft) => {
		// 		draft.accountInfo = action.payload;
		// 	});
		default:
			return { ...state };
	}
};
export default reducer;
