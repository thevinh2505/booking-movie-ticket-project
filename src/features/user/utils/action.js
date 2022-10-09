import { instance } from "api/instance";
import swal from "sweetalert";
export const SET_USER_INFO = "user/SET_USER_INFO";
// lấy thông tin tài khoản
export const getUserInfo = async (next) => {
	try {
		const res = await instance.request({
			url: "api/QuanLyNguoiDung/ThongTinTaiKhoan",
			method: "POST",
		});
		console.log(res.data.content, "res user");
		next({
			type: SET_USER_INFO,
			payload: res.data.content,
		});
	} catch (err) {
		console.log(err);
	}
};

// cập nhật thông tin người dùng
export const fetchUpdateUserInfoAction = (value) => {
	return async (next) => {
		try {
			const res = await instance.request({
				url: "api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
				method: "PUT",
				data: value,
			});
			swal({
				title: "Update successfully! ",
				text: "User Information Updated",
				icon: "success",
				button: "OK",
				timer: 1500,
			});
		} catch (err) {
			swal({
				title: "Update failed! ",
				text: "Can't update user infor",
				icon: "error",
				button: "OK",
				timer: 1500,
			});
		}
	};
};
