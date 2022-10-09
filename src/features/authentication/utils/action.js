import { instance } from "api/instance";
import swal from "sweetalert";
export const SET_PROFILE = "auth/SET_PROFILE";
export const SET_ACCOUNT_INFO = "auth/SET_ACCOUNT_INFO";
// action đăng nhập
export const signInAction = (user) => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: "api/QuanLyNguoiDung/DangNhap",
				method: "POST",
				data: user,
			});
			console.log(res.data.content.accessToken, "access");
			swal({
				title: "Sign in successfully! ",
				text: "You successfully signed in",
				icon: "success",
				button: "OK",
				timer: 2000,
			});

			// lưu token xuống localStorage
			localStorage.setItem("token", res.data.content.accessToken);

			// lấy thông tin ng dùng, gỡ accessToken ra
			const profile = res.data.content;
			delete profile.accessToken;

			// lưu thông tin user xuống local storage
			localStorage.setItem("user", JSON.stringify(profile));
			// lưu thông tin user lên store
			next({
				type: SET_PROFILE,
				payload: profile,
			});
		} catch (err) {
			console.log(err);
			swal({
				title: "Sign in failed! ",
				text: "Wrong password or username",
				icon: "error",
				button: "OK",
				timer: 2000,
			});
		}
	};
};

// thông tin tài khoản + lịch sử đặt vé
export const setAccountInfoAction = async (next) => {
	try {
		const res = await instance.request({
			url: "api/QuanLyNguoiDung/ThongTinTaiKhoan",
			method: "POST",
		});
		console.log(res.data.content);
		next({
			type: SET_ACCOUNT_INFO,
			payload: res.data.content,
		});
	} catch (err) {
		console.log(err);
	}
};
