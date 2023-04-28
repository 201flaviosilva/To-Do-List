import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { PAGES } from "./ENUMS";
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
            <Route index path={PAGES.HOME} element={<Home />} />
            <Route path={PAGES.ACCOUNT} element={<Account />} />
            <Route path={PAGES.NOT_FOUNT} element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
      </HashRouter>
    </Provider>
  );
}



