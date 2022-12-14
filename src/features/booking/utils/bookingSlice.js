import produce from "immer";
import {
	SET_ARRAY_FILM,
	SET_BLOGS,
	SET_BOX_OFFICE_LIST,
	SET_CINEMA_SYSTEM,
	SET_CINEMA_SYSTEM_INFO,
	SET_COST,
	SET_FILM_INFO,
	SET_MOVIE_DETAIL,
	SET_MOVIE_LIST,
	SET_SELECTED_SEATS,
} from "./action";

const initialState = {
	movieList: [],
	cinemaSystem: [],
	schedule: [],
	movieDetail: {},
	boxOfficeList: {},
	selectedSeats: [],
	// otherSelectedSeats: [
	// 	{
	// 		maGhe: 120521,
	// 	},
	// 	{
	// 		maGhe: 120522,
	// 	},
	// ],
	moneyCost: 0,
	arrFilm: [],
	filmInfo: {},
	blogs:[]
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIE_LIST:
			return produce(state, (draft) => {
				draft.movieList = action.payload;
			});
		case SET_CINEMA_SYSTEM_INFO:
			return produce(state, (draft) => {
				draft.cinemaSystem = action.payload;
			});
		case SET_CINEMA_SYSTEM:
			return produce(state, (draft) => {
				draft.schedule = action.payload;
			});
		case SET_MOVIE_DETAIL:
			return produce(state, (draft) => {
				draft.movieDetail = action.payload;
			});
		case SET_BOX_OFFICE_LIST:
			return produce(state, (draft) => {
				draft.boxOfficeList = action.payload;
			});
		case SET_SELECTED_SEATS:
			return produce(state, (draft) => {
				let index = draft.selectedSeats.findIndex(
					(gheDD) => gheDD.maGhe === action.payload.maGhe
				);
				if (index !== -1) {
					draft.selectedSeats.splice(index, 1);
				} else {
					draft.selectedSeats.push(action.payload);
				}
			});
		case SET_COST:
			return produce(state, (draft) => {
				draft.moneyCost = action.payload;
			});
		case SET_ARRAY_FILM:
			return produce(state, (draft) => {
				draft.arrFilm = action.payload;
			});
		case SET_FILM_INFO:
			return produce(state, (draft) => {
				draft.filmInfo = action.payload;
			});
		case SET_BLOGS:
			return produce(state, (draft) => {
				draft.blogs = action.payload;
			});
		default:
			return { ...state };
	}
};
export default reducer;
