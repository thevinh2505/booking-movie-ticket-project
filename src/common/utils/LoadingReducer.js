// import produce from "immer";
// import { DISPLAY_LOADING, HIDE_LOADING } from "./LoadingAction";

// const initialState = {
// 	isLoading: true,
// };
// const reducer = (state = initialState, action) => {
// 	switch (action.payload) {
// 		case HIDE_LOADING:
// 			return produce(state, (draft) => {
// 				draft.isLoading = false;
// 			});
// 		case DISPLAY_LOADING:
// 			return produce(state, (draft) => {
// 				draft.isLoading = true;
// 			});
// 		default:
// 			return { ...state };
// 	}
// };
// export default reducer;
