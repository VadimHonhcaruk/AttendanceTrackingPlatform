import { useEffect, useState } from "react";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile/Profile";
import { MainContent } from "./components/Calendar/MainContent";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { useTheme } from "./hooks/useTheme";
import { NavSideBar } from "./components/NavSideBar/NavSideBar";
import { Route, Routes, Link, path } from 'react-router-dom'
import { NotFound } from "./components/NotFound/NotFound";
import c from './App.module.css';
import Modal from "./components/Calendar/Modal";
import moment from "moment/moment";
import { List } from "./components/List/List";
import { ListUser } from "./components/List/ListUser";
import { ListClasses } from "./components/List/ListClasses";


function App() {

  const { theme, setTheme } = useTheme()

  const handleLightThemeClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [firstNameState, setFirstName] = useState('Vadim');
  const [secondNameState, setSecondName] = useState('Honcharuk');
  const [birthday, setBirth] = useState('07-06-2003');
  const [phoneState, setPhone] = useState('+380983169348');
  const [emailState, setEmailState] = useState('vadimhonc@gmail.com');
  const [cardState, setCard] = useState('5656 7156 3895 8035');
  const [active, setActive] = useState('Active');
  const [hide, setHide] = useState(true);
  const [modalVision, setModalVision] = useState(false);
  const [choosenDay, setChoosenDay] = useState((moment()).format('YYYY-MM-DD'));
  const [groupId, setGroupId] = useState(false);
  const [groupTitle, setGroupTitle] = useState('Please choose');
  const [update, setUpdate] = useState(true);

  const updater = () => {
    setUpdate(false);
    setTimeout(() => {
      setUpdate(true);
    }, 50);
  }

  return (
    <div>
      {modalVision && <Modal choosenDay={choosenDay} setModalVision={setModalVision} groupId={groupId} />}
      <NavSideBar themeChange={handleLightThemeClick} />
      <div className={c.main}>
        <MainHeader theme={theme} setHide={setHide} hide={hide} />
        <Routes>
          <Route path="/attendance" element={update && <MainContent groupTitle={groupTitle} setGroupTitle={setGroupTitle} updater={updater} groupId={groupId} setGroupId={setGroupId} choosenDay={choosenDay} setChoosenDay={setChoosenDay} setModalVision={setModalVision} />} />
          <Route path="/students" element={<List get='student' />} />
          <Route path="/parents" element={<List get='representive' />} />
          <Route path="/users" element={<ListUser get='user' />} />
          <Route path="/classes" element={<ListClasses get='group' />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
