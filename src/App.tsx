import { HashRouter, Route, Routes } from "react-router-dom";

import { PAGES } from "@/types/enums";
import { Footer, Header, Main } from "./components";
import { Account, Home, NotFound } from "./pages";

export default function App() {
  return (
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
  );
}
