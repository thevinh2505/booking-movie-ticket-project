import { instance } from "api/instance"

export const getUserInfo=async (next)=>{
    try{
        const res=await instance.request({
            url:'api/QuanLyNguoiDung/ThongTinTaiKhoan',
            method:'POST'
        })
        console.log(res.data.content)
    }catch(err){
        console.log(err)
    }
}