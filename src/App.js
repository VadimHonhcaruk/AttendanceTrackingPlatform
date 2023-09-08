import { useState } from "react";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile/Profile";
import { MainContent } from "./components/Calendar/MainContent";
import vadim from './images/vadim.jpg';
import { MainHeader } from "./components/MainHeader/MainHeader";


function App() {

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

  const [page, setPage] = useState(2);

  return (
    <div className="App">
      {page !== 1 && <MainHeader setPage={setPage} />}
      {page === 1 && <Login setPage={setPage} email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} />}
      {page === 2 && <Profile setFirstName={setFirstName} setSecondName={setSecondName} setBirth={setBirth} setPhone={setPhone} setEmailState={setEmailState} setCard={setCard} setActive={setActive} photo={vadim} firstName={firstNameState} secondName={secondNameState} status={active} birth={birthday} email={emailState} phone={phoneState} card={cardState} />}
      {page === 3 && <MainContent />}
    </div>
  );
}

export default App;
