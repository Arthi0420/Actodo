import Login from ".//pages/Login";
import Signup from "./pages/SignUp";
import Landing from ".//pages/Landing";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

const App = () => {

  
  const [users, setusers] = useState(
    [
      {
        username: "Arthi",
        password: "123"
      }
    ]
  )

  return (
    < div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setusers={setusers} />}></Route>
        <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path="/landing" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
</div >

)
}

export default App