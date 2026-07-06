import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
import { Outlet } from 'react-router-dom';
import { FormularioContainer } from "../formulario/FormularioContainer";

function Layout({ children}) {
  return (
    <div className="layout">
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    <Footer />
    </div>
  );
}
export default Layout;