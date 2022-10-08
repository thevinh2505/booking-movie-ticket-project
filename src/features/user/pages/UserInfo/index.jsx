import { Button, Col, Row } from "antd";
import React, { Fragment } from "react";
import "features/booking/pages/Contact/style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import "features/booking/pages/Download/download.css";
import {
	fetchUpdateUserInfoAction,
	getUserInfo,
} from "features/user/utils/action";
import { useFormik } from "formik";

function UserInfo() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserInfo);
	}, []);
	const userInfo = useSelector((state) => state.user.userInfo);
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			taiKhoan: userInfo?.taiKhoan,
			matKhau: userInfo?.matKhau,
			hoTen: userInfo?.hoTen,
			email: userInfo?.email,
			soDT: userInfo?.soDT,
			maLoaiNguoiDung: "KhachHang",
			maNhom: "GP03",
		},
		onSubmit: (values) => {
			console.log("values", values);
			dispatch(fetchUpdateUserInfoAction(values));
		},
	});
	console.log(formik.values.taiKhoan);
	return (
		<Fragment>
			<div className="pt-36 pb-20 user-info">
				<div className="section-header-3">
					<h2 className="title">personal information</h2>
				</div>
				<div className="Container user-info-form">
					<form
						className="contact-form"
						id="contact_form_submit"
						onSubmit={formik.handleSubmit}
					>
						<Row>
							<Col md={12} xs={24} className="px-4">
								<div className="form-group">
									<label
										className="cursor-pointer inline-block mb-2"
										htmlFor="name"
									>
										User Name <span>*</span>
									</label>
									<input
										onChange={formik.handleChange}
										type="text"
										name="taiKhoan"
										id="name"
										value={formik.values.taiKhoan}
										required
									/>
								</div>
								<div className="form-group">
									<label
										className="cursor-pointer inline-block mb-2"
										htmlFor="matKhau"
									>
										Password <span>*</span>
									</label>
									<input
										onChange={formik.handleChange}
										type="text"
										name="matKhau"
										id="matKhau"
										required
										value={formik.values.matKhau}
									/>
								</div>
							</Col>
							<Col md={12} xs={24} className="px-4">
								<div className="form-group">
									<label
										className="cursor-pointer inline-block mb-2"
										htmlFor="hoTen"
									>
										Name <span>*</span>
									</label>
									<input
										onChange={formik.handleChange}
										type="text"
										name="hoTen"
										value={formik.values.hoTen}
										id="hoTen"
										required
									/>
								</div>
								<div className="form-group">
									<label
										className="cursor-pointer inline-block mb-2"
										htmlFor="email"
									>
										Email <span>*</span>
									</label>
									<input
										onChange={formik.handleChange}
										type="text"
										name="email"
										id="email"
										required
										value={formik.values.email}
									/>
								</div>
							</Col>
							<Col md={12} xs={24} className="px-4">
								<div className="form-group">
									<label
										className="cursor-pointer inline-block mb-2"
										htmlFor="soDT"
									>
										Phone Number <span>*</span>
									</label>
									<input
										onChange={formik.handleChange}
										type="text"
										name="soDT"
										id="soDT"
										value={formik.values.soDT}
										required
									/>
								</div>

								<div className="form-group">
									<input
										type="submit"
										value="Update Information"
									/>
								</div>
							</Col>
						</Row>
					</form>
				</div>
			</div>
		</Fragment>
	);
}

export default UserInfo;
