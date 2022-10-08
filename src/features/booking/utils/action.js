import { instance } from "api/instance";
import axios from "axios";
import swal from "sweetalert";


export const SET_MOVIE_LIST = "booking/SET_MOVIE_LIST";
export const SET_CINEMA_SYSTEM = "booking/SET_CINEMA_SYSTEM";
export const SET_CINEMA_SYSTEM_INFO = "booking/SET_CINEMA_SYSTEM_INFO";
export const SET_MOVIE_DETAIL = "booking/SET_MOVIE_DETAIL";
export const SET_BOX_OFFICE_LIST = "booking/SET_BOX_OFFICE_LIST";
export const SET_SELECTED_SEATS = "booking/SET_SELECTED_SEATS";
export const SET_COST = "booking/SET_COST";
export const SET_ARRAY_FILM = "booking/SET_ARRAY_FILM";
export const SET_FILM_INFO='booking/SET_FILM_INFO'
export const SET_BLOGS='booking/SET_BLOGS'
// lấy ds phim
export const fetchArrayFilm = () => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: "api/QuanLyPhim/LayDanhSachPhim",
				method: "GET",
				params: {
					maNhom: "GP03",
				},
			});
			next({
				type: SET_ARRAY_FILM,
				payload: res.data.content,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
// lấy danh sách phim phân trang
export const fetchMovieListAction = (config, getTotalCount) => {
	return async (next) => {
		try {
			// next({
			// 	type:DISPLAY_LOADING,
			// })
			const res = await instance.request({
				url: "api/QuanLyPhim/LayDanhSachPhimPhanTrang",
				method: "GET",
				params: {
					maNhom: "GP03",
					soTrang: config.currentPage,
					soPhanTuTrenTrang: config.pageSize,
				},
			});
			getTotalCount(res.data.content.totalCount);
			next({
				type: SET_MOVIE_LIST,
				payload: res.data.content.items,
			});
			// next({
			// 	type:HIDE_LOADING,
			// })
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
			// next({
			// 	type:DISPLAY_LOADING,
			// })
			const res = await instance.request({
				url: "api/QuanLyRap/LayThongTinLichChieuHeThongRap",
				method: "GET",
				params: {
					maNhom: "GP03",
					maHeThongRap,
				},
			});
			console.log('tt lich chieu ht rap',res.data.content[0]);
			next({
				type: SET_CINEMA_SYSTEM,
				payload: res.data.content[0],
			});
			// next({
			// 	type:HIDE_LOADING,
			// })
		} catch (err) {
			console.log(err);
			// next({
			// 	type:HIDE_LOADING,
			// })
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
			await next({
				type: SET_BOX_OFFICE_LIST,
				payload: res.data.content,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

// API ĐẶT VÉ LÊN SERVER
export const fetchBookingTicketAction = (thongTinDatVe,history) => {
	return async (next) => {
		try {
			if(thongTinDatVe.danhSachVe.length===0){
				swal({
					title: "You haven't chosen a seat yet! " ,
					text: "Please select a seat",
					icon: "error",
					button: "OK",
					timer:2000,
				});
			}
			else{
				const res = await instance.request({
					url: "api/QuanLyDatVe/DatVe",
					method: "POST",
					data: thongTinDatVe,
				});
				console.log(res.data.content)
				
				swal({
					title: "Booking successfully! " ,
					text: "You successfully booked seats",
					icon: "success",
					button: "OK",
					timer:2000,
				});
				history.push('/bookinghistory')
			}
		} catch (err) {
			console.log(err);
			swal({
				title: "Booking failed! " ,
				text: "Please try booking again",
				icon: "error",
				button: "OK",
                timer:2000,
			});

		}
	};
};

// lấy thông tin lịch chiếu phim
export const getCinemaScheduleClusterAction=(maPhim)=>{
	return async(next)=>{
		try{
			const res=await instance.request({
				url:"api/QuanLyRap/LayThongTinLichChieuPhim",
				method:"GET",
				params:{
					MaPhim:maPhim,
				},
				
			})
			console.log(res.data.content,'clus ter')
			next({
				type:SET_FILM_INFO,
				payload:res.data.content
			})
		}catch(err){
			console.log(err)
		}
	}
}

// call API BLOGS
export const fetchBlogDataAction= async(next)=>{
	try{
		const res=await axios({
			url:'https://62ca7d713e924a01285a137c.mockapi.io/api/blogs',
			method:"GET",
		})
		console.log(res.data,'res');

		next({
			type:SET_BLOGS,
			payload:res.data
		})
	}catch(err){
		console.log(err);
	}
}