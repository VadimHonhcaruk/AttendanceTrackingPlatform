import { useState } from "react";
import { Login } from "./components/Login/Login";
import { Profile } from "./components/Profile/Profile";
import vadim from './images/vadim.jpg';


function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  return (
    <div className="App">
      {/* <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} /> */}
      <Profile photo={vadim} name='Vadim Honcharuk' />
    </div>
  );
}

export default App;
