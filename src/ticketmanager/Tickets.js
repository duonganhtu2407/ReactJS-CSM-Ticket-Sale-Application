import {
  AuditOutlined,
  BellOutlined, CreditCardOutlined, HomeOutlined, MailOutlined, SearchOutlined, SettingOutlined, TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { Component, useState } from 'react';
import TableView from './TableView';
import "./Tickets.css";
import { NavLink } from "react-router-dom"
import ModalLocve from '../BtnClick/ModalLocve';




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default function Tickets(props) {
  const handleOpenModal = () => {
    props.openshow()
  }
  return (
    <Content style={{ margin: '0 16px' }}>
      <h2 className='h1-style'>Danh sách vé</h2>
      <div className='content-item'>
        <input className='input-context' type="text" placeholder='tìm bằng số vé' />
        <div className='content-menu'>
          <button className='btn-locve' onClick={handleOpenModal} >Lọc vé</button>
          <button className='btn-xuatve'>Xuất file(.cvs)</button>
        </div>
      </div>
      <div className="site-layout-background" >
        <TableView />
        
      </div>
    </Content>
  )
}
