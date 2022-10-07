import { Col, Row } from "antd";
import React from "react";
import "features/booking/pages/Contact/style.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getUserInfo } from "features/user/utils/action";
import { instance } from "api/instance";

function UserInfo() {
	const dispatch = useDispatch();
	useEffect(() => {
		console.log("user info");
		return async (next) => {
			try {
				const res = await instance.request({
					url: "api/QuanLyNguoiDung/ThongTinTaiKhoan",
					method: "POST",
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibW9kZWw0MDgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ2aW5odWl0MkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiS2hhY2hIYW5nIiwidmluaHVpdDJAZ21haWwuY29tIiwiR1AwMCJdLCJuYmYiOjE2NjUxNjAwNDYsImV4cCI6MTY2NTE2MzY0Nn0.8scZnE7snZzHSG1hnsQnfiM1si1rc03l7h45A6Zoqv0",
						TokenCybersoft:
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg",
					},
				});
				console.log(res.data.content);
				next({
					type: "USER_INFO",
					payload: res.data.content,
				});
			} catch (err) {
				console.log(err);
			}
		};
	}, []);
	return (
		<div className="py-40 user-info">
			<div className="section-header-3">
				<h2 className="title">personal information</h2>
			</div>
			<div className="Container user-info-form">
				<form className="contact-form" id="contact_form_submit">
					<div className="form-group">
						<label
							className="cursor-pointer inline-block mb-2"
							htmlFor="name"
						>
							User Name <span>*</span>
						</label>
						<input type="text" name="name" id="name" required />
					</div>
					<div className="form-group">
						<label
							className="cursor-pointer inline-block mb-2"
							htmlFor="email"
						>
							Password <span>*</span>
						</label>
						<input type="text" name="email" id="email" required />
					</div>
					<div className="form-group">
						<label
							className="cursor-pointer inline-block mb-2"
							htmlFor="subject"
						>
							Name <span>*</span>
						</label>
						<input
							type="text"
							name="subject"
							id="subject"
							required
						/>
					</div>
					<div className="form-group">
						<label
							className="cursor-pointer inline-block mb-2"
							htmlFor="subject"
						>
							Email <span>*</span>
						</label>
						<input
							type="text"
							name="subject"
							id="subject"
							required
						/>
					</div>
					<div className="form-group">
						<label
							className="cursor-pointer inline-block mb-2"
							htmlFor="subject"
						>
							Phone Number <span>*</span>
						</label>
						<input
							type="text"
							name="subject"
							id="subject"
							required
						/>
					</div>

					<div className="form-group">
						<input type="submit" value="Update" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default UserInfo;
