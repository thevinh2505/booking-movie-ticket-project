import { instance } from "api/instance";

export const SET_MOVIE_LIST = "booking/SET_MOVIE_LIST";
export const SET_CINEMA_SYSTEM = "booking/SET_CINEMA_SYSTEM";
export const SET_CINEMA_SYSTEM_INFO = "booking/SET_CINEMA_SYSTEM_INFO";
export const SET_MOVIE_DETAIL = "booking/SET_MOVIE_DETAIL";
export const SET_BOX_OFFICE_LIST = "booking/SET_BOX_OFFICE_LIST";
export const SET_SELECTED_SEATS = "booking/SET_SELECTED_SEATS";
export const SET_COST = "booking/SET_COST";
// lấy danh sách phim phân trang
export const fetchMovieListAction = (config, getTotalCount) => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: "api/QuanLyPhim/LayDanhSachPhimPhanTrang",
				method: "GET",
				params: {
					maNhom: "GP03",
					soTrang: config.currentPage,
					soPhanTuTrenTrang: config.pageSize,
				},
			});
			console.log(res.data.content);
			getTotalCount(res.data.content.totalCount);
			next({
				type: SET_MOVIE_LIST,
				payload: res.data.content.items,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

// lấy thông tin hệ thống rạp
export const fetchscheduleAction = async (next) => {
	try {
		const res = await instance.request({
			url: "api/QuanLyRap/LayThongTinHeThongRap",
			method: "GET",
		});
		next({
			type: SET_CINEMA_SYSTEM_INFO,
			payload: res.data.content,
		});
		console.log("hệ thống rạp: ", res.data.content);
		return res.data.content;
	} catch (err) {
		console.log(err);
	}
};

//lấy thông tin lịch chiếu hệ thống rạp
export const fetchCinemaScheduleAction = (maHeThongRap) => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: "api/QuanLyRap/LayThongTinLichChieuHeThongRap",
				method: "GET",
				params: {
					maNhom: "GP03",
					maHeThongRap,
				},
			});
			console.log(res.data.content);
			next({
				type: SET_CINEMA_SYSTEM,
				payload: res.data.content[0],
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export const fetchMovieDetailAction = (maPhim) => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: `api/QuanLyPhim/LayThongTinPhim`,
				method: "GET",
				params: {
					MaPhim: maPhim,
				},
			});
			console.log(res.data.content);
			next({
				type: SET_MOVIE_DETAIL,
				payload: res.data.content,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

// lấy danh sách phòng vé
export const fetchBoxOfficeListAction = (id) => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: "api/QuanLyDatVe/LayDanhSachPhongVe",
				method: "GET",
				params: {
					MaLichChieu: id,
				},
			});
			console.log(res.data.content);
			next({
				type: SET_BOX_OFFICE_LIST,
				payload: res.data.content,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

// API ĐẶT VÉ LÊN SERVER
export const fetchBookingTicketAction = (thongTinDatVe) => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: "api/QuanLyDatVe/DatVe",
				method: "POST",
				data: thongTinDatVe,
			});
			console.log(res.data.content);
		} catch (err) {
			console.log(err);
		}
	};
};
