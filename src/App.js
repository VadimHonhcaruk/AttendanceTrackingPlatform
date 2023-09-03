import { useState } from "react";
import { Login } from "./components/Login/Login";


function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} />
    </div>
  );
}

export default App;
