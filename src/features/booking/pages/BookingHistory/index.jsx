import React, { Fragment } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "features/user/utils/action";
import moment from "moment";
import _ from "lodash";
function BookingHistory() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserInfo);
	}, []);
	const userInfo = useSelector((state) => state.user.userInfo);
	const data = userInfo?.thongTinDatVe;
	const columns = [
		{
			title: "Mã Vé",
			dataIndex: "maVe",
			key: "maVe",
			value: (text, object) => {
				return (
					<Fragment>
						{/* <span>{text}</span> */}
						<h3>{object}</h3>
					</Fragment>
				);
			},
			sorter: (a, b) => a.maPhim - b.maPhim,
		},
		{
			title: "Ngày Đặt",
			dataIndex: "ngayDat",
			key: "ngayDat",

			value: (text, object) => {
				const date = moment(text).format("dd:mm:yyyy");
				return (
					<Fragment>
						<h3>{date}</h3>
					</Fragment>
				);
			},
			sorter: (a, b) => a.date - b.date,
		},
		{
			title: "Tên Phim",
			dataIndex: "tenPhim",
			key: "tenPhim",

			value: (text, value) => {
				return (
					<Fragment>
						<h3>{value}</h3>
					</Fragment>
				);
			},
		},
		{
			title: "Banner",
			dataIndex: "hinhAnh",
			key: "hinhAnh",
			render: (text, object) => {
				return (
					<img
						style={{ minHeight: "100px" }}
						className="w-20"
						src={object.hinhAnh}
						alt="anh phim"
						onError={(e) => {
							e.target.onError = null;
							e.target.src =
								"https://lh3.googleusercontent.com/fTUn7tJC6yNwO2CzZ-rjFqc-HuFfktNHNNnRH7JlrTuekvYrZeh9BK_0J-OW_SawvRzmTvyLh_QA1eZVYJZESJe-msFqDsjV-UwblUXYcs2wTVVbzAKC7TYdEYLgu4GY64H-Z7ziJIBNjDnYNFACg1PZtHGOXW9J-X4fZhkrEXYn1LCoOSFsjiPZZ7eebnwN-NCt6eBtJO5QIGbNhQreNiHjEyf0sY4MV1VN-8AwlgRNuGcL-GouA4AoP4Bv0cPn3bSKbQFzAJrryeW6XMi7eiDlHe6xhrvHOYcYfvc0RMh4CBmlH2Atu8Hw-1O5ok1LSKcSbLt7SnuJMI64Jd5y8_DSfNyd1bXrSAIfCHqKCf0pItkngwChFgoZT58nGXlKJp2HNcM5ToBDbqMivtJDZOWNwVtScs1bEINAKv7tTLLw9e043J1t5YDPs3hQVmNFkcG-JiX_PvXpqfC9KafI34RjpRvI1oqF23daC71qA_96m2y8jAq0sBC-6vklck06K5v3WSH-tqSaKRDYVe-aFiJrnVPJiV9ebGzwfVfoSWZ8AECjTXeL5IVKu3UYfHaXuNtMlS92NZRaoMjB_6kZm8_QKBwNcyaga30mScheYUiC6r5poaFBRo66kyZniqcvSsVXB4eaMZa4O-Dt6M5nCxmV4wybBn_umZlvA7Qn2NPgCY-yILsmrGgbMjhAvLEkw1dgT2oZ9I6aX2nCm-R13Pnfa0ZewcBM_8Fp2LeX6m9s5VJmFvJMxeRRJ4F6p38Al_dMd4jbo6uXaOejQ2q277ikUWRhg606zshlztTHSEEl4YkC0rgEKTjZfDvDDJ3V3h7AfnFB0M9QH0AnX3yxGZOnKV74adB1HA3E_BvejbdbQw-R5bQUfMHpqJqQ50V_PCFOViWM5vEcx7gMc0LZ98iUCueDGf2MxXUqqqrdbhmyB3D6PqQZnUgsEq7QoLCiqrki0RmQ_D4=w700-h933-no?authuser=1";
						}}
					/>
				);
			},
		},
		{
			title: "Giá Vé",
			dataIndex: "giaVe",
			key: "giaVe",
			value: (text, value) => {
				return (
					<Fragment>
						{/* <span>{text}</span> */}
						<h3>{value}</h3>
					</Fragment>
				);
			},
		},
		{
			title: "Danh sách ghế",
			dataIndex: "danhSachGhe",
			key: "danhSachGhe",
			// {_.sortBy(props.selectedSeats, ["stt"]).map(
			render: (text, object) => {
				return _.sortBy(object.danhSachGhe, ["maGhe"]).map((item) => {
					return (
						<span className="inline-block mr-2">{item.tenGhe}</span>
					);
				});
			},
		},
		{
			title: "Thời lượng",
			dataIndex: "thoiLuongPhim",
			key: "thoiLuongPhim",
			render: (text, object) => {
				return <h3>{object.thoiLuongPhim}</h3>;
			},
		},
	];
	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};
	return (
		<div className="my-32">
			<h3 className="text-4xl mb-20 text-text-green-hover text-center font-semibold">
				Booking History
			</h3>
			<div className="Container overflow-x-auto">
				<Table
					className="text-text-color bg-white zIndex-50 overflow-x-auto"
					columns={columns}
					dataSource={data}
					onChange={onChange}
					pagination={{ pageSize: 4 }}
					rowKey={"maPhim"}
				/>
			</div>
		</div>
	);
}

export default BookingHistory;
