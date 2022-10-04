import { Col, Row } from 'antd'
import React from 'react'
import 'features/booking/pages/Contact/style.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { instance } from 'api/instance'
function UserInfo() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(async (next)=>{
            try{
                const res=await instance.request({
                    url:"api/QuanLyNguoiDung/LayThongTinNguoiDung",
                    method:"POST",
                    data:{
                        taiKhoan:'model408',
                    }
                })
                console.log(res.data.content);
            }catch(err){
                console.log(err)
            }
        })
        
    },[])
  return (
    <div className='py-40'>
        <div className="section-header-3">
            <h2 className="title">User Info</h2>
        </div>
        <div className="Container">
        <Row>
            <Col lg={12} xs={24} className='px-4'>
            <form
									className="contact-form"
									id="contact_form_submit"
								>
									<div className="form-group">
										<label
											className="cursor-pointer inline-block mb-2"
											htmlFor="name"
										>
											Name <span>*</span>
										</label>
										<input
											type="text"
											placeholder="Enter Your Full Name"
											name="name"
											id="name"
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
											type="text"
											placeholder="Enter Your Email"
											name="email"
											id="email"
											required
										/>
									</div>
									<div className="form-group">
										<label
											className="cursor-pointer inline-block mb-2"
											htmlFor="subject"
										>
											Subject <span>*</span>
										</label>
										<input
											type="text"
											placeholder="Enter Your Subject"
											name="subject"
											id="subject"
											required
										/>
									</div>
									<div className="form-group">
										<label
											className="cursor-pointer inline-block mb-2"
											htmlFor="message"
										>
											Message <span>*</span>
										</label>
										<textarea
											name="message"
											id="message"
											placeholder="Enter Your Message"
											required
											defaultValue={""}
										/>
									</div>
									<div className="form-group">
										<input
											type="submit"
											value="Update"
										/>
									</div>
								</form>
            </Col>
            <Col lg={12} xs={24}></Col>
        </Row>
        </div>
    </div>
  )
}

export default UserInfo