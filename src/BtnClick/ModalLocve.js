import React, { Component } from 'react'
import "./ModalLocve.css"



export default function ModalLocve(props) {
    const handleCloseShow = () => {
        props.closeshow()
    }
    
  return (
    <div className='modal'>
                <div className='modal-container js-modal-container'>
                    <h1 className='h1-locve'>Lọc vé</h1>
                    <div className='modal-header'>
                        <div className='modal-input radio' >
                            <label>Từ ngày</label><br />
                            <input className='input-date' type="date" value="2021-01-04" />
                            
                        </div>
                        <div className='modal-input1 radio' >
                            <label>Đến ngày</label><br />
                            <input className='input-date' type="date" value="2021-01-04" />
                            
                        </div>
                    </div>
                    <div className='modal-content'>
                        <label>Tình trạng sử dụng</label>
                        <div className='input-radio'>
                            <label className='custom'><input type='radio' name='radio'/>  <span  className='check-mark'></span></label ><label className='label-input'>Tất cả</label>
                            <label className='custom'><input type='radio' name='radio'/>  <span className='check-mark'></span></label><label className='label-input'>Đả sử dụng</label>
                            <label className='custom'><input type='radio' name='radio'/>  <span className='check-mark'></span></label><label className='label-input'>Chưa sử dụng</label>
                            <label className='custom'><input type='radio' name='radio'/>  <span className='check-mark'></span></label><label className='label-input'>Hết hạn</label>
                            
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <label>Cổng Check-in</label>
                        <div className='input-checkox'>

                            <div><label><input className='checkbox-input' type="checkbox" /><span className='span-input'></span>Tất cả</label></div>
                            <div><label><input className='checkbox-input' type="checkbox" /><span className='span-input'></span>Cổng 1</label></div>
                            <div><label><input className='checkbox-input' type="checkbox" /><span className='span-input'></span>Cổng 2</label></div>
                            <div><label><input className='checkbox-input' type="checkbox" /><span className='span-input'></span>Cổng 3</label></div>
                            <div><label><input className='checkbox-input' type="checkbox" /><span className='span-input'></span>Cổng 4</label></div>
                            <div><label><input className='checkbox-input' type="checkbox" /><span className='span-input'></span>Cổng 5</label></div>     
                        </div>
                    </div>
                    <button className='locve' onClick={handleCloseShow}>Lọc</button>
                </div>
            </div>
  )
}

