import { Button } from "antd";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import * as yup from "yup";
import { useFormik } from "formik";
import { string } from "yup";
import { useDispatch } from "react-redux";
import { instance } from "api/instance";
const schema = yup.object().shape({
	taiKhoan: string("*Sai định dạng taikhoan").required("*Vui lòng nhập"),
	matKhau: string("*Sai định dạng mật khẩu")
		.required("*Vui lòng nhập")
		.min(8, "*Tối thiểu 8 kí tự")
		.max(16, "*Tối đa 16 kí tự"),
	hoTen: string("*Sai định dạng họ tên")
		.required("*Vui lòng nhập")
		.matches(
			/[^a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
			"*Sai định dạng họ tên"
		),
	email: string("*Sai định dạng email")
		.required("*Vui lòng nhập")
		.email("*Sai định dạng email"),
	soDt: string("*Sai định dạng số điện thoại")
		.required("*Vui lòng nhập")
		.matches(/^[0-9]+$/g, "*Sai định dạng số điện thoại")
		.min(10, "*Sai định dạng số điện thoại")
		.max(11, "*Sai định dạng số điện thoại"),
});
function SignUp() {
	const history = useHistory();
	const goBack = () => {
		history.goBack();
	};

	const [isLoading, setIsLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			taiKhoan: "",
			matKhau: "",
			hoTen: "",
			email: "",
			soDt: "",
		},
		onSubmit: (values) => {
			const newUser = { ...values, maNhom: "GP03" };
			handleSignUp(newUser);
		},
		validationSchema: schema,
		validateOnChange: false,
	});

	const handleSignUp = async (user) => {
		try {
			setIsLoading(true);
			await instance.request({
				url: "api/QuanLyNguoiDung/DangKy",
				method: "POST",
				data: user,
			});
			setIsLoading(false);
			history.push("/signin");
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-screen h-screen l bg-login items-center justify-center flex">
			<div className="sign-in-container relative">
				<div className="sign-in-title text-white text-center mb-10">
					<img
						className="w-56 mx-auto"
						src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
						alt="logo"
					/>

					{/* <p className="mt-4 mb-10  mx-auto text-2xl font-medium leading-8 sign-in-title-text">
						Sign in to your account
					</p> */}
				</div>
				<div className=" relative  sign-in-modal w-full h-full md:max-w-xl">
					<form onSubmit={formik.handleSubmit}>
						<div className="inputBox mx-auto">
							<input
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								name="taiKhoan"
								required
								type="text"
							/>
							<span>Account</span>
              
						</div>
            {formik.touched.taiKhoan && formik.errors.taiKhoan && (
							<p className='text-red-600 ml-1 italic '>
								{formik.errors.taiKhoan}
							</p>
						)}
						<div className="inputBox  mx-auto">
							<input
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								name="matKhau"
								required
								type="password"
							/>
							<span>Password</span>
              
						</div>
            {formik.touched.matKhau && formik.errors.matKhau && (
							<p className='text-red-600 ml-1 italic '>
								{formik.errors.matKhau}
							</p>
						)}
						<div className="inputBox  mx-auto">
							<input
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								name="hoTen"
								required
								type="text"
							/>
							<span>Full name</span>
						</div>
            {formik.touched.hoTen && formik.errors.hoTen && (
							<p className='text-red-600 ml-1 italic '>
								{formik.errors.hoTen}
							</p>
						)}
						<div className="inputBox  mx-auto">
							<input
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								name="email"
								required
								type="text"
							/>
							<span>Email</span>
              {formik.touched.email && formik.errors.email && (
							<p className='text-red-600 ml-1 italic '>
								{formik.errors.email}
							</p>
						)}
						</div>
						<div className="inputBox  mx-auto">
							<input
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								name="soDt"
								required
								type="text"
							/>
							<span>Phone number</span>
              
						</div>
            {formik.touched.soDt && formik.errors.soDt && (
							<p className='text-red-600 ml-1 italic '>
								{formik.errors.soDt}
							</p>
						)}
						<div className="inputBox mx-auto inputBoxBtn">
							<Button
								loading={isLoading}
								className="w-full h-full block text-white sign-in-btn "
								htmlType="submit"
							>
								<span
									className="font-medium text-base"
								>
									Sign up now
								</span>
							</Button>
						</div>
					</form>
				</div>
				<div className="sign-in-close-btn absolute -top-5 -right-5">
					<AiOutlineCloseCircle
						className="text-5xl text-white cursor-pointer"
						onClick={goBack}
					/>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
