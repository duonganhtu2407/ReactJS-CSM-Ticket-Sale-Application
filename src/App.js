import React, {
  Component
} from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Route, Routes } from "react-router";
import './App.css';
import ModalLocve from './BtnClick/ModalLocve';
import ModalThemVe from './BtnClick/ModalThemVe';

import ChangeTicket from './ticketmanager/ChangeTicket';
import HomePage from './ticketmanager/HomePage';
import Navbar from './ticketmanager/Navbar';
import { CHANGE_TICKET_PATH, HOME_PATH, SERVICE_PATH, TICKET_PATH } from './ticketmanager/routes';
import Service from './ticketmanager/Service';
import Tickets from './ticketmanager/Tickets';
function App() {
  const [isShow, setShow] = useState(false);
  const onGetShow = () => {
    setShow(true);
  }
  const closegetShow =() => {
    setShow(false)
  }
  const [isShowThem, setShowThem] = useState(false);
  const onGetShowThem = () => {
    setShowThem(true);
  }
  const closegetShowThem =() => {
    setShowThem(false)
  }

  return (
    <Navbar>
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={TICKET_PATH} element={<Tickets openshow={onGetShow} />} />
        <Route path={CHANGE_TICKET_PATH} element={<ChangeTicket />} />
        <Route path={SERVICE_PATH} element={<Service openshowthem={onGetShowThem} />} />
      </Routes>
      {isShow && (
        <ModalLocve closeshow={closegetShow} />
      )}
      {isShowThem && (
        <ModalThemVe closeshowThem={closegetShowThem} />
      )}
      
    </Navbar>

  );
}

export default App;
