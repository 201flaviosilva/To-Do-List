import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Account from "./pages/Account";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
      </HashRouter>
    </Provider>
  );
}



