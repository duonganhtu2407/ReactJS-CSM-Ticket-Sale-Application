import {
    AuditOutlined,
    BellOutlined, CreditCardOutlined, HomeOutlined, MailOutlined, SearchOutlined, SettingOutlined, TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import TableChangeTicket from './TableChangeTicket';
import "./ChangeTicket.css";




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export class ChangeTicket extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const { collapsed } = this.state;
        return (
            <Content style={{ margin: '0 16px' }} className="content">
                <div className='content-soatve'>
                    <h2 className='h1-style'>Đối soát vé</h2>
                    <div className='content-item'>
                        <input className='input-context' type="text" placeholder='tìm bằng số vé' />
                        <div className='content-menu'>
                            <button className='btn-chotsoatve'>Chốt soát vé</button>
                        </div>
                    </div>
                    <div className="site-layout-background" >
                        <TableChangeTicket />
                    </div>
                </div>
                <div className='modal-locve'>
                    <h2>Lọc vé</h2>
                    <div className='modal-soatve'>
                        <p>Tình trạng soát vé</p>
                        <div className='input-soatve'>
                            <div className='input-radio'>
                                <label  className='custom'><input className='custom-input' type="radio" value="" name='locve' /><span></span>Tất cả</label>

                            </div>
                            <div className='input-radio'>
                                <label className='custom'><input className='custom-input' type="radio" value="" name='locve'/><span></span>Đã đối soát</label>

                            </div>
                            <div className='input-radio'>
                                <label className='custom'><input  className='custom-input'type="radio" value="" name='locve'/><span></span>Chưa đối soát</label>

                            </div>
                        </div>
                    </div>
                    <div className='loaive'>
                        <p className='p-loaive'>Loại vé</p>
                        <span className='span-loaive'>Vé cổng</span>
                    </div>
                    <div className='tungay'>
                        <label className='label-tungay'>Từ ngày</label>
                        <input className='input-date input-date-tungay' type="date" value="2021-01-05" />
                    </div>
                    <div className='ngayden'>
                        <label className='label-ngayden'>Ngày đến</label>
                        <input className='input-date input-date-denngay' type="date" value="" />
                    </div>
                    <div className='loc'>
                        <button className='btn-loc'>Lọc</button>
                    </div>
                </div>

            </Content>
        )
    }
}

export default ChangeTicket

