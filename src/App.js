import 'antd/dist/antd.css';
import { useState } from 'react';
import { Route, Routes } from "react-router";
import './App.css';
import ModalLocve from './BtnClick/ModalLocve';

import ChangeTicket from './ticketmanager/ChangeTicket';
import Navbar from './ticketmanager/Navbar';
import { CHANGE_TICKET_PATH, SERVICE_PATH, TICKET_PATH } from './ticketmanager/routes';
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

  return (
    <Navbar>
      <Routes>
        <Route path={TICKET_PATH} element={<Tickets openshow={onGetShow} />} />
        <Route path={CHANGE_TICKET_PATH} element={<ChangeTicket />} />
        <Route path={SERVICE_PATH} element={<Service />} />
      </Routes>
      {isShow && (
        <ModalLocve closeshow={closegetShow} />
      )}
      <div className='layer'>

      </div>
    </Navbar>

  );
}

export default App;
