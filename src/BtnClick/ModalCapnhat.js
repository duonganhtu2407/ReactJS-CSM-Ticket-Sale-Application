
import React from 'react'
import "./ModalThemVe.css"

export default function ModalCapnhat(props) {
    const handleCloseShow = () => {
        props.closeshowCapnhat()
    }
  return (
    <div className='modal'>
        <div className='modal-themve'>
        <h1>Thêm gói vé </h1>
        <div className='tengoive'>
            <div>
            <label>Mã sự kiện <span className='span-tengoive'>*</span></label><br />
            <input className='input-tengoive1' type="text" placeholder='PKG20210502' />
            </div>
           <div className='tensukien'>
           <label>Tên sự kiện </label><br />
            <input className='input-tengoive2' type="text" placeholder='Hội chợ triển lãm hàng tiêu dùng 2021' />
           </div>
        </div>
        <div className='modal-date'> 
            <div className='modal-date-input-1'>
                <label>Ngày áp dụng</label><br />
                <input type="date" className='input-date-ngay'/> <input type="time" className='input-date-time' value="08:00:00"/>
            </div>
            <div className='modal-date-input-2'>
                <label>Ngày hết hạn</label><br />
                <input type="date" className='input-date-han'/> <input type="time" className='input-date-time' value="08:00:00"/>
            </div>
        </div>
        <div className='modal-giave'>
            <label>Giá vé áp dụng</label><br />
            <label className='custom-checkbox'><input className='checkbox-gia' type="checkbox" /><label><span></span>Vé lẻ (/vnđ/vé) với giá </label> <input type="text" placeholder='Giá vé' className='input-giave'/> /vé <br /></label>
            <label className='custom-checkbox'><input className='checkbox-gia' type="checkbox" /><label><span></span>Combo vé với giá </label>  <input type="text" placeholder='Giá vé' className='input-giave' /> <input type="text" placeholder='Giá vé' className='input-giave2'/>vé</label>
        </div>
        <div className='modal-tinhtrang'>
            <label>Tình trạng</label><br />
            <input type="" />
        </div>
        <label className='thongtin'><span>*</span> là thông tin bắt buộc</label>
        <div className='modal-btn'>
            <button className='btn-huy' onClick={handleCloseShow}>Hủy</button>
            <button className='btn-luu'>Lưu</button>
        </div>
      
    </div>
    </div>
    
  )
}
