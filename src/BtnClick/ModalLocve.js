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
                        <div className='modal-input'>
                            <label>Từ ngày</label><br />
                            <input className='input-date' type="date" value="" />
                        </div>
                        <div className='modal-input1'>
                            <label>Đến ngày</label><br />
                            <input className='input-date' type="date" value="" />
                        </div>
                    </div>
                    <div className='modal-content'>
                        <label>Tình trạng sử dụng</label>
                        <div className='input-radio'>
                            <div><input type='radio' name='radio'/> Tất cả</div>
                            <div><input type='radio' name='radio'/> Đã sử dụng</div>
                            <div><input type='radio' name='radio'/> Chưa sử dụng</div>
                            <div><input type='radio' name='radio'/> Hết hạn</div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <label>Cổng Check-in</label>
                        <div className='input-checkox'>

                            <div><input type="checkbox" />Tất cả</div>
                            <div><input type="checkbox" />Cổng 1</div>
                            <div><input type="checkbox" />Cổng 2</div>
                            <div><input type="checkbox" />Cổng 3</div>
                            <div><input type="checkbox" />Cổng 4</div>
                            <div><input type="checkbox" />Cổng 5</div>

                        </div>
                    </div>
                    <button className='locve' onClick={handleCloseShow}>Lọc</button>
                </div>
            </div>
  )
}

