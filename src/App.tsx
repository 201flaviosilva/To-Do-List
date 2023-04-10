import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}



