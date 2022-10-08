import produce from "immer";
import { SET_USER_INFO } from "./action";

const initialState = {
	userInfo: null,
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return produce(state, (draft) => {
				draft.userInfo = action.payload;
			});
		default:
			return { ...state };
	}
};
export default reducer;
