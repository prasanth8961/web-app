import "./App.css";
import Header from "./Component/Header";
import Products from "./Component/Products";
import Sidebar from "./Component/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import Mailbox from "./Component/Mailbox";
import Customers from "./Component/Customers";
import SignIn from "./Component/SignIn";
import LogIn from "./Component/LogIn";

function App() {
  return (
    <>
      <Header />

     <Sidebar />

      <Routes>
        <Route path="/dashboarf" element={<Dashboard />}></Route>
        <Route path="/mailbox" element={<Mailbox />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route index path="/" element={<Products />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
