import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header.tsx";

function Layout() {
  return (
    <div>
      <section className="app__header">
        <Header />
      </section>
      <section className="app__main">
        <Outlet />
      </section>
    </div>
  );
}

export { Layout };
