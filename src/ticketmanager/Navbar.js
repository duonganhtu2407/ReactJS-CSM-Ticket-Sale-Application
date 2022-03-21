import {
    AuditOutlined,
    BellOutlined, CreditCardOutlined, HomeOutlined, MailOutlined, SearchOutlined, SettingOutlined, TeamOutlined
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { Component } from 'react';
  import "./Tickets.css";
  import {NavLink} from "react-router-dom"
import { CHANGE_TICKET_PATH, SERVICE_PATH, TICKET_PATH } from './routes';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class Navbar extends Component {
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
        <Layout style={{ minHeight: '100vh', }} className="navbar-style" >
        <Sider className='ticket' collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{ background: "#E5E5E5",}} >
         <div className='logo'></div>
          <Menu className='menu-items' style={{ background: "#E5E5E5"}} defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Trang Chủ
            </Menu.Item>
            <Menu.Item key="2" icon={<CreditCardOutlined />} >
              <NavLink to={TICKET_PATH} exact={true}>Quản lý vé</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<AuditOutlined />} >
              <NavLink to={CHANGE_TICKET_PATH}>Đối soát vé</NavLink>
            </Menu.Item>
            <SubMenu key="sub2" icon={<SettingOutlined />} title="Gói cài đặt">
              <Menu.Item key="4"> 
              <NavLink to={SERVICE_PATH}>Gói dịch vụ</NavLink>
              </Menu.Item>
            </SubMenu>     
          </Menu>
        </Sider>
        <Layout className="site-layout" >
          <div className='header-layout'>
            <input className='input-header' type="text" placeholder='Search'   />
            <Menu className='menu-search'>
            <Menu.Item  key="9" icon={<SearchOutlined />}></Menu.Item>
            </Menu>
            <Menu className='menu-icon'>
              <Menu.Item key="6" icon={<MailOutlined /> }>
              </Menu.Item>
              <Menu.Item key="7" icon={<BellOutlined />}>
              </Menu.Item>
              <Menu.Item key="8" icon={<TeamOutlined />}>
              </Menu.Item>
            </Menu>  
          </div>
        {this.props.children}
        </Layout>
      </Layout>
    )
  }
}
