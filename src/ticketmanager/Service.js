import { Layout, Menu } from 'antd';
import React,{useState} from 'react';
import TableView from './TableView';
import "./Service.css"
import TableService from './TableService';
import ModalCapnhat from '../BtnClick/ModalCapnhat';
  
  
  
  
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  
  
  export default function Service(props) {
    const [isShowCapnhat, setShowCapnhat] = useState(false);
    const onGetShowCapnhat = () => {
    setShowCapnhat(true);
    }
    const closegetShowCapnhat =() => {
    setShowCapnhat(false)
    }
    const handleOpenModelThem = () => {
      props.openshowthem()
    }

    return (
      <Content style={{ margin: '0 16px' }}>
        <h2 className='h1-style'>Danh sách gói dịch vụ</h2>
        <div className='content-item'>
          <input className='input-context' type="text" placeholder='tìm bằng số vé' />
          <div className='content-menu-service'>
            <button className='btn-xuatfile'>Xuất file(.cvs)</button>
            <button className='btn-them' onClick={handleOpenModelThem} >Thêm gói vé</button>
          </div>
        </div>
        <div className="site-layout-background" >   
          <TableService openshowCapnhat={onGetShowCapnhat}/>
          {isShowCapnhat && (
          <ModalCapnhat closeshowCapnhat={closegetShowCapnhat} />
          )}
        </div>
      </Content>
    )
  }