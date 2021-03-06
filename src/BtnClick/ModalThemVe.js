
import React from 'react'
import "./ModalThemVe.css"

export default function ModalThemVe(props) {
    const handleCloseShow = () => {
        props.closeshowThem()
    }
  return (
    <div className='modal'>
        <div className='modal-themve'>
        <h1>Thêm gói vé </h1>
        <div className='tengoive3'>
            <label>Tên gói vé <span className='span-tengoive'>*</span></label><br />
            <input className='input-tengoive' type="text" placeholder='Nhập tên gói vé' />
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
            <label className='custom-checkbox'><input className='checkbox-gia' type="checkbox" /><span className='check-markbox'></span></label>Vé lẻ (/vnđ/vé) với giá  <input type="text" placeholder='Giá vé' className='input-giave'/> /vé <br />
            <label className='custom-checkbox'><input className='checkbox-gia' type="checkbox" /><span className='check-markbox'></span></label>Combo vé với giá   <input type="text" placeholder='Giá vé' className='input-giave' /> <input type="text" placeholder='Giá vé' className='input-giave2'/>vé
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
