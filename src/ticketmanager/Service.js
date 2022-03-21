import { Layout, Menu } from 'antd';
import React from 'react';
import TableView from './TableView';
import "./Service.css"
import TableService from './TableService';
  
  
  
  
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  
  
  export default function Service(props) {
    // const handleOpenModal = () => {
    //   props.openshow()
    // }
    return (
      <Content style={{ margin: '0 16px' }}>
        <h2 className='h1-style'>Danh sách gói dịch vụ</h2>
        <div className='content-item'>
          <input className='input-context' type="text" placeholder='tìm bằng số vé' />
          <div className='content-menu-service'>
            <button className='btn-xuatfile'>Xuất file(.cvs)</button>
            <button className='btn-them' onClick="" >Thêm gói vé</button>
          </div>
        </div>
        <div className="site-layout-background" >   
          <TableService />
        </div>
      </Content>
    )
  }