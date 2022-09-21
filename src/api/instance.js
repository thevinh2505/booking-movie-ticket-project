import axios from "axios";
export const instance = axios.create({
	baseURL: "https://movienew.cybersoft.edu.vn/",
	headers: {
		Authorization: "Bearer " + localStorage.getItem("token"),
		TokenCybersoft:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzIiLCJIZXRIYW5TdHJpbmciOiIxNC8wMi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzYzMzI4MDAwMDAiLCJuYmYiOjE2NTAzODc2MDAsImV4cCI6MTY3NjQ4MDQwMH0.e3UrKdKqwFislz0cqribEEthuaW4HOuD4xwr1CTRQwg",
	},
});

instance.interceptors.request.use((config) => {
	// chỉnh sửa config -> chỉnh xong return để đẩy tiếp tới BE
	config.headers = {
		...config.headers,
		Authorization: "Bearer " + localStorage.getItem("token"),
	};
	console.log(localStorage.getItem('token'),typeof(localStorage.getItem('token')))
	// console.log("interceptor", config);
	return config;
});
