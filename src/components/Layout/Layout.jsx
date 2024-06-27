import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.css";
import Footer from "../Footer/Footer";

const Layout = () => {
  const user = true;
  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      {user && (
        <footer className="footer">
          <div className="container">
            <Footer />
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;
