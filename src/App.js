import 'antd/dist/antd.css';
import { Route, Routes } from "react-router";
import './App.css';

import ChangeTicket from './ticketmanager/ChangeTicket';
import Navbar from './ticketmanager/Navbar';
import { CHANGE_TICKET_PATH, TICKET_PATH } from './ticketmanager/routes';
import Tickets from './ticketmanager/Tickets';
function App() {
  return (
    <Navbar>
        <Routes>
          <Route path={TICKET_PATH} element={<Tickets />}/>
          <Route path={CHANGE_TICKET_PATH} element={<ChangeTicket />}/>
        </Routes>
    </Navbar>
  );
}

export default App;
