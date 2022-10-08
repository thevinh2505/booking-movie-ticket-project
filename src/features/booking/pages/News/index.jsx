import React, { Fragment } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "features/booking/pages/Download/download.css";
import "features/booking/pages/Contact/style.css";
import "./style.css";
import { Col,  Row } from "antd";
import {
	AiOutlineComment,
	AiOutlineEye,
	AiOutlineSearch,
} from "react-icons/ai";
import {
	FaFacebookF,
	FaTwitter,
	FaPinterestP,
	FaInstagram,
	FaGoogle,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBlogDataAction } from "features/booking/utils/action";
import axios from "axios";
function News() {
	// const dispatch = useDispatch();
	const [state, setState] = useState({
		data: [],
		totalPage: 0,
		currentPage: 1,
		pageSize: 4,
		minIndex: 0,
		maxIndex: 4,
	});
	useEffect(() => {
		axios
			.get("https://62ca7d713e924a01285a137c.mockapi.io/api/blogs")
			.then((res) => {
				setState({
					...state,
					data: res.data,
					minIndex: 0,
					totalPage: res.data / 4,
				});
				console.log(res.data, "res data");
			});
	}, []);
	// const blogs = useSelector((state) => state.booking.blogs);

	const renderPostItem = () => {
		return state.data?.map((item) => {
			return (
				<Fragment>
					<div className="post-item">
						<div className="post-thumb cursor-pointer">
							<img
								className="w-full "
								src={item.hinhAnh}
								alt="anh blog"
							/>
						</div>
						<div className="post-content">
							<div className="post-header">
								<h4 className="title ">
									<p className="text-white hover:text-text-green-hover duration-500 cursor-pointer">
										{item.title}
									</p>
								</h4>
								<div className="meta-post flex flex-wrap">
									<div className="flex items-center mr-4">
										<AiOutlineComment className="meta-post-icon" />
										<p className="text-text-grey text-sm">
											{item.comments} Comments
										</p>
									</div>
									<div className="flex items-center">
										<AiOutlineEye className="meta-post-icon" />
										<p className="text-text-grey text-sm">
											{item.views} Views
										</p>
									</div>
								</div>
								<p className="text-base text-text-grey">
									{item.moTa}
								</p>
							</div>
							<div className="entry-content flex flex-wrap">
								<div className="left flex items-center flex-wrap">
									<div className="flex items-center">
									<span className="date text-text-grey">
										{item.date} BY{" "}
									</span>
									</div>
									{/* <span className="date text-text-grey">
										{item.date} BY{" "}
									</span> */}
									<div className="authors flex items-center flex-wrap">
										<div className="thumb">
											<img
												className="w-full"
												src="https://lh3.googleusercontent.com/Q2bMTfoeIc6_0V8XTonkV-JSOuJ64iADDmcbC-ZRhswygBQqeYGcKSNa0XLfnfoZ5nq_3dKwu9DuLDhrN5Epd9VTGtrZv-PULyuwMpD1IopGhO_5F-q120wcZ0loMRfLY6uVA09mXImvhKAmmZVSdpA4QThlzTeeHSbacTF7gi4dJOV_27PFuj9zTjBGxd-mFCYTaflNuNTnNm6-qe6mszDd-dIjJt2l8zQr01oRz7rqZulxgis1xVZkfKgfA4ohdEEQowhgDWx8EdgKo9NfHYbldtuIf9AZlhEnYbz4G4ymmUaHwNu9xddjl43KC-omj55oCcPnJI6k6Cpnasc9dFATsEmkNVb82XktNMiNzv-Sejfk8nME43NvXf3WB_AsDOoJC0a8dg9HrdQVqi9QscXYCoc7VoE6HzbZWHCBW_bpA3c5s6y8cWAL33qs7fjJx8CfU9rLt7QsL_fxLnzGDR9yXUarseySPSSjpekQRx9jU4kJOkgBZPUocNhc9itDTQynY6rZKkblzv5lNGcaPfR6GTvcsOh9fjTv3_4G_VkJaZF7qs4QJJeHJkSPylkSg1mgDjtPsa82-MnFo_7XpcJ9EbVJFsWE6rDYRrROqsoHrJG1PKFqk-rBRaVMTDu6M2GsB7zeP5W-XBC09Q5ngpW74HrSK_PeQ-IhDXycVGXD09kHGipHsb_00VxZYVdJcg8oYeLrV7V96ddJAODPliV1FI8rU82LYNdLACJAcw3lG0zl51E1bRlYigDZTaazBTmQ0eBjgXDz6WlKs8mJ90dJjpRtt40wLxadcWrAvFqSU7Kdqj62GAZ64iStmih8t6aLKG7GHMCs-SllT2Sb5eqNhZ1Mv2VwSmMMjh9W9GwLqCtg5_a1PEx_AVvCqdGn82wVNORXT8lvgwZqoEWdzT-NHNgu1Lzij1-FJ75CrVCcNE2qJqEj3AkZY6ymL-4WRZRmBFaVzNk=w499-h887-no?authuser=0"
												alt="avatar"
											/>
										</div>
										<div className="title cursor-pointer">
											<p className="text-text-green-hover">
												{item.author}
											</p>
										</div>
									</div>
								</div>
								<div className="buttons flex items-center cursor-pointer">
									Read More
									<BsArrowRight className="ml-2" />
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			);
		});
	};
	// if(blogs.length!==0){
	// 	setState({...state,data:blogs,totalPage:})
	// }
	return (
		<Fragment>
			{/* SPEAKER BANNER   */}
			<section
				className="speaker-banner bg_img relative main-page-header"
				data-background="https://media.discordapp.net/attachments/527086735738273804/1025687462443483156/breadcumb.jpg?width=1200&height=313"
			>
				<div className="Container">
					<div className="speaker-banner-content text-center">
						<h2 className="title uppercase text-white font-semibold">
							News
						</h2>
						<ul className="breadcrumb">
							<li>
								<NavLink to="/" exact className="capitalize">
									Home{" "}
									<MdOutlineKeyboardArrowRight className="font-bold text-2xl" />
								</NavLink>
							</li>
							<li className="capitalize">News </li>
						</ul>
					</div>
				</div>
			</section>
			{/* BLOG SECTION  */}
			<div className="blog-section">
				<div className="Container">
					<Row className="justify-center">
						<Col lg={16} xs={24} className="px-4">
							<article>
								{/* <div className="post-item">
									<div className="post-thumb cursor-pointer">
										<img
											src="https://cdn.galaxycine.vn/media/2022/9/27/avatartrungso-jpg-831663772044_1664262492363.jpg"
											alt="anh blog"
										/>
									</div>
									<div className="post-content">
										<div className="post-header">
											<h4 className="title ">
												<p className="text-white hover:text-text-green-hover duration-500 cursor-pointer">
													Increase Event Ticket Sales
													For Film Production With the
													Right Advertising Strategies
												</p>
											</h4>
											<div className="meta-post flex flex-wrap">
												<div className="flex items-center mr-4">
													<AiOutlineComment className="meta-post-icon" />
													<p className="text-text-grey text-sm">
														20 comments
													</p>
												</div>
												<div className="flex items-center">
													<AiOutlineEye className="meta-post-icon" />
													<p className="text-text-grey text-sm">
														466 views
													</p>
												</div>
											</div>
											<p className="text-base text-text-grey">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
												Phasellus ac cursus leo. Nullam
												dolor nunc, hendrerit non velit
												id, pharetra viverra elit.
											</p>
										</div>
										<div className="entry-content flex flex-wrap">
											<div className="left flex items-center flex-wrap">
												<span className="date text-text-grey">
													Dece 15, 2020 BY{" "}
												</span>
												<div className="authors flex items-center flex-wrap">
													<div className="thumb">
														<img
															className="w-full"
															src="https://lh3.googleusercontent.com/Q2bMTfoeIc6_0V8XTonkV-JSOuJ64iADDmcbC-ZRhswygBQqeYGcKSNa0XLfnfoZ5nq_3dKwu9DuLDhrN5Epd9VTGtrZv-PULyuwMpD1IopGhO_5F-q120wcZ0loMRfLY6uVA09mXImvhKAmmZVSdpA4QThlzTeeHSbacTF7gi4dJOV_27PFuj9zTjBGxd-mFCYTaflNuNTnNm6-qe6mszDd-dIjJt2l8zQr01oRz7rqZulxgis1xVZkfKgfA4ohdEEQowhgDWx8EdgKo9NfHYbldtuIf9AZlhEnYbz4G4ymmUaHwNu9xddjl43KC-omj55oCcPnJI6k6Cpnasc9dFATsEmkNVb82XktNMiNzv-Sejfk8nME43NvXf3WB_AsDOoJC0a8dg9HrdQVqi9QscXYCoc7VoE6HzbZWHCBW_bpA3c5s6y8cWAL33qs7fjJx8CfU9rLt7QsL_fxLnzGDR9yXUarseySPSSjpekQRx9jU4kJOkgBZPUocNhc9itDTQynY6rZKkblzv5lNGcaPfR6GTvcsOh9fjTv3_4G_VkJaZF7qs4QJJeHJkSPylkSg1mgDjtPsa82-MnFo_7XpcJ9EbVJFsWE6rDYRrROqsoHrJG1PKFqk-rBRaVMTDu6M2GsB7zeP5W-XBC09Q5ngpW74HrSK_PeQ-IhDXycVGXD09kHGipHsb_00VxZYVdJcg8oYeLrV7V96ddJAODPliV1FI8rU82LYNdLACJAcw3lG0zl51E1bRlYigDZTaazBTmQ0eBjgXDz6WlKs8mJ90dJjpRtt40wLxadcWrAvFqSU7Kdqj62GAZ64iStmih8t6aLKG7GHMCs-SllT2Sb5eqNhZ1Mv2VwSmMMjh9W9GwLqCtg5_a1PEx_AVvCqdGn82wVNORXT8lvgwZqoEWdzT-NHNgu1Lzij1-FJ75CrVCcNE2qJqEj3AkZY6ymL-4WRZRmBFaVzNk=w499-h887-no?authuser=0"
															alt="avatar"
														/>
													</div>
													<div className="title cursor-pointer">
														<p className="text-text-green-hover">
															Alvin Mcdaniel
														</p>
													</div>
												</div>
											</div>
											<div className="buttons flex items-center cursor-pointer">
												Read More
												<BsArrowRight className="ml-2" />
											</div>
										</div>
									</div>
								</div> */}
								{renderPostItem()}
							</article>
							{/* <Pagination onChange={handlePagination} total={8} pageSize={state.pageSize} current={state.currentPage} /> */}
						</Col>
						<Col lg={8} sm={20} md={16} xs={24} className="px-4">
							<aside>
								<div className="widget widget-search">
									<h5 className="title">search</h5>
									<form className="search-form block">
										<input
											type="text"
											placeholder="Enter your Search Content"
											required
										/>
										<button type="submit ">
											<div className="flex items-center justify-center align-middle">
												<AiOutlineSearch className="mr-1 text-xl" />
												<p>Search</p>
											</div>
										</button>
									</form>
								</div>
								<div className="widget widget-post">
									<h5 className="title">latest post</h5>
									<div className="item">
										<div className="thumb overflow-hidden block">
											<img
												className="w-full overflow-hidden"
												src="https://media.discordapp.net/attachments/527086735738273804/1028324738990350346/slider01.jpg"
												alt="lastest post"
											/>
										</div>
										<div className="content">
											<h6 className="p-title">
												<a href="#0">
													Three Ways to Book Sporting
													Event Tickets
												</a>
											</h6>
											<div className="meta-post flex items-center ">
												<div className="flex items-center mr-4">
													<AiOutlineComment className="meta-post-icon" />
													<p className="text-text-grey text-sm">
														20 Comments
													</p>
												</div>
												<div className="flex items-center">
													<AiOutlineEye className="meta-post-icon" />
													<p className="text-text-grey text-sm">
														466 Views
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="widget widget-follow">
									<h5 className="title">Follow Us</h5>
									<ul className="social-icons flex flex-wrap  w-full ">
										<li className="">
											<a
												href="#0"
												className=" flex items-center justify-center w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent"
												style={{
													border: "1px solid rgba(255,255,255,0.1)",
												}}
											>
												<FaFacebookF />
											</a>
										</li>
										<li className="">
											<a
												href="#0"
												className="flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent"
												style={{
													border: "1px solid rgba(255,255,255,0.1)",
												}}
											>
												<FaTwitter />
											</a>
										</li>
										<li className="">
											<a
												href="#0"
												className="flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent"
												style={{
													border: "1px solid rgba(255,255,255,0.1)",
												}}
											>
												<FaPinterestP />
											</a>
										</li>
										<li className="">
											<a
												href="#0"
												className="flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent"
												style={{
													border: "1px solid rgba(255,255,255,0.1)",
												}}
											>
												<FaGoogle />
											</a>
										</li>
										<li className="">
											<a
												href="#0"
												className="flex items-center justify-center duration-500 w-9 h-9 leading-9 text-white text-center rounded-full text-sm bg-transparent"
												style={{
													border: "1px solid rgba(255,255,255,0.1)",
												}}
											>
												<FaInstagram />
											</a>
										</li>
									</ul>
								</div>
								<div className="widget widget-categories">
									<h5 className="title">categories</h5>
									<ul className="m-0 p-0">
										<li>
											<a href="#0">
												<span>
													Showtimes &amp; Tickets
												</span>
												<span>50</span>
											</a>
										</li>
										<li>
											<a href="#0">
												<span>Latest Trailers</span>
												<span>43</span>
											</a>
										</li>
										<li>
											<a href="#0">
												<span>Coming Soon </span>
												<span>34</span>
											</a>
										</li>
										<li>
											<a href="#0">
												<span>In Theaters</span>
												<span>63</span>
											</a>
										</li>
										<li>
											<a href="#0">
												<span>Release Calendar</span>
												<span>11</span>
											</a>
										</li>
										<li>
											<a href="#0">
												<span>Stars</span>
												<span>30</span>
											</a>
										</li>
										<li>
											<a href="#0">
												<span>Horror Movie </span>
												<span>55</span>
											</a>
										</li>
									</ul>
								</div>
								<div className="widget widget-tags">
									<h5 className="title">featured tags</h5>
									<ul>
										<li>
											<a href="#0">creative</a>
										</li>
										<li>
											<a href="#0">design</a>
										</li>
										<li>
											<a href="#0">skill</a>
										</li>
										<li>
											<a href="#0">template</a>
										</li>
										<li>
											<a href="#0" className="active">
												landing
											</a>
										</li>
									</ul>
								</div>
							</aside>
						</Col>
					</Row>
				</div>
			</div>
		</Fragment>
	);
}

export default News;
